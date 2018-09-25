import React, { Component } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'
import * as firebase from 'firebase'
import Post from '../components/Post'
import {
  Container,
  List,
  ListItem,
  Body,
  Header,
  Text,
  DeckSwiper
} from 'native-base'

class Tablero extends Component {
  constructor (props) {
    super(props)
  }

  state = {
    posts: [],
    user: Object.assign(firebase.auth().currentUser),
    type: 'Público',
    likes: []
  }

  componentWillMount () {
    this.loadTablero()
  }

  loadTablero () {
    const localLikes = []
    firebase
      .database()
      .ref('posts')
      .orderByChild('type')
      .on('child_added', snapshot => {
        if (snapshot.val().type == 'Público') {
          localLikes.push(snapshot.val())
        }
        console.log(snapshot.val())
        this.setState({
          posts: localLikes
        })
      })
  }

  render () {
    return (
      <Container>
        <Header title='My First UX Exam' />
        <DeckSwiper
          dataSource={this.state.posts}
          renderItem={item => (
            <View>
              <Post
                topic={item.topic}
                message={item.message}
                likes_count={item.likes_count}
                uname={item.uname}
                upic={item.upic}
                uid={item.uid}
              />
              {item.comments
                ? <List
                  dataArray={item.comments}
                  renderRow={value => (
                    <ListItem>
                      <Body>
                        <Text>{value.comment}</Text>
                      </Body>
                    </ListItem>
                    )}
                  />
                : <View />}
            </View>
          )}
        />
      </Container>
    )
  }
}

export default Tablero

/*

              <FlatList
              data={[
                {title: item.title},
                {message: item.message},
                {likes_count:item.likes_count},
                {uname:item.uname},
                {upic:item.upic},
                {uid:item.uid}
              ]}

              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                keyExtractor={item => item.postId}
              />
 */
