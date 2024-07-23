import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fuente: RECOPE(Refinadora Costarricense de Petróleo)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  text: {
    textAlign: 'center'
  }
})