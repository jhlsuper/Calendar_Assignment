import {months} from 'moment';

const moment = require('moment');

const initialState = {
  // count: 0,
  // date: new Date().toString(),
  // date: moment().format(),
  year: moment().format('YYYY') * 1,
  month: moment().format('M') * 1,
  day: moment().format('DD') * 1,
};

export default (state = initialState, action) => {
  // console.log('state', Date.parse(state.date));
  console.log('state', state);
  switch (action.type) {
    case 'MONTH_INCRESE':
      if (state.month == 12) {
        return {
          ...state,
          year: state.year + 1,
          month: 1,
          day: 0,
        };
      } else {
        return {
          ...state,
          // year: state.year,
          month: state.month + 1,
          day: 0,
        };
      }

    case 'MONTH_DECRESE':
      // console.log('newMonth', newMonth);

      if (state.month == 1) {
        return {
          ...state,
          year: state.year - 1,
          month: 12,
          day: 0,
        };
      } else {
        return {
          ...state,
          // year: state.year,
          month: state.month - 1,
          day: 0,
        };
      }
    case 'MONTH_THISMONTH':
      // console.log('newMonth', newMonth);

      return {
        ...state,
        year: moment().format('YYYY') * 1,
        month: moment().format('M') * 1,
        day: 0,
      };
    case 'DAY_ONPRESS':
      // console.log('newMonth', newMonth);

      return {
        ...state,
        day: action.payload,
      };

    default:
      return state;
  }
};
