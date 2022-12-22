import React from 'react';
import ProvidersItems from '../../Components/Tables/ProvidersItems';
import TitlePage from '../../Components/TitlePage';

import * as C from './styles';

const CreateProvider: React.FC = () => {
  return (
    <C.Container>
        <TitlePage title='Add Providers'/>
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
                  Number
                </th>
                <th>
                  Actions
                </th>
              </tr>
              </thead>
              <ProvidersItems/>
          </table>
          </C.ContentRightTable>
        </C.ContentFormArea>
    </C.Container>
  );
}

export default CreateProvider;