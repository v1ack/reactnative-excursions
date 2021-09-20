/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react'
import React, {useEffect, useState} from 'react'
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import {MainScreen} from './src/mainScreen'
import {ExcursionScreen} from './src/excursionScreen'
import Excursions from './static_api/excursion.json'

const App: () => Node = () => {
  const [data, setData] = useState([])
  const [excursion, setExcursion] = useState(undefined)
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    // let photos = await fetch(
    //   'https://jsonplaceholder.typicode.com/photos',
    // ).then(r => r.json())
    // setData(photos.slice(0, 5))
    setData(Excursions)
  }

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {excursion === undefined ? (
        <MainScreen
          {...{
            data,
            backgroundStyle,
            isDarkMode,
            setExcursion,
          }}
        />
      ) : (
        <ExcursionScreen
          setExcursion={setExcursion}
          id={excursion}
          excursion={data.find(i => i.id === excursion)}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
