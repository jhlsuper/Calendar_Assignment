import React from 'react';
import {FlatList, View, Text} from 'react-native';
import OneDay from './OneDay';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {calendardays_style} from '../styles/style';
const CalendarDays = props => {
  const month = useSelector(store => store.date.month);

  const renderItem = ({item}) => {
    return (
      <OneDay
        day={item}
        today={
          moment().format('DD') * 1 == item && month == moment().format('M') * 1
        }
        thisMonth={typeof item == 'number'}
      />
    );
  };

  return (
    <View style={calendardays_style.container}>
      <FlatList data={props.daysArray} numColumns={7} renderItem={renderItem} />
    </View>
  );
};

export default CalendarDays;
