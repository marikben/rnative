import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import DropDownPicker from 'react-native-dropdown-picker';

export default function UserSettings () {
    const [selectedValue, setSelectedValue] = useState("java");
    console.log(selectedValue)
    const [questions, setQuestions] = useState([{label: 'Base products', value: 'foundation'}, 
    {label: 'Bronzer', value: 'bronzer'}, {label: 'Blush', value: 'blush'},
    {label: 'Brows', value: 'eyebrow'}, {label: 'Eyeliner', value: 'eyeliner'},
    {label: 'Eyeshadow', value: 'eyeshadow'}, {label: 'Lipliner', value: 'lip_liner'}, 
    {label: 'Lipstick', value: 'lipstick'}, {label: 'Mascara', value: 'mascara'},
    {label: 'Nail polish', value: 'nail_polish'}])
    return(<View>
         <View >
         <DropDownPicker
    items={questions}
    defaultIndex={0}
    containerStyle={{width: 150, height: 40}}
    onChangeItem={item => setSelectedValue(item)}
/>
    </View>
    </View>)
}