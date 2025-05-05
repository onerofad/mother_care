import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.heading}>
            Active Users Page
        </ThemedText>

        <Spacer />
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})