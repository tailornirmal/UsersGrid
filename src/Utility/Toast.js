import { useState, useEffect } from 'react';

import './Toast.css';

const Toast = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Disappear after 3 seconds

    return () => clearTimeout(timeoutId); 
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="alert">
          <div className='alert-message'>{message}</div>
        </div>
      )}
    </div>
  );
}

export default Toast;
