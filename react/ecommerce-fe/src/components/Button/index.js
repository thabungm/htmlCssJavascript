import './style.css';
const Button = ({ type, label }) => {
  return (
    <button className='button' type={type}>
      {label}
    </button>
  );
};

export default Button;
