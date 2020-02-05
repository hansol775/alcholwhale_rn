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
export default class Review extends Component {
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
                        <TouchableOpacity
                            style={{ marginBottom: 10, }}
                            onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={require('../../icons/arrow_back.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#494949', height: 1, }} />
                    <Content style={{ backgroundColor: '#f4f1ee' }}>
                        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', padding: 23, marginBottom: 19 }}>
                            <Image style={{ width: 45, height: 129 }} source={require('../../images/mokup_2.png')} />
                            <View style={{ marginLeft: 16 }}>
                                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}> */}
                                {/* <View style={{ flex: 1, flexDirection: 'row', }}> */}
                                <View style={{ marginTop: 5, width: 265, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', }}>참이슬 오리지널</Text>
                                    <View style={{ flexDirection: 'row', width: 50, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bb996a' }}>
                                        <Image source={require('../../icons/rate_fill.png')} style={{ width: 11.3, height: 11.3, marginRight: 5, }} resizeMode='contain' />
                                        <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '500' }}>3.5</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 13, color: '#9b9b9b', marginTop: 7, marginBottom: 17 }}>하이트진로</Text>
                                {/* </View> */}
                                {/* </View> */}
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: '#3A3A38', fontSize: 14, width: 265 }}>맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다..</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 10, paddingBottom: 12, borderBottomColor: '#9b9b9b', borderBottomWidth: 0.5 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                            <Image source={require('../../icons/heart_gray.png')} style={{ width: 18, height: 16, marginRight: 5 }} resizeMode='contain' />
                                            <Text style={{ color: '#3A3A38', fontSize: 14, fontWeight: '300' }}>18</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('../../icons/photo.png')} style={{ width: 18, height: 18 }} resizeMode='contain' />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12, color: '#9b9b9b' }}>2018.8.29</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 13, marginRight: 16 }}>수정</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 13, }}>삭제</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', padding: 23, marginBottom: 19 }}>
                            <Image style={{ width: 45, height: 129 }} source={require('../../images/mokup_2.png')} />
                            <View style={{ marginLeft: 16 }}>
                                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}> */}
                                {/* <View style={{ flex: 1, flexDirection: 'row', }}> */}
                                <View style={{ marginTop: 5, width: 265, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', }}>참이슬 오리지널</Text>
                                    <View style={{ flexDirection: 'row', width: 50, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bb996a' }}>
                                        <Image source={require('../../icons/rate_fill.png')} style={{ width: 11.3, height: 11.3, marginRight: 5, }} resizeMode='contain' />
                                        <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '500' }}>3.5</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 13, color: '#9b9b9b', marginTop: 7, marginBottom: 17 }}>하이트진로</Text>
                                {/* </View> */}
                                {/* </View> */}
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: '#3A3A38', fontSize: 14, width: 265 }}>맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다..</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 10, paddingBottom: 12, borderBottomColor: '#9b9b9b', borderBottomWidth: 0.5 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                            <Image source={require('../../icons/heart_gray.png')} style={{ width: 18, height: 16, marginRight: 5 }} resizeMode='contain' />
                                            <Text style={{ color: '#3A3A38', fontSize: 14, fontWeight: '300' }}>18</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('../../icons/photo.png')} style={{ width: 18, height: 18 }} resizeMode='contain' />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12, color: '#9b9b9b' }}>2018.8.29</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 13, marginRight: 16 }}>수정</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 13, }}>삭제</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Content>
                </Container>
            </SafeAreaView >
        );
    }
}

// 별 이미지 하얀색으로 바꾸기
// shadow 넣기