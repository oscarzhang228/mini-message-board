import "./App.css";
import Buttons from "./components/Buttons";
import Message from "./components/Message";
import axios from "axios";
import { useEffect, useState } from "react";
import PopupNew from "./components/PopupNew";
import { ReactDOM } from "react";
import PopupDelete from "./components/PopupDelete";
function App() {
  const [createMessage, changeVisibility] = useState(false);
  const [numMessages, changeNumMessages] = useState(1);
  const [messages, newMessage] = useState([
    <Message
      header="Welcome to the Mini Messageboard"
      body="The New button allows you to create up to 5 messages to be shown on screen. The Store button allows you to store messages and access messages that you have stored previously. The delete button allows you to delete messages."
    ></Message>,
  ]);
  const [deletePopup, changeDelete] = useState(false);
  const newClick = () => {
    if (numMessages > 2) {
      alert("Cannot create more than 3 messages. Please store or delete.");
      return;
    }
    changeVisibility(true);
  };

  const exitPopup = () => {
    changeVisibility(false);
    changeDelete(false);
  };

  const deleteMessage = (index) => {
    changeNumMessages(numMessages - 1);
    const m = messages;
    m.splice(index, 1);
    newMessage(m);
  };

  const deleteClick = () => {
    changeDelete(true);
  };
  const createMessageDOM = (theHeader, theMessage) => {
    const m = messages;
    m.push(<Message header={theHeader} body={theMessage}></Message>);
    newMessage(m);
    changeNumMessages(numMessages + 1);
  };

  return (
    <div className=" mt-1" style={{ maxWidth: "100vw", height: "100vh" }}>
      <div className="d-flex flex-column">
        <div className="d-flex m-5 justify-content-between">
          <Buttons text="New" clickFunction={newClick}></Buttons>
          <Buttons text="Store"></Buttons>
          <Buttons text="Delete" clickFunction={deleteClick}></Buttons>
        </div>
        <div className="d-flex flex-column">
          {messages.map((message, index) => (
            <div class={index}>{message}</div>
          ))}
        </div>
        {createMessage && (
          <PopupNew
            exit={exitPopup}
            createMessageDOM={createMessageDOM}
          ></PopupNew>
        )}
        {deletePopup && (
          <PopupDelete exit={exitPopup} delete={deleteMessage}></PopupDelete>
        )}
      </div>
    </div>
  );
}

export default App;
