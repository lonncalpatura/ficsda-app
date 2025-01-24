import React from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';

const RenderRequests =({item}) => {

  const date = item.date.toString();
  const dataDay = date.slice(6);
  const dataMonth = date.slice(4, 6);
  const dataYear = date.slice(0, 4);
  const formattedDate = dataDay+'/'+dataMonth+'/'+dataYear;


  return (
    <View style={[styles.requestCard, styles.shadow]}>
      <View style={styles.requestCardHeader}>
       <Text style={{fontSize: 20, fontWeight: '600'}}>{item.name}</Text>
       <Text style={styles.position}>{formattedDate}</Text>
      </View>

      <View>
        <Text style={{fontSize: 16}}>{item.request}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create ({
  requestCard: {
    padding: 16,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: 'white',

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.12,
    shadowRadius: 6
  },

  requestCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12
  },
  position: {
    fontSize: 16,
    color: 'grey',
    fontStyle: 'italic',
  },
});

export default RenderRequests;
