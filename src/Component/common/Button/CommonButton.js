const CommonButton = ({label, onClick, type, className}) => {
    return (
      <button
        className={`` + className}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  export default CommonButton;