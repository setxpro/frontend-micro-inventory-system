import React, { ReactNode } from 'react';

import * as C from './styles';

interface TableProps {
    theadArea: ReactNode;
    tbodyArea: ReactNode;
}

const Table: React.FC<TableProps> = ( { theadArea, tbodyArea } ) => {
  return (
      <C.Container>
          {theadArea}
          {tbodyArea}
      </C.Container>
  );
}

export default Table;