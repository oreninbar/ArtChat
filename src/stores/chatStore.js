import { action, observable, makeObservable } from "mobx";

export class ChatStore {
  @observable messages = [];
   chatId = null;


  constructor() {
    makeObservable(this);
  }

  @action addMessage(message){
    this.messages.push(message)
  }

  @action setChatId(id){
    this.chatId=id;
  }

  getFirstMessages(){
      return this.firstMessages
  }

  getMessages(){
      return this.messages
  }

}


