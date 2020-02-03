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
export default class BookMark extends Component {
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
        <Container style={{backgroundColor: '##FFFFFF'}}>
          <View style={{flex: 0.02, margin: 20}}>
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
                  color: '#353535',
                  fontWeight: '400',
                }}>
                제품 (4)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{marginRight: 34, fontSize: 18, color: '#9F9F9F'}}>
                브랜드 (2)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 18, opacity: 10, color: '#9F9F9F'}}>
                태그 (2)
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Content>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.5,
                    // width: 168,
                    height: 188,
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderColor: '#C1B7B7',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{marginLeft: 37, width: 112, height: 137}}
                        source={require('../images/cham.jpg')}
                      />
                    </View>
                    <Image
                      style={{
                        width: 16,
                        height: 21,
                        marginTop: 17,
                      }}
                      source={require('../icons/bookmark_fill_grey.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    // width: 168,
                    height: 188,
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderColor: '#C1B7B7',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{marginLeft: 55, width: 80, height: 145}}
                        source={require('../images/mokup_3.png')}
                      />
                    </View>
                    <Image
                      style={{
                        width: 16,
                        height: 21,
                        marginTop: 17,
                        marginLeft: 15,
                      }}
                      source={require('../icons/bookmark_fill_color.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.5,
                    borderColor: '#C1B7B7',
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 15,
                      fontWeight: '700',
                    }}>
                    참이슬
                  </Text>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 12,
                      color: '#9F9F9F',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    화이트진로
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        marginLeft: 18,
                      }}
                      source={require('../icons/rate_fill_color.png')}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#BB996A',
                        marginRight: 8,
                      }}>
                      3.0
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#9F9F9F',
                        width: 80,
                        marginTop: 3,
                      }}>
                      ( 381명 )
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    borderColor: '#C1B7B7',
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 15,
                      fontWeight: '700',
                    }}>
                    한라산
                  </Text>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 12,
                      color: '#9F9F9F',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    화이트진로
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        marginLeft: 18,
                      }}
                      source={require('../icons/rate_fill_color.png')}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#BB996A',
                        marginRight: 8,
                      }}>
                      3.0
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#9F9F9F',
                        width: 80,
                        marginTop: 3,
                      }}>
                      ( 381명 )
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.5,
                    // width: 168,
                    height: 188,
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderColor: '#C1B7B7',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{marginLeft: 37, width: 112, height: 137}}
                        source={require('../images/cham.jpg')}
                      />
                    </View>
                    <Image
                      style={{
                        width: 16,
                        height: 21,
                        marginTop: 17,
                      }}
                      source={require('../icons/bookmark_fill_grey.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    // width: 168,
                    height: 188,
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderColor: '#C1B7B7',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{marginLeft: 55, width: 80, height: 145}}
                        source={require('../images/mokup_3.png')}
                      />
                    </View>
                    <Image
                      style={{
                        width: 16,
                        height: 21,
                        marginTop: 17,
                        marginLeft: 15,
                      }}
                      source={require('../icons/bookmark_fill_color.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.5,
                    borderColor: '#C1B7B7',
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 15,
                      fontWeight: '700',
                    }}>
                    참이슬
                  </Text>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 12,
                      color: '#9F9F9F',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    화이트진로
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        marginLeft: 18,
                      }}
                      source={require('../icons/rate_fill_color.png')}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#BB996A',
                        marginRight: 8,
                      }}>
                      3.0
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#9F9F9F',
                        width: 80,
                        marginTop: 3,
                      }}>
                      ( 381명 )
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    borderColor: '#C1B7B7',
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 15,
                      fontWeight: '700',
                    }}>
                    한라산
                  </Text>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 12,
                      color: '#9F9F9F',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    화이트진로
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        marginLeft: 18,
                      }}
                      source={require('../icons/rate_fill_color.png')}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#BB996A',
                        marginRight: 8,
                      }}>
                      3.0
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#9F9F9F',
                        width: 80,
                        marginTop: 3,
                      }}>
                      ( 381명 )
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.5,
                    // width: 168,
                    height: 188,
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderColor: '#C1B7B7',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{marginLeft: 37, width: 112, height: 137}}
                        source={require('../images/cham.jpg')}
                      />
                    </View>
                    <Image
                      style={{
                        width: 16,
                        height: 21,
                        marginTop: 17,
                      }}
                      source={require('../icons/bookmark_fill_grey.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    // width: 168,
                    height: 188,
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderColor: '#C1B7B7',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{marginLeft: 55, width: 80, height: 145}}
                        source={require('../images/mokup_3.png')}
                      />
                    </View>
                    <Image
                      style={{
                        width: 16,
                        height: 21,
                        marginTop: 17,
                        marginLeft: 15,
                      }}
                      source={require('../icons/bookmark_fill_color.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.5,
                    borderColor: '#C1B7B7',
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 15,
                      fontWeight: '700',
                    }}>
                    참이슬
                  </Text>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 12,
                      color: '#9F9F9F',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    화이트진로
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        marginLeft: 18,
                      }}
                      source={require('../icons/rate_fill_color.png')}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#BB996A',
                        marginRight: 8,
                      }}>
                      3.0
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#9F9F9F',
                        width: 80,
                        marginTop: 3,
                      }}>
                      ( 381명 )
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    borderColor: '#C1B7B7',
                    borderTopWidth: 0.5,
                    borderRightWidth: 0.5,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 15,
                      fontWeight: '700',
                    }}>
                    한라산
                  </Text>
                  <Text
                    style={{
                      marginLeft: 18,
                      width: 80,
                      fontSize: 12,
                      color: '#9F9F9F',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    화이트진로
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        marginLeft: 18,
                      }}
                      source={require('../icons/rate_fill_color.png')}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#BB996A',
                        marginRight: 8,
                      }}>
                      3.0
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#9F9F9F',
                        width: 80,
                        marginTop: 3,
                      }}>
                      ( 381명 )
                    </Text>
                  </View>
                </View>
              </View>
            </Content>
          </ScrollView>
        </Container>
      </SafeAreaView>
    );
  }
}
