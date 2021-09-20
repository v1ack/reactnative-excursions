import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Card} from './card'
import Logo from './assets/logo_circles.svg'

export function MainScreen({backgroundStyle, isDarkMode, data, setExcursion}) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={[
          styles.header,
          {backgroundColor: isDarkMode ? Colors.black : Colors.white},
        ]}>
        <Logo height={24} width={48} />
        <Text style={styles.headerText}>Excursion</Text>
      </View>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          paddingHorizontal: 16,
          position: 'relative',
        }}>
        {data.map(excursion => (
          <TouchableOpacity
            onPress={() => setExcursion(excursion.id)}
            key={excursion.id}>
            <Card {...excursion} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 8,
  },
})
