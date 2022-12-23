import React from 'react';

import * as C from './styles';

const TheadProvider = () => {
  return (
    <C.TheadArea>
        <tr>
        <th>
            Name
        </th>
        <th>
            Number
        </th>
        <th>
            Actions
        </th>
        </tr>
    </C.TheadArea>
  );
}

export default TheadProvider;