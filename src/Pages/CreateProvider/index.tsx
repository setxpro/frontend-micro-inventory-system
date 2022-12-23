import React from 'react';
import ProvidersItems from '../../Components/Tables/ProvidersItems';
import Table from '../../Components/Tables/Table';
import TheadProvider from '../../Components/Tables/TheadProvider';
import TitlePage from '../../Components/TitlePage';

import * as C from './styles';

const CreateProvider: React.FC = () => {
  return (
    <C.Container>
        <TitlePage title='Add Providers'/>
        <C.ContentFormArea>
          <C.ContentLeftForm>...</C.ContentLeftForm>
          <C.ContentRightTable>
            <Table theadArea={<TheadProvider/>} tbodyArea={<ProvidersItems/> } />
          </C.ContentRightTable>
        </C.ContentFormArea>
    </C.Container>
  );
}

export default CreateProvider;