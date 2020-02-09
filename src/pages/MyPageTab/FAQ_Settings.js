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
import Accordion from 'react-native-collapsible/Accordion';

const mokup_data = [
    {
        id: 1,
        header_text: '별점 평가는 어떻게 하는 건가요?',
        content_text: '',
        time: ''
    },
    {
        id: 2,
        header_text: '내가 쓴 리뷰는 어디서 보는 건가요?',
        content_text: '고객님이 남기신 리뷰는 마이페이지 > 내가 남긴 리뷰에서 확인 하실 수 있습니다',
        time: '2020-02-08:07:00'
    },
    {
        id: 3,
        header_text: '검색 기록은 어떻게 지우는 건가요?',
        content_text: '',
        time: ''
    },
]




@inject('userStore')
@observer
export default class FAQ_Settings extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            activeSections: []
        };
        this.window = Dimensions.get('window');
        this.inputWidth = this.window.width - 40;
    }

    _renderHeader(item) {
        return (
            <View>
                {/* <TouchableOpacity> */}
                <View
                    style={{
                        width: this.inputWidth,
                        height: 52,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginLeft: 23,
                        // borderBottomColor: '#353535',
                        // borderBottomWidth: 0.5,
                    }}>
                    <Text
                        style={{
                            color: '#353535',
                            fontSize: 15,
                            fontWeight: '500',

                        }}>
                        {item.header_text}
                    </Text>
                </View>
                {/* </TouchableOpacity> */}
            </View>
        )
    }

    _renderContent(item) {
        return (
            <View>
                <Text style={{
                    fontSize: 13, color: '#353535', height: 52, borderBottomColor: '#353535',
                    borderBottomWidth: 0.5, marginLeft: 23, paddingRight: 23
                }}>{item.content_text}</Text>
            </View>
        )
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
                                    fontWeight: '500',
                                    paddingLeft: 5,
                                }}>
                                FAQ
                </Text>
                        </View>
                        <Accordion
                            sections={mokup_data}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            activeSections={this.state.activeSections}
                            onChange={(activeSections) => this.setState({ activeSections })}
                            // containerStyle={{ backgroundColor: 'aqua' }}
                            underlayColor={'aqua'}
                        />
                    </Content>
                </Container>
            </SafeAreaView>
        );
    }
}