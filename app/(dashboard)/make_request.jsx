import { ActivityIndicator, FlatList, KeyboardAvoidingView, Modal, Platform, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedHeader from '../../components/ThemedHeader'
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/colors'
import ThemedText from '../../components/ThemedText'
import { useRouter } from 'expo-router'
import CalendarPicker from 'react-native-calendar-picker'
import { useState } from 'react'
import Slider from '@react-native-community/slider'
import ThemedCard from '../../components/ThemedCard'
import ModalDropdown from '../../components/ModalDropdown'
import { Dropdown } from 'react-native-element-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import KeyboardAvoidingContainer from '../../components/KeyboardAvoidingContainer'
import { getMakeRequest } from '../API'


const data = [
    {'label': '0-11 months', 'value': '0-11 months'},
    {'label': '1-2 years', 'value': '1-2 years'},
    {'label': '3-5 years', 'value': '3-5 years'},
    {'label': '6-10 years ', 'value': '6-10 years'},
    {'label': '11+ years', 'value': '11+ years'}
]

const MakeRequest = () => {

    const router = useRouter()

    const onSelect = (item) => {
        setValue(item)

    }

    const [child_option, setchild_option] = useState("")

    const [visible, setVisible] = useState(false)

    const [visible1, setVisible1] = useState(false)

    const [visible2, setVisible2] = useState(false)

    const [child_array, setchild_array] = useState([])


    const active_home = () => {
        router.push("/active_home")
    }

    const [selectedStartDate, setSelectedStartDate] = useState(null);

    const [startTime, setStartTime] = useState("")

    const [endTime, setEndTime] = useState("")

    const [watcher_role, setWatcherRole] = useState("")

    const [rate_hour, set_rate_hour] = useState(0)

    const [modalTxt, set_modal_text] = useState("")

    const uniqueId = Array.from(
        { length: 5 }, 
        () => "id-" + Math.random().toString(36).substr(2, 9)
    );

    const onSubmit =  async () => {
    if(selectedStartDate == null || startTime == "" || endTime == "" || child_option == "" || rate_hour == 0 || watcher_role == ""){
        set_modal_text("Fill in all fields")
        setVisible1(true)
    }else{
        try{        
            setVisible(true)
            let email = await AsyncStorage.getItem("email")
            //let items = {selectedStartDate, startTime, endTime, watcher_role, child_option, rate_hour, email}

            setTimeout(() => {
                setVisible(false)
                child_array.map(child => {
                    let id = child.id
                    let selectedStartDate = child.selectedStartDate
                    let startTime = child.startTime
                    let endTime = child.endTime
                    let watcher_role = child.watcher_role
                    let child_option = child.child_option
                    let rate_hour = child.rate_hour

                    let items = {id, selectedStartDate, startTime, endTime, watcher_role, child_option, rate_hour, email}
                    getMakeRequest().post('/', items)
                    .then(() => router.push("/mother_home"))
                    .catch(function(error){
                        console.log(error.toJSON());

                    })
                })
                
            },3000)

        }catch(error){
            console.log('An error has occured 2' + error)
        }
    }
      
    }

    const handlechange = () => {
        if(rate_hour == 100){

        }else{
            set_rate_hour(rate_hour + 1)
        }
    }

    const addChild = async () => {
        if(selectedStartDate == null || startTime == "" || endTime == "" || child_option == "" || rate_hour == 0 || watcher_role == ""){
            set_modal_text("Fill in all fields")
            setVisible1(true)
        }else{
            try{
                let em = await AsyncStorage.getItem("email")
                let items = {'id': uniqueId, 'selectedStartDate' : selectedStartDate, 'startTime' : startTime, 'endTime' : endTime, 'watcher_role' : watcher_role, 'child_option' : child_option, 'rate_hour' : rate_hour, 'email' : em}

                setchild_array(prevItems => [...prevItems, items])
                setVisible2(true)
            }catch(error){
                console.log('An error has occurred ' + error)
            }
        }
    }

    const removeChild = (childId) => {
        const child = child_array.filter(c => c.id !== childId)
        setchild_array(child)

        //let index = child_array.findIndex(c => c.id === childId)
    }

  return (
    <KeyboardAvoidingContainer>
        <ThemedView>

            <Spacer height={60} />

            <ThemedView style={[styles.backIcon]}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={30}
                    onPress={() => router.push("/mother_home")}
                />
            </ThemedView>

            <ThemedHeader>QUICK WATCH</ThemedHeader>

            <Spacer height={15} />

            <CalendarPicker 
                width={300}
                headerWrapperStyle={{height: 30}} 
                dayLabelsWrapper={{backgroundColor: '#D9D9D9',}}
                dayShape='square' 
                monthTitleStyle={{fontSize: 20}}
                yearTitleStyle={{fontSize: 20}}
                allowBackwardRangeSelect={false}
                onDateChange={setSelectedStartDate} 
            />

            <Spacer height={15} />

            <ThemedView style={{
                flexDirection: 'row', 
                justifyContent: 'space-evenly'
                }}
            >
                <ThemedView>
                    <ThemedText style={styles.textFont}>
                        START TIME
                    </ThemedText>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                    <TextInput
                        style={[styles.text_style, styles.textFont]}
                        placeholder='00:00'
                        onChangeText={(start) => setStartTime(start)}
                        value={startTime}
                    />
                    </KeyboardAvoidingView>
                </ThemedView>
                <ThemedView>
                    <ThemedText style={styles.textFont}>
                        END TIME
                    </ThemedText>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                    <TextInput
                        style={[styles.text_style, styles.textFont]}
                        placeholder='00:00'
                        onChangeText={(end) => setEndTime(end)}
                        value={endTime}
                    />
                    </KeyboardAvoidingView>
                </ThemedView>
            </ThemedView>

            <Spacer height={10} />

            <ThemedText style={[styles.hour_text]}>$  {rate_hour}  /HR</ThemedText>

            <Spacer height={10} />

            <ThemedView style={[styles.slider_view]}>
                <ThemedText style={[styles.hour_rate_text]}>SET HOURLY RATE</ThemedText>
        
                <Slider
                    style={{width: 160, height: 20, marginVertical: 'auto'}}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    thumbTintColor={Colors.primary}
                    step={1}
                    onValueChange={set_rate_hour}
                />
            </ThemedView>

            <Spacer height={10} />

            <ThemedCard style={[styles.card_box]}>
                <TextInput 
                    style={[styles.textInput, styles.text]} 
                    textAlignVertical='top'
                    placeholder='Share what you need the WATCHER to do......' 
                    onChangeText={(role) => setWatcherRole(role)}
                    value={watcher_role}
                />
            </ThemedCard>

            <Spacer height={10} />

            <ThemedCard style={[styles.outer_card,]}>
                <ThemedView style={[styles.card_view]}>
                    <Dropdown
                        data={data}
                        onChange={(item) => {
                                setchild_option(item.value)
                            }
                        }
                        valueField="value"
                        labelField="label"
                        style={[{width: 150}]}
                        value={child_option}
                        placeholder='SELECT CHILD AGE'
                        placeholderStyle={styles.card_text}
                        containerStyle={{backgroundColor: '#D9D9D9'}}
                        itemTextStyle={{fontSize: 13, height: 20}}
                        iconColor='D9D9D9'
                    />

                </ThemedView>
                
                <ThemedView style={[styles.card_view]}>
                    <ThemedText style={[styles.card_text]} >
                        ADD CHILD
                    </ThemedText>
                    <Ionicons
                        name='add'
                        size={40}
                        color={Colors.primary}
                        style={[styles.addIcon]}
                        onPress={() => addChild()}
                    />
                    <ThemedText>{}</ThemedText>
                </ThemedView>

            </ThemedCard>

            <Spacer height={20} />


            <ThemedButton
                style={[styles.btn]}
                onPress={onSubmit}
            >
                <ThemedText style={[styles.btn_text]}>SUBMIT</ThemedText>
            </ThemedButton>
        
        <Modal
            animationType='none'
            transparent
            visible={visible2}
        >
           <ThemedView style={[styles.errorText1, {width: '80%', maxHeight: 400, paddingVertical: 20}]}>
                <FontAwesome  
                    color="#000000"
                    name='times' 
                    size={15} 
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => setVisible2(false)}
                />
                <ThemedText style={[styles.loading_text, {fontSize: 14}]}>VIEW CHILDREN</ThemedText>
                <ThemedView style={[{marginVertical: 20, justifyContent: 'space-between', flexDirection: 'row'}]}>
                  
                    <FlatList
                        data={child_array}
                        renderItem={({item}) =>
                            <ThemedCard style={[styles.outer_card1, {marginVertical: 5, paddingHorizontal: 5}]}>
                                <ThemedView style={[styles.card_view1]}>
                                    <ThemedText>Start Time: {item.startTime}</ThemedText>
                                    <ThemedText>End Time: {item.endTime}</ThemedText>
                                    <ThemedText>Hour Rate : ${item.rate_hour}</ThemedText>
                                    <ThemedText>Child Age: {item.child_option}</ThemedText>
                                    <ThemedButton onPress={() => removeChild(item.id)} style={[styles.btn1]}>
                                        <ThemedText style={[styles.btn_text]}>Remove</ThemedText>
                                    </ThemedButton>

                                </ThemedView> 

                            </ThemedCard>
                        }
                        keyExtractor={item => item.id}

                    />
                    
                </ThemedView>
                    
            </ThemedView>
        </Modal>
        <Modal
            animationType='none'
            transparent
            visible={visible}
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
            visible={visible1}
            animationType='none'
        >
            <ThemedView style={[styles.errorText]}>
                <FontAwesome  
                    color="#000000"
                    name='times' 
                    size={15} 
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => setVisible1(false)}
                />
                <MaterialCommunityIcons color="red" name='cancel' size={40} />
                <ThemedText style={[styles.loading_text, {fontSize: 14}]}>{modalTxt}</ThemedText>
            </ThemedView>
        </Modal>
      
        </ThemedView>
   </KeyboardAvoidingContainer>
  )
}

export default MakeRequest

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    backIcon:{
        paddingHorizontal: 20
    },
    text_style: {
        width: 75, 
        height: 40, 
        textAlign: 'center', 
        backgroundColor: '#D9D9D9',
        borderRadius: 7,
        alignSelf: 'center'
    },
    textFont: {
        fontFamily: 'InriaSerifBold', 
        fontSize: 13, 
        fontWeight: 400, 
        textAlign: 'center'
    },
    hour_text: {
        color: '#6A52BE',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 700,
        fontFamily: 'InriaSerif'
    },
    hour_rate_text: {
        fontSize: 14,
        fontFamily: 'InriaSerif',
        fontWeight: 400,
        color: '#000000',
        marginVertical: 'auto'
    },
    slider_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 40
    },
    outer_card: {
        width: '100%',
        height: 53,
        backgroundColor: '#CBE9F4',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
       outer_card1: {
        width: '100%',
        height: 150,
        backgroundColor: '#CBE9F4',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card_view: {
        width: '50%',
        flexDirection: 'row',
        backgroundColor: '#CBE9F4',
        /*justifyContent: 'space-evenly',*/
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 'auto'
    },
    card_view1: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#CBE9F4',
        /*justifyContent: 'space-evenly',*/
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 'auto'
    },
    card_text: {
        fontSize: 12,
        fontWeight: 700,
        fontFamily: 'InriaSerif',
        color: '#000000',
        //verticalAlign: 'middle',
        marginVertical: 'auto'

    },
    addIcon: {
        //verticalAlign: 'middle'
        marginVertical: 'auto'
    },
    card_box: {
        backgroundColor: '#fff', 
        paddingHorizontal: 10, 
        paddingVertical: 10,
        alignSelf: 'center'
    },
    textInput: {
        height: 100,
        padding: 20,
        backgroundColor: '#EBE5E5'
    },
    text: {
        fontWeight: 400,
        fontFamily: 'InriaSerif',
        fontSize: 14,
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
    },
    errorText1: {
        backgroundColor: '#ffffff',
        width: 240,
        borderRadius: 10,
        //justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginTop: 200,
        elevation: 40,
        paddingTop: 10
    },
    btn: {
        backgroundColor: Colors.primary,  
        height: 57,
        width: 146, 
        borderRadius: 7, 
        alignSelf: 'center'
    },
    btn1: {
        backgroundColor: Colors.primary,  
        height: 37,
        width: 86, 
        borderRadius: 7, 
        alignSelf: 'center'
    },
    btn_text: {
        fontFamily: 'InriaSerif', 
        fontSize: 13, 
        fontWeight: 400, 
        color: '#ffffff', 
        textAlign: 'center'
    }
})