import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image, StatusBar} from 'react-native';

import ProgrammeHeader from '../components/programme/ProgrammeHeader';

//PROGRAMME
const Programme = ({navigation}) => {

  const {note, heading, shadow} = styles;

  return (
    <View style={{flex: 1}}>

      <ProgrammeHeader navigation={navigation} />

      <View style={{backgroundColor:'white', flex: 1}}>
        <ScrollView style={{paddingHorizontal: 16}} showsVerticalScrollIndicator={false}>
          <Text style={note}>Programme for 30/04/2022</Text>
          <Text style={heading}>Sabbath School</Text>
          <View style={shadow}><Image style={styles.img} source={require('../assets/ss.png')}/></View>
          <Text style={heading}>Family Worship</Text>
          <View style={shadow}><Image style={styles.img} source={require('../assets/fw.png')}/></View>
          <View style={{height:34}} />
        </ScrollView>
      </View>

      <StatusBar barStyle = 'dark-content' />
    </View>
  )
};

const styles = StyleSheet.create ({
  note: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'grey',
    marginTop: 16
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 8,
    color:'#459bff'
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.12,
    shadowRadius: 6
  },
  img: {
    maxWidth: 358,
    borderRadius: 16,
  }
});

export default Programme;
