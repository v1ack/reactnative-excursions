import React, {useEffect, useState} from 'react'
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import TimeIcon from './assets/Type=time.svg'
import MarkIcon from './assets/Type=mark.svg'

export const ExcursionScreen = ({setExcursion, excursion}) => {
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: excursion.image}} />
      <Button
        color={'black'}
        title={'back'}
        onPress={() => setExcursion(undefined)}
      />
      <View style={styles.mainView}>
        <Text style={styles.header}>{excursion.name || ''}</Text>
        <View style={styles.time}>
          <TimeIcon height={22} width={22} style={styles.timeIcon} />
          <Text>{excursion.duration}</Text>
        </View>
        <View style={styles.time}>
          <MarkIcon height={22} width={22} style={styles.timeIcon} />
          <Text>Milan, Italy</Text>
        </View>
        <Text style={styles.body}>{excursion.body || ''}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 16,
    fontSize: 16,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  mainView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backButton: {
    backgroundColor: 'black',
  },
  time: {
    marginTop: 8,
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeIcon: {
    marginRight: 8,
  },
})
