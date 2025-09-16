import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, overflow: 'hidden' },
  header: { padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontWeight: 'bold' },
  content: { padding: 16 }
});
