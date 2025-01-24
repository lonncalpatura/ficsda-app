import React from 'react';
import {StyleSheet, Text, View, Pressable, FlatList, StatusBar} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';//from expo https://docs.expo.dev/guides/icons/https://docs.expo.dev/guides/icons/

const ProgrammeHeader = ({navigation}) => {

  return (
    <View style={styles.header}>

      <View style={styles.headerBack}>
        <Pressable style={({pressed}) => [
          {opacity: pressed ? '0.25' : '1'},
          {backgroundColor: '#ebebeb', position:'absolute', zIndex: 1},
          styles.headerBackBtn]}
          onPress={() => navigation.navigate('Home')}>
          <MaterialIcons
            name='arrow-back-ios'
            color='#696969'
            size={18} />
          <Text style={{fontSize: 16, fontWeight: '600', color: '#696969'}}>Home</Text>
        </Pressable>

        <View style={{width: '100%', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Programme</Text>
        </View>
      </View>

    </View>
  )
};

const styles = StyleSheet.create ({
  header: {
    paddingTop: 47,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  headerBack: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
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

export default ProgrammeHeader;
