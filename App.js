import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';

import Home from './screens/Home';
import Bebidas from './screens/Bebidas';
import Lanches from './screens/Lanches';
import Sobremesas from './screens/Sobremesas';
import Carrinho from './screens/Carrinho';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

const myColors = {
  // colors: {
    "primary": "rgb(120, 69, 172)",
    "onPrimary": "rgb(120, 69, 172)",
    "primaryContainer": "rgb(120, 69, 172)",
    "onPrimaryContainer": "rgb(120, 69, 172)",
    "secondary": "rgb(102, 90, 111)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(237, 221, 246)",
    "onSecondaryContainer": "rgb(33, 24, 42)",
    "tertiary": "rgb(128, 81, 88)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 217, 221)",
    "onTertiaryContainer": "rgb(50, 16, 23)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(29, 27, 30)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(29, 27, 30)",
    "surfaceVariant": "rgb(233, 223, 235)",
    "onSurfaceVariant": "rgb(74, 69, 78)",
    "outline": "rgb(124, 117, 126)",
    "outlineVariant": "rgb(204, 196, 206)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(50, 47, 51)",
    "inverseOnSurface": "rgb(245, 239, 244)",
    "inversePrimary": "rgb(220, 184, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(248, 242, 251)",
      "level2": "rgb(244, 236, 248)",
      "level3": "rgb(240, 231, 246)",
      "level4": "rgb(239, 229, 245)",
      "level5": "rgb(236, 226, 243)"
    },
    "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
    "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
    "backdrop": "rgba(51, 47, 55, 0.4)"
  // },
};

const theme = {
  ...DefaultTheme,
  colors: myColors, // Copy it from the color codes scheme and then use it here
};


export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const adicionarAoCarrinho = (lanche) => { 
    setCarrinho([...carrinho, lanche]);
  };
  return (
   
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Bebidas" component={Bebidas} />
          <Stack.Screen name="Lanches" component={Lanches} />
          <Stack.Screen name="Sobremesas" component={Sobremesas} />
          <Stack.Screen name="Carrinho" component={Carrinho} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  );
}
