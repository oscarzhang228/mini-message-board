function Buttons(props) {
  return (
    <div className="border py-2 px-3 buttons" onClick={props.clickFunction}>
      {props.text}
    </div>
  );
}

export default Buttons;
