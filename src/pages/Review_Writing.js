import React, { Component } from 'react';
import {
    Image,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Container, Content, Tabs, Tab, TabHeading } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

@inject('userStore')
@observer
export default class Review_Writing extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
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
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', borderBottomColor: '#353535',
                        borderBottomWidth: 0.5,
                    }}>
                        <View style={{ padding: 20, }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}>
                                <Image
                                    source={require('../icons/arrow_back.png')}
                                    style={{ width: 20, height: 20 }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 23, color: '#4a4a4a', marginLeft: 5 }}>리뷰쓰기</Text>
                        <View style={{ marginLeft: 195 }}>
                            <TouchableOpacity>
                                <Image style={{ width: 12, height: 12 }} source={require('../icons/circle_check.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Content>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 91,
                        }}>
                            <Image style={{ width: 30.9, height: 29.4, marginRight: 11 }} source={require('../icons/rate_stroke.png')} />
                            <Image style={{ width: 30.9, height: 29.4, marginRight: 11 }} source={require('../icons/rate_stroke.png')} />
                            <Image style={{ width: 30.9, height: 29.4, marginRight: 11 }} source={require('../icons/rate_stroke.png')} />
                            <Image style={{ width: 30.9, height: 29.4, marginRight: 11 }} source={require('../icons/rate_stroke.png')} />
                            <Image style={{ width: 30.9, height: 29.4, marginRight: 11 }} source={require('../icons/rate_stroke.png')} />
                            <Text style={{ color: '#bb996a', fontSize: 14 }}>0.0</Text>
                        </View>
                        <View style={{ backgroundColor: '#9B9B9B', height: 0.5, marginLeft: 18 }}></View>
                        <View>
                            <TextInput multiline
                                style={{ height: 350, paddingHorizontal: 23, marginTop: 25, justifyContent: "flex-start", fontSize: 14 }} placeholder={'이 술에 대한 생각을 자유롭게 적어주세요.'}>

                            </TextInput>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <View style={{ width: 100, height: 100, backgroundColor: '#efefef', justifyContent: 'center', alignItems: 'center', marginLeft: 23, marginRight: 10, marginVertical: 23 }}>
                                        <Image style={{ width: 10, height: 10 }} source={require('../icons/plus.png')} />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 100, height: 100, marginRight: -20, marginVertical: 23, }}
                                        source={require('../images/soju_review_photo.jpg')} />
                                    <TouchableOpacity style={{ flexDirection: 'row', marginRight: 4 }} >
                                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', width: 26, height: 26, borderColor: '#9b9b9b', borderWidth: 0.3, borderRadius: 13, marginTop: 10 }}>
                                            <Image
                                                style={{ width: 10, height: 10, }} source={require('../icons/delete.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 100, height: 100, marginRight: -20, marginVertical: 23, }}
                                        source={require('../images/soju_review_photo.jpg')} />
                                    <TouchableOpacity style={{ flexDirection: 'row', marginRight: 4 }} >
                                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', width: 28, height: 28, borderColor: '#9b9b9b', borderWidth: 0.3, borderRadius: 14, marginTop: 10 }}>
                                            <Image
                                                style={{ width: 10, height: 10, }} source={require('../icons/delete.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </ScrollView>
                        <View style={{ backgroundColor: '#9B9B9B', height: 0.5, marginLeft: 18 }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#FFFFFF', marginVertical: 18, marginLeft: 23, marginRight: 10, width: 81, height: 36, borderColor: '#9b9b9b', borderWidth: 0.5, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#9b9b9b', fontSize: 14 }}>#태그추가</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 12, flexDirection: 'row', backgroundColor: '#f4f1ee', marginVertical: 18, marginRight: 10, width: 81, height: 36, borderColor: '#9b9b9b', borderWidth: 0.5, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#9b9b9b', fontSize: 14 }}>#삼겹살</Text>
                                <TouchableOpacity>
                                    <Image style={{ width: 7, height: 7, marginLeft: 19 }}
                                        source={require('../icons/delete.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}
