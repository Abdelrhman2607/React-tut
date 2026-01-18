import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');

  function saveInputText(event){
    setInputText(event.target.value);
  }

  function sendMessage(){

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ]
    setChatMessages(newChatMessages);
    

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  return(
    <div className = "chat-input-container">
      <input 
        className = "chat-input"
        size = '30'
        placeholder = "Send a message to the Chatbot"
        onChange = {saveInputText}
        value = {inputText}
      />
      <button 
        onClick = {sendMessage}
        className = "send-button"
      >
        Send</button>
    </div>
  );
}
