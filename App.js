import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import QR_Screen from './src/screens/QR_Screen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    QR: QR_Screen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App"
    }
  }
)

export default createAppContainer(navigator)
