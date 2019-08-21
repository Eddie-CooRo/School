import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Splash, Login } from './Screens';

const AuthStack = createStackNavigator(
  {
    _Login: Login
  },
  {
    initialRouteName: '_Login',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const RootStack = createStackNavigator(
  {
    _Landing: Login
  },
  {
    initialRouteName: '_Landing',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const Router = createSwitchNavigator(
  {
    _Splash: Splash,
    _AuthStack: AuthStack,
    _RootStack: RootStack
  },
  {
    initialRouteName: '_Splash',
    navigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(Router);
