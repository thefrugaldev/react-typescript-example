import React from "react";

const StatelessComponent: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default StatelessComponent;
