import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListItem } from 'react-native-elements';
import Header from '../components/Header.js'

export default function Tags ({ navigation }) {
    const [tags, setTags] = useState([]);
    const type = navigation.getParam('list');
    
    return(
    <View style={styles.container}>
        <Text>Testing{type}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }})