import React, {Component} from 'react';
import {
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Container, Content} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

@inject('userStore')
@observer
export default class Brand extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.window = Dimensions.get('window');
    this.inputWidth = this.window.width - 40;
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Container
          style={{
            // backgroundColor: '#FFFFFF',
            backgroundColor: 'aqua',
            flex: 0.02,
          }}>
          <View
            style={{
              margin: 20,
            }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../icons/arrow_back.png')}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 34,
                  fontSize: 18,
                  color: '#9F9F9F',
                  fontWeight: '400',
                }}>
                제품 (4)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 34,
                  fontSize: 18,
                  color: '#353535',
                }}>
                브랜드 (2)
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
        <Content>
          <View
            style={{
              //   backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 18,
              borderTopWidth: 1.5,
              borderBottomWidth: 0.5,
              borderColor: '#C1B7B7',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>화이트진로</Text>
            <Image
              style={{width: 16, height: 21}}
              source={require('../icons/bookmark_fill_color.png')}
            />
          </View>
        </Content>
      </SafeAreaView>
    );
  }
}
