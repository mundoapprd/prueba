import React from 'react';
import { StyleSheet, View,Button,ScrollView,TouchableOpacity,TextInput } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
import { Input,Text, CheckBox } from 'react-native-elements';
import {Resultado} from './Resultado';
import {Container,content,Header,Left,Right,Icon} from 'native-base'
//import { TextInput } from 'react-native-gesture-handler';



//import { TextInput } from 'react-native-gesture-handler';


export default class HoraExtras extends React.Component {

  constructor(props){
    super(props);

    this.state={
      sueldo:'',
      user35:'',
      user100:'',
      extra35:0,
      extra100:0,
      extratotal:0,
      quincena:0,
      pagototal:0,
      checked: false,
    }
  }

  myFun=()=>{
    if(this.state.checked==true){

      const{sueldo}=this.state;
      const sueldo15 = sueldo*1.15;
      const sueldoNormal = sueldo/23.83;
     const prueba=sueldo15/23.83;
     const{user35}=this.state;
     const{user100}=this.state;
     //const horaordinaria15 = prueba/8;
      const horaordinariaNormal = sueldoNormal/8;
     const hora35= horaordinariaNormal*1.35;
     const hora100 = horaordinariaNormal*2;

     const extra35=Math.round(user35*hora35);
    const extra100=Math.round(user100*hora100);
    const extratotal=Math.round(extra35+extra100);
    const quincena = Math.round(prueba*(23.83/2));
     //pagototal= Math.round(quincena+extratotal);



       this.setState({
       extra35:(Math.round(user35*hora35)),
       extra100:(Math.round(user100*hora100)),
       extratotal:(Math.round(extra35+extra100)),
       quincena:(Math.round(prueba*(23.83/2))),
       pagototal:(Math.round(quincena+extratotal))
     });
     
    }else{

      const{sueldo}=this.state;
     const prueba=sueldo/23.83;
     const{user35}=this.state;
     const{user100}=this.state;
     const horaordinaria = prueba/8;
     const hora35= horaordinaria*1.35;
     const hora100 = horaordinaria*2;
    
     const extra35=Math.round(user35*hora35);
    const extra100=Math.round(user100*hora100);
    const extratotal=Math.round(extra35+extra100);
    const quincena = Math.round(prueba*(23.83/2));
    sueldo.indexOf()

     //pagototal= Math.round(quincena+extratotal);



       this.setState({
       extra35:(Math.round(user35*hora35)),
       extra100:(Math.round(user100*hora100)),
       extratotal:(Math.round(extra35+extra100)),
       quincena:(Math.round(prueba*(23.83/2))),
       pagototal:(Math.round(quincena+extratotal)),
       
       
       
     });
     

    }
    
    
    }

    myclear=()=>{
      
     

      this.Input.clear() 
 
      this.setState({
        
        extra35:'',
        extra100:'',
       extratotal:'',
       quincena:'',
       pagototal:'',
       
      })
    }

    
    
  render() {
 
    return (

      <Container>
          <Header style={[{backgroundColor:'#3a455c', height:90,borderBottomColor:'#757575',alignItems:'center',},styles.androidHeader]}>
          <Left style={{flexDirection:'row'}}>
              <Icon name="md-menu" style={{color:'white', marginRight:15}}/>
          </Left>
          <Text style={{color:'white', textAlign:'center', fontSize:25}}>HORAS EXTRAS</Text>
          <Right>
            
          </Right>
        </Header>
        <View style={styles.container}>
          <ScrollView>
          
            {/* Go ahead and delete ExpoLinksView and replace it with your
              * content, we just wanted to provide you with some helpful links */}
          <View style={{ flex:1}}>
          <CheckBox
            center
            title='Trabajo Nocturno'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <Input style={styles.txtforma} 
          keyboardType="numeric"    
              placeholder="Sueldo"
              onChangeText={
                sueldo=>this.setState({sueldo})
              }
              ref={input => { this.textInput = input }} 
              style={{}}>           
          </Input>
          <Input
              keyboardType="numeric"     
              placeholder="Hora35"
              onChangeText={
                user35=>this.setState({user35})
              }
              ref={input2 => { this.textInput = input2 }} 
              style={{}}>           
          </Input>
          <Input  
              keyboardType="numeric"     
              placeholder="Hora100"
              onChangeText={
                user100=>this.setState({user100})
              }
              ref={txthora100 => { this.Input = txthora100 }} 
              style={{}}>           
          </Input>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}>
            {/*<TouchableOpacity onPress={this.myFun} Text="Calcular">
            <Text style={{}}>Calcular!</Text>
            </TouchableOpacity>
              
              <TouchableOpacity onPress= { ()=>this.props.navigation.navigate('Resultado',{pagototal:this.state.pagototal}
                    
                    ) } style={styles.buttonResult}>
                  <Text style={styles.buttonTextFooter}>Resultados2</Text>
            </TouchableOpacity>*/}
              
            </View> 
            <View style={{padding:5 }}>
                  
                  <Button  title="Calcular" onPress={this.myFun}></Button>

                </View>
            <View style={{ padding:5}}>

                  <Button title="Borrar" onPress={this.myclear}></Button>

            </View>
      

            
          
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
            <ScrollView>
            {/*<Text style={{fontSize:20}}>Horas extras al 35 %</Text>
            <Text style={{fontSize:20,color:"red"}}>{this.state.extra35}</Text>
            <Text style={{fontSize:20}}>Horas extras al 100 %</Text>
          <Text style={{fontSize:20,color:"red"}}>{this.state.extra100}</Text>*/}
            <Text style={{fontSize:20,}}>Total de horas extras</Text>
            <Text style={{fontSize:20,color:"red"}}>{this.state.extratotal}</Text>
            <Text style={{fontSize:20}}>Pago a la quincena sin horas extras</Text>
            <Text style={{fontSize:20,color:"red"}}>{this.state.quincena}</Text>
            <Text style={{fontSize:20}}>Pago total</Text>
            <Text style={{fontSize:20,color:"red"}}>{this.state.pagototal}</Text>


            </ScrollView>
            

          </View>
          
          

            
          </ScrollView>

        </View> 
      </Container> 
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
    
  },
  txtforma:{
   height: 40,
   borderColor: 'gray',
   borderWidth: 2
  }
});

/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
      
  <Button title="resultado" onPress={() => this.props.navigation.navigate('Resultado')} />
</View>*/