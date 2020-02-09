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
import {Tabs, Tab, TabHeading} from 'native-base';

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
      tabFlag: 0,
    };
    this.window = Dimensions.get('window');
    this.inputWidth = this.window.width - 40;
  }

  changeTabScreen = i => {
    this.setState({tabFlag: i});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Container style={{backgroundColor: '##FFFFFF'}}>
          <View style={{margin: 20}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../icons/arrow_back.png')}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Tabs
              locked={true}
              tbaContainerStyle={{borderBottomWidth: 0}}
              tabBarUnderlineStyle={{display: 'none'}}
              onChangeTab={({i}) => this.changeTabScreen(i)}>
              <Tab
                style={{}}
                heading={
                  <TabHeading
                    style={{
                      backgroundColor: '#FFF',
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={
                        this.state.tabFlag == 0
                          ? styles.selectTabText
                          : styles.defaultTabText
                      }>
                      제품(4)
                    </Text>
                  </TabHeading>
                }>
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
                            source={require('../../images/cham.jpg')}
                          />
                        </View>
                        <Image
                          style={{
                            width: 16,
                            height: 21,
                            marginTop: 17,
                          }}
                          source={require('../../icons/bookmark_fill_grey.png')}
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
                            source={require('../../images/mokup_3.png')}
                          />
                        </View>
                        <Image
                          style={{
                            width: 16,
                            height: 21,
                            marginTop: 17,
                            marginLeft: 15,
                          }}
                          source={require('../../icons/bookmark_fill_color.png')}
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
                          source={require('../../icons/rate_fill_color.png')}
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
                          source={require('../../icons/rate_fill_color.png')}
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
                            source={require('../../images/cham.jpg')}
                          />
                        </View>
                        <Image
                          style={{
                            width: 16,
                            height: 21,
                            marginTop: 17,
                          }}
                          source={require('../../icons/bookmark_fill_grey.png')}
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
                            source={require('../../images/mokup_3.png')}
                          />
                        </View>
                        <Image
                          style={{
                            width: 16,
                            height: 21,
                            marginTop: 17,
                            marginLeft: 15,
                          }}
                          source={require('../../icons/bookmark_fill_color.png')}
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
                          source={require('../../icons/rate_fill_color.png')}
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
                          source={require('../../icons/rate_fill_color.png')}
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
                            source={require('../../images/cham.jpg')}
                          />
                        </View>
                        <Image
                          style={{
                            width: 16,
                            height: 21,
                            marginTop: 17,
                          }}
                          source={require('../../icons/bookmark_fill_grey.png')}
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
                            source={require('../../images/mokup_3.png')}
                          />
                        </View>
                        <Image
                          style={{
                            width: 16,
                            height: 21,
                            marginTop: 17,
                            marginLeft: 15,
                          }}
                          source={require('../../icons/bookmark_fill_color.png')}
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
                          source={require('../../icons/rate_fill_color.png')}
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
                          source={require('../../icons/rate_fill_color.png')}
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
              </Tab>
              <Tab
                heading={
                  <TabHeading
                    style={{
                      backgroundColor: '#FFF',
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={
                        this.state.tabFlag == 1
                          ? styles.selectTabText
                          : styles.defaultTabText
                      }>
                      브랜드(2)
                    </Text>
                  </TabHeading>
                }>
                <Content>
                  <TouchableOpacity>
                    <View
                      style={{
                        //   backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 18,
                        borderTopWidth: 1,
                        borderBottomWidth: 0.5,
                        borderColor: '#C1B7B7',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '200',
                          color: 'black',
                        }}>
                        화이트진로
                      </Text>
                      <Image
                        style={{width: 16, height: 21}}
                        source={require('../../icons/bookmark_fill_color.png')}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        //   backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 18,
                        borderBottomWidth: 0.5,
                        borderColor: '#C1B7B7',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'black',
                          fontWeight: '200',
                        }}>
                        앱솔루트
                      </Text>
                      <Image
                        style={{width: 16, height: 21}}
                        source={require('../../icons/bookmark_fill_color.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </Content>
              </Tab>
              <Tab
                heading={
                  <TabHeading
                    style={{
                      backgroundColor: '#FFF',
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={
                        this.state.tabFlag == 2
                          ? styles.selectTabText
                          : styles.defaultTabText
                      }>
                      태그 (2)
                    </Text>
                  </TabHeading>
                }>
                <Content>
                  <View
                    style={{
                      backgroundColor: '#F8F8F8',
                      height: 40,
                      justifyContent: 'center',
                    }}>
                    {/* <Text style={{fontSize:12, marginLeft:30}}>총 {this.state.products.length}건</Text> */}
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    {/* <FlatList
                                                data={this.state.products}
                                                numColumns={3}
                                                renderItem={({item}) => ( this.renderProduct(item))}
                                                keyExtractor={item => item.id}
                                                removeClippedSubviews
                                            /> */}
                  </View>
                </Content>
              </Tab>
            </Tabs>
          </View>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = {
  defaultTabText: {
    color: '#9F9F9F',
    fontSize: 18,
  },
  selectTabText: {
    color: '#000',
    // fontWeight: 'bold',
    fontSize: 18,
  },
};