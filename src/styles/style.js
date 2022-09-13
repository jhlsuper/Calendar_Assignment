import {StyleSheet} from 'react-native';
import PX from '../../config/px';
export const main_page = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export const calendar_style = StyleSheet.create({
  container: {
    height: 460 * PX,
    width: 430 * PX,
    backgroundColor: 'white',

    justifyContent: 'center',
  },

  dayname: {
    color: 'black',
    fontSize: 30 * PX,
    width: 60 * PX,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export const calendar_header = StyleSheet.create({
  container: {
    height: 50 * PX,
    width: 430 * PX,
    paddingHorizontal: 10 * PX,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10 * PX,
    // backgroundColor: 'yellow',
  },
  braketContainer: {
    height: 50 * PX,
    backgroundColor: '#F9F9F9',
    marginRight: 5 * PX,
    marginBottom: 5 * PX,
    borderRadius: 3 * PX,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  yearmonthText: {color: 'black', fontSize: 30 * PX, fontWeight: 'bold'},
  yearmonthContainer: {
    // height: 50 * PX,
    backgroundColor: '#F9F9F9',
    borderRadius: 3 * PX,
  },
  braketText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  thismonthText: {
    fontSize: 25 * PX,
    color: 'black',
  },
});

export const weekdays_style = StyleSheet.create({
  container: {
    height: 50 * PX,
    width: 430 * PX,

    marginHorizontal: 5 * PX,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export const oneday_style = StyleSheet.create({
  container: {
    height: 60 * PX,
    width: 60 * PX,

    borderRadius: 10,
    marginTop: 10 * PX,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const calendardays_style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5 * PX,
  },
});
