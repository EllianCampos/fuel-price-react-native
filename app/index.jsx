import { useEffect, useState } from 'react';
import {ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Title from '@/components/Title'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default function HomeScreen() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://api.recope.go.cr/ventas/precio/consumidor')
    const res = await response.json()
    setData(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View>

          <Title />

          <View>
            {
              data.map((item, index) => (
                <Card key={index} item={item} />
              ))
            }
          </View>

          <Footer />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}