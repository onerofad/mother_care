import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import ThemedHeader from '../../components/ThemedHeader'

const DashboardLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Tabs
        screenOptions={{
            //headerShown: false,
            headerTitle: () => {
                return(
                    <ThemedHeader>
                        QUICK WATCH
                    </ThemedHeader>
                )
            },
            headerTitleAlign: 'center',
            tabBarStyle: {
                backgroundColor: Colors.primary,
                paddingTop: 10,
                height: 60
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
        }}
    >
        <Tabs.Screen 
            name='home' 
            options={{
               // title: "Home",
                tabBarIcon: ({focused}) => 
                <Ionicons 
                    name={focused ? 'home' : 'home-outline'}
                    size={30}
                    color={focused ? theme.iconColorFocused : theme.iconColorFocused}
                />

            }} 
        />
         <Tabs.Screen 
            name='calendar' 
            options={{
                //title: "Calendar",
                tabBarIcon: ({focused}) => 
                    <Ionicons 
                        name={focused ? 'calendar' : 'calendar-outline'}
                        size={30}
                        color={focused ? theme.iconColorFocused : theme.iconColorFocused}
                    />

            }} 
        />
         <Tabs.Screen 
            name='active' 
            options={{
               // title: "Active",
                tabBarIcon: ({focused}) => 
                    <Ionicons 
                        name={focused ? 'accessibility' : 'accessibility-outline'}
                        size={30}
                        color={focused ? theme.iconColorFocused : theme.iconColorFocused}
                    />

            }} 
        />
         <Tabs.Screen 
            name='profile' 
            options={{
                //title: "Profile",
                tabBarIcon: ({focused}) => 
                    <Ionicons 
                        name={focused ? 'person' : 'person-outline'}
                        size={30}
                        color={focused ? theme.iconColorFocused : theme.iconColorFocused}
                    />
            }} 
        />
         <Tabs.Screen 
            name='clock' 
            options={{
                //title: "Clock",
                tabBarIcon: ({focused}) => 
                    <Ionicons 
                        name={focused ? 'alarm' : 'alarm-outline'}
                        size={30}
                        color={focused ? theme.iconColorFocused : theme.iconColorFocused}
                    />
            }} 
        />
    </Tabs>
  )
}

export default DashboardLayout
