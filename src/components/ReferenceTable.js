import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ReferenceTable({ headers, data, flexRatios = [1.2, 2, 1], showUnitsSuffix = '' }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        {headers.map((h, i) => (
          <Text 
            key={i} 
            style={[
              styles.tableHeaderCell, 
              { flex: flexRatios[i] || 1 }
            ]}
          >
            {h}
          </Text>
        ))}
      </View>

      <View style={styles.tableBody}>
        {data.map((row, index) => (
          <View 
            key={index} 
            style={[
              styles.tableRow, 
              index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd
            ]}
          >
            <Text style={[styles.tableCell, { flex: flexRatios[0] || 1, fontWeight: '700' }]}>
              {row.key} {showUnitsSuffix}
            </Text>
            <Text style={[styles.tableCell, { flex: flexRatios[1] || 1, color: '#35B48B', fontWeight: '600' }]}>
              {row.val2}
            </Text>
            <Text style={[styles.tableCell, { flex: flexRatios[2] || 1, color: '#6B7280' }]}>
              {row.dp}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#35B48B',
    height: 44,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tableHeaderCell: {
    fontFamily: 'Inter',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  tableBody: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderTopWidth: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tableRowEven: {
    backgroundColor: '#FFFFFF',
  },
  tableRowOdd: {
    backgroundColor: '#F9FAFB',
  },
  tableCell: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#374151',
  },
});
