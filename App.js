import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './ListScreen';
import MainScreen from './MainScreen';
import TestScreen from './TestScreen';
import ExerciseScreen from './ExerciseScreen';
import ProductScreen from './ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ProductScreen></ProductScreen>
    </View>
  );
}

const navigator = createStackNavigator(
  {
      Main: MainScreen,
      Test: TestScreen,
      Exercise: ExerciseScreen,
      List: ListScreen
  },
  {
    intialRouteName: 'List',
    defaultNavigatorOptions: {
      title: 'App'
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
