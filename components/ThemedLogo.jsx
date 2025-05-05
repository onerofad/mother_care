import { Image, useColorScheme } from "react-native";

import lightLogo from '../assets/images/mother_care.jpg'
import darkLogo from '../assets/images/mother_care.jpg'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? darkLogo : lightLogo

    return(
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo