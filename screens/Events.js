import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, FlatList, StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';//from expo https://docs.expo.dev/versions/latest/sdk/linear-gradient/

import EventsHeader from '../components/events/EventsHeader';
import RenderEvents from '../components/events/RenderEvents';

//data arrays
const filters = [
  {status: '2022'},
  {status: 'Upcoming'},
  {status: 'Past'}
];
const data = [
  {
    id: 1,
    event: 'Global Youth Day',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '',
    date: 20220408
  },
  {
    id: 2,
    event: 'FIC Retreat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '3 days',
    date: 20220415
  },
  {
    id: 3,
    event: 'Womens Day',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '',
    date: 20220518
  },
  {
    id: 5,
    event: 'FICSDA Anniversary',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '',
    date: 20220714
  },
  {
    id: 4,
    event: 'Bayanihan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '11:00 - 14:00',
    date: 20220709
  },
  {
    id: 7,
    event: 'HPHO XII',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '10:00 - 18:00',
    date: 20221024
  },
  {
    id: 6,
    event: 'FICSDA Concert',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '16:00 - 20:00',
    date: 20220801
  },

  {
    id: 8,
    event: 'Childrens Day',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '',
    date: 20221030,
  },
  {
    id: 9,
    event: 'Community Day',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '11:00 - 15:00',
    date: 20221211
  },
  {
    id: 10,
    event: 'Pathfinder Camping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '4 days',
    date: 20220302
  },
  {
    id: 11,
    event: 'New Year Programme',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    time: '14:00 - 20:00',
    date: 20220105
  }
].sort(function(a, b) {
  return a.date - b.date;
});//sorts list from oldest first
const months = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

      //converting to strings so i can manipulate them later
const today = new Date().getDate().toString(),
      month = (new Date().getMonth() + 1).toString(),
      year = new Date().getFullYear().toString(),
      //making singular digits into 2 digits
      todayTwoDigits = ('0'+ today).slice(-2),
      monthTwoDigits = ('0'+ month).slice(-2),
      monthName = months[new Date().getMonth()],
      //combining all dates into 1 string
      currentDate = year+monthTwoDigits+todayTwoDigits;


//EVENTS
const Events = ({navigation}) => {

  const [status, setStatus] = useState('2022');
  const [datalist, setDatalist] = useState(data);

  //Filter function
  //Help from YouTube video to create this filter (including lines 149-167): Lirs Tech Tips (2020) React Native: Custom Tab Radio & Filter List Data. 30 July. Available at: https://www.youtube.com/watch?v=QWZbifSLQsA&t=29s (Accessed: 28 April 2022)
  const SetStatusFilter = (status) => {

    if (status == '2022') {
      setDatalist(data)
    } else if (status == 'Upcoming') {
      //Double tilde converts to number:
      //Sanchithasr (2020) 7 ways to convert a String to Number in JavaScript. Available at: https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l (Accessed: 27/04/2022)
      setDatalist([...data.filter(i => i.date > ~~currentDate)])
    } else if (status == 'Past') {
      setDatalist([...data.filter(i => i.date < ~~currentDate)])
    };

    setStatus(status)
  };

  //Assigning to styles
  const {contentContainer, filter, filterBtn, filterBtnSelected} = styles;

  return (
    <View style={{flex:1}}>

      <LinearGradient
      style={{flex:1}}
      colors={['#45E355', '#55EE88']}
      start={[0, 0]}
      end={[1, 0]}>

        <EventsHeader navigation={navigation} />

        <View style={contentContainer}>
          <View style={filter}>
            {
              filters.map(i => (
                <Pressable
                style={({pressed}) => [
                  {opacity: pressed ? 0.2 : 1 },
                  filterBtn,
                  status === i.status && filterBtnSelected
                ]}
                onPress={() => SetStatusFilter(i.status)}>
                  <Text
                  style={[styles.filterText, status === i.status && styles.filterTextSelected]}>
                    {i.status}
                  </Text>
                </Pressable>
              ))
            }
          </View>

          <FlatList
          style={{flex: 1,paddingHorizontal: 16}}
          data={datalist}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RenderEvents item={item} months={months} />}
          ListHeaderComponent={<View style={{height:72}} />}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          ListFooterComponent={<View style={{height:34}} />} />
        </View>

      </LinearGradient>
      <StatusBar barStyle = 'light-content' />
    </View>
  )
};

//STYLESHEET
const styles = StyleSheet.create ({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
    padding: 4,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 90,
    position: 'absolute',
    zIndex: 1,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.04,
    shadowRadius: 4
  },
  filterBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.3%',
    height: '100%',
    borderRadius: 90
  },
  filterBtnSelected: {
    backgroundColor: 'white'
  },
  filterText: {
    fontSize: 16,
  },
  filterTextSelected: {
    color:'black',
    fontWeight: '600'
  }
});

export default Events;
