import { createStackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import SearchScreen from './containers/SearchScreen';
import DetailsScreen from './containers/DetailsScreen';

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Details: DetailsScreen,
}, {
  navigationOptions: {
    header: null,
  },
});

export default StackNavigator;
