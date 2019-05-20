import React from 'react';

import { View,StyleSheet,Picker,Button} from 'react-native';
import { Header,Input,Text } from 'react-native-elements';
import Inicio from './Inicio';
//import {  } from 'native-base';



export default class Resultado extends React.Component{
 
    constructor(props){
      super(props);

      this.state={
        mes1:'',
        mes2:''

      }
    }

    myfunc=()=>{
      const {mes1}=this.state;
      const {mes2}=this.state;
        if(Picker.selectedValue=mes1){
          alert("mes 1");
        }
        else if(Picker.selectedValue=mes2){
          alert('mes 2')
        }
    }

    
        render(){
         
            return(
                <View style={styles.container}>
                   <Picker
      selectedValue={this.state.language}
      style={{ height: 50, width: 100 }}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="1 mes" value={this.state.mes1} />
      <Picker.Item label="2 meses" value={this.state.mes2} />
      <Picker.Item label="3 meses" value="3" />
      <Picker.Item label="4 meses" value="4" />
    </Picker>
    <Button title="enviar" onPress={this.myfunc}></Button>
                </View>
                
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
  });