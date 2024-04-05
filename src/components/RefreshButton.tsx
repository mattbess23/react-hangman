import React from 'react';
import styles from './RereshButton.module.css'

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}className={`${styles.btn}`}
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
