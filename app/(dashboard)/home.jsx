import { Image, StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import img1 from '../../assets/images/high_five.jpg'
import img2 from '../../assets/images/three_children.jpg'
import { Colors } from '../../constants/colors'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import teacher from '../../assets/images/teacher.jpg'
import { Ionicons } from '@expo/vector-icons'


const Home = () => {
  return (
    <ThemedView style={[styles.container]}>

        <ThemedCard style={[styles.section2]}>
            <ThemedText style={{fontSize: 20, fontWeight: 'bold'}}>
                Babysitter
            </ThemedText>
            <ThemedText>Hourly</ThemedText>
            <Ionicons
                name='calendar-outline'
                size={40}
            />
        </ThemedCard>

        <Spacer height={20} />

        <ThemedCard style={[styles.section2]}>
            <ThemedText style={{fontSize: 20, fontWeight: 'bold'}}>
                NannyTeacher
            </ThemedText>
            <ThemedText>Hourly</ThemedText>
            <Ionicons
                name='calendar-outline'
                size={40}
            />
        </ThemedCard>

        <Spacer height={20} />

        <ThemedCard style={styles.section}>
            <Image
                style={[styles.img, {marginRight: 4}]}
                source={img1}
            />
            <Image
                style={[styles.img, {marginLeft: 4}]}
                source={img2}
            />
        </ThemedCard>

        <Spacer height={20} />

        <ThemedButton style={{backgroundColor: Colors.primary}}>
            <ThemedText style={{color: '#fff', fontWeight: 'bold'}}>VIEW PLAN</ThemedText>
        </ThemedButton>

        <Spacer height={20} />

        <ThemedCard style={[styles.section3, {}]}>
            <Image
                source={teacher}
                style={styles.img}
            />
            <ThemedView style={{width: '50%', backgroundColor: '#aed6f1'}}>
                <ThemedText 
                    style={{textAlign: 'center', fontWeight: 'bold'}}
                >
                    Tracy Williams
                </ThemedText>
                <ThemedText style={{display: 'block', textAlign: 'center'}}>
                    Tracy is a teacher and coach which have helped sevaral three_children
                    to learn. She is a loving and kind teacher
                </ThemedText>

            </ThemedView>
        </ThemedCard>

        <Spacer height={20} />


    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        height: 120,
        width: '50%',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 0,
        width: '100%',
        borderRadius: 0,
        backgroundColor: Colors.card
    },
    section2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: '#fff',
        width: '80%',
        borderColor: '#aed6f1',
        borderWidth: 1,
        elevation: 200,
    },
    section3: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        borderRadius: 0,
        backgroundColor: '#aed6f1'
    },
})