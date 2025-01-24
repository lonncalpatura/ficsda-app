import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, FlatList, StatusBar} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';//from expo https://docs.expo.dev/guides/icons/

const EventsHeader = ({navigation}) => {

  return (
    <View style={{paddingTop: 47, paddingHorizontal: 16}}>

      <View style={styles.headerBack}>
        <Pressable style={({pressed}) => [
          {opacity: pressed ? '0.65' : '1'},
          {backgroundColor: 'white'},
          styles.headerBackBtn]}
          onPress={() => navigation.navigate('Home')} >
          <MaterialIcons
            name='arrow-back-ios'
            color='#45e355'
            size={18} />
          <Text style={{fontSize: 16, fontWeight: '600', color: '#45e355'}}>Home</Text>
        </Pressable>
      </View>

      <View style={{marginTop: 8, marginBottom: 16}}>
        <Text style={{fontSize: 34, fontWeight: '700', color: 'white'}}>Upcoming Events</Text>
      </View>

    </View>
  )
};

const styles = StyleSheet.create ({
  headerBack: {
    height: 44,
    justifyContent: 'center',
  },
  headerBackBtn: {
    width: 88,
    height: 30,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default EventsHeader;
