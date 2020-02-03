import React, {Component} from 'react';
import {
  Image,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Container, Content} from 'native-base';
import {TouchableHighlight} from 'react-native-gesture-handler';

// const {height, width} = Dimensions.get('window');

@inject('userStore')
@observer
export default class MyPage extends Component {
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
        <View style={{width: 375, height: 177, backgroundColor: '#f4f1ee'}}>
          <TouchableOpacity>
            <Image
              style={{height: 20, width: 20, marginLeft: 23, marginTop: 23}}
              source={require('../icons/settings.png')}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                width: 74,
                height: 31,
                fontSize: 28,
                color: '#353535',
                marginLeft: 23,
                marginTop: 60,
              }}>
              여선주
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('BookMark')}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 23,
                  marginTop: 61,
                  marginBottom: 10,
                }}>
                <Image
                  style={{width: 12.3, height: 15.8}}
                  source={require('../icons/bookmark_fill_color.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row-reverse'}>
            <Text style={{color: '#bb9969', fontSize: 12, marginRight: 33}}>
              12
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#FFFFFF'}}>
          <View
            style={{
              width: 329,
              height: 17,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 50,
              marginLeft: 23,
              marginRight: 23,
              marginBottom: 20,
            }}>
            <Text style={{color: '#353535', fontSize: 15, fontWeight: '700'}}>
              내가 마신 술
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  height: 35,
                  width: 69,
                  backgroundColor: '#f4f1ee',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#3a3a37'}}>취향분석</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              borderTopColor: '#BB996A',
              borderTopWidth: 1,
              borderBottomColor: '#BB996A',
              borderBottomWidth: 1,
              height: 180,
            }}>
            <View
              style={{
                flex: 0.25,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginVertical: 10,
                borderRightWidth: 0.5,
                borderRightColor: '#BB996A',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DrinkDetail', {drink: '소주'})
                }
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../icons/liquor/soju_gold.png')}
                  style={{width: 20, height: 20, marginVertical: 15}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: '#BB996A',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  소주
                </Text>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: '600',
                    color: '#353535',
                    textAlign: 'center',
                  }}>
                  23
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.25,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                borderRightWidth: 0.5,
                borderRightColor: '#BB996A',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DrinkDetail', {drink: '맥주'})
                }
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../icons/liquor/beer_gold.png')}
                  style={{width: 30, height: 30, marginBottom: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: '#BB996A',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  맥주
                </Text>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: '600',
                    color: '#353535',
                    textAlign: 'center',
                  }}>
                  7
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.25,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
                borderRightWidth: 0.5,
                borderRightColor: '#BB996A',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DrinkDetail', {drink: '양주'})
                }
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../icons/liquor/western_gold.png')}
                  style={{width: 30, height: 30, marginBottom: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: '#BB996A',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  양주
                </Text>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: '600',
                    color: '#353535',
                    textAlign: 'center',
                  }}>
                  15
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.25,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DrinkDetail', {drink: '와인'})
                }
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../icons/liquor/wine_gold.png')}
                  style={{width: 30, height: 30, marginBottom: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: '#BB996A',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  와인
                </Text>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: '600',
                    color: '#353535',
                    textAlign: 'center',
                  }}>
                  38
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 352,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 60,
              marginLeft: 23,
              marginRight: 23,
              // marginBottom:
              borderBottomColor: '#353535',
              borderBottomWidth: 1,
            }}>
            <Text style={{color: '#353535', fontSize: 15, fontWeight: '700'}}>
              내가 남긴 리뷰
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 10, width: 10}}
                  source={require('../icons/arrow_next.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
