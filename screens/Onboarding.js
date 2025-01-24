import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable, StatusBar, Image, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';//from expo https://docs.expo.dev/versions/latest/sdk/linear-gradient/

//ONBOARDING
const Onboarding = ({navigation}) => {
  return (
    <View style={{height: 844}}>

      <LinearGradient
      style={styles.bg}
      colors={['#4E73DD', '#61B8F5']}
      start={[0, 0.25]}
      end={[1, 0.75]} >
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle= 'light-content' />

            <View style={{alignItems:'center'}}>
              <Text style={{color: 'white', fontSize: 32, textAlign: 'center', fontWeight: '700'}}> Welcome to{'\n'}the FICSDA app</Text>

              <View style={styles.imgContainer}><Image style={styles.img} source={require('../assets/church.png')}/></View>

              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>Some things you can do in this app:</Text>
                <Text style={{fontSize: 16, marginTop: 8, color: 'white'}}>
                  {'\u2022'} Explore upcoming church Events{'\n'}
                  {'\u2022'} View the programme{'\n'}
                  {'\u2022'} Scroll through prayer requests{'\n'}
                  {'\u2022'} Watch the livestream{'\n'}
                </Text>
              </View>


              <View style={styles.requestBtnContainer}>
                <Pressable
                style={({pressed}) => [
                  {opacity: pressed ? 0.5 : 1},
                  styles.requestBtn]}
                onPress={() => navigation.navigate('Home')}>

                  <LinearGradient
                  style={styles.btnGradient}
                  colors={['#45E355', '#55EE88']}
                  start={[0, 0]}
                  end={[1, 0]}>
                    <Text style={{fontSize: 20, fontWeight: '600', color:'white'}}>Use the app</Text>
                  </LinearGradient>

                </Pressable>
              </View>
            </View>

        </SafeAreaView>
      </LinearGradient>
    </View>
  )
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    margin: 16
  },
  bg: {
    resizeMode:'cover',
    height: 844
  },
  imgContainer: {
    marginVertical: 32,
    maxWidth:358
  },
  img: {
    width: 326,
    height: 141,
    resizeMode:'contain',
  },
  requestBtnContainer:{
    marginTop: 32,
    shadowColor: '#45e355',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 9
  },
  requestBtn: {
    borderRadius: 90,
    overflow:'hidden'
  },
  btnGradient: {
    width: 256,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Onboarding;
