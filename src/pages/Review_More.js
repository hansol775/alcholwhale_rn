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
export default class Review_More extends Component {
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
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ margin: 20 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}>
                                <Image
                                    source={require('../icons/arrow_back.png')}
                                    style={{ width: 20, height: 20 }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 23, color: '#4a4a4a', marginLeft: 5 }}>리뷰</Text>
                        <Text style={{ color: '#bb996a', fontSize: 17, marginLeft: 10, fontWeight: '500' }}>50</Text>
                        <View style={{ marginLeft: 195 }}>
                            <TouchableOpacity>
                                <Image style={{ width: 18.7, height: 17.3 }} source={require('../icons/write_stroke.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#494949', height: 1, }} />
                    <Content style={{ backgroundColor: '#ffffff' }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 30
                        }}>
                            <Image style={{ width: 11.2, height: 10.8, marginRight: 4 }} source={require('../icons/rate_fill_color.png')} />
                            <Image style={{ width: 11.2, height: 10.8, marginRight: 4 }} source={require('../icons/rate_fill_color.png')} />
                            <Image style={{ width: 11.2, height: 10.8, marginRight: 4 }} source={require('../icons/rate_fill_color.png')} />
                            <Image style={{ width: 11.2, height: 10.8, marginRight: 4 }} source={require('../icons/rate_fill_color.png')} />
                            <Image style={{ width: 11.2, height: 10.8, marginRight: 12 }} source={require('../icons/rate_stroke.png')} />
                            <Text style={{ color: '#353535', fontSize: 14 }}>4.0</Text>
                        </View>
                        <ScrollView horizontal>
                            <View style={{ width: 100, height: 100, backgroundColor: '#efefef', flexDirection: 'row', marginLeft: 23, marginRight: 10, marginBottom: 23 }}></View>
                        </ScrollView>
                        <View style={{ backgroundColor: '#9B9B9B', height: 0.5, marginLeft: 18 }}></View>
                        <View style={{ marginHorizontal: 23, marginVertical: 19 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#000', marginRight: 10 }}>이학연</Text>
                                        <Text style={{ fontSize: 12, color: '#818181' }}>2018.8.29</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/rate_fill_color.png')} style={{ width: 12, height: 12, marginRight: 5 }} resizeMode='contain' />
                                        <Text style={{ color: '#BB996A', fontSize: 14, fontWeight: '500' }}>3.5</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{
                                    backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                    paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '200' }}>#쓴</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                    paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '200' }}>#20대</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ color: '#3A3A38', fontSize: 14 }}>맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다..</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                        <Image source={require('../icons/heart_gray.png')} style={{ width: 15, height: 15, marginRight: 5 }} resizeMode='contain' />
                                        <Text style={{ color: '#3A3A38', fontSize: 14, fontWeight: '500' }}>18</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/photo.png')} style={{ width: 18, height: 18 }} resizeMode='contain' />
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#9B9B9B', height: 1, marginBottom: 20 }} />
                        </View>
                    </Content>
                </Container>
            </SafeAreaView >
        );
    }
}

// 별 이미지 하얀색으로 바꾸기
// shadow 넣기