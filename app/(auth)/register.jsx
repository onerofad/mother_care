import { StyleSheet, Text, TextInput } from 'react-native'
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
import { MaterialIcons } from '@expo/vector-icons'

const Register = () => {

    const router = useRouter()

    const [isChecked, setChecked] = useState(false)

    const handleSubmit = () => {
        console.log("Registration has been submitted")
    }
  return (
    <ThemedView style={styles.container}>
        <Spacer height={60} />

        <ThemedView style={styles.section}>
            <ThemedHeader>QUICK WATCH</ThemedHeader>
            <MaterialIcons
                name='arrow-back-ios'
                size={30}
                style={{marginLeft: 40}}
                onPress={() => router.push("/")}
            />
        </ThemedView>
       
        <Spacer height={20} />

        <ThemedCard style={{backgroundColor: Colors.background, borderWidth: 5, borderColor: Colors.primary, paddingVertical: 20}}>
            <TextInput style={styles.textInput} placeholder='First Name' />

            <Spacer height={20} />

            <TextInput style={styles.textInput} placeholder='Last Name' />

            <Spacer height={20} />

            <TextInput style={styles.textInput} placeholder='Email' />

            <Spacer height={20} />

            <TextInput style={styles.textInput} placeholder='Password' />

            <Spacer height={20} />

            <TextInput style={styles.textInput} placeholder='Zip Code' />

            <Spacer height={20} />

            <ThemedView style={styles.section}>
                <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined} 
                    style={styles.checkbox}
                />

                <ThemedText>I agree to the Terms of use</ThemedText>
            </ThemedView>

        </ThemedCard>

        <Spacer height={20} />

        <ThemedButton
            style={{backgroundColor: Colors.primary}}
            onPress={() => router.push("/home")}
        >
            <Text style={{color: '#f2f2f2'}}>SUBMIT</Text>
        </ThemedButton>

    </ThemedView>
  )
}

export default Register

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