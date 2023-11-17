import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/chat");
      // Check the structure of data to ensure it contains the 'chats' property
      console.log(data); // Check the structure

      // Assuming 'data' has a 'chats' property containing the array of chats
      const chatData = data.chats || []; // Extract 'chats' or default to an empty array
      setChats(chatData);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat, index) => (
        <div key={index}>
          <p>Chat ID: {chat._id}</p>
          <p>Chat Name: {chat.chatName}</p>
          <p>Is Group Chat: {chat.isGroupChat ? 'Yes' : 'No'}</p>
          <p>Users: {chat.users.join(', ')}</p>
          {/* Display other properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default ChatPage;

