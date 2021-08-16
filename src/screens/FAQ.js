import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import { Container, Button, Header, Footer, Content,Left, Right} from 'native-base';

export default class FAQ extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
       <Container style={{backgroundColor:'#fff'}}>
        <Header
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            shadowColor: '#000',

            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.4,

            shadowRadius: 10,
            shadowOffset: {
              height: 0.5,
              width: 0.5,
            },
          }}>
          <TouchableOpacity
            onPress={() => navigate('Account')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>FAQs</Text>
        </Header>
        <Content>
          <ScrollView>
            <View
            style={{
                margin: 10,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 3,

                marginTop: 15,

                backgroundColor: '#fff',
                paddingVertical: 2,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>

              <TouchableOpacity
              onPress={() => navigate('FAQ1')}

                style={{
                  margin: 8,
                  borderRadius: 15,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  alignItems: 'center',
                  padding: 2,

                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Left>
                  <Text style={{fontWeight: 'bold'}}>What is MyInsure</Text></Left>
                  <Right>
                  <TouchableOpacity onPress={() => navigate('FAQ1')}>
                    <Icon
                      name="arrowright"
                      color="#C4C4C4"
                      size={24}
                      style={{fontWeight: 'bold'}}
                    />
                  </TouchableOpacity>
                  </Right>
                </View>
              </TouchableOpacity>
            </View>
             <View style={{
                margin: 8,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 3,



                backgroundColor: '#fff',


                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>
              <TouchableOpacity
              onPress={() => navigate('FAQ2')}
                style={{
                  margin: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',
                  shadowColor: '#C4C4C4',
                  shadowOpacity: 0.8,
                  alignItems: 'center',

                  padding: 2,


                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Left>
                    <Text style={{fontWeight: 'bold'}}>Why I need subscription</Text>
                  </Left>
                  <Right>
                    <TouchableOpacity onPress={() => navigate('FAQ2')}>
                      <Icon
                        name="arrowright"
                        color="#C4C4C4"
                        size={24}
                        style={{}}
                      />
                    </TouchableOpacity>
                  </Right>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{
                margin: 8,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 3,



                backgroundColor: '#fff',


                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
              }}>
              <TouchableOpacity
              onPress={() => navigate('FAQ3')}
                style={{
                  margin: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  alignItems: 'center',

                  padding: 2,


                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Left>
                    <Text style={{fontWeight: 'bold'}}>Why I need subscription</Text>
                  </Left>
                  <Right>
                    <TouchableOpacity onPress={() => navigate('FAQ3')}>
                      <Icon
                        name="arrowright"
                        color="#C4C4C4"
                        size={24}
                        style={{}}
                      />
                    </TouchableOpacity>
                  </Right>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{
                margin: 8,
                borderRadius: 20,
                borderWidth: 2,
                flexDirection: 'row',
                borderColor: '#fff',

                alignItems: 'center',
                justifyContent: 'center',

                marginHorizontal: 3,



                backgroundColor: '#fff',


                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,
                marginBottom: 30
              }}>
              <TouchableOpacity
              onPress={() => navigate('FAQ4')}
                style={{
                  margin: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                  flexDirection: 'row',
                  borderColor: '#fff',

                  alignItems: 'center',

                  padding: 2,



                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Left>
                    <Text style={{fontWeight: 'bold'}}>Why I need subscription</Text>
                  </Left>
                  <Right>
                    <TouchableOpacity onPress={() => navigate('FAQ4')}>
                      <Icon
                        name="arrowright"
                        color="#C4C4C4"
                        size={24}
                        style={{}}
                      />
                    </TouchableOpacity>
                  </Right>
                </View>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </Content>
      </Container>
    );
  }
}
