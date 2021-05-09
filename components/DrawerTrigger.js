import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Icon
          name={'menu'}
          size={30}
          color={'grey'}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: 20,
    height: 20,
    
  }
});

export default withNavigation(DrawerTrigger);