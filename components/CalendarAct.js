import React, { Component, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default class CalendarView extends React.Component {
   
      constructor() {
        super();
        this.state = { 
            markedDates: {
                '2019-07-22': { startingDay: true, endingDay: true, marked: true, color: 'green', },
              },
           
        }
  
      }
      
    render(){
        const {moi} = this.state
        const selectedDate = (day) => {
            
            return day
            
        }
    console.log(Object.keys(this.state.markedDates))  
    return(<View>
        <Calendar
        onDayPress={(day) => {
            selectedDate(day.day)
            this.setState({
              markedDates: {
                [day.dateString]: { startingDay: true, endingDay: true, marked: true, color: 'pink', },
              }
            })
          }}
          markingType={'period'}
          markedDates={this.state.markedDates}/>
          <Text>Moi {selectedDate(Object.keys(this.state.markedDates))} </Text>
    </View>)
}}