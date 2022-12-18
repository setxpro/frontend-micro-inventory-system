import { ReactNode } from 'react';

import * as C from './styles';

const Main = ({children}:{children: ReactNode}) => {
  return (
    <C.Container>
        {children}
    </C.Container>
  );
}

export default Main;