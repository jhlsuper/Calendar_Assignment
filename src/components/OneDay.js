import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, onpressday} from '../redux/actions/monthAction';
import PX from '../../config/px';
import {oneday_style} from '../styles/style';

const OneDay = props => {
  const dispatch = useDispatch();
  const day = useSelector(store => store.date.day);
  const onPressDay = day => {
    if (props.thisMonth) {
      dispatch(onpressday(day));
    } else {
      if (day[1] == -1) {
        dispatch(decrement());
      } else {
        dispatch(increment());
      }
    }
  };

  return (
    <TouchableOpacity
      style={[
        oneday_style.container,
        {
          backgroundColor:
            (day == props.day) == true
              ? 'blue'
              : props.today == true
              ? 'lightgray'
              : 'white',
        },
      ]}
      onPress={() => onPressDay(props.day)}>
      <Text
        style={[
          {
            fontSize: 30 * PX,
            color: !props.thisMonth
              ? 'lightgray'
              : (day == props.day) == true
              ? 'white'
              : 'black',
          },
        ]}>
        {props.thisMonth ? props.day : props.day[0]}
      </Text>
    </TouchableOpacity>
  );
};

export default OneDay;
