import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// This component displays information about a single trip
const TripCard = ({ trip, onPress }) => {
  // Determine status color
  const statusColor = trip.status === 'planned' ? '#3498db' : 
                    trip.status === 'active' ? '#2ecc71' : '#95a5a6';
  
  // Format dates for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{trip.name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
          <Text style={styles.statusText}>{trip.status}</Text>
        </View>
      </View>
      
      <View style={styles.dates}>
        <Text style={styles.dateText}>
          {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
        </Text>
      </View>
      
      <View style={styles.borderCount}>
        <Text style={styles.borderCountText}>
          {trip.borders.length} border crossing{trip.borders.length !== 1 ? 's' : ''}
        </Text>
      </View>
      
      {trip.notes && (
        <Text style={styles.notes}>{trip.notes}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  dates: {
    marginBottom: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  borderCount: {
    marginBottom: 8,
  },
  borderCountText: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '500',
  },
  notes: {
    fontSize: 12,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
});

export default TripCard;