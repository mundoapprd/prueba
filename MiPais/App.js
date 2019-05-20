import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Inicio from './pantalla/Inicio';
import HorasExtras from './pantalla/HoraExtras';
import Setting from './pantalla/Setting';
import Resultado from './pantalla/Resultado';
import Vacaciones from './pantalla/Vacaciones';
import { Header } from 'react-native-elements';


import {
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import GpsMedico from './pantalla/GpsMedico';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>

         <View>
          <Header 
            leftComponent={{ color: '#fff' }}
            centerComponent={{ text: 'SMADOC', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ color: '#fff' }}
          
          />
        </View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}>
       
          <View style={{ padding:30, width:250}}>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('Dashboard')}
              
            />
            </View>
            <View style={{width:200}}>
            <Button title="Sign Up" onPress={() => alert('!Idiota, te vas¡')} />
            </View>

        </View>
      </View>
    );
  }
}
const drawer = createDrawerNavigator({
  Home: Inicio,
  HorasExtras: HorasExtras,
  Setting: Setting,
  Resultado:Resultado,
  Vacaciones:Vacaciones
})

const AppContainer = createAppContainer(drawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});






/*const TabNavigator = createBottomTabNavigator({
  Home: Inicio,
  HorasExtras: Principal,
  Setting: Setting,
  
});

const drawer = createDrawerNavigator({
  Home: Inicio,
  Principal: Principal,
  Setting: Setting,
})


//export default createAppContainer(TabNavigator);
export default createAppContainer(drawer,TabNavigator);*/
