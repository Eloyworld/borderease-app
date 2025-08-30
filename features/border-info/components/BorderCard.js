import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// This component displays information about a single border crossing
const BorderCard = ({ border, onPress }) => {
  // Determine status color - green for open, red for closed
  const statusColor = border.status === 'open' ? '#2ecc71' : '#e74c3c';
  
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{border.name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
          <Text style={styles.statusText}>{border.status}</Text>
        </View>
      </View>
      
      <Text style={styles.countries}>
        {border.countries.join(' ↔ ')}
      </Text>
      
      <View style={styles.details}>
        <Text style={styles.detail}>Hours: {border.hours}</Text>
        <Text style={styles.detail}>Wait: {border.waitTime}</Text>
      </View>
      
      <Text style={styles.notes}>{border.notes}</Text>
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
  },
  countries: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 12,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginRight: 16,
  },
  notes: {
    fontSize: 12,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
});

export default BorderCard;