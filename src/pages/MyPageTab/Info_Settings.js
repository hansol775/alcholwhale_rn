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
import { Container, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

@inject('userStore')
@observer
export default class Info_Settings extends Component {
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
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={require('../../icons/arrow_back.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <Content backgroundColor="#FFFFFF">
                        <View
                            style={{
                                height: 52,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginLeft: 20,
                                borderBottomColor: '#353535',
                                borderBottomWidth: 0.5,
                            }}>
                            <Text
                                style={{
                                    color: '#353535',
                                    fontSize: 23,
                                    fontWeight: '800',
                                    paddingLeft: 5,
                                }}>
                                술고래 정보
                </Text>
                        </View>
                        <TouchableOpacity>
                            <View
                                style={{
                                    width: this.inputWidth,
                                    marginLeft: 20,
                                    height: 69,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    borderBottomColor: '#353535',
                                    borderBottomWidth: 0.5,
                                }}>
                                <Text
                                    style={{
                                        justifyContent: 'flex-start',
                                        color: '#353535',
                                        fontSize: 15,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    버전
                </Text>
                                <Text
                                    style={{
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                        color: '#bb996a',
                                        fontSize: 13,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    4. 0. 24
                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View
                                style={{
                                    width: this.inputWidth,
                                    marginLeft: 20,
                                    height: 52,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginLeft: 23,
                                    borderBottomColor: '#353535',
                                    borderBottomWidth: 0.5,
                                }}>
                                <Text
                                    style={{
                                        color: '#353535',
                                        fontSize: 15,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    서비스 이용약관
                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View
                                style={{
                                    width: this.inputWidth,
                                    marginLeft: 20,
                                    height: 52,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginLeft: 23,
                                    borderBottomColor: '#353535',
                                    borderBottomWidth: 0.5,
                                }}>
                                <Text
                                    style={{
                                        color: '#353535',
                                        fontSize: 15,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    개인정보 처리방침
                </Text>
                            </View>
                        </TouchableOpacity>

                    </Content>
                </Container>
            </SafeAreaView>
        );
    }
}