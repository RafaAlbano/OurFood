import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { Text } from 'react-native';


function Home ({navigation}) {
 return  (
   <ScrollView style={styles.scrollView}>
     <Card style={styles.card}>
       <Card.Content>
         <Button style={styles.button} mode="outlined" onPress={() => navigation.navigate('Lanches')}>
           <Text  style={styles.buttonText}>Lanches</Text> 
         </Button>
       </Card.Content>
     </Card>
     <Card style={styles.card}>
       <Card.Content>
         <Button style={styles.button} mode="elevated" onPress={() => navigation.navigate('Bebidas')}>
          <Text  style={styles.buttonText}>Bebidas</Text> 
         </Button>
       </Card.Content>
     </Card>
     <Card style={styles.card}>
       <Card.Content>
         <Button style={styles.button} mode="contained" onPress={() => navigation.navigate      ('Sobremesas')}>
          <Text style={styles.buttonText}> Sobremesas </Text>
         </Button>
       </Card.Content>
     </Card>
   </ScrollView>
 )
}


const styles = StyleSheet.create({
 scrollView: {
   backgroundColor: '#ede9e9',
   paddingTop: 10
 },
 card: {
   width: '50%',
   marginLeft: 'auto',
   marginRight: 'auto',
 },
 button: {
  color: 'black',
  backgroundColor:'white',
 },
 buttonText: {
   color:'black',
 }
});


export default Home

