import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import { Button } from "../components/Button";
import * as firebase from "firebase";
import { Toast, Container } from "native-base";
class PantallaPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      auth: firebase.auth().currentUser ? true : false
    };
    this.onPressPost = this.onPressPost.bind(this);
  }

  onPressPost() {
    if (firebase.auth().currentUser != null) {
      const dbRef = firebase.database().ref("posts");
      const newPost = dbRef.push();
      const record = {
        title: this.state.title,
        content: this.state.content,
        visibility: "PUBLIC",
        displayname: firebase.auth().currentUser.email,
        uid: firebase.auth().currentUser.uid,
        photoUrl:'https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png',
        comments: {},
        id: newPost.key,
        contFav: 0,
        countComment: 0

        
      };
      newPost.set(record).then(
        this.setState(state => ({
          title: "",
          content: ""
        }))
      );

     
        /*Toast.show({
          text:'Bien, ahora todo el mundo puede leer tus idioteces'
          ,buttonText:'Yei'
          ,duration:3000
        })*/
      //TODO:Agregar post fav a la base de datos
      //const dbUser = firebase.database().ref("users/"+this.state.user.uid);
    } else {
      //Poner una toast
      
      console.log('No esta autentificado')    
      
    }
    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Input
          placeholder="Title your thing"
          label="The Title"
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />

        <Input
          placeholder="What you wanna say?"
          label="The Content"
          onChangeText={content => this.setState({ content })}
          value={this.state.content}
        />
        <Button onPress={() => this.onPressPost()}>Are you sure?</Button>
      </Container>
    );
  }
}

export default PantallaPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
