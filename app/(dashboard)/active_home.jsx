import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedHeader from '../../components/ThemedHeader'
import Spacer from '../../components/Spacer'
import teacher from '../../assets/images/teacher.jpg'
import younglady from '../../assets/images/young_lady.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import ThemedCard from '../../components/ThemedCard'
import { useRouter } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import NavigationBar1 from '../../components/NavigationBar1'
import { getWatchers } from '../API'

const ActiveHome = () => {

    const router = useRouter()

    const [watchers, setwatchers] = useState([])

    useEffect(() => {
        getAllWatchers()
    },[])

    const getAllWatchers = () => {
        getWatchers().get("/").then(response => setwatchers(response.data.filter(w => w.status == true)))
        .then(error => console.log('An error has occurred ' + error))
    }

    const mother_home = () => {
        router.push("/mother_home")
    }
    
  return (
    <ThemedView style={styles.container}> 

        <Spacer height={60} />

        <ThemedView style={[styles.backIcon]}>
            <MaterialIcons
                name="arrow-back-ios"
                size={30}
                onPress={() => mother_home()}
            />
        </ThemedView>

        <ThemedHeader>QUICK WATCH</ThemedHeader>

        <Spacer height={30} />

        <FlatList
            data={watchers}
            renderItem={({item}) => (
            <>
            <ThemedCard style={[styles.outer_card]}>
                <ThemedCard style={[styles.card_left]}>
                    <Image style={styles.img} 
                        source={{ uri: item.picture}}

                    />

                    <ThemedView style={[styles.side_circle, {marginRight:10}]}>
                    </ThemedView>
                    
                    <ThemedText style={[styles.card_text, {color: '#000000'}]}>
                        {item.firstname}
                    </ThemedText>
                    
                    <ThemedView style={[styles.sub_text]}>
                        <ThemedText style={[styles.card_text, {color: '#CF4545'}]}>
                            Location
                        </ThemedText>
                        <ThemedText style={[styles.card_text, {color: '#000000'}]}>
                            {item.state}
                        </ThemedText>
                    </ThemedView>

                    <ThemedView style={[styles.sub_text]}>
                        <ThemedText style={[styles.card_text, {color: '#CF4545'}]}>
                            Rate
                        </ThemedText>
                        <ThemedText style={[styles.card_text, {color: '#000000'}]}>
                            {item.hour_rate}
                        </ThemedText>
                    </ThemedView>

                </ThemedCard>
                <ThemedCard style={[styles.card_right]}>
                    <ThemedText style={[styles.card_text, {fontSize: 10, textAlign: 'left'}]}>
                        {item.about}
                    </ThemedText>

                    <Spacer height={20} />

                    <ThemedButton onPress={() => router.push("/make_request")} style={[styles.btn]}>
                        <ThemedText style={[styles.btn_text]}>Request</ThemedText>
                    </ThemedButton>

                </ThemedCard>


            </ThemedCard>
            <Spacer height={20} />
            </>


            )}

            keyExtractor={(item) => item.id}

        />

        <ThemedView style={{position: "absolute", bottom: 0}}>
            <NavigationBar1 />
        </ThemedView>

    </ThemedView>
  )
}

export default ActiveHome

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    backIcon:{
        paddingHorizontal: 20
    },
    outer_card: {
        width: '90%',
        height: 220,
        backgroundColor: '#9FAEA4',
        alignSelf: 'center',
        elevation: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card_left: {
        width: '60%',
        paddingHorizontal: 10
    },
    card_right: {
        width: '40%',
        paddingHorizontal: 10
    },
    img: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 10
    },
    card_text: {
        fontFamily: 'InriaSerif',
        fontSize: 10,
        fontWeight: 700,
        textAlign: 'center'
    },
    sub_text: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        backgroundColor: '#9FAEA4'
    },
    btn: {
        backgroundColor: '#8B80B1',
        borderRadius: 7,
        width: 83,
        height: 36,
        alignItems: 'center'
    },
    btn_text: {
        color: '#000000',
        fontWeight: 700,
        fontSize: 12,
        fontFamily: 'InriaSerif'
    },
    side_circle: {
        width: 20,
        height: 20,
        backgroundColor: '#00FF00',
        borderRadius: 10
    },
  

})