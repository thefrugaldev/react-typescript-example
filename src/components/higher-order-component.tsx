import React from "react";

const HigherOrderComponent: React.FC<{ name: string; message: string }> = ({
  name,
  message,
}) => {
  return (
    <div>
      <p>
        {name}, {message}
      </p>
    </div>
  );
};

const withMessage = (
  WrappedComponent: React.FC<{ name: string; message: string }>
) => {
  const name = "Clayton";
  const message = "Higher Order Components are fun!";

  return class extends React.Component {
    render() {
      return <WrappedComponent name={name} message={message} />;
    }
  };
};

const HOC = withMessage(HigherOrderComponent);

export default HOC;
