// components/borders/BorderCrossingList.tsx
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { countries } from '../../data/countries';
import { useBorderStatus } from '../../hooks/useBorderStatus';
import { findAlternativeRoutes, getBorderStatus } from '../../utils/routeFinding';

interface BorderCrossingListProps {
  fromCountry: string;
  toCountry: string;
}

export default function BorderCrossingList({ fromCountry, toCountry }: BorderCrossingListProps) {
  const from = countries.find(c => c.id === fromCountry);
  const to = countries.find(c => c.id === toCountry);
  if (!from || !to) return null;

  const borderStatus = getBorderStatus(fromCountry, toCountry);
  const alternativeRoutes = findAlternativeRoutes(fromCountry, toCountry);
  const directCrossings = from.borderCrossings.filter(crossing => crossing.toCountry === toCountry);

  return (
    <View style={styles.container}>
      <View style={styles.statusHeader}>
        <Text style={styles.header}>Border Status: {from.name} → {to.name}</Text>
        <Text style={[
          styles.statusBadge,
          borderStatus.status === 'open' && styles.statusOpen,
          borderStatus.status === 'closed' && styles.statusClosed,
          borderStatus.status === 'restricted' && styles.statusRestricted,
        ]}>
          {borderStatus.status.toUpperCase()}
        </Text>
      </View>

      <FlatList
        data={directCrossings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CrossingCard
            crossing={item}
            fromCountry={fromCountry}
            toCountry={toCountry}
          />
        )}
        ListFooterComponent={
          borderStatus.status === 'closed' && alternativeRoutes.length > 0 ? (
            <View style={styles.alternativesSection}>
              <Text style={styles.alternativesHeader}>Alternative Routes:</Text>
              {alternativeRoutes.slice(0, 3).map((route, index) => (
                <View key={index} style={styles.alternativeCard}>
                  <Text style={styles.alternativeTitle}>
                    Via {route.details.via.join(' → ')}
                  </Text>
                  <Text style={styles.alternativeInfo}>• Borders: {route.totalBorders}</Text>
                  <Text style={styles.alternativeInfo}>• Time: {route.estimatedTime} min</Text>
                  <Text style={styles.alternativeInfo}>• Status: All open</Text>
                </View>
              ))}
            </View>
          ) : borderStatus.status === 'closed' && alternativeRoutes.length === 0 ? (
            <View style={styles.noAlternatives}>
              <Text style={styles.noAlternativesText}>No alternative routes found</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

function CrossingCard({ crossing, fromCountry, toCountry }: { crossing: any; fromCountry: string; toCountry: string }) {
  const { status: apiStatus, loading, updateStatus } = useBorderStatus(fromCountry, toCountry, crossing.id);

  const currentStatus = apiStatus?.status || crossing.status;
  const currentWaitTime = apiStatus?.waitTime || crossing.waitTime;
  const lastUpdated = apiStatus?.lastUpdated ? new Date(apiStatus.lastUpdated) : crossing.lastUpdated;

  return (
    <View style={styles.crossingCard}>
      <Text style={styles.crossingName}>{crossing.name}</Text>

      {loading && <ActivityIndicator size="small" />}

      <Text style={[
        styles.statusText,
        currentStatus === 'open' && styles.statusOpen,
        currentStatus === 'closed' && styles.statusClosed,
        currentStatus === 'restricted' && styles.statusRestricted
      ]}>
        Status: {currentStatus.toUpperCase()}
      </Text>

      <View style={styles.statusButtons}>
        <TouchableOpacity
          style={[styles.statusButton, currentStatus === 'open' && styles.statusButtonActive]}
          onPress={() => updateStatus({ fromCountry, toCountry, crossingId: crossing.id, status: 'open', waitTime: 60 })}
        >
          <Text style={styles.statusButtonText}>Open</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.statusButton, currentStatus === 'closed' && styles.statusButtonActive]}
          onPress={() => updateStatus({ fromCountry, toCountry, crossingId: crossing.id, status: 'closed' })}
        >
          <Text style={styles.statusButtonText}>Closed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.statusButton, currentStatus === 'restricted' && styles.statusButtonActive]}
          onPress={() => updateStatus({ fromCountry, toCountry, crossingId: crossing.id, status: 'restricted', waitTime: 120 })}
        >
          <Text style={styles.statusButtonText}>Restricted</Text>
        </TouchableOpacity>
      </View>

      {currentWaitTime && <Text style={styles.waitTime}>Wait time: {currentWaitTime} minutes</Text>}

      {currentStatus === 'open' && (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Required Documents:</Text>
            {crossing.requirements.documents.map((doc: string, index: number) => (
              <Text key={index} style={styles.listItem}>• {doc}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Vehicle Requirements:</Text>
            {crossing.requirements.vehicleRequirements.map((req: string, index: number) => (
              <Text key={index} style={styles.listItem}>• {req}</Text>
            ))}
          </View>

          {crossing.requirements.restrictions.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Restrictions:</Text>
              {crossing.requirements.restrictions.map((restriction: string, index: number) => (
                <Text key={index} style={styles.listItem}>• {restriction}</Text>
              ))}
            </View>
          )}
        </>
      )}

      <Text style={styles.lastUpdated}>
        {lastUpdated ? new Date(lastUpdated).toLocaleDateString() : 'Date not available'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  statusHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, padding: 8, backgroundColor: '#f8f9fa', borderRadius: 8 },
  header: { fontSize: 18, fontWeight: 'bold' },
  statusBadge: { padding: 8, borderRadius: 12, fontWeight: 'bold', fontSize: 12 },
  statusOpen: { backgroundColor: '#e8f5e8', color: '#2e7d32' },
  statusClosed: { backgroundColor: '#ffebee', color: '#c62828' },
  statusRestricted: { backgroundColor: '#fff3e0', color: '#ef6c00' },
  crossingCard: { backgroundColor: '#fff', padding: 16, marginBottom: 16, borderRadius: 8, borderWidth: 1, borderColor: '#e0e0e0' },
  crossingName: { fontSize: 16, fontWeight: 'bold', marginBottom: 12, color: '#2c3e50' },
  statusText: { fontWeight: 'bold', padding: 4, borderRadius: 4, marginBottom: 12 },
  waitTime: { color: '#666', fontStyle: 'italic', marginBottom: 12 },
  statusButtons: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  statusButton: { padding: 8, borderRadius: 6, backgroundColor: '#f0f0f0', minWidth: 80, alignItems: 'center' },
  statusButtonActive: { backgroundColor: '#007AFF' },
  statusButtonText: { fontSize: 12, fontWeight: 'bold' },
  section: { marginBottom: 12 },
  sectionTitle: { fontWeight: 'bold', marginBottom: 4, color: '#34495e' },
  listItem: { marginLeft: 8, marginBottom: 2, color: '#555' },
  lastUpdated: { fontSize: 12, color: '#999', fontStyle: 'italic', marginTop: 8 },
  alternativesSection: { marginTop: 24, padding: 16, backgroundColor: '#f0f8ff', borderRadius: 8 },
  alternativesHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 16, color: '#1976d2' },
  alternativeCard: { backgroundColor: '#fff', padding: 16, marginBottom: 12, borderRadius: 8, borderWidth: 1, borderColor: '#bbdefb' },
  alternativeTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 8, color: '#1976d2' },
  alternativeInfo: { fontSize: 12, color: '#555', marginBottom: 4 },
  noAlternatives: { padding: 20, backgroundColor: '#fff3e0', borderRadius: 8, marginTop: 16 },
  noAlternativesText: { textAlign: 'center', color: '#ef6c00' },
});
