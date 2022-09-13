import React from 'react';
import {View} from 'react-native';

import {calendar_style, main_page} from '../styles/style';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, thismonth} from '../redux/actions/monthAction';

import moment from 'moment';

import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import WeekDays from './WeekDays';

const nDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export default Calendar = () => {
  const dispatch = useDispatch();

  const year = useSelector(store => store.date.year);
  const month = useSelector(store => store.date.month);

  const monthIncrese = () => {
    dispatch(increment());
  };

  const monthDecrese = () => {
    dispatch(decrement());
  };
  const monthThisMonth = () => {
    if (month != moment().format('M') * 1) {
      dispatch(thismonth());
    }
  };

  const makeDaysArray = () => {
    var matrix = [];

    var firstDay = new Date(year, month - 1, 1).getDay();

    var maxDays = nDays[month];
    if (month == 1) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }
    var counter = 1;

    for (var row = 0; row < 5; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 0 && col >= firstDay - 1) {
          matrix[row][col] = counter++;
        } else if (row > 0 && counter <= maxDays) {
          matrix[row][col] = counter++;
        }
      }
    }
    var array = matrix.flat();
    for (var i = 0; i < firstDay - 1; i++) {
      console.log(matrix[i], i);
      array[i] = [nDays[month - 1] - firstDay + i + 2, -1];
    }
    var temp = 1;
    for (var i = firstDay + nDays[month] - 1; i < 35; i++) {
      array[i] = [temp++, 1];
    }

    return array;
  };
  var daysArray = makeDaysArray();

  return (
    <View style={main_page.container}>
      <View style={calendar_style.container}>
        <CalendarHeader
          monthDecrese={monthDecrese}
          monthIncrese={monthIncrese}
          monthThisMonth={monthThisMonth}
        />
        <WeekDays />

        <CalendarDays daysArray={daysArray} />
      </View>
    </View>
  );
  //   }
};
