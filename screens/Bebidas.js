import {StyleSheet, ScrollView, Image, Text, View, Button} from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
         style={{
           resizeMode:'stretch',
           width: '100%',
           height: 200,
           marginBottom: 10,
         }}
         source={{ uri: props.bebida.capa }}
      />   
      <Text style={{ fontSize:20, color: "#fff", textAlign:'center',}}>{props.bebida.titulo}</Text>
      <Text style={{ fontSize:12, color: "#fff",padding:3,}}>{props.bebida.desc}</Text>
      <Text style={{ fontSize:12, color: "#fff", padding:3,}}>R${props.bebida.preco.toString()}</Text>
    </View>    
  );
}
export default function App() {
  const Bebidas = [
    {
      capa: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_coca_cola_garrafa_500ml_1525_1_9ac8c4a9b8bfda74db2a0df6dc426ff0.jpg',
      titulo: 'Coca-Cola 2L',
      preco:12.00
    },    
    {
      capa: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/coca-zero-3501-d10073d7379c4514b415698463221633-640-0.png',
      titulo: 'Coca-Cola zero 350ml',
      preco:9.00
    },  
    {
      capa: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/1883-refrigerante-fanta-laranja-2l.jpg',
      titulo: 'Fanta laranja 2L',
      preco:10.00
    },  
    {
      capa: 'https://cdn.awsli.com.br/600x1000/784/784082/produto/197208760/refrigerante-sprite-sabor-limAo-350ml-21c2c8d3b5.jpg',
      titulo: 'Sprite 350ml',
      preco:7.00
    },  
    {
      capa: 'https://trimais.vteximg.com.br/arquivos/ids/1044547-1000-1000/foto_original.jpg?v=638128433425970000',
      titulo: 'Água garrafa',
      preco:5.00
    },  
    {
      capa: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/2140-cha-ice-tea-leao-pessego-450ml.jpg',
      titulo: 'Ice tea',
      preco:12.00
    },  
  ];
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Bebidas</Text>
        <ScrollView>
        <View style={styles.content}>
          {Bebidas.map(bebida => <Card bebida={bebida} />)}

        </View>
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor:'#ede9e9',
    justifyContent: ' flex-start',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor:'#ede9e9',
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor:'#ffad4d',
    width:'40%',
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
    paddingLeft: 155,
  },
});