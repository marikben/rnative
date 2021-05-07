import React, { Component, useState } from 'react';
import { Text, View, DateTime } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarView (){
    const [select, setSelect] = useState('')
    const [waterObject, setWaterObject] = React.useState({});
    const [selected, setSelected] = React.useState(null);
    const [marked, setMarked] = useState ({})

        const selectedDate = (day) => {
            console.log(day)
            setMarked({...marked, [day]: {selected: true}})
            console.log(marked)
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
                selectedDate(day["dateString"])
            
        }}
        markedDates={{...marked, [selected] : {selected: true, selectedColor: '#81c5fe'}}}
          />
          <Text>Moi {select}</Text>
    </View>)
}
