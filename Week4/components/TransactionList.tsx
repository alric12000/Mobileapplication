import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react-native';

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  amount: number; // in grams
  value: number; // in currency
  date: string;
  status: 'completed' | 'pending';
}

interface TransactionListProps {
  transactions: Transaction[];
  currencySymbol?: string;
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions, currencySymbol = '$' }) => {
  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        <View style={[styles.iconBox, item.type === 'buy' ? styles.buyIcon : styles.sellIcon]}>
          {item.type === 'buy' ? (
            <ArrowDownLeft size={20} color="#2E7D32" />
          ) : (
            <ArrowUpRight size={20} color="#C62828" />
          )}
        </View>
        <View>
          <Text style={styles.typeText}>{item.type === 'buy' ? 'Bought Gold' : 'Sold Gold'}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={[styles.valueText, item.type === 'buy' ? styles.negative : styles.positive]}>
          {item.type === 'buy' ? '-' : '+'}{currencySymbol}{item.value.toLocaleString()}
        </Text>
        <Text style={styles.amountText}>{item.amount}g</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Transactions</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  seeAll: {
    fontSize: 14,
    color: '#D4AF37',
    fontWeight: '600',
  },
  listContent: {
    gap: 16,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 16,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyIcon: {
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
  },
  sellIcon: {
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
  },
  typeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positive: {
    color: '#2E7D32',
  },
  negative: {
    color: '#1A1A1A',
  },
  amountText: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});
