import React, { useEffect, useState } from 'react';
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
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Button,
  Header,
  Footer,
  Content,
  Left,
  Right,
} from 'native-base';

const URL = "https://agent.myinsure.in/api/policy";
const Policy = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);n

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json.privacy))
      .finally(setLoading(false));
  });

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
            onPress={() => navigation.navigate('Account')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Privacy Policy</Text>
        </Header>
        <Content>

            {isLoading ? <ActivityIndicator /> : <FlatList
                      data={data}
                      keyExtractor={({id},index)=> id}
                      renderItem={({item})=>{
                        return(
                          <Text>{item.content}</Text>
                        )
                      }}
                      />}


        </Content>
      </Container>
    );

}
export default Policy;
