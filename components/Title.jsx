import { View, Text, StyleSheet } from 'react-native'

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Precio del combustible en Costa Rica</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  }
})