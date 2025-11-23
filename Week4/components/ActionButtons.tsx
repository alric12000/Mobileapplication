import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react-native';

interface ActionButtonsProps {
  onBuy: () => void;
  onSell: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onBuy, onSell }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.buyButton]} onPress={onBuy}>
        <View style={styles.iconContainer}>
          <ArrowDownLeft color="#fff" size={24} />
        </View>
        <Text style={styles.buttonText}>Buy Gold</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.sellButton]} onPress={onSell}>
        <View style={[styles.iconContainer, styles.sellIconContainer]}>
          <ArrowUpRight color="#D4AF37" size={24} />
        </View>
        <Text style={[styles.buttonText, styles.sellButtonText]}>Sell Gold</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 24,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buyButton: {
    backgroundColor: '#1A1A1A',
  },
  sellButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 4,
    borderRadius: 8,
  },
  sellIconContainer: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  sellButtonText: {
    color: '#1A1A1A',
  },
});
