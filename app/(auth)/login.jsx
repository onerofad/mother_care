import { Pressable, StyleSheet, Text, TextInput } from 'react-native'
import { Link, useRouter } from 'expo-router'

//Themed views

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedCard from '../../components/ThemedCard'
import ThemedHeader from '../../components/ThemedHeader'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const Login = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

  const handleSubmit = () => {
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

        <ThemedCard>
            <TextInput  
                value={email}
                style={styles.textInput} 
                placeholder='Email' 
                onChangeText={(em) => setEmail(em)}
            />
            <Spacer />
            <TextInput 
                value={password}
                secureTextEntry={true} 
                style={styles.textInput} 
                placeholder='Password' 
                onChangeText={(pass) => setPassword(pass)}
            />
        </ThemedCard>

        <Spacer />

        <ThemedButton
            onPress={handleSubmit} 
            style={{backgroundColor: Colors.primary}}
        >
            <Text style={{color: '#f2f2f2'}}>SUBMIT</Text>
        </ThemedButton>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5   
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})