import React from 'react';
import Button from '../Button';

import * as C from './styles';

const Header: React.FC = () => {
  return (
    <C.Container>
        <Button text='Home'link="/"/>
        <Button text='Add Providers'link="/add-providers"/>
        <Button text='Add Products'link="/add-products"/>
    </C.Container>
  );
}

export default Header;