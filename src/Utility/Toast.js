import './Toast.css';

function Toast({ message }) {
  return (
    <div className='alert'><span className='alert-message'>{message}</span></div>
  );
}

export default Toast;
