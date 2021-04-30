import React from 'react';
import firebase from '../database/firebaseDB';
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/AntDesign'

//original PureComponent
class UserMenu extends React.Component {
  _menu = null;
  constructor() {
    super();

    this.state = {
      uid: '',
    };
  }

  ;
  
  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {

    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      
    }

    const signOut = () => {
      var user = firebase.auth().currentUser
      console.log(user)
      if (user) {
        firebase.auth().signOut().then(() => {
            console.log("User successfully logged out");
             // Just for the example.
        }).catch(error => console.log('Something went wrong! ', error))
    } else {console.log(error)
     
        };
    
  }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu}><Icon name='user' color='grey' size={25}/></Text>}>
          <MenuItem onPress={this.hideMenu} disabled>Signed in as <Text style={{color:'#E35D86'}}>{this.state.displayName}</Text></MenuItem>
          <MenuItem onPress={() => signOut()}>Logout<Icon name='logout' /></MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Close menu</MenuItem>
        </Menu>
      </View>
    );
  }
};

export default UserMenu;