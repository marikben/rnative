  
import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import { DrawerItems } from 'react-navigation-drawer';

export default function UserDetails () {
    const user = firebase.auth().currentUser;
    console.log(user)
    return(<View>
        <Text>Username: {user.displayName}</Text>
        <Text>Email: {user.email}</Text>
    </View>)
}