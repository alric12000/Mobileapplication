import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TrendingUp } from 'lucide-react-native';

interface BalanceCardProps {
  goldAmount: number; // in grams
  currentValue: number; // in currency
  currencySymbol?: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  goldAmount,
  currentValue,
  currencySymbol = '$'
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#D4AF37', '#F2D06B', '#C5A028']} // Gold gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.content}>
          <View>
            <Text style={styles.label}>Total Gold Balance</Text>
            <Text style={styles.amount}>{goldAmount.toFixed(2)}g</Text>
          </View>
          <View style={styles.iconContainer}>
            <TrendingUp color="#fff" size={24} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.valueLabel}>Current Value</Text>
          <Text style={styles.value}>
            {currencySymbol}{currentValue.toLocaleString()}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  amount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 12,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  valueLabel: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
