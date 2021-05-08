import { createDrawerNavigator } from 'react-navigation-drawer';
import Quiz from '../screens/Quiz';
import Tags from '../screens/Tags';
import Results from '../screens/Results';
import About from '../screens/About'
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import UserMenu from '../components/UserMenu';
import Profile from '../screens/Profile';
import Appointments from '../screens/Appointments';
import CalendarAct from '../components/CalendarAct';

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
    screen: Profile,
    //navigationOptions: {
     // drawerLabel: () => null
    //}
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
  UserMenu: {
    screen: UserMenu,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
 

};

const DrawerNavigatorConfig = {
  intialRouteName: 'Home',
  drawerOpenRoute: 'DrawerOpen', //to enable route params between screens using drawer navigation
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
    // add your styling here 
    activeTintColor: '#F38CAC',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: '#EBECF0', // sets background color of drawer
 
};
//If you change the drawer components/ their names, restart expo to enable the changes
const DrawerNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default DrawerNavigator;

