function Message(props) {
  return (
    <div className="m-3 border d-flex flex-column justify-content-center p-5">
      <h1 className="align-self-center pb-2 ">{props.header}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default Message;
