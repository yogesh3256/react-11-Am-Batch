const CommonButton = ({label, onClick, type, className}) => {
    return (
      <button
        className={`h-9 rounded px-3 ` + className}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  export default CommonButton;