import React, { Component, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarAct ({ navigation }){
    const [selected, setSelected] = React.useState(null);
    const [marked, setMarked] = useState ({});
    const [desc, setDesc] = useState('');
   
    const selectedDate = (props) => {
            setDesc('')
            setMarked({...marked, [selected]: {selected: true, desc: props}})
            console.log(marked)
        }
    const dateView = () => {
        if(marked[selected]){
            return <View>
                <Text>Appointments on {selected}:</Text>
                <Text>{marked[selected].desc !== undefined ? marked[selected].desc : 'moi'}</Text>
                </View>
        }else{
            return <Text>Choose a date from the calendar</Text>
        }
    }
    return(<View>
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
        markedDates={{...marked, [selected] : {selected: true, selectedColor: '#FFDAE0', desc: 'valittu'}}}
          />
          <View>{dateView()}</View>
          <TextInput onChangeText={setDesc} value={desc} style={styles.input} placeholder='type in appointment'></TextInput>
          <Button title='save' color='#E35D86' onPress={() => selectedDate(desc)}/>
    </View>)
}

const styles = StyleSheet.create({
    input: {
        borderWidth : 0.3, 
        borderBottomWidth: 0.15,
        marginTop: 5, 
        marginBottom: 5
    }
})