import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {ChatStore} from './stores/chatStore.js'
import {Provider} from 'mobx-react' 


let chat_store=new ChatStore();

chat_store.messages.push("Hi how are you?")


let stores={chat_store}


ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);





