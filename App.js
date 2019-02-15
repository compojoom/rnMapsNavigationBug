/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import { PanGestureHandler, } from 'react-native-gesture-handler';


export default class Example extends Component {
  render() {
    return (
      <View style={styles.scrollView}>
        <PanGestureHandler enabled={false}
        >
          <Animated.View
            style={{flex: 1, backgroundColor: '#fff'}}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
            >
              <Marker coordinate={{latitude: 45, longitude: 8}} draggable={true}/>
            </MapView>
          </Animated.View>
        </PanGestureHandler>

        <TouchableOpacity style={{height: 50, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
          <Text>press me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
    map: {
    width: 500,
    height: 500
  },
});
