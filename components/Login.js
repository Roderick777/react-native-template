import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Avatar, Card, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import Tema from '../Tema.js';
import Api from '../Api.js';
import axios from 'axios';
// import { Button } from 'react-native-elements';



export default class Login extends Component {

  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Login',
  };

  state = {
      correo: '',
      pass: ''
  }

  login(){
    let api = new Api();
    api.login(this.state.correo, this.state.pass)
    .then((datos)=>{
      Alert.alert('Mensaje', JSON.stringify(datos));

      // Alert.alert('Mensaje',`Correo: ${this.state.correo}`);
    });
  }

  goToInicio(){
    this.props.navigation.navigate('Inicio')
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <PaperProvider theme={Tema}>
        <View style={styles.container}>
          <ScrollView style={styles.scrollv}>
            <Card style={styles.card}>
              <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
              <Card.Content>
                <TextInput
                  label='Correo'
                  value={this.state.correo}
                  onChangeText={correo => this.setState({ correo })}
                />
                <TextInput
                  label='Clave'
                  value={this.state.pass}
                  type='password'
                  onChangeText={pass => this.setState({ pass })}
                />
                <Button onPress={()=>  this.login()  }>Ok</Button>
              </Card.Content>
            </Card>
          </ScrollView>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 30, 
    paddingBottom: 5
  },
  scrollv:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5

  },
  card:{
    marginLeft: 3,
    marginRight: 3, 
    marginBottom:5,
    marginTop: 5
  }

});
