import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Picker, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import Header from './Header.js'
import { DrawerItems } from 'react-navigation-drawer';

export default function UserSettings () {
    const [selectedValue, setSelectedValue] = useState("java");
    return(<View>
         <View >
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
    </View>)
}