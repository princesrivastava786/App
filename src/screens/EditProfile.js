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
  Picker,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import { Container, Button, Header, Footer, Content } from 'native-base';

export default class EditProfile extends React.Component {
  state = { user: '' };
  updateUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
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
          <Text style={{fontSize: 18}}>Edit Profile</Text>
        </Header>
        <Content>
          <ScrollView>
          {/*
            <View
              style={{
                borderWidth: 2,
                marginTop: 35,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="picture"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Cover Image Upload"
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            */}
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="user"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Complete  Name"
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            {/*
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="mail"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="your-email@gmail.com"
                editable={false}
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            */}
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="phone"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="+91 8888 999 000"
                keyboardType={'numeric'}
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            {/*
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="bank"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Select Lifr Insurance Company"
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="picture"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Select General Insurance Company"
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="book"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Your agency license to verify your profile*"
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            */}
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Icon
                name="creditcard"
                color="#C4C4C4"
                size={20}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Your Pan Card Verification"
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>


            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Address:"
                style={{ margin: 7, flex: 1 }}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,

                justifyContent: 'center',

                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  borderWidth: 2,
                  marginTop: 15,
                  borderRadius: 13,
                  borderColor: '#FFF',
                  backgroundColor: '#fff',

                  marginHorizontal: 5,

                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 10,

                  justifyContent: 'center',

                  alignItems: 'center',
                  flexDirection: 'row',

                }}>
                <Picker
                  selectedValue={this.state.user}
                  onValueChange={this.updateUser}
                  style={{
                    borderRadius: 13,
                    flex: 1,
                  }}>
                  <Picker.Item label="State Name" value="location" />
                  <Picker.Item label="Delhi" value="delhi" />
                  <Picker.Item label="Mumbai" value="mumbai" />
                  <Picker.Item label="Karnataka" value="Karnataka" />
                  <Picker.Item label="Jaipur" value="jaipur" />
                  <Picker.Item label="Kolkata" value="Kolkata" />
                  <Picker.Item label="Chennai" value="Chennai" />
                </Picker>
              </View>

            </View>
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',
                paddingVertical: 2,

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
                marginBottom: 50
              }}>
              <Ionicons
                name="location"
                size={20}
                color="#C4C4C4"
                style={{ marginLeft: 5 }}
              />
              <TextInput
                placeholder="Pin Code"
                style={{ paddingHorizontal: 10, padding: 7, flex: 1 }}
              />
            </View>
            {/*
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <TextInput
                placeholder="About Me:"
                style={{ margin: 7, flex: 1, paddingBottom: 50 }}
              />
            </View>
            <View
              style={{
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 13,
                borderColor: '#FFF',
                backgroundColor: '#fff',

                marginHorizontal: 5,

                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 10,

                flexDirection: 'row',
                justifyContent: 'center',

                alignItems: 'center',
                marginBottom: 50,
              }}>
              <TextInput
                placeholder="Latest Offer:"
                style={{ flex: 1, paddingBottom: 50, marginLeft: 7 }}
              />
            </View>
            */}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
