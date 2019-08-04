import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './screens/SearchScreen';
import CharacterScreen from './screens/CharacterScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: SearchScreen, navigationOptions: { title: 'Marvel Character' } },
    Character: { screen: CharacterScreen, navigationOptions: { title: 'Marvel Character' } },
  },
  {
    initialRouteName: 'Home'
  }
);
export default createAppContainer(AppNavigator);
