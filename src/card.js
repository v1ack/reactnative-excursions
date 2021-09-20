import React from 'react'
import {ImageBackground, Text, StyleSheet, View} from 'react-native'
import TimeIcon from './assets/Type=time.svg'

export const Card = ({image, name, duration}) => {
  return (
    <ImageBackground source={{uri: image}} style={styles.image}>
      <Text style={styles.header}>{name}</Text>
      <View style={[styles.badge, styles.time]}>
        <TimeIcon height={18} width={18} style={styles.timeIcon} />
        <Text>{duration}</Text>
      </View>
      <View style={[styles.cardSpace]} />
      <View style={styles.bottomView}>
        <Text style={[styles.badge, styles.location]}>Milan, Italy</Text>
        <Text style={[styles.badge, styles.explore]}>Explore</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  image: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    flex: 1,
    height: 200,
    overflow: 'hidden',
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#00000035',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  badge: {
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  timeIcon: {
    marginRight: 4,
  },
  time: {
    marginTop: 8,
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  location: {
    fontSize: 16,
  },
  explore: {
    backgroundColor: '#FFDD00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSpace: {
    flexGrow: 1,
  },
})
