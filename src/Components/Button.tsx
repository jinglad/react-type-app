type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(e) => handleClick(e, 1)}>Click</button>;
};

export default Button;
