import React from 'react';
import ProductItems from '../../Components/Tables/ProductItems';
import Table from '../../Components/Tables/Table';
import TheadGeneral from '../../Components/Tables/TheadGeneral';

import * as C from './styles';

const TableProducts: React.FC = () => {
  return (
    <C.Container>
        <C.Content>
          <Table theadArea={<TheadGeneral/>} tbodyArea={<ProductItems/>}/>
        </C.Content>
    </C.Container>
  );
}

export default TableProducts;