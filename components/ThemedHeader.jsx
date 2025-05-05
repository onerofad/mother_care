import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedHeader = ({style, ...props}) => {
  return (
    <Text style={[styles.title, style ]} 
        {...props}
    />
  )
}

export default ThemedHeader

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: Colors.primary,
        fontFamily: 'sans-serif'
      },
})