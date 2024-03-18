import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 10px;
  background-color: black;
  font-weight: 500;
  width: 100%;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0.5px solid white;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function PasswordButton() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/forgot-password");
  };

  return <Button onClick={onClick}>Forgot password?</Button>;
}
