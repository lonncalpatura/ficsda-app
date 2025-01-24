import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, FlatList, StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';//from expo https://docs.expo.dev/versions/latest/sdk/linear-gradient/
import {MaterialIcons} from '@expo/vector-icons';//from expo https://docs.expo.dev/guides/icons/https://docs.expo.dev/guides/icons/

const RequestsHeader = ({navigation}) => {

  return (
    <View style={styles.headerShadow}>
      <View style={styles.header}>
        <LinearGradient
        style={styles.headerGradient}
        colors={['#4E73DD', '#61B8F5']}
        start={[0, 0.5]}
        end={[1, 0.5]}>

          <View style={styles.headerBack}>
            <Pressable
              style={({pressed}) => [
                {opacity: pressed ? '0.65' : '1'},
                {backgroundColor: 'white'},
                styles.headerBackBtn]}
              onPress={() => navigation.navigate('Home')}>
              <MaterialIcons
                name='arrow-back-ios'
                color='#4E73DD'
                size={18} />
              <Text style={{fontSize: 16, fontWeight: '600', color: '#4E73DD'}}>Home</Text>
            </Pressable>
          </View>

          <View style={{marginTop: 8, marginBottom: 16}}>
            <Text style={{fontSize: 34, fontWeight: '700', color: 'white'}}>Prayer Requests</Text>
          </View>

        </LinearGradient>
      </View>
    </View>
  )
};

const styles = StyleSheet.create ({
  headerShadow: {
    shadowColor: '#4E73DD',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 9,
    zIndex: 1
  },
  header: {
    zIndex: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow:'hidden'
  },
  headerGradient: {
    paddingTop: 47,
    paddingHorizontal: 16,

  },
  headerBack: {
    height: 44,
    justifyContent: 'center'
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

export default RequestsHeader;
