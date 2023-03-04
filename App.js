"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return <button onClick={() => setLiked(true)}>Like</button>;
}

/* ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(LikeButton)
); */

const Message = (props) => <div className="message">{props.msg}</div>;

function CharacterCount({ text }) {
  return (
    <div>
      {`The text "${text}" has `}
      {text.length ? <strong>{text.length}</strong> : "No"}
      {" characters"}
    </div>
  );
}

const element = (
  <div className="container">
    <Message msg="Hello World" />
    <Message msg="Goodbye World" />
    <CharacterCount text="Hello World" />
    <CharacterCount text="" />
    <LikeButton />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
