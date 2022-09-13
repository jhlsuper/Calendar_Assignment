export const increment = () => {
  return {
    type: 'MONTH_INCRESE',
  };
};

export const decrement = () => {
  return {
    type: 'MONTH_DECRESE',
  };
};
export const thismonth = () => {
  return {
    type: 'MONTH_THISMONTH',
  };
};
export const onpressday = day => {
  return {
    type: 'DAY_ONPRESS',
    payload: day,
  };
};
