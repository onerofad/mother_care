import { StyleSheet } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const RequestMenuWatcher = () =>  {

    const router = useRouter()

    const getRequestList = async () => {
      try{
        let date = await AsyncStorage.getItem("date")
        let rate = await AsyncStorage.getItem("rate")
        let start = await AsyncStorage.getItem("start")
        let end = await AsyncStorage.getItem("end")
        let child = await AsyncStorage.getItem("child")
        let watcher = await AsyncStorage.getItem("watcher")

        if(date !== null && rate !== null && start !== null && end !== null && child !== null && watcher !== null){
          router.push("/")
        }else{
          router.push("/")
        } 

      }catch(error){
        console.log('An error has occurred ', error)
      }

    }
  
    return( 
    <Menu>  
      <MenuTrigger >
        <Ionicons 
            name='time-outline'
            size={40}
            color='#E6E6E6'
        />
      </MenuTrigger>
        <MenuOptions  
            optionsContainerStyle={{
                width: 140, 
                marginTop: 50,
                marginLeft: 50,
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: '#D9D9D9'
                
            }} 
            customStyles={{optionsContainer: 'animated.View'}}
        >
            <MenuOption 
                customStyles={{optionText: {fontSize: 14, fontWeight: 700, color: '#000000', fontFamily: 'Teachers'}}} 
                onSelect={() => router.push("/")} text='New Request' 
            />
            <MenuOption 
                customStyles={{optionText: {fontSize: 14, fontWeight: 700, color: '#000000', fontFamily: 'Teachers'}}} 
                onSelect={() => getRequestList()} text='Request List'  />
        </MenuOptions> 
    </Menu>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    menuoptionsStyle: {
        backgroundColor: '#D9D9D9',
        width: 140,
        alignSelf: 'flex-end',
        paddingHorizontal: 5
      
    },
    text: {
      fontSize: 14,
      fontWeight: 700,
      fontFamily: 'InriaSerif',
      color: '#000000',
    }
})

export default RequestMenuWatcher