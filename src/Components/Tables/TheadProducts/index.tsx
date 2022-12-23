import React from 'react';

import * as C from './styles';

const TheadProducts = () => {
  return (
    <C.TheadArea>
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
    </C.TheadArea>
  );
}

export default TheadProducts;