import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ImageBackgroundComponent,
  FlatList
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Container, Content, Tabs, Tab, TabHeading } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


@inject('userStore')
@observer
export default class Rate extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      tabFlag: 0,
      active: true,
      mokupData: [
        {
          id: 1,
          name: '참이슬',
          company: '화이트진로',
          star: 3.5
        },
        {
          id: 2,
          name: '참이슬',
          company: '화이트진로',
          star: 3.5
        },
        {
          id: 3,
          name: '참이슬',
          company: '화이트진로',
          star: 3.5
        },
        {
          id: 4,
          name: '참이슬',
          company: '화이트진로',
          star: 3.5
        },
      ]
    };
  }

  changeTabScreen = (i) => {
    this.setState({ tabFlag: i })
  }

  _renderRankingList(item) {
    return (
      <View>
        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingVertical: 23, paddingHorizontal: 18 }}>
          <Image style={{ width: 85, height: 104 }} source={require('../../images/cham.jpg')} />
          <View style={{ paddingLeft: 11, width: 240 }}>
            <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', }}>{item.name}</Text>
              <Image style={{ width: 11, height: 14, }}
                source={require('../../icons/bookmark_fill_color.png')} />
            </View>
            <Text style={{ fontSize: 12, color: '#9b9b9b', marginTop: 7, marginBottom: 17 }}>{item.company}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 10 }} resizeMode='contain' />
              <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 10 }} resizeMode='contain' />
              <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 10 }} resizeMode='contain' />
              <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 10 }} resizeMode='contain' />
              <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 15 }} resizeMode='contain' />
              <Text style={{ color: '#BB996A', fontSize: 16, fontWeight: '500' }}>{item.star}</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#9b9b9b', marginLeft: 18, height: 0.8, }} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container backgroundColor="#FFFFFF">
          <View style={{ width: 375, height: 123, paddingVertical: 25, paddingHorizontal: 119, backgroundColor: '#f4f1ee', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 12, color: '#bb996a', fontSize: 32, fontWeight: '600' }}>112</Text>
            <Text style={{ color: '#0f0f0f', fontSize: 13 }}>아직 취향을 잘 모르겠어요</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#bb996a', width: 35, marginLeft: 30 }} onChangeTab={({ i }) => this.changeTabScreen(i)}>
              <Tab heading={
                <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column', }}
                >
                  <Text style={this.state.tabFlag == 0 ? styles.selectTabText : styles.defaultTabText}>소주</Text>
                </TabHeading>}>
                <Content>
                  <FlatList
                    data={this.state.mokupData}
                    renderItem={({ item }) => (this._renderRankingList(item))}
                    keyExtractor={item => item.id.toString()}
                  />
                </Content>
              </Tab>
              <Tab heading={
                <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column' }}
                >
                  <Text style={this.state.tabFlag == 1 ? styles.selectTabText : styles.defaultTabText}>맥주</Text>
                </TabHeading>}>
                <Content>
                </Content>
              </Tab>
              <Tab heading={
                <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column' }}
                >
                  <Text style={this.state.tabFlag == 2 ? styles.selectTabText : styles.defaultTabText}>양주</Text>
                </TabHeading>}>
                <Content>
                </Content>
              </Tab>
              <Tab heading={
                <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column' }}
                >
                  <Text style={this.state.tabFlag == 3 ? styles.selectTabText : styles.defaultTabText}>와인</Text>
                </TabHeading>}>
                <Content>
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
    color: '#9b9b9b',
    fontSize: 16,
  },
  selectTabText: {
    color: '#353535',
    fontSize: 16,
    fontWeight: 'bold'
  },
}


// scrollView 적용 