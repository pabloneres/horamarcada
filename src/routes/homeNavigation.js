import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image } from 'react-native';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home'
import Profile from '../screens/Profile'

function MyDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#25221D",
                },
                drawerLabelStyle: {
                    color: "#FFFFFF",
                },
                headerShown: false
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;