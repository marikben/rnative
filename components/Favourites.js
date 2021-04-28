import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import Header from '../components/Header.js'
import { DrawerItems } from 'react-navigation-drawer';

export default function Favourites () {
    return(<View>
        <Text>Favourites</Text>
    </View>)
}