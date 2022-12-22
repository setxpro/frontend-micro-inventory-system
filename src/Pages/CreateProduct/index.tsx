import React from 'react';
import ProductsItemsTable from '../../Components/Tables/ProductsItemsTable';
import TitlePage from '../../Components/TitlePage';

import * as C from './styles';

const CreateProduct: React.FC = () => {
  return (
    <C.Container>
       <C.Container>
        <TitlePage title='Add Products'/>
        <C.ContentFormArea>
          <C.ContentLeftForm>...</C.ContentLeftForm>
          <C.ContentRightTable>
          <table>
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Price
                </th>
                <th>
                  Stock
                </th>
                <th>
                  Actions
                </th>
              </tr>
              </thead>
              <ProductsItemsTable/>
          </table>
          </C.ContentRightTable>
        </C.ContentFormArea>
    </C.Container>
    </C.Container>
  );
}

export default CreateProduct;