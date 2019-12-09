import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Button, Snackbar, Avatar, Card, IconButton, Title, Paragraph, Drawer } from 'react-native-paper';
import axios from 'axios';


export default class Inicio extends Component {

  constructor(props){
    super(props)
    this.getRecursos()
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  state = {
    active: 'first',
    recursos: null,
    visible: false,

  };
  
  getRecursos() {
    let c = this;
    axios.get('https://redcollege.net/api/recursos').then( response => {
      Alert.alert('Mensaje', response.data.data[0].titulo);
      c.setState({
        recursos : response.data.data
      });
    }).catch( error => {
  
    });
  }
  
  alerta(titulo, mensaje) {
   Alert.alert(titulo, mensaje);
  }

  listado(){
   return(
    this.state.recursos.map((recurso, i) =>{
      return(<Text key={'recurso_'+ i}>{recurso.titulo}</Text>)
    })
   )
  }

  render() {
    const { active } = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollv}>
        {/* <Card style={styles.card} title="React native">
          <Text>Open up App.js REACT NATIVE</Text>
          <Button icon="camera" mode="contained" onPress={() => {alerta('Mensaje', 'Hola') } }>
            Press me
          </Button>
        </Card> */}
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => { this.setState({ active: 'first' }); }}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => { this.setState({ active: 'second' }); }}
        />
     </Drawer.Section>
        {
          this.state.recursos != null &&
            this.state.recursos.map((recurso, i) =>{
              return(<Text key={'recurso_'+ i}>{recurso.titulo}</Text>)
            })
        }
        <Card style={styles.card}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button onPress={()=> { this.alerta('hola', 'hola'); this.getRecursos()}}>Ok</Button>
            <Button icon="camera" mode="contained" onPress={() => {this.setState({visible: true}) } }>
              Press me
            </Button>
            <Button icon="camera" mode="contained" onPress={() => {this.props.navigation.navigate('Captura') } }>
              Probar Opencv
            </Button>
          </Card.Actions>
        </Card>

        <Snackbar
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
      
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 30, 
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
