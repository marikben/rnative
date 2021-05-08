import React, { useEffect, useState } from 'react';
import { View, Text, Button, Platform, StyleSheet, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import firebase from '../database/firebaseDB';

export default function CalendarAct({ navigation }) {
  const [dates, setDates] = useState({});
  const [selected, setSelected] = React.useState(null);
    const [marked, setMarked] = useState ({});
    const [desc, setDesc] = useState('');
    const user = firebase.auth().currentUser;
    useEffect(() => {
      firebase.database().ref(user.uid+'/calendar').on('value', snapshot => {
        const data = snapshot.val();
        //console.log(Object.values(data))
        if(data){
        const prods = Object.values(data)
        setDates(prods[2])
        console.log(dates)
        }else{
          console.log('empty list')
          setDates({})
        }
        
      });
    }, []);

    const selectedDate = (props) => {
            setDesc('')
            setMarked({...marked, [selected]: {selected: true, desc: props}})
            firebase.database().ref(user.uid+'/').child('calendar').push(
              {[selected]: {selected: true, desc: props}}
            );
            console.log(marked)
        }
    const dateView = () => {
        
            return <Text>Please add an appointment for this day</Text>
        
    }
  return (
    <View>
        <Calendar
        theme={{
            calendarBackground: '#EBECF0',
            textSectionTitleColor: '#555555',
            selectedDayTextColor: '#ffffff',
            selectedDayBackgroundColor: '#c24a6b',
            dayTextColor: '#555555',
            todayTextColor: '#ffffff',
            monthTextColor: '#555555',
            textMonthFontWeight: 'bold',
            arrowColor: '#FFC0CB'
        }}
        onDayPress={(day) => {
                setSelected(day["dateString"])
                
        }}
        markedDates={{...dates, [selected] : {selected: true, selectedColor: '#FFDAE0', desc: 'valittu'}}}
          />
          <View>{dateView()}</View>
          <TextInput onChangeText={setDesc} value={desc} style={styles.input} placeholder='type in appointment'></TextInput>
          <Button title='save' color='#E35D86' onPress={() => selectedDate(desc)}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      borderWidth : 0.3, 
      borderBottomWidth: 0.15,
      marginTop: 5, 
      marginBottom: 5
  },
  text: {
      fontSize: 16
  }
})

