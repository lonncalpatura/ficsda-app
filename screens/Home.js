import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, ImageBackground, Linking, StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';//from expo https://docs.expo.dev/versions/latest/sdk/linear-gradient/
import YoutubePlayer from 'react-native-youtube-iframe';//Using WebView as well https://www.npmjs.com/package/react-native-youtube-iframe and https://github.com/react-native-webview/react-native-webview

//HOME
const Home = ({navigation}) => {

    const map = require('../assets/map.png');
    const programme = require('../assets/programme.png');

  return (

    <View style={{backgroundColor: 'white', flex:1}}>

      <View style={styles.header}>
        <Text style={{fontSize: 34, fontWeight: '700'}}>Home</Text>
        <Text style={{fontSize: 16, marginTop: 4, color: '#444'}}>Find everything here</Text>
      </View>

      <ScrollView style={{flex:1, paddingHorizontal: 16}} showsVerticalScrollIndicator={false}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8}}>
          <Pressable
          style={({pressed}) => [
            {opacity: pressed ? 0.5 : 1},
            styles.shadowGreen
            ]}
          onPress={() => navigation.navigate('Events')}>
            <LinearGradient
            style={styles.cardType1}
            colors={['#45E355', '#55EE88']}
            start={[0, 0]}
            end={[1, 0]}>
              <Text style={[styles.cardTitle, {color: 'white'}]}>Events</Text>
            </LinearGradient>
          </Pressable>

          <Pressable
          style={({pressed}) => [
            {opacity: pressed ? 0.5 : 1},
            styles.shadowBlue
            ]}
          onPress={() => navigation.navigate('Prayer Requests')}>
            <LinearGradient
            style={styles.cardType1}
            colors={['#4E73DD', '#61B8F5']}
            start={[0, 0.5]}
            end={[1, 0.5]}>
              <Text style={[styles.cardTitle, {color: 'white'}]}>Prayer Requests</Text>
            </LinearGradient>
          </Pressable>
        </View>

        <Pressable
          style={({pressed}) => [
            {opacity: pressed ? 0.4 : 1},
            styles.shadow]}
          onPress={() => navigation.navigate('Programme')} >
          <View style={[styles.programme, {overflow: 'hidden'}]}>
            <ImageBackground source={programme} resizeMode='cover' style={styles.map}>
              <Text style={[styles.cardTitle, {color: '#444'}]}>Programme</Text>
            </ImageBackground>
          </View>
        </Pressable>

        <View style={[styles.shadow, {height: 200, marginTop: 16, shadowOpacity: 0.24}]}>
          <View style={{borderRadius: 16, overflow:'hidden'}}>
            <YoutubePlayer height={200} videoId={'xRuKxTMyONA'} />
          </View>
        </View>

        <Pressable
        style={({pressed}) => [
          {opacity: pressed ? 0.4 : 1},
          {marginBottom: 34},
          styles.shadow]}
        onPress={() => Linking.openURL('https://www.google.com/maps/place/Filipino+International+Church+of+Seventh-day+Adventists/@51.492384,-0.276507,13z/data=!4m5!3m4!1s0x4876121f6c7709ed:0x7470aebdaedd56ff!8m2!3d51.53467!4d-0.2871416')}>
          <View style={styles.directions}>
            <ImageBackground source={map} resizeMode='cover' style={styles.map}>
              <Text style={[styles.cardTitle, {color: '#444'}]}>Directions</Text>
            </ImageBackground>
          </View>
        </Pressable>

      </ScrollView>

      <StatusBar barStyle = 'dark-content' />
    </View>
  );
}

const styles = StyleSheet.create ({
  header: {
    marginTop: 91,
    marginBottom: 8,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.12,
    shadowRadius: 6
  },
  shadowGreen: {
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowColor: '#45e355'
  },
  shadowBlue: {
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowColor: '#5386E4'
  },
  cardType1: {
     width: 170,
     height: 80,
     borderRadius: 12,
  },
  cardTitle: {
    fontSize: 20,
    margin: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.08)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 6
  },
  programme: {
    height: 158,
    marginTop: 16,
    borderRadius: 12,
  },
  directions: {
    height: 256,
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden'
  },
  map: {
    height: 256,
    width: '100%'
  }
});

export default Home;
