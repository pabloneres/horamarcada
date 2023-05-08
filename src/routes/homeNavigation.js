import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image } from 'react-native';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Database from '../screens/Database';

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
            <Drawer.Screen name="Database" component={Database} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;