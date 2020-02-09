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
import { Container, Content, Tabs, Tab, TabHeading } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

@inject('userStore')
@observer
export default class Drank_Settings extends Component {
    static navigationOptions = {
        header: null,
        tabFlag: 0,
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

                    <View style={{ flex: 1 }}>

                        <Tabs style={{ borderTopWidth: 0.5, }} locked={true} tabBarUnderlineStyle={{ backgroundColor: '#bb996a', width: 50, marginLeft: 20 }} onChangeTab={({ i }) => this.changeTabScreen(i)}>
                            <Tab
                                heading={

                                    <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column', }}
                                    >

                                        <Text style={this.state.tabFlag == 0 ? styles.selectTabText : styles.defaultTabText}>소주</Text>
                                        <Text style={this.state.tabFlag == 0 ? styles.selectTabNumber : styles.defaultTabNumber}>23</Text>
                                    </TabHeading>}>

                                <Content>
                                    <View style={{ backgroundColor: '#efefef', justifyContent: 'center', height: 289 }}>
                                        {/* <Text style={{fontSize:12, marginLeft:30}}>총 {this.state.products.length}건</Text> */}

                                        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                                            {/* <FlatList
                                                data={this.state.products}
                                                numColumns={3}
                                                renderItem={({item}) => ( this.renderProduct(item))}
                                                keyExtractor={item => item.id}
                                                removeClippedSubviews
                                            /> */}
                                        </View>
                                    </View>
                                    <View style={{ marginBottom: 20, borderBottomColor: '#BB996A', borderBottomWidth: 4 }} >
                                        <View style={{ margin: 23, marginBottom: 20 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 24, fontWeight: '500', color: '#4A4A4A', marginBottom: 10 }}>참이슬 오리지널</Text>
                                                <Text style={{ fontSize: 11, color: '#494949' }} >1/8</Text>
                                            </View>
                                            <Text style={{ fontSize: 20, fontWeight: '300', color: '#9B9B9B' }}>하이트진로</Text>
                                            <TouchableOpacity>
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
                                                    <Text style={{ fontSize: 10, marginRight: 3, fontWeight: '300' }}>술 상세정보</Text>
                                                    <Image style={{ width: 10, height: 7 }} source={require('../../icons/arrow_viewmore.png')} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ marginHorizontal: 23, marginBottom: 10, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                            <Text style={{ color: '#000', fontSize: 11, marginRight: 8, fontWeight: '600' }}>총 평점</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 3 }}>
                                                <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 11, height: 11, marginRight: 3 }} resizeMode='contain' />
                                                <Text style={{ color: '#BB996A', fontSize: 13, fontWeight: '500' }}>3.0</Text>
                                            </View>

                                            <Text style={{ color: '#494949', fontSize: 10, fontWeight: '200' }}>( 381명 )</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginHorizontal: 23, marginBottom: 30, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                                                <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                                <Image source={require('../../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 15 }} resizeMode='contain' />
                                                <Text style={{ color: '#BB996A', fontSize: 18, fontWeight: '500' }}>4.0</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: '#494949', height: 1, marginLeft: 17 }} />
                                    <View style={{ marginHorizontal: 23, marginTop: 28 }}>
                                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', marginRight: 10 }}>이학연</Text>
                                                    <Text style={{ fontSize: 12, color: '#818181' }}>2018.8.29</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                    <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 12, height: 12, marginRight: 5 }} resizeMode='contain' />
                                                    <Text style={{ color: '#BB996A', fontSize: 14, fontWeight: '500' }}>3.5</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                            <View style={{
                                                backgroundColor: '#FFFFFF', borderWidth: 0.6, borderColor: '#EAEAEA', borderRadius: 20,
                                                paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                            }}>
                                                <Text style={{ fontSize: 14, color: '#000' }}>#쓴</Text>
                                            </View>
                                            <View style={{
                                                backgroundColor: '##FFFFFF', borderWidth: 0.6, borderColor: '#EAEAEA', borderRadius: 20,
                                                paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                            }}>
                                                <Text style={{ fontSize: 14, color: '#000' }}>#20대</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginBottom: 14 }}>
                                            <Text style={{ color: '#3A3A38', fontSize: 14 }}>맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다..
                                            맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다..</Text>
                                        </View>
                                        <Image
                                            style={{ width: 329, height: 219 }}
                                            source={require('../../images/soju_review_photo.jpg')} />
                                    </View>
                                </Content>
                            </Tab>
                            <Tab
                                heading={

                                    <TabHeading style={{ backgroundColor: '#FFF', flexDirection: 'column' }}
                                    >

                                        <Text style={this.state.tabFlag == 1 ? styles.selectTabText : styles.defaultTabText}>맥주</Text>
                                        <Text style={this.state.tabFlag == 1 ? styles.selectTabNumber : styles.defaultTabNumber}>7</Text>
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
                                        <Text style={this.state.tabFlag == 2 ? styles.selectTabNumber : styles.defaultTabNumber}>15</Text>
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
                                        <Text style={this.state.tabFlag == 3 ? styles.selectTabNumber : styles.defaultTabNumber}>38</Text>
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
                        </Tabs>
                    </View>
                </Container>
            </SafeAreaView >
        );
    }
}

const styles = {
    defaultTabText: {
        color: '#6A6A6A',
        fontSize: 13,
    },
    defaultTabNumber: {
        color: '#6A6A6A',
        fontSize: 16,
        marginTop: 3
    },
    selectTabText: {
        color: '#353535',
        fontWeight: '500',
        fontSize: 13
    },
    selectTabNumber: {
        color: '#353535',
        fontWeight: '600',
        fontSize: 16,
        marginTop: 3
    },
}