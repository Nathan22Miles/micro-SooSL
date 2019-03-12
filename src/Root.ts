import { observable } from 'mobx'

export class Root {
    @observable positions: string[] = []    // an array of selected features
    @observable handshapes: string[] = []
}
