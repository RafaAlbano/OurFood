import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';

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
         source={{ uri: props.sobremesa.capa }}
      />   
      <Text style={{ fontSize:20, color: "#fff", textAlign:'center',}}>{props.sobremesa.titulo}</Text>
      <Text style={{ fontSize:12, color: "#fff",padding:3,}}>{props.sobremesa.desc}</Text>
      <Text style={{ fontSize:12, color: "#fff", padding:3,}}>R${props.sobremesa.preco.toString()}</Text>
    </View>    
  );
}


export default function App() {
  const Sobremesas = [
    {
      capa: 'https://img1.gratispng.com/20180526/xza/kisspng-fudge-cake-chocolate-brownie-milk-bakery-chocolate-brownies-5b09000b47f293.7475106315273164912947.jpg',
      titulo: 'Brownie',
      desc: 'brownie',
      preco:12.00
    },    
    {
      capa: 'https://img.freepik.com/fotos-premium/cocktail-de-milk-shake-isolado-no-fundo-branco_93675-42772.jpg?w=2000',
      titulo: 'MilkShake',
      desc: 'milkshake',
      preco:9.00
    }, 
    {
      capa: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-torta-de-maracuja-com-calda.jpg?quality=85&strip=info',
      titulo: 'torta',
      desc: 'torta',
      preco:10.00
    },
    {
      capa: 'https://cdn0.tudoreceitas.com/pt/posts/1/9/8/torta_de_morango_simples_4891_orig.jpg',
      titulo: 'torta',
      desc: 'torta',
      preco:10.00
    },

  ];
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Sobremesas</Text>
        <ScrollView>
        <View style={styles.content}>
          {Sobremesas.map(sobremesa => <Card sobremesa={sobremesa} />)}

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
    paddingLeft: 100,
  },
});