import { View, Text, StyleSheet, Pressable } from "react-native"
import { Link, useRouter } from "expo-router"
import ThemedView from "../components/ThemedView"
import ThemedLogo from "../components/ThemedLogo"
import ThemedText from "../components/ThemedText"
import ThemedButton from "../components/ThemedButton"
import Spacer from "../components/Spacer"
import { Colors } from "../constants/colors"
import ThemedHeader from "../components/ThemedHeader"

const Home = () => {

  const router = useRouter()

  return(
    <ThemedView style={styles.container}>

      <Spacer height={60} />

      <ThemedHeader>QUICK WATCH</ThemedHeader>

      <Spacer height={20} />

      <ThemedLogo style={styles.img} />

      <Spacer />

      <ThemedButton onPress={() => router.push("/register")} style={{backgroundColor: Colors.primary}}>
        <ThemedText style={[styles.btn_text, {color: '#fff'}]}>I'M A MOTHER</ThemedText>
      </ThemedButton>

      <ThemedButton onPress={() => router.push("/register2")} style={{backgroundColor: '#aed6f1'}}>
        <ThemedText style={[styles.btn_text, {color: '#000'}]}>I'M A WATCHER</ThemedText>
      </ThemedButton>

      <ThemedView style={styles.section}>
        <ThemedText>
          Already sign up?
        </ThemedText>
        <Link style={{marginLeft: 8}} href="/login">
          <ThemedText style={{color: 'blue'}}>LOGIN</ThemedText>
        </Link>
      </ThemedView>

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
    height: '45%'
  },
  btn_text: {
    fontWeight: 'bold',
  },
  link_text: {
    color: 'blue',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})
