import { useState } from "react";
function PopupStore(props) {
  const [clicked1, setClicked1] = useState(
    "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
  );
  const [clicked2, setClicked2] = useState(
    "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
  );
  const [clicked3, setClicked3] = useState(
    "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
  );
  const [messageStore, setMessageStore] = useState(-1);
  const store = () => {
    const message = document.getElementById(messageStore);
    props.createDataBase(
      message.getAttribute("header"),
      message.getAttribute("body"),
      message.getAttribute("ID")
    );
    props.exit();
  };
  const selectMessage = (messageNum) => {
    setMessageStore(messageNum - 1);
    if (messageNum === 1) {
      setClicked1(
        "bg-warning text-light d-flex justify-content-center align-items-center mt-5"
      );
      setClicked2(
        "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
      );
      setClicked3(
        "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
      );
    } else if (messageNum === 2) {
      setClicked2(
        "bg-warning text-light d-flex justify-content-center align-items-center mt-5"
      );
      setClicked1(
        "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
      );
      setClicked3(
        "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
      );
    } else {
      setClicked3(
        "bg-warning text-light d-flex justify-content-center align-items-center mt-5"
      );
      setClicked1(
        "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
      );
      setClicked2(
        "bg-dark text-light d-flex justify-content-center align-items-center mt-5"
      );
    }
  };
  return (
    <div className="vh-100 vw-100 position-absolute d-flex align-items-center justify-content-center">
      <div
        className="bg-light d-flex flex-column align-items-center p-2 ,"
        style={{ width: "50vw", height: "62vh" }}
      >
        <h2>Store Message</h2>
        <div
          className={clicked1}
          onClick={() => selectMessage(1)}
          style={{ width: "80%", height: "15%", fontSize: "2.5rem" }}
        >
          Message 1
        </div>
        <div
          className={clicked2}
          onClick={() => selectMessage(2)}
          style={{ width: "80%", height: "15%", fontSize: "2.5rem" }}
        >
          Message 2
        </div>
        <div
          className={clicked3}
          onClick={() => selectMessage(3)}
          style={{ width: "80%", height: "15%", fontSize: "2.5rem" }}
        >
          Message 3
        </div>
        <div className="mt-5 d-flex">
          <button
            className="px-3 mr-5 rounded buttons exit"
            onClick={props.exit}
          >
            Exit
          </button>
          <button className="px-2 rounded buttons create" onClick={store}>
            Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupStore;
