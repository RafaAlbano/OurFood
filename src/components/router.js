import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Lanches from './screens/Lanches';
import Bebidas from './screens/Bebidas';
import Sobremesas from './screens/Sobremesas';

const BottomTab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'black',
                }}
            >
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Lanches"
                    component={Lanches}
                    options={{
                        tabBarLabel: 'Lanches',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="lunch Dining" color={color} size={26} />
                        ),
                    }}
                />
                <BottomTab.Screen
                name="Bebidas"
                component={Bebidas}
                options={{
                    tabBarLabel: 'Bebidas',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="glass Cup" color={color} size={26} />
                    ),
                }}
                />
                <BottomTab.Screen
                    name="Sobremesas"
                    component={Sobremesas}
                    options={{
                        tabBarLabel: 'Sobremesas',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="Cookie" color={color} size={26} />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}