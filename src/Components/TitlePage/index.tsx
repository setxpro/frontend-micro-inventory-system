import React from 'react';

import * as C from './styles';

interface TextProps {
  title: string;
}

const TitlePage: React.FC<TextProps> = ({title}) => {
  return (
        <C.ContentTitle>
          <C.H1>{title}</C.H1>
        </C.ContentTitle>
  );
}

export default TitlePage;