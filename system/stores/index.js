import UserStore from './user';

class RootStore {
    constructor(){
        this.userStore = new UserStore(this);
    }
}

export default new RootStore()
