import React from 'react';
import ProductItems from '../../Components/Tables/ProductItems';

import * as C from './styles';

const TableProducts: React.FC = () => {
  return (
    <C.Container>
        <C.Content>
          <table>
            <thead>
              <tr>
                <th>
                  Products
                </th>
                <th>
                  Price
                </th>
                <th>
                  Stock
                </th>
                <th>
                  Provider Name
                </th>
                <th>
                  Provider Number
                </th>
                <th>
                  Actions
                </th>
              </tr>
              </thead>
              <ProductItems/>
          </table>
        </C.Content>
    </C.Container>
  );
}

export default TableProducts;