import { View, Text, StyleSheet } from 'react-native'
import cardColors from '@/constants/cardColors.js'

export default function Card({ item }) {

  // Don't show kerosene
  if (item.id == "000000000000080024") {
    return null 
  }

  return (
    <View style={[styles.container, { backgroundColor: cardColors.get(item.id) }]}>
      <Text style={styles.name}>{item.nomprod}</Text>
      <Text style={styles.price}>₡{item.preciototal}</Text>
      <Text style={styles.dateupt}>Ultima actualización: {item.fechaupd}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    padding: 14,
    borderRadius: 15
  },
  name: {
    backgroundColor:  '#ddd',
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: 8
  },  
  price: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
    color: 'white'
  },
  dateupt: {
    color: '#eee'
  }
})