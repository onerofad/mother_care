import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import teacher from '../assets/images/teacher.jpg'
import younglady from '../assets/images/young_lady.jpg'
import ThemedCard from './ThemedCard'
import ThemedText from './ThemedText'
import ThemedView from './ThemedView'

export default function CarouselItem2(props) 
{
    const { index } = props;

    return (
        <ThemedCard style={[styles.outer_card]}>
              <ThemedCard style={[styles.card]}>
                <Image source={younglady} style={styles.img1} />

                <ThemedText style={[styles.card_text, {color: '#000000'}]}>Nancy  Jacob</ThemedText>
                
                <ThemedView style={[styles.sub_text]}>
                    <ThemedText style={[styles.card_text, {color: '#CF4545'}]}>
                        Location
                    </ThemedText>
                    <ThemedText style={[styles.card_text, {color: '#000000'}]}>
                        Dallas TX
                    </ThemedText>
                </ThemedView>

                <ThemedView style={[styles.sub_text]}>
                    <ThemedText style={[styles.card_text, {color: '#CF4545'}]}>
                        Rate
                    </ThemedText>
                    <ThemedText style={[styles.card_text, {color: '#000000'}]}>
                        18/hr
                    </ThemedText>
                </ThemedView>
            </ThemedCard>
        <ThemedCard style={[styles.card]}>
                <Image source={teacher} style={styles.img1} />

                <ThemedText style={[styles.card_text, {color: '#000000'}]}>Tracy Williams</ThemedText>
                
                <ThemedView style={[styles.sub_text]}>
                    <ThemedText style={[styles.card_text, {color: '#CF4545'}]}>
                        Location
                    </ThemedText>
                    <ThemedText style={[styles.card_text, {color: '#000000'}]}>
                        DALLAS TX
                    </ThemedText>
                </ThemedView>
                <ThemedView style={[styles.sub_text]}>
                    <ThemedText style={[styles.card_text, {color: '#CF4545'}]}>
                        Rate
                    </ThemedText>
                    <ThemedText style={[styles.card_text, {color: '#000000'}]}>
                        18/hr
                    </ThemedText>
                </ThemedView>
            </ThemedCard>
       </ThemedCard>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 128,
        width: '48%',
        alignSelf: 'center',
        marginVertical: 8,
    },
      img1: {
        height: 90,
        width: '80%',
        alignSelf: 'center',
        marginVertical: 8
    },
    outer_card: {
        paddingHorizontal: 10, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
    card: {
        backgroundColor: '#9FAEA4',
        height: 160,
        borderRadius: 8,
        width: '48%',
        
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
    section1: {
        paddingHorizontal: 10, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        backgroundColor: '#8B80B1'
    },
})