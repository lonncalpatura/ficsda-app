import React from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';//from expo https://docs.expo.dev/guides/icons/https://docs.expo.dev/guides/icons/

//Getting screen dimensions
const windowWidth = Dimensions.get('window').width;

const RenderEvents = ({item, months}) => {

  const dataDate = item.date.toString();
  //Fetching specific parts of the date
  const dataDay = dataDate.slice(6);
  const dataMonth = dataDate.slice(4, 6);

  //Filling in empty as all day
  if (item.time == '') {
    var time = 'All day'
  } else {
    time = item.time
  };

  return (
    <View style={styles.eventCardContainer}>

      <View style={styles.eventCard}>

        <View style={{alignItems: 'center', width: 36}}>
          <Text style={{fontSize: 22, fontWeight: '600', color:'#459bff'}}>{dataDay}</Text>
          <Text style={{fontSize: 16, fontWeight: '500', color:'#459bff'}}>{months[~~dataMonth-1]}</Text>
        </View>

        <View style={{marginLeft: 16}}>
          <View>
            <Text style={{fontSize: 20, fontWeight: '600'}}>{item.event}</Text>
            <View style={{flexDirection: 'row', alignItems:'center', marginTop: 2}}>
              <MaterialIcons
              style={{marginRight: 2}}
              name='schedule'
              color='grey'
              size={12}/>
              <Text style={{color:'grey', fontStyle: 'italic'}}>{time}</Text>
            </View>
          </View>
          <Text style={{marginTop: 8, color: '#444', width: windowWidth - 120}}>{item.description}</Text>
        </View>

      </View>
    </View>
  )
};

const styles = StyleSheet.create ({
  eventCardContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.12,
    shadowRadius: 6
  },
  eventCard: {
    flexDirection: 'row',
    alignItems:'center',
  }
});

export default RenderEvents;
