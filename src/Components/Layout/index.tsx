import { ReactNode } from 'react';
import Header from '../Header';
import Main from '../Main';

import * as C from './styles';

const Layout = ({children}:{children: ReactNode}) => {
  return (
    <C.Container>
        <Header/>
        <Main children={children}/>
    </C.Container>
  );
}

export default Layout;