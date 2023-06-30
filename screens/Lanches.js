import {  StyleSheet,  ScrollView,  Image,  Text,  View,  Button, } from 'react-native';

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
        source={{ uri: props.lanche.capa }}
      />
      <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
        {props.lanche.titulo}
      </Text>
      <Text style={{ fontSize: 12, color: '#fff', padding: 3 }}>
        {props.lanche.desc}
      </Text>
      <Text style={{ fontSize: 12, color: '#fff', padding: 3 }}>
        R${props.lanche.preco.toString()}
      </Text>
    </View>
  );
}

export default function Lanches({navigation}) {
  const lanches = [
    {
      capa: 'https://img.cybercook.com.br/receitas/151/x-salada-3.jpeg',
      titulo: 'Cheese Salada',
      desc: '',
      preco: 22.45,

    },
    {
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3AzrpypdEO31p0tAeuaehJcYykRc7EtVTw&usqp=CAU',
      titulo: 'Cheese Burguer',
      desc: '',
      preco: 22.45,
    },
    {
      capa: 'https://guararapesonline.com.br/shoppingguararapes/2020/08/LB-cheese-burguer-calabresa.jpg',
      titulo: 'Beef Beacon',
      desc: '',
      preco: 22.45,
    },
    {
      capa: 'https://i.pinimg.com/736x/6d/43/1f/6d431fcfc9aa35a7bb279392b6b4eb24.jpg',
      titulo: 'Hot DOg',
      desc: '',
      preco: 22.45,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lanches</Text>
      <Button onPress={() => props.adicionarAoCarrinho(props.lanche)}
        title="Adicionar ao Carrinho"
        />
      <ScrollView>
        <View style={styles.content}>
          {lanches.map((lanche) => (
            <Card lanche={lanche}   />
          ))}
        </View>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('Carrinho')}
            title="Carrinho" />
  
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '#ede9e9',
    justifyContent: ' flex-start',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ede9e9',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffad4d',
    width: '40%',
    height: 300,
    borderRadius: 10,
    margin: 10,
  },
  titulo: {
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
    color: '#oooooo',
    padding: 10,
    paddingLeft: 140,
  },
});
