import React, { Component } from "react";
import { Text, View, Image, Button, StyleSheet, ScrollView } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Carta1: false,
      Carta2: false,
      Carta3: false,
      Carta4: false,
      Carta5: false
    };

    this.Imagem1 = this.Imagem1.bind(this);
    this.Imagem2 = this.Imagem2.bind(this);
    this.Imagem3 = this.Imagem3.bind(this);
    this.Imagem4 = this.Imagem4.bind(this);
    this.Imagem5 = this.Imagem5.bind(this);
 } 

 Imagem1() {
   this.setState({ Carta1: !this.state.Carta1 });
 }
 Imagem2() {
  this.setState({ Carta2: !this.state.Carta2 });
}
 Imagem3() {
   this.setState({ Carta3: !this.state.Carta3 });
 }
 Imagem4() {
  this.setState({ Carta4: !this.state.Carta4 });
}
Imagem5() {
  this.setState({ Carta5: !this.state.Carta5 });
}
  
  render(){
  return (
    
    <View style = {styles.conteiner}>
      <ScrollView scrollEnabled={true}>
      <Image 
        source={{ uri: 'https://repositorio.sbrauble.com/arquivos/in/magic/313/5f4243b32c323-ybfet2-wsgnx3-dcff8dc1cb1162fa920db66007131ac9.jpg'}}
        style={styles.image}
        />
        
        <Image 
        source={{ uri: 'https://down-br.img.susercontent.com/file/c4725d86be24837a57029b6291117956.webp'}}
        style={styles.image0}
        />


      <Text style={styles.texto0}>
        Artistas: Christopher Rush {"\n"} 
        Coleção: Era glacial 
        
      </Text>

      <Text style={ styles.texto1 }>
        Descrição: A carta Brainstom foi lançada pela primeira vez em	Junho de 1995, na segunda coleção de Magic: The Gathering, Era glacial 
        na radidade comum, com a arte feita por Christopher Rush, e pelo seu efeito versatil ela cabaou por ser muito utilizada, 
        oque fez com que ela fosse relaçanda em coleções posteriores com outras feitas por outros artistas
      </Text>
      
      <Text style={ styles.texto2 }>
        Coleção com artes alternativas:
      </Text>
      
     
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7e5NuYNA2kfqVd0vZp8txb9SyyocR7kXBB-i9qtcPEbr_dsuubQPxmNtRny4H_-96k_o&usqp=CAU'}}
        style={styles.icone1}
        />
      
      
      
      
      <Text style= { styles.texto3 }>
        Coleção: Dual Deck: Izzet vs. Golgari / Artista: Willian Murai 
        
      </Text>  
      
      <Button title="Mostrar Carta" onPress={this.Imagem1}/>
     
         {this.state.Carta1 && (
           <Image 
             source={{ uri: 'https://repositorio.sbrauble.com/arquivos/in/magic/476308/5f4244271ea4f-f4l7wn-qdw2iu-9778d5d219c5080b9a6a17bef029331c.jpg' }}
             style={styles.image1}
           />
         )}
       
      <Image 
        source={{ uri: 'https://draftsim.com/wp-content/uploads/2021/11/Mercadian-Masques-set-symbol.png'}}
        style={styles.icone2}
        />
      
      
      
      
      <Text style={styles.texto4}>
        Coleção: Máscaras de Mercádia / Artista: Di Terlizzi 
      
      </Text>
      <View>
      <Button title="Mostrar Carta" onPress={this.Imagem2}  />
         {this.state.Carta2 && (
           <Image 
             source={{ uri: 'https://repositorio.sbrauble.com/arquivos/in/magic/297/5f4243ae663b1-ncu60x-8x7hp2-b53b3a3d6ab90ce0268229151c9bde11.jpg' }}
             style={styles.image2}
           />
         )} 
        </View>
      <Image 
        source={{ uri: 'https://www.vhv.rs/dpng/d/279-2792311_masters-mtg-masters-25-symbol-hd-png-download.png'}}
        style={styles.icone3}
        />
     
     
      
      
      <Text style={ styles.texto5 }>
        Coleção: Masters 25 / Artista: Chris Rahn 
      
      </Text>

      <Button title="Mostrar Carta" onPress={this.Imagem3} />
         {this.state.Carta3 && (
           <Image 
             source={{ uri: 'https://cards.scryfall.io/large/front/2/e/2ea8d5cb-cf7e-4194-8019-812b3f56cf20.jpg?1562434024' }}
             style={styles.image3}
           />
         )}

      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfLLRRcfCHOUTvrSDZwshjtlogcZN2mh5UH9A0cNw-skc_C_yoSTe9Ok0efOatmYQUAU&usqp=CAU'}}
        style={styles.icone4}
        />
      
      
      <Text style={styles.texto6}>
        Coleção: secret lair / Artistas: Justin & Alexis Hernandez 
      </Text>

      <Button title="Mostrar Carta" onPress={this.Imagem4} />
         {this.state.Carta4 && (
           <Image 
             source={{ uri: 'https://repositorio.sbrauble.com/arquivos/in/magic/480141/6493472424827-duqpi-z4u6p-66965629649347242486e.jpg' }}
             style={styles.image4}
           />
         )}
      
      </ScrollView>

      

    </View>
  );
}

}

const styles = StyleSheet.create({
  conteiner:{marginTop: 30, flex: 1},

  texto0: {fontFamily: 'Inter-Black', borderWidth: 2, padding: 10, display: 'inline-block', borderRadius: 15, top: 4},
  texto1: {fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 9, fontSize: 11},
  texto2: {fontFamily: 'Inter-Black', top: 6, fontSize: 20},
  texto3: {fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 15, fontSize: 11},
  texto4: {fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 5, fontSize: 11},
  texto5: {fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 10, fontSize: 11},
  texto6: {fontFamily: 'Inter-Black', borderWidth: 1, padding: 25, display: 'inline-block', borderRadius: 15, top: 10, fontSize: 11},
  
  image: {width: 250, height: 355},  
  image0: {width: 76, height: 82, top: 349, position: 'absolute', left: 330},
  image1: {width: 170, height: 237, top: 5},
  image2: {width: 170, height: 240, top: 4},
  image3: {width: 170, height: 240, top: 5},
  image4: {width: 170, height: 240, top: 5},

  icone1:{width: 40, height: 50, top: 610, position: 'absolute'},
  icone2:{width: 40, height: 40, top: 710, position: 'absolute'},
  icone3:{width: 40, height: 45, top: 820, position: 'absolute'},
  icone4:{width: 60, height: 25, top: 940, position: 'absolute'},


 
});


export default App;
