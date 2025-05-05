import { StyleSheet, Text, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import { useMemo, useState } from 'react'

//Themed views

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/colors'
import ThemedHeader from '../../components/ThemedHeader'
import ThemedCard from '../../components/ThemedCard'
import { MaterialIcons } from '@expo/vector-icons'
import { RadioGroup } from 'react-native-radio-buttons-group'
import ThemedText from '../../components/ThemedText'

const Register2 = () => {

    const router = useRouter()

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'M',
            value: 'Male'
        },
        {
            id: '2',
            label: 'F',
            value: 'Female'
        },

    ]), [])

    const [selectedId, setSelectedId] = useState();

    const handleSubmit = () => {
        console.log("Registration has been submitted")
    }
  return (
    <ThemedView style={styles.container}>
        <Spacer height={60} />

        <ThemedView>
            <ThemedHeader>QUICK WATCH</ThemedHeader>
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
            
            <TextInput style={styles.textInput} placeholder='Phone number' />

            <Spacer height={20} />

            <ThemedView style={[styles.section, {color: '#f2f2f2', justifyContent: 'space-around'}]}>
                <ThemedText>Date of birth</ThemedText>
                <ThemedText>Gender</ThemedText>
            </ThemedView>

            <ThemedView style={[styles.section, {justifyContent: 'space-between'}]}>
                <ThemedView style={[styles.section]}>
                    <TextInput
                        placeholder='MM'
                        style={[styles.text, {width: 40}]}
                    />
                    <TextInput
                        placeholder='DD'
                        style={[styles.text, {width: 40, marginLeft: 3}]}                   
                     />
                    <TextInput
                        placeholder='YYYY'
                        style={[styles.text, {width: 50, marginLeft: 3}]}                    />
                </ThemedView>

                <ThemedView style={styles.section}>
                    <RadioGroup
                        containerStyle={{flexDirection: 'row', backgroundColor: '#ccc', marginLeft: 5}}
                        radioButtons={radioButtons}
                        selectedId={selectedId}
                        onPress={setSelectedId}

                    />
                </ThemedView>
               
            </ThemedView>

        </ThemedCard>

        <Spacer height={20} />

        <ThemedButton
            style={{backgroundColor: Colors.primary}}
            onPress={() => router.push("/register3")}
        >
            <Text style={{color: '#f2f2f2'}}>SUBMIT</Text>
        </ThemedButton>

    </ThemedView>
  )
}

export default Register2

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
    },
    text: {
        backgroundColor: '#ccc', 
        fontWeight: 'bold', 
        fontSize: 10, 
        textAlign: 'center', 
    }
})