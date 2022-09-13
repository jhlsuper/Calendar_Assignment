import React from 'react';
import {FlatList, View, Text} from 'react-native';

import {calendar_style, weekdays_style} from '../styles/style';
const weekDays = ['월', '화', '수', '목', '금', '토', '일'];
const WeekDays = () => {
  const dayItem = ({item}) => {
    return <Text style={[calendar_style.dayname]}>{item}</Text>;
  };
  return (
    <View style={weekdays_style.container}>
      <FlatList data={weekDays} renderItem={dayItem} horizontal={true} />
    </View>
  );
};

export default WeekDays;
