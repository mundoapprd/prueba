import React from 'react';

import { View,StyleSheet,StatusBar,Platform,ScrollView,Button} from 'react-native';
import { Input,Text } from 'react-native-elements';
import {Container,content,Header,Left,Right,Icon} from 'native-base'




export default class Vacaciones extends React.Component{
        constructor(props){
          super(props);

          this.state={
            sueldo:0,
            anio:0,
            vacac:0,
            
          }
        }

        vacaciones =()=>{
          const{sueldo}= this.state;
          const sueldoNormal = sueldo/23.83;
          const{anio}= this.state;
         

          if(anio<5){
            this.setState({
              vacac:Math.round(sueldoNormal*14)
            })
           
          }else if(anio<=5){
            this.setState({
              vacac:Math.round(sueldoNormal*18)
            })
          }

        }
    
        render(){
         
            return(
                <Container>
                  <Header style={[{backgroundColor:'#3a455c', height:90,borderBottomColor:'#757575',alignItems:'center',},styles.androidHeader]}>
                    <Left style={{flexDirection:'row'}}>
                        <Icon name="md-menu" style={{color:'white', marginRight:15}}/>
                    </Left>
                    <Text style={{color:'white', textAlign:'center', fontSize:25}}>SMADOC</Text>
                    <Right>
                        
                    </Right>
                    </Header>
                    <View style={styles.container}>
                    <Input style={styles.txtforma} 
                        keyboardType="numeric"    
                            placeholder="Sueldo"
                            onChangeText={
                              sueldo=>this.setState({sueldo})
                            }
                            style={{}}>           
                        </Input>
                        <Input
                            keyboardType="numeric"     
                            placeholder="Años"
                            onChangeText={
                              anio=>this.setState({anio})
                            }
                            style={{}}>           
                        </Input>

                        <View style={{padding:5 }}>
                  
                          <Button  title="Calcular" onPress={this.vacaciones}></Button>

                        </View>
                    <View style={{ padding:5}}>

                          <Button title="Borrar" ></Button>

                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
            <ScrollView>
            
            <Text style={{fontSize:20}}>Pago vacaciones</Text>
            <Text style={{fontSize:20,color:"red"}}>{this.state.vacac}</Text>


            </ScrollView>
            

          </View>
                    </View>
                </Container>
                
            )
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    androidHeader:{
        ...Platform.select({
          android:{
            paddingTop:StatusBar.currentHeight,
          }
        })
    }
  });