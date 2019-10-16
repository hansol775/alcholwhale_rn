import {PermissionsAndroid, Platform} from 'react-native';
import {observable, action} from "mobx";
import api from './api';

export default class UserStore {
    constructor(rootStore){
        this.rootStore = rootStore;
        this.api = api;
    }
}