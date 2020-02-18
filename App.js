import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Root} from 'native-base';
import {Provider} from 'mobx-react';
import Router from "./system/router";
import rootStore from './system/stores';

console.log = () => {};

export default class App extends Component {
    render() {
        return (
          <Provider {...rootStore}>
              <Root>
                  <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
                  <Router/>
              </Root>
          </Provider>
        )
    }
}
