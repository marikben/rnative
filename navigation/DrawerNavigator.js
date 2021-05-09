import { createDrawerNavigator } from 'react-navigation-drawer';
import Quiz from '../screens/Quiz';
import Tags from '../screens/Tags';
import Results from '../screens/Results';
import About from '../screens/About'
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Appointments from '../screens/Appointments';

const RouteConfigs = {

  Signup: {
    screen: Signup,
    navigationOptions: {
      drawerLabel: () => null
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: () => null,
    }
  },

  Profile: {
    screen: Profile
  },

  Appointments: {
    screen: Appointments
  },

  Quiz: {
    screen: Quiz,
  },

  About: {
    screen: About,
  },
  

  Tags: {
    screen: Tags,
    navigationOptions: {
      drawerLabel: () => null
    }
  },

  Results: {
    screen: Results,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
 
};

const DrawerNavigatorConfig = {
  intialRouteName: 'Home',
  drawerOpenRoute: 'DrawerOpen', 
	drawerCloseRoute: 'DrawerClose',
	drawerToggleRoute: 'DrawerToggle',
  
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: 'white',
    },
  },
  contentOptions: {
    activeTintColor: '#F38CAC',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: '#EBECF0', 
};

const DrawerNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default DrawerNavigator;

