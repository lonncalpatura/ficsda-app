import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable, Linking, ScrollView, Image, StatusBar, FlatList} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';//from expo https://docs.expo.dev/versions/latest/sdk/linear-gradient/

import RequestsHeader from '../components/requests/RequestsHeader';
import RenderRequests from '../components/requests/RenderRequests';

//Request data
const requests = [
  {
    id: 1,
    name: 'Anonymous',
    request: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 20220321
  },
  {
    id: 2,
    name: 'Welsie Maghopoy',
    request: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: 20220203
  },
  {
    id: 3,
    name: 'Joyce Elson',
    request: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 20220402
  },
  {
    id: 4,
    name: 'Onyl Calpatura',
    request: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 20220316
  },
  {
    id: 5,
    name: 'Heca Layson',
    request: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 20220228
  },
  {
    id: 6,
    name: 'Anonymous',
    request: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    date: 20220220
  },
  {
    id: 7,
    name: 'Kent Azares',
    request: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 20220428
  },
].sort(function(a, b) {
  return b.date - a.date;
});//sorts list from most recent

//PRAYER REQUESTS
const PrayerRequests = ({ navigation }) => {

  return (
    <View style={{flex:1, backgroundColor: 'white'}}>

      <RequestsHeader navigation={navigation} />

      <SafeAreaView style={styles.requestBtnContainer}>
        <Pressable
        style={({pressed}) => [
          {opacity: pressed ? 0.6 : 1},
          styles.requestBtn]}
          onPress={() => Linking.openURL('https://fic.adventistchurch.org.uk/forms/2664/form_submissions/new')}>
          <LinearGradient
          style={styles.btnGradient}
          colors={['#45E355', '#55EE88']}
          start={[0, 0]}
          end={[1, 0]}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Send a Request</Text>
          </LinearGradient>
        </Pressable>
      </SafeAreaView>

      <View style={{flex:1}}>
        <FlatList
          style={styles.flatlist}
          data={requests}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RenderRequests item={item} />}
          ListHeaderComponent={<View><Text style={{marginTop:16, fontSize: 16, fontStyle:'italic', color:'grey'}}>Updated every Sunday</Text></View>}
          ListFooterComponent={<View style={{height:103}} />} />
      </View>

      <StatusBar barStyle = 'light-content' />
    </View>
  )
};

const styles = StyleSheet.create ({
  requestBtnContainer: {
    alignItems: 'center',
    position:'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    shadowColor: '#45e355',
  },
  requestBtn: {
    borderRadius: 90,
    overflow:'hidden'
  },
  btnGradient: {
    width: 240,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    paddingHorizontal: 16
  },
});

export default PrayerRequests;
