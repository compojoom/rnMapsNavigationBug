/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import { createStackNavigator, createAppContainer } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Header',
      // headerLeft: <HeaderCancel/>,
      headerRight: <TouchableOpacity>
        <Text style={{color: 'red'}}>Done</Text>
      </TouchableOpacity>
    }
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Move marker, then press on the Done button in the header. It won't work. One needs to move the map
        for the buttons to become clickable again.
        </Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
        >
          <Marker coordinate={{latitude: 45, longitude: 8}} draggable={true}/>
        </MapView>

        <TouchableOpacity>
          <Text>this button can't be pressed as well when marker moved</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  map: {
    width: 500,
    height: 500
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
