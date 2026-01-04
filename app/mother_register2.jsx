import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Image, TextInput, TouchableOpacity, Modal, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import * as Progress from 'react-native-progress'

//Themed views

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import { Colors } from '../constants/colors'
import ThemedHeader from '../components/ThemedHeader'
import ThemedCard from '../components/ThemedCard'
import { Dropdown } from 'react-native-element-dropdown'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getUsers from './API';


const data0 = [
    {'label': 'Texas', 'value': 'Texas'}
]

const data1 = [
    {'label': 'Dallas', 'value': 'Dallas'}
]


const MotherRegister2 = () => {    
    const [about, setTellus] = useState("")
    const [state, setstate_location] = useState("")
    const [city, setcity_location] = useState("")
    const [image, setImage] = useState(null);
    const [picture, setPicture] = useState("");



    const [visible2, setvisible2] = useState(false)

    const [visible1, setvisible1] = useState(false)

    const [modalTxt, setmodalText] = useState("")

    const [progress, setProgress] = useState(0.5)

    const [users, setUsers] = useState([])

    const [email, setEmail] = useState("")

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        getUsers().get("/")
        .then(response => setUsers(response.data))
        .catch(error => console.log("An error has occurred " + error))

        let em = await AsyncStorage.getItem("email")
        setEmail(em)
    }

  const router = useRouter()

  

  const pickImage = async () => {
    try{
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
        setImage(result.assets[0].uri)
        let newfile = {
            uri: result.assets[0].uri, 
            type: `test/${result.assets[0].uri.split('.')[1]}`,
            name: `test.${result.assets[0].uri.split('.')[1]}`
        }

        handleUpload(newfile)
    }

        if(about !== "" || city !== "" || state !== ""){
            setProgress(progress + 0.5)
        }
    }catch(error){
       console.log('An error has occurred ' + error) 
    }

  };

  const handleUpload = (image_data) => {
    const data = new FormData()
    data.append("file", image_data)
    data.append("upload_preset", "slakw5ml")
    data.append("cloud_name", "du3ck2joa")

    fetch('https://api.cloudinary.com/v1_1/du3ck2joa/image/upload', {
        method: "post",
        body: data
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        let url = data.secure_url.toString()
        setPicture(url)
    })
  }

  const update = async () => {
   
    if(about === ""){
        setmodalText("About family is required")
        setvisible2()
    }else if(about.length < 69){
        setmodalText("Minimum of 70 characters")
        setvisible2()
    }else if(state === ""){
        setmodalText("State is required")
        setvisible2()
    }else if(city === ""){
        setmodalText("City is required")
        setvisible2()
    }else if(image === null){
        setmodalText("Select an image")
        setvisible2()
    }else{

        const user = users.filter(u => u.email == email)[0]
        let id = user.id
        let items = {about, state, city, picture}
        setvisible1(true)
        setTimeout(async () => {
            setvisible1(false)
                getUsers().patch(`/${id}/`, items)
                .then(() => router.push("/mother_home"))
                .catch(error => console.log('An error has occurred ' + error) )
        }, 3000)
    
    }
  }

  return (
    <ScrollView style={styles.container}>
    <ThemedView>

        <Spacer height={60} />

        <ThemedHeader>QUICK WATCH</ThemedHeader>
            
        <Spacer height={40} />

         <Progress.Bar style={{
                        alignSelf: 'center'
                    }} 
                    width={300} 
                    color={Colors.primary} 
                    progress={progress} 
                    unfilledColor='#C9C6D5'
         /> 

         <Spacer height={20} />

        <ThemedCard style={[styles.card_box]}>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
            <TextInput 
                style={[styles.textInput, styles.text]} 
                placeholder='Tell us about your family' 
                textAlignVertical='top'
                value={about}
                multiline={true}
                onChangeText={(txt) => setTellus(txt)}
                enablesReturnKeyAutomatically={true}
                
            />
            </KeyboardAvoidingView>
        </ThemedCard>

        <Spacer height={20} />

        <ThemedText style={[styles.text, {textAlign: 'center'} ]}>Location</ThemedText>

        <Spacer height={20} />

        <ThemedView style={[styles.location]}>
            <ThemedView>
                <Dropdown
                    data={data0}
                    onChange={(item) => setstate_location(item.value)}
                    valueField="value"
                    labelField="label"
                    style={{width: 90}}
                    placeholder='State'
                    value={state}

                />
                
            </ThemedView>
            <ThemedView>
                <Dropdown
                    data={data1}
                    onChange={(item) => setcity_location(item.value)}
                    valueField="value"
                    labelField="label"
                    style={{width: 90}}
                    placeholder='City'
                    value={city}
                />
               
            </ThemedView>
        </ThemedView>

        <Spacer height={40} />

        <ThemedView style={[]}>
            {image == null ?
                <Pressable                 
                    onPress={pickImage} 
                    style={[styles.upload]}
                >
                </Pressable> :
                <Image borderRadius={50} source={{ uri: image }} style={styles.image} />}
        
            <ThemedText 
                style={[styles.upload_text]}
            >
                Upload Photo
            </ThemedText>
      
        </ThemedView>

        <Spacer height={80} />

        <ThemedButton
            style={[styles.btn]}
                onPress={() => update()}
            >
                <ThemedText style={styles.btn_text}>UPDATE</ThemedText>
        </ThemedButton>
        <Modal 
            animationType='none'
            transparent
            visible={visible1}
        >
            <SafeAreaView style={styles.modal_loading}>                    
                <ActivityIndicator size="large" color={Colors.primary} /> 
                    <ThemedText style={styles.loading_text}>
                        Please wait...
                    </ThemedText>
            </SafeAreaView>
        </Modal>
        <Modal
            transparent
            visible={visible2}
            animationType='none'
        >
            <ThemedView style={[styles.errorText]}>
            <FontAwesome  
                color="#000000"
                name='times' 
                size={15} 
                style={{alignSelf: 'flex-end'}}
                    onPress={() => setvisible2(false)}
                />
                <MaterialCommunityIcons color="red" name='cancel' size={40} />
                <ThemedText style={[styles.loading_text, {fontSize: 14}]}>{modalTxt}</ThemedText>
                </ThemedView>
        </Modal>

    </ThemedView>
    </ScrollView>
  )
}

export default MotherRegister2

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    card_box: {
        backgroundColor: '#fff', 
        paddingHorizontal: 20, 
        paddingVertical: 20,
        alignSelf: 'center'
    },
    textInput: {
        height: 120,
        borderWidth: 2,
        borderColor: '#000000',
        padding: 20,
    },
    text: {
        fontWeight: 400,
        fontFamily: 'InriaSerif',
        fontSize: 14,
        color: '#000000'
    },
    btn: {
        backgroundColor: Colors.primary,  
        height: 57,
        width: 146, 
        borderRadius: 7, 
        alignSelf: 'center'
    },
    btn_text: {
        fontFamily: 'InriaSerif', 
        fontSize: 13, 
        fontWeight: 400, 
        color: '#ffffff', 
        textAlign: 'center'
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    image: {
    width:100,
    height: 100,
    alignSelf: 'center'
  },
  upload: {
    width: 80, 
    height: 80, 
    borderRadius: 50, 
    backgroundColor: Colors.primary,
    alignSelf: 'center'
  },
  upload_text: {
    fontFamily: 'InriaSerif', 
    fontSize: 13, 
    fontWeight: 400, 
    color: '#000000', 
    textAlign: 'center'
  },
  loading_text: {
        textAlign: 'center', 
        fontFamily: 'IrishGrover',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400
    },
    errorText: {
         backgroundColor: '#f5f5f5',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        width: 240,
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginTop: 200,
        elevation: 40,
        paddingVertical: 10
    },
    modal_loading: {
         backgroundColor: '#f5f5f5',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        width: 180,
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginTop: 200,
        elevation: 40,
    },
})