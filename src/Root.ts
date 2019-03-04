import { observable } from 'mobx'

export class Root {
    @observable positions: string[] = []
}