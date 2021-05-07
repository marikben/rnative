import React, { Component, useState, useEffect } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarAct ({ navigation }){
    const [selected, setSelected] = React.useState(null);
    const [marked, setMarked] = useState ({});
    const [desc, setDesc] = useState('');
   
    const selectedDate = (props) => {
            setMarked({...marked, [selected]: {selected: true, desc: props}})
            console.log(marked)
        }
    const dateView = () => {
        if(selected){
            return <View>
                <Text>{selected}</Text>
                </View>
        }else{
            return <Text>Choose a date from the calendar</Text>
        }
    }
    return(<View>
        <Calendar
        theme={{
            calendarBackground: '#131A26',
            textSectionTitleColor: '#ffffff',
            selectedDayTextColor: '#ffffff',
            selectedDayBackgroundColor: '#2176FF',
            dayTextColor: '#ffffff',
            monthTextColor: '#ffffff',
            textMonthFontWeight: 'bold',
        }}
        onDayPress={(day) => {
                setSelected(day["dateString"])
                
        }}
        markedDates={{...marked, [selected] : {selected: true, selectedColor: '#81c5fe', desc: 'valittu'}}}
          />
          <Text>Appointments: </Text>
          <View>{dateView()}</View>
          <TextInput onChangeText={setDesc}
        value={desc}></TextInput><Button title='save' onPress={() => selectedDate(desc)}/>
    </View>)
}
