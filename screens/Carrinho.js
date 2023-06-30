import * as React from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Button,
} from 'react-native';
import { List } from 'react-native-paper';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        style={{
          resizeMode: 'stretch',
          width: '100%',
          height: 200,
          marginBottom: 10,
        }}
        source={{ uri: props.compra.capa }}
      />
      <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
        {props.compra.titulo}
      </Text>
      <Text style={{ fontSize: 12, color: '#fff', padding: 3 }}>
        {props.compra.desc}
      </Text>
      <Text style={{ fontSize: 12, color: '#fff', padding: 3 }}>
        R${props.compra.preco.toString()}
      </Text>
    </View>
  );
}

export default function App({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const compras = {
    items: [
      {
        titulo: 'Total',
        desc: '',
        preco: 22.45,
      },
    ],
    total: 125.50
  }
    
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Item
          title="Total"
          titleStyle={{fontSize: 30}}
          description={compras.total}
          descriptionStyle={{fontSize:50}}
          right={(props) => <List.Icon {...props} icon="cash" />}
        />
        <View  style={styles.button}>
           <Button
            style={styles.button}
            onPress={() => navigation.navigate('Pagamento')}
            title="finalizar" />
        </View>
        <List.Accordion
          title="Meu carrinho"
          left={(props) => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Cheese Burguer" />
          <List.Item title="cheese Salad" />
        </List.Accordion>
      </List.Section>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede9e9',
    justifyContent: 'flex-start',
    color: 'black',
  },
  button: {
  color: 'black',
  backgroundColor:'white',
  marginBottom: 10,
  width: '50%',
  marginLeft: 11,
  borderRadius: 20,
  },  
});
