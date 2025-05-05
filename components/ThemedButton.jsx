import { StyleSheet, Text, Pressable } from 'react-native'

const ThemedButton = ({style, ...props}) => {

  return (
    <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed ,style]} {...props}  />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    pressed: {
      opacity: 0.5
    }
})