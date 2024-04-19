import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

const RefreshButton: React.FC = () => {
  const handleClick = () => {
    window.location.reload();
  }; 

  return (
    <div>
      <Button onClick={handleClick}>Refresh</Button>
    </div>
  );
};

export default RefreshButton;
