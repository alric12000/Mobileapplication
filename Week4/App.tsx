import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { Header } from './components/Header';
import { BalanceCard } from './components/BalanceCard';
import { ActionButtons } from './components/ActionButtons';
import { PriceChart } from './components/PriceChart';
import { TransactionList, Transaction } from './components/TransactionList';

export default function App() {
  // Mock Data
  const [goldBalance, setGoldBalance] = useState(12.5); // grams
  const [currentValue, setCurrentValue] = useState(150851.25); // NPR (approx 135 rate)

  const transactions: Transaction[] = [
    { id: '1', type: 'buy', amount: 2.5, value: 222750, date: 'Today, 10:23 AM', status: 'completed' },
    { id: '2', type: 'sell', amount: 1.0, value: 91800, date: 'Yesterday, 2:15 PM', status: 'completed' },
    { id: '3', type: 'buy', amount: 5.0, value: 432000, date: 'Nov 20, 9:45 AM', status: 'completed' },
    { id: '4', type: 'buy', amount: 0.5, value: 45900, date: 'Nov 18, 4:30 PM', status: 'completed' },
  ];

  const handleBuy = () => {
    console.log('Buy Gold Pressed');
    // Implement buy logic
  };

  const handleSell = () => {
    console.log('Sell Gold Pressed');
    // Implement sell logic
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header userName="Alric" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <BalanceCard
          goldAmount={goldBalance}
          currentValue={currentValue}
          currencySymbol="Rs."
        />

        <ActionButtons
          onBuy={handleBuy}
          onSell={handleSell}
        />

        <PriceChart />

        <TransactionList transactions={transactions} currencySymbol="Rs." />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
