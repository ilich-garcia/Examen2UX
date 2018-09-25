/*
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, View, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from 'firebase';
*/

import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import * as firebase from "firebase"

import PantallaLogin from "./pantallas/PantallaLogin";
import Inicio from "./pantallas/Inicio";
import Tablero from "./pantallas/Tablero";
import Icon from "react-native-vector-icons/Ionicons";
import PantallaPost from "./pantallas/PantallaPost";

const firebaseConfig = {
  apiKey: "AIzaSyATGAZA0IC_FgofrNIEupzVZQ88UeXqquY",
  authDomain: "firstuxexam.firebaseapp.com",
  databaseURL: "https://firstuxexam.firebaseio.com",
  projectId: "firstuxexam",
  storageBucket: "firstuxexam.appspot.com",
  messagingSenderId: "608881711863"
};

firebase.initializeApp(firebaseConfig);

export default createBottomTabNavigator({
  Login: {
    pantalla: PantallaLogin,
    navigationOptions: {
      tabBarLabel: "Sign Up",
      tabBarIcon: tintColor => <Icon name="at-sign" size={25} />
    }
  },
  Home: {
    pantalla: Inicio,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: tintColor => <Icon name="home-variant" size={25} />
    }
  },
  Tablero: {
    pantalla: Tablero,
    navigationOptions: {
      tabBarLabel: "Posts",
      tabBarIcon: tintColor => <Icon name="paper-plane" size={25} />
    }
  },
  Post: {
    pantalla: PantallaPost,
    navigationOptions: {
      tabBarLabel: "Post",
      tabBarIcon: tintColor => <Icon name="send" size={25} />
    }
  }
} , {
  initialRouteName:'Login',
  navigationOptions:{
    tabBarVisible: true,
  },
});