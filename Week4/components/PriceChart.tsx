import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');

export const PriceChart: React.FC = () => {
  // Simple mock data path for demo
  const chartPath = "M0,80 C50,80 50,40 100,40 C150,40 150,90 200,90 C250,90 250,20 300,20 C350,20 350,60 400,60";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gold Price Trend</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>+2.4%</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Svg height="120" width={width - 40}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#D4AF37" stopOpacity="0.5" />
              <Stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Path
            d={`${chartPath} L400,120 L0,120 Z`}
            fill="url(#grad)"
          />
          <Path
            d={chartPath}
            stroke="#D4AF37"
            strokeWidth="3"
            fill="none"
          />
        </Svg>
      </View>
      <View style={styles.labels}>
        <Text style={styles.label}>1D</Text>
        <Text style={[styles.label, styles.activeLabel]}>1W</Text>
        <Text style={styles.label}>1M</Text>
        <Text style={styles.label}>1Y</Text>
        <Text style={styles.label}>ALL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
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
  badge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 12,
  },
  chartContainer: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  label: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#D4AF37',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
