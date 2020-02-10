import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Container, Content, Item } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Tabs, Tab, TabHeading } from 'native-base';

// const { width } = Dimensions.get('window');

@inject('userStore')
@observer
export default class BookMark extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      tabFlag: 0,
      mokupData: [
        {
          id: 1,
          name: '참이슬',
          company: '화이트 진로',
          star: '3.0',
          number: '381'

        },
        {
          id: 2,
          name: '참이슬',
          company: '화이트 진로',
          star: '3.0',
          number: '381'

        },
        {
          id: 3,
          name: '참이슬',
          company: '화이트 진로',
          star: '3.0',
          number: '381'

        },
        {
          id: 4,
          name: '참이슬',
          company: '화이트 진로',
          star: '3.0',
          number: '381'

        },
        {
          id: 5,
          name: '참이슬',
          company: '화이트 진로',
          star: '3.0',
          number: '381'

        },
        {
          id: 6,
          name: '참이슬',
          company: '화이트 진로',
          star: '3.0',
          number: '381'

        },
      ]

    };
    this.window = Dimensions.get('window');
    this.inputWidth = this.window.width - 40;
  }

  changeTabScreen = i => {
    this.setState({ tabFlag: i });
  };


  _renderBookMarkList(item) {
    return (
      <View >
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              // flex: 0.5,
              width: this.window.width / 2,
              height: 188,
              borderTopWidth: 0.5,
              borderRightWidth: 0.5,
              borderColor: '#C1B7B7',
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ marginLeft: 37, width: 112, height: 137 }}
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
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              // flex: 0.5,
              width: this.window.width / 2,
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
              {item.name}
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
              {item.company}
            </Text>
            <View style={{ flexDirection: 'row' }}>
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
                {item.star}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#9F9F9F',
                  width: 80,
                  marginTop: 3,
                }}>
                ( {item.number}명 )
                        </Text>
            </View>
          </View>
        </View>
      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container style={{ backgroundColor: '##FFFFFF' }}>
          <View style={{ margin: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../icons/arrow_back.png')}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Tabs
              locked={true}
              tbaContainerStyle={{ borderBottomWidth: 0 }}
              tabBarUnderlineStyle={{ display: 'none' }}
              onChangeTab={({ i }) => this.changeTabScreen(i)}>
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
                  {/* <View style={{ flex: 1, flexDirection: 'row' }}> */}
                  <FlatList
                    numColumns={2}
                    data={this.state.mokupData}
                    renderItem={({ item }) => (this._renderBookMarkList(item))}
                    keyExtractor={item => item.id.toString()}
                  />
                  {/* </View> */}
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
