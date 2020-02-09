import React, { Component } from 'react';
import {
    Image,
    View,
    SafeAreaView,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ImageBackgroundComponent
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Container, Content, Tabs, Tab, TabHeading } from 'native-base';


@inject('userStore')
@observer
export default class Rate extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            tabFlag: 0
        };
        this.window = Dimensions.get('window');
        this.inputWidth = this.window.width - 40;
    }

    changeTabScreen = (i) => {
        this.setState({ tabFlag: i })
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

                            <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#bb996a' }} onChangeTab={({ i }) => this.changeTabScreen(i)}>
                                <Tab heading={
                                    <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column', }}>
                                        <Text style={this.state.tabFlag == 0 ? styles.selectTabText : styles.defaultTabText}>소주</Text>
                                </TabHeading>}>
                                    <Content>
                                        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingVertical: 23, paddingHorizontal: 18 }}>
                                            <Image style={{ width: 85, height: 104 }} source={require('../../images/cham.jpg')} />
                                            <View style={{ paddingLeft: 11, width: 240 }}>
                                                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}> */}
                                                {/* <View style={{ flex: 1, flexDirection: 'row', }}> */}
                                                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', }}>참이슬</Text>
                                                    <Image style={{ width: 11, height: 14, }}
                                                        source={require('../../icons/bookmark_fill_color.png')} />
                                                </View>
                                                <Text style={{ fontSize: 12, color: '#9b9b9b', marginTop: 7, marginBottom: 17 }}>하이트진로</Text>
                                                {/* </View> */}
                                                {/* </View> */}
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 15 }} resizeMode='contain' />
                                                    <Text style={{ color: '#BB996A', fontSize: 16, fontWeight: '500' }}>3.0</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: '#9b9b9b', marginLeft: 18, height: 0.8, }} />
                                        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingVertical: 23, paddingHorizontal: 18 }}>
                                            <Image style={{ width: 85, height: 104 }} source={require('../../images/cham.jpg')} />
                                            <View style={{ paddingLeft: 11, width: 240 }}>
                                                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}> */}
                                                {/* <View style={{ flex: 1, flexDirection: 'row', }}> */}
                                                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', }}>참이슬</Text>
                                                    <Image style={{ width: 11, height: 14, }}
                                                        source={require('../../icons/bookmark_fill_grey.png')} />
                                                </View>
                                                <Text style={{ fontSize: 12, color: '#9b9b9b', marginTop: 7, marginBottom: 17 }}>화이트진로</Text>
                                                {/* </View> */}
                                                {/* </View> */}
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 15 }} resizeMode='contain' />
                                                    <Text style={{ color: '#9b9b9b', fontSize: 16, fontWeight: '500' }}>0.0</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: '#9b9b9b', marginLeft: 18, height: 0.8, }} />
                                        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingVertical: 23, paddingHorizontal: 18 }}>
                                            <Image style={{ width: 85, height: 104 }} source={require('../../images/cham.jpg')} />
                                            <View style={{ paddingLeft: 11, width: 240 }}>
                                                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}> */}
                                                {/* <View style={{ flex: 1, flexDirection: 'row', }}> */}
                                                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', }}>참이슬</Text>
                                                    <Image style={{ width: 11, height: 14, }}
                                                        source={require('../../icons/bookmark_fill_grey.png')} />
                                                </View>
                                                <Text style={{ fontSize: 12, color: '#9b9b9b', marginTop: 7, marginBottom: 17 }}>화이트진로</Text>
                                                {/* </View> */}
                                                {/* </View> */}
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 15 }} resizeMode='contain' />
                                                    <Text style={{ color: '#9b9b9b', fontSize: 16, fontWeight: '500' }}>0.0</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: '#9b9b9b', marginLeft: 18, height: 0.8, }} />
                                        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingVertical: 23, paddingHorizontal: 18 }}>
                                            <Image style={{ width: 85, height: 104 }} source={require('../../images/cham.jpg')} />
                                            <View style={{ paddingLeft: 11, width: 240 }}>
                                                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}> */}
                                                {/* <View style={{ flex: 1, flexDirection: 'row', }}> */}
                                                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', }}>참이슬</Text>
                                                    <Image style={{ width: 11, height: 14, }}
                                                        source={require('../../icons/bookmark_fill_grey.png')} />
                                                </View>
                                                <Text style={{ fontSize: 12, color: '#9b9b9b', marginTop: 7, marginBottom: 17 }}>화이트진로</Text>
                                                {/* </View> */}
                                                {/* </View> */}
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                    <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 15 }} resizeMode='contain' />
                                                    <Text style={{ color: '#9b9b9b', fontSize: 16, fontWeight: '500' }}>0.0</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: '#9b9b9b', marginLeft: 18, height: 0.8, }} />

                                    </Content>
                                </Tab>
                                <Tab
                                    heading={

                                        <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column' }}
                                        >

                                            <Text style={this.state.tabFlag == 1 ? styles.selectTabText : styles.defaultTabText}>맥주</Text>
                                        </TabHeading>}>

                                    <Content>
                                        <View style={{ backgroundColor: '#F8F8F8', justifyContent: 'center' }}>
                                            {/* <Text style={{fontSize:12, marginLeft:30}}>총 {this.state.products.length}건</Text> */}
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
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

                                        <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column' }}
                                        >

                                            <Text style={this.state.tabFlag == 2 ? styles.selectTabText : styles.defaultTabText}>양주</Text>
                                        </TabHeading>}>

                                    <Content>
                                        <View style={{ backgroundColor: '#F8F8F8', justifyContent: 'center' }}>
                                            {/* <Text style={{fontSize:12, marginLeft:30}}>총 {this.state.products.length}건</Text> */}
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
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

                                        <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column' }}
                                        >

                                            <Text style={this.state.tabFlag == 3 ? styles.selectTabText : styles.defaultTabText}>와인</Text>
                                        </TabHeading>}>

                                    <Content>
                                        <View style={{ backgroundColor: '#F8F8F8', justifyContent: 'center' }}>
                                            {/* <Text style={{fontSize:12, marginLeft:30}}>총 {this.state.products.length}건</Text> */}
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
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
                                {/* <Tab
                  heading={

                    <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column', }}
                    >
                      <Image style={{ width: 16, height: 16 }} source={require('../../icons/Search_grey.png')} />
                      <Text style={this.state.tabFlag == 0 ? styles.selectTabText : styles.defaultTabText}>소주</Text>
                    </TabHeading>}></Tab> */}
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