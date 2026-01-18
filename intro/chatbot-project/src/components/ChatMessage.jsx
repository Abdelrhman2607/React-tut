import RobotPFP from '../assets/robot.png'
import UserPFP from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({message, sender}){ //destructured props
  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotPFP} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserPFP} className="chat-message-profile" />
      )}
    </div>
  );
}
