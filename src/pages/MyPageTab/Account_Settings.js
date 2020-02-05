import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Container, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

@inject('userStore')
@observer
export default class Account_Settings extends Component {
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
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Container backgroundColor="#FFFFFF">
          <View style={{ margin: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../icons/arrow_back.png')}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Content backgroundColor="#FFFFFF">
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginLeft: 20,
                borderBottomColor: '#353535',
                borderBottomWidth: 0.5,
              }}>
              <Text
                style={{
                  color: '#353535',
                  fontSize: 23,
                  fontWeight: '800',
                  paddingLeft: 5,
                }}>
                계정 설정
                </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  width: this.inputWidth,
                  marginLeft: 20,
                  height: 69,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderBottomColor: '#353535',
                  borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    color: '#353535',
                    fontSize: 15,
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}>
                  이메일
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    marginTop: 10,
                    color: '#bb996a',
                    fontSize: 13,
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}>
                  Sunju77@gmail.com
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: this.inputWidth,
                  marginLeft: 20,
                  height: 52,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 23,
                  borderBottomColor: '#353535',
                  borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: '#353535',
                    fontSize: 15,
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}>
                  비밀번호 설정
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: this.inputWidth,
                  marginLeft: 20,
                  height: 52,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 23,
                  borderBottomColor: '#353535',
                  borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: '#353535',
                    fontSize: 15,
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}>
                  프로필 변경
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: this.inputWidth,
                  marginLeft: 20,
                  height: 52,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 23,
                  borderBottomColor: '#353535',
                  borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: '#353535',
                    fontSize: 15,
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}>
                  평가내역 초기화
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: this.inputWidth,
                  marginTop: 74,
                  marginLeft: 20,
                  height: 52,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 23,
                  borderBottomColor: '#353535',
                  borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: '#353535',
                    fontSize: 15,
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}>
                  로그아웃
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: this.inputWidth,
                  marginTop: 50,
                  marginLeft: 20,
                  height: 52,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 23,
                  borderBottomColor: '#353535',
                  borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: '#353535',
                    fontSize: 15,
                    fontWeight: '500',
                    paddingLeft: 5,
                  }}>
                  탈퇴하기
                </Text>
              </View>
            </TouchableOpacity>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}
