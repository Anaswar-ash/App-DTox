import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const mockData = {
  social: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  },
  productivity: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [50, 60, 70, 80, 90, 100],
      },
    ],
  },
  entertainment: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [10, 20, 15, 30, 25, 40],
      },
    ],
  },
};

const App = () => {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>App Usage Tracker</Text>
            <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Social Apps</Text>
              <LineChart
                data={mockData.social}
                width={screenWidth - 32}
                height={220}
                chartConfig={chartConfig}
              />
            </View>
            <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Productivity Apps</Text>
              <LineChart
                data={mockData.productivity}
                width={screenWidth - 32}
                height={220}
                chartConfig={chartConfig}
              />
            </View>
            <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Entertainment Apps</Text>
              <LineChart
                data={mockData.entertainment}
                width={screenWidth - 32}
                height={220}
                chartConfig={chartConfig}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F3F3F3',
  },
  body: {
    backgroundColor: 'white',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 16,
  },
  chartContainer: {
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    marginBottom: 8,
  },
});

export default App;