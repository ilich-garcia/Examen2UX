import React, { Component } from "react";
import { View, StyleSheet , Image, Text} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

class Inicio extends Component {
  render() {
    return (
      <Container>
      <Header />
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'}} />
              <Body>
                <Text>React-Native</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'}} style={{height: 200, width: 200, flex: 1}}/>
              <Text>Powered by Firebase</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>Welcome to the Home Screen</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }
}

export default Inicio;