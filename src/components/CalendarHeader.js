import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PX from '../../config/px';
import {useSelector} from 'react-redux';
import {calendar_header} from '../styles/style';
const CalendarHeader = props => {
  const year = useSelector(store => store.date.year);
  const month = useSelector(store => store.date.month);

  return (
    <View style={calendar_header.container}>
      <View>
        <Text style={calendar_header.yearmonthText}>
          {year}.{month}
        </Text>
      </View>
      <View style={calendar_header.rightContainer}>
        <TouchableOpacity
          onPress={props.monthDecrese}
          style={calendar_header.braketContainer}>
          <Text style={calendar_header.braketText}> {'<'} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calendar_header.braketContainer}
          onPress={props.monthIncrese}>
          <Text style={calendar_header.braketText}> {'>'} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calendar_header.yearmonthContainer}
          onPress={props.monthThisMonth}>
          <Text style={calendar_header.thismonthText}>이번달</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CalendarHeader;
