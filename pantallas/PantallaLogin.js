import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../components/Input";
import { Button } from "../components/Button";
import * as firebase from "firebase";
import { Container } from "native-base";

class PantallaInicio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isAuthenticated: firebase.auth().currentUser ? false : true,
      response: ""
    };

    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
  }

  async signUp() {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({
        response: "Se creó la cuenta",
        isAuthenticated: true
      });
      setTimeout(() => {
        this.props.navigation.navigate("Home");
      }, 1000);
    } catch (error) {
      this.setState({
        response: "No se pudo crear la cuenta"
      });
    }
  }

  async logout() {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate("Home");
      this.setState({
        isAuthenticated: false
      });
    } catch (error) {
      console.log("No se pudo salir de la cuenta");
    }
  }

  async login() {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({
        response: "Se creó la cuenta",
        isAuthenticated: true
      });
      setTimeout(() => {
        this.props.navigation.navigate("Home");
      }, timeout); // timeout...
    } catch (error) {
      this.setState({
        response: "No se pudo ingresar a la cuenta"
      });
    }
  }

  onPressSignIn() {
    this.setState({
      isAuthenticated: true // Si pudo ingresar, está autenticado.
    });
  }

  renderCurrentState() {
    if (this.state.isAuthenticated) {
      // Si está autenticado.
      return (
        <View style={styles.form}>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.logout()}
          >
            Log Out
          </Button>
        </View>
      );
    }

    return (
      <View style={styles.form}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Ingrese correo"
          label="Correo"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <Input
          placeholder="Ingrese contraseña"
          label="Contraseña"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.login()}
        >
          <Text>Login</Text>
        </Button>
        <Button
          style={{ marginTop: 10 }}
          full
          rounded
          primary
          onPress={() => this.signUp()}
        >
          <Text>Sign Up</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.renderCurrentState()}
      </Container>
    );
  }
}

export default PantallaInicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  form: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  }
});
