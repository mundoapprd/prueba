import React from 'react';
import { StyleSheet,View,Button,ScrollView,
  TouchableOpacity,TextInput,Linking,Image,
   ImageBackground,StatusBar,Platform} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
import { Input,Text, } from 'react-native-elements';

import {Resultado} from './Resultado';
//import { TextInput } from 'react-native-gesture-handler';

import {Container,content,Header,Left,Right,Icon} from 'native-base'

//import { TextInput } from 'react-native-gesture-handler';


export default class ScreenInicio extends React.Component {

    myalert=()=>{
      alert("funciona");
    }
    
  render() {

    return (

      <Container>
        <Header style={[{backgroundColor:'#3a455c', height:90,borderBottomColor:'#757575',alignItems:'center',},styles.androidHeader]}>
          <Left style={{flexDirection:'row'}}>
              <Icon onPress={()=>this.props.navigation.navigate('DrawerOpen')} name="md-menu" style={{color:'white', marginRight:15}} />
          </Left>
          <Text style={{color:'white', textAlign:'center', fontSize:25}}>SMADOC</Text>
          <Right>
            
          </Right>
        </Header>
          <View style={{height:10}}></View>
          <View style={styles.container1}>
        
        <View style={styles.row}>
            <TouchableOpacity style={[styles.box, styles.box1]} onPress={() => this.props.navigation.navigate('HorasExtras')}>
                <View style={[styles.box, styles.box1]}>
                    <Image style={{width:"100%", height:"100%"}} source={require('../img/reloj.png')}/>
                    <Text style={{textAlign:"center"}}>Horas Extras</Text>
                </View>

            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.box, styles.box2]} onPress={() =>this.props.navigation.navigate('Vacaciones')}>
                <View style={[styles.box, styles.box2]}>
                  <Image style={{width:"100%", height:"100%"}} source={require('../img/Vacaciones.png')}/>
                    <Text style={{textAlign:"center"}}>Vacaciones</Text>            
                </View>
              
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.box, styles.box3]}>
                <View style={[styles.box, styles.box3]}>
                    <Image style={{width:"100%", height:"100%"}} source={require('../img/Regalias.png')}/>
                    <Text style={{textAlign:"center"}}>Regalia</Text>
                </View>
              
            </TouchableOpacity>
          

        </View>

        <View style={styles.row}>
            <TouchableOpacity style={[styles.box, styles.box1]} onPress={()=> Linking.openURL('https://calculo.mt.gob.do/')}>
                <View style={[styles.box, styles.box1]}>
                        <Image style={{width:"100%", height:"100%"}} source={require('../img/prestaciones.png')}/>
                        <Text style={{textAlign:"center"}}>Prestaciones</Text>
                  </View>
              
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.box, styles.box2]} onPress={() => Linking.openURL('http://mt.gob.do/images/docs/biblioteca/codigo_de_trabajo.pdf')}>
                <View style={[styles.box, styles.box2]}>
                    <Image style={{width:"100%", height:"100%"}} source={require('../img/codigolaboral.jpg')}/>
                    <Text style={{textAlign:"center"}}>Codigo Laboral</Text>
                </View>
              
            </TouchableOpacity>
            
            <TouchableOpacity  style={[styles.box, styles.box3]} onPress={() => this.props.navigation.navigate('Detail')} Text="Algo mas..!">
            <View style={[styles.box, styles.box3]}>
                <Image style={{width:"100%", height:"100%"}} source={require('../img/trabajadores.jpg')}/>
                
                
                    <Text style={{textAlign:"center"}}>Algo mas!</Text>
                
            </View>
            </TouchableOpacity>

        </View>

        <View style={{height:200}}>
            
            <Image style={{width:"100%", height:"100%"}} source={require('../img/trabajadores.jpg')}/>

    </View>

      
      </View>


      </Container>
      
     
      
  );
}
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    //paddingTop: 15,
    backgroundColor: '#fff',
    
  },
  row: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: "space-around", //replace with flex-end or center
   
  },
  row2:{
    flex: .5,
    flexDirection: 'row',
    justifyContent: "center",//replace with flex-end or center
  },
  box: {
    width: 100,
    height: 100
  },
  box1: {
    backgroundColor: 'white'
  },
  box2: {
    backgroundColor: 'white'
  },
  box3: {
    backgroundColor: 'white'
  },
  androidHeader:{
      ...Platform.select({
        android:{
          paddingTop:StatusBar.currentHeight,
        }
      })
  }
});

