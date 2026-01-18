import { useState } from 'react'

import { ChatInput } from './components/ChatInput'

import { Chatbot } from 'supersimpledev'
import { ChatMessage } from './components/ChatMessage'
import ChatMessages from './components/ChatMessages'

import './App.css'

function App(){
  const [chatMessages, setChatMessages] = useState([])

  return(
    <div className = "app-container">
    <ChatMessages 
      chatMessages = {chatMessages}
    />
    <ChatInput
      chatMessages = {chatMessages}
      setChatMessages = {setChatMessages}
    />
    </div>
  );
}


export default App
