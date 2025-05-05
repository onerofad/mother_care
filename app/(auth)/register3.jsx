import { Pressable, StyleSheet, Text, TextInput } from 'react-native'
import { Link, useRouter } from 'expo-router'

//Themed views

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/colors'
import ThemedHeader from '../../components/ThemedHeader'
import ThemedCard from '../../components/ThemedCard'
import { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { Fontisto, MaterialIcons } from '@expo/vector-icons'

const Register3 = () => {

    const router = useRouter()

  return (
    <ThemedView style={styles.container}>
        <Spacer height={60} />

        <ThemedView style={styles.section}>
            <ThemedHeader>QUICK WATCH</ThemedHeader>
            <ThemedView>
                <Pressable style={[{marginLeft: 50, width: 40, height: 40, borderRadius: 50, backgroundColor: Colors.primary}]}>
                </Pressable>
                <ThemedText style={{fontSize: 12, textAlign: 'right'}}>Upload</ThemedText>
            </ThemedView>
            
        </ThemedView>
       
        <Spacer height={20} />

        <ThemedCard style={{backgroundColor: '#fff', paddingVertical: 20}}>
            <TextInput style={styles.textInput} placeholder='Name In Full' />

            <Spacer height={20} />

            <TextInput style={styles.textInput} placeholder='Skills' />

            <Spacer height={20} />

            <TextInput style={[styles.textInput, {height: 80, borderBottomWidth: 5, borderBottomColor: '#000'}]} placeholder='About Me' />

            <Spacer height={20} />

        </ThemedCard>

        <ThemedCard style={[styles.section, {borderRadius: 0, width: '80%', justifyContent: 'space-between', backgroundColor: '#ccc', paddingVertical: 20}]}>
            <ThemedText style={{fontWeight: 'bold'}}>Amount  $</ThemedText>
            <TextInput style={[styles.textInput, {borderWidth: 0, width: 150, height: 40, backgroundColor: '#fff'}]} />
        </ThemedCard>

        <Spacer height={80} />

        <ThemedButton
            style={{backgroundColor: Colors.primary}}
            onPress={() => router.push("/home")}
        >
            <Text style={{color: '#f2f2f2'}}>SUBMIT</Text>
        </ThemedButton>

    </ThemedView>
  )
}

export default Register3

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        margin: 8
    }
})