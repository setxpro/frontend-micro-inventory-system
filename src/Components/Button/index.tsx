import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as C from './styles';

interface TextButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<TextButtonProps> = ({text, link}) => {

  const navigate = useNavigate()

  return (
        <C.Btn onClick={() => navigate(link)}>{text}</C.Btn>
  );
}

export default Button;