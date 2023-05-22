function PopupNew(props) {
  const createMessage = () => {
    props.createMessageDOM(
      document.getElementById("header").value,
      document.getElementById("message").value
    );
    props.exit();
  };
  return (
    <div className="vh-100 vw-100 position-absolute d-flex align-items-center justify-content-center">
      <div
        className="bg-light d-flex flex-column align-items-center p-2 ,"
        style={{ width: "50vw", height: "62vh" }}
      >
        <h2>Create Message</h2>
        <div className="d-flex mt-5">
          <label for="identifier" className="m-2 mr-4">
            Unique ID
          </label>
          <input id="identifier" type="text"></input>
        </div>
        <div className="d-flex mt-4">
          <label for="header" className="m-2 mr-3">
            The Header
          </label>
          <input id="header" type="text"></input>
        </div>
        <div className="d-flex mt-4">
          <label for="message" className="m-2 mr-4">
            Message
          </label>
          <textarea
            rows="10"
            id="message"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="mt-5 d-flex">
          <button
            className="px-3 mr-5 rounded buttons exit"
            onClick={props.exit}
          >
            Exit
          </button>
          <button
            className="px-2 rounded buttons create"
            onClick={createMessage}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupNew;
