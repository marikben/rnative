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
      firebase.database().ref(user.uid+'/calendar2').on('value', snapshot => {
        const data = snapshot.val();
        //console.log(Object.values(data))
        if(data){
        const prods = Object.values(data)
        console.log(Object.assign({}, ...prods))
        setDates(Object.assign({}, ...Object.values(data)))
        
        }else{
          console.log('empty list')
          setDates({})
        }
        
      });
    }, []);

    const selectedDate = (props) => {
            setDesc('')
            setMarked({...marked, [selected]: {selected: true, desc: props}})
            firebase.database().ref(user.uid+'/').child('calendar2').push(
              {[selected]: {selected: true, desc: props}}
            );
            
        }
    const dateView = () => {
            if(dates[selected]){
                return <View><Text style={{fontSize: 16, fontWeight: 'bold'}}>Appointments on {selected}:</Text>
                <Text style={{fontSize: 16}}>- {dates[selected].desc}</Text></View>
            }
            return <View atyle={{marginTop: -15}}><Text style={{fontSize: 16}}>Please add an appointment for {'\n'}this day</Text>
            </View>
        
    }
  return (
    <View style={styles.container}>
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
          <View style={styles.listcontainer}>{dateView()}
          <TextInput onChangeText={setDesc} value={desc} style={styles.input} placeholder='type in appointment'></TextInput>
          <Button title='save' color='#E35D86' onPress={() => selectedDate(desc)}/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      borderWidth : 0.5, 
      marginTop: 5, 
      marginBottom: 5,
      width: 220
  },
  text: {
      fontSize: 16
  },
  container: {
    marginTop: -140,
    width: 380
  },
  listcontainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    
   },
})