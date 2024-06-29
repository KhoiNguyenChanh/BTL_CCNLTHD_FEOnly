import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

function Rating(value,text ) {
    return (
      <View>
        <FontAwesome name=
        { value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-0"}
        size={8} color="#FFC72C" />
        <FontAwesome name=
        { value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-0"}
        size={8} color="#FFC72C" />
        <FontAwesome name=
        { value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-0"}
        size={8} color="#FFC72C" />
        <FontAwesome name=
        { value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-0"}
        size={8} color="#FFC72C" />
        <FontAwesome name=
        { value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-0"}
        size={8} color="#FFC72C" />

        {
            text && 
            (
                <Text style={{fontSize:12}}> {text} </Text>
            )
        }

      </View>
    )
  }
  export default Rating;