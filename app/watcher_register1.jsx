import { StyleSheet, TextInput, Modal, SafeAreaView, ActivityIndicator} from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useMemo, useState } from 'react'
import { FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
//Themed views

import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import { Colors } from '../constants/colors'
import ThemedHeader from '../components/ThemedHeader'
import ThemedCard from '../components/ThemedCard'
import { MaterialIcons } from '@expo/vector-icons'
import { RadioGroup } from 'react-native-radio-buttons-group'
import ThemedText from '../components/ThemedText'
import * as Progress from 'react-native-progress'
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer'
import Checkbox from 'expo-checkbox'
import { getWatchers } from './API'


const WatcherRegister1 = () => {

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

    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [zipcode, setzipcode] = useState("")
    const [phoneno, setphone] = useState("")

    const [month, setmonth] = useState("")
    const [year, setyear] = useState("")
    const [day, setday] = useState("")
    const [gender, setgender] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    const [skill, setskill] = useState("")
    const [hour_rate, sethour_rate] = useState("")
    const [about, setabout] = useState("")
    const [picture, setpicture] = useState("")


    const [isChecked, setChecked] = useState(false)

    const [selectedId, setSelectedId] = useState('');

    const [visible1, setvisible1] = useState(false)
    const [visible2, setvisible2] = useState(false)

    const [modalTxt, setmodalText] = useState("")

    const [progress, setProgress] = useState(0)

    const selectedidClick = () => {
        setSelectedId
    }

    const handleCheck = (value) => {
        if(value){
            if(firstname === "" || lastname === "" || email === "" || password === "" || zipcode === "" || phoneno === "" || month === "" || year === "" || day === ""){
                setmodalText("Fill in all Entries")
                setvisible2(true)
            }else{
                setChecked(value)
                setProgress(progress + 0.5)
            }
        }else{
                setChecked(value)
                setProgress(progress - 0.5)
        }
    }

    const submitNow = async () => {
         try{

            if(firstname === ""){
                setmodalText("First name is required")
                setvisible2(true)
            }else if(lastname === ""){
                setmodalText("Last name is required")
                setvisible2(true)
            }else if(email === ""){
                setmodalText("Email is required")
                setvisible2(true)
            }else if(password === ""){
                setmodalText("Password is required")
                setvisible2(true)
            }else if(zipcode === ""){
                setmodalText("Zip code is required")
                setvisible2(true)
            }else if(phoneno === ""){
                setmodalText("Phone no is required")
                setvisible2(true)
            }else if(month === ""){
                setmodalText("Month is required")
                setvisible2(true)
            }else if(day === ""){
                setmodalText("Day is required")
                setvisible2(true)
            }else if(year === ""){
                setmodalText("Year is required")
                setvisible2(true)
            }else if(gender === ''){
                setmodalText("Gender is required")
                setvisible2(true)
            }else if(isChecked === false){
                setmodalText("Accept terms to continue")
                setvisible2(true)
            }else{
                setvisible1(true)
                setTimeout(async () => {
                    try{
                        
                        setvisible1(false)
                        await AsyncStorage.setItem("email", email)
                        
                        let dob = day + '-' + month + '-' + year
                        gender == '1' ? setgender('Male') : setgender('Female')
                        let items = {firstname, lastname, email, password, zipcode, phoneno, dob, gender}
                        getWatchers().post('/', items)
                        .then(() =>  {
                            router.push("/watcher_register2")
                        })
                        .catch(function(error) {
                            console.log('An error occurred ' + error.message)
                        })

                    }catch(error){
                        console.log("An error has occurred ", error)
                    }
                }, 3000)
            }

        }catch(error){
            console.log("An error has occurred")
        }

    }

  return (
    <KeyboardAvoidingContainer>
    <ThemedView>
        <Spacer height={60} />

        <ThemedView style={styles.section1}>
            <ThemedHeader>QUICK WATCH</ThemedHeader>
            <MaterialIcons
                    name='arrow-back-ios'
                    size={30}
                    onPress={() => router.push("/")}
                    style={{position: 'relative', left: 80}}
            />
        </ThemedView>
       
        <Spacer height={20} />

        <Progress.Bar 
            style={{
                alignSelf: 'center'
            }} 
            width={300} 
            color={Colors.primary} 
            progress={progress} 
            unfilledColor='#C9C6D5'
        />  

        <Spacer height={20} />

        <ThemedCard style={[styles.card_box]}>
            
            <TextInput 
                style={styles.textInput} 
                placeholder='First Name' 
                onChangeText={(fn) => setfirstName(fn)}
                value={firstname}
            />

            <Spacer height={15} />

            <TextInput 
                style={styles.textInput} 
                placeholder='Last Name' 
                onChangeText={(ln) => setlastName(ln)}
                value={lastname}
            />

            <Spacer height={15} />

            <TextInput 
                style={styles.textInput} 
                placeholder='Email' 
                onChangeText={(em) => setEmail(em)}
                value={email}
            />

            <Spacer height={15} />

            <TextInput 
                style={styles.textInput} 
                placeholder='Password' 
                secureTextEntry={true}
                onChangeText={(pass) => setPassword(pass)}
                value={password}
            />

            <Spacer height={15} />

            <TextInput 
                style={styles.textInput} 
                placeholder='Zip Code'
                onChangeText={(zc) => setzipcode(zc)}
                value={zipcode} 
            />

            <Spacer height={15} />
            
            <TextInput 
                style={styles.textInput} 
                placeholder='Phone number' 
                onChangeText={(ph) => setphone(ph)}
                value={phoneno} 
            />

            <Spacer height={15} />

            <ThemedView style={[styles.section]}>
                <ThemedView>
                    <ThemedText style={[styles.text_font]}>Date of Birth</ThemedText>
                    <ThemedView style={[styles.section]}> 
                         <TextInput
                            placeholder='MM'
                            style={[styles.input_date, styles.text_font]}
                            onChangeText={(mm) => setmonth(mm)}
                            value={month} 
                        />
                        <TextInput
                            placeholder='DD'
                            style={[styles.input_date, styles.text_font]}
                            onChangeText={(dd) => setday(dd)}
                            value={day} 
                        />
                        <TextInput
                            placeholder='YYYY'
                            style={[styles.input_date, styles.text_font]}
                            onChangeText={(yy) => setyear(yy)}
                            value={year} 
                        />
              
                    </ThemedView>
                </ThemedView>
                <ThemedView>
                    <ThemedText style={[styles.text_font]}>Gemder</ThemedText>
                    <RadioGroup
                        containerStyle={[styles.radio_style]}
                        radioButtons={radioButtons}
                        labelStyle={[styles.text_font]}
                        selectedId={gender}
                        onPress={setgender}
                    />
                </ThemedView>
            </ThemedView>

            <Spacer height={15} />

            <ThemedView style={[styles.section, {justifyContent: ''}]}>
                <Checkbox
                    value={isChecked}
                    onValueChange={(value) => handleCheck(value)}
                    color={isChecked ? '#4630EB' : undefined} 
                />

                <ThemedText style={[styles.text1]}> I agree to the </ThemedText>
                <Link href="">
                    <ThemedText style={[styles.text2]}>Terms of Use. </ThemedText>
                </Link>
            </ThemedView>
        </ThemedCard>
                   
         <Spacer height={15} />

        <ThemedButton
            style={{backgroundColor: Colors.primary,  height: 57,
                width: 146, borderRadius: 7, alignSelf: 'center'
            }}
                onPress={submitNow}
            >
            <ThemedText style={{fontFamily: 'InriaSerif', fontSize: 13, fontWeight: 400, color: '#ffffff', textAlign: 'center'}}>SUBMIT</ThemedText>
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
    </KeyboardAvoidingContainer>
  )
}

export default WatcherRegister1

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    card_box: {
        alignSelf: 'center', 
        height: 580, 
        borderWidth: 5, 
        borderColor: Colors.primary, 
        paddingHorizontal: 20, 
        paddingVertical: 20
    },
    textInput: {
        height: 57,
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10
    },
    section1: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkbox: {
        margin: 8
    },
    text: {
        backgroundColor: '#D9D9D9', 
        fontWeight: 'bold', 
        fontSize: 10, 
        textAlign: 'center', 
    },
    text_font: {
        fontFamily: 'InriaSerifBold',
        fontSize: 13,
        fontWeight: 700,
        color: '#000000'
    },
    input_date: {
        width: 54,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        textAlign: 'center',
        marginLeft: 2
    },
    radio_style: {
        flexDirection: 'row', 
        backgroundColor: '#D9D9D9', 
        marginLeft: 5, 
    },
    text2: {
        fontFamily: 'InriaSerif',
        fontSize: 13,
        fontWeight: 700,
        color: '#6A52BE',
    },
    text1: {
        fontFamily: 'InriaSerif',
        fontSize: 13,
        fontWeight: 700,
        color: '#000000'
    },
     modal_loading: {
        backgroundColor: '#ffffff',
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
    loading_text: {
        textAlign: 'center', 
        fontFamily: 'IrishGrover',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400
    },
    errorText: {
        backgroundColor: '#ffffff',
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
    }
})