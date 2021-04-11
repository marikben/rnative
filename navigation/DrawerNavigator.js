import { createDrawerNavigator } from 'react-navigation-drawer';
import Quiz from '../screens/Quiz';
import Products from '../screens/Products';
import Face from '../screens/Face';
import Base from '../screens/Base';
import Step2 from '../screens/Step2';
import Tags from '../screens/Tags';
import Results from '../screens/Results';

const RouteConfigs = {
  Quiz: {
    screen: Quiz,
  },

  Products: {
    screen: Products,
  },

  Face: {
    screen: Face,
  },
  
  Base: {
    screen: Base,
  },

  Step2: {
    screen: Step2,
    navigationOptions: {
      drawerLabel: () => null
    }
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
  }

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

