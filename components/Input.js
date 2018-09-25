import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

class Input extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput
          autoCorrect={false}
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          style={styles.input}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    )
  }
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderBottomWidth: 2
  },

  label: {
    padding: 5,
    paddingBottom: 0,
    color: '#333',
    fontSize: 17,
    fontWeight: '700',
    width: '100%'
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#333',
    fontSize: 18,
    fontWeight: '700',
    width: '100%'
  }
})
