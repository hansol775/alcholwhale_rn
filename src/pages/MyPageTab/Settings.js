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
export default class Settings extends Component {
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
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Account_Settings')
              }>
              <View
                style={{
                  height: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 23,
                  marginTop: 10,
                  borderBottomColor: '#353535',
                  borderBottomWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: '#353535',
                    fontSize: 15,
                    fontWeight: '700',
                    paddingLeft: 5,
                  }}>
                  계정 설정
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Service_Settings')} >
              <View
                style={{
                  height: 60,
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
                    fontWeight: '700',
                    paddingLeft: 5,
                  }}>
                  서비스 설정
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notice_Settings')}>
              <View
                style={{
                  height: 60,
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
                    fontWeight: '700',
                    paddingLeft: 5,
                  }}>
                  알림
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ServiceCenter_Settings')}>
              <View
                style={{
                  height: 60,
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
                    fontWeight: '700',
                    paddingLeft: 5,
                  }}>
                  고객 센터
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Info_Settings')}>
              <View
                style={{
                  height: 60,
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
                    fontWeight: '700',
                    paddingLeft: 5,
                  }}>
                  술 고래 정보
                </Text>
              </View>
            </TouchableOpacity>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}
