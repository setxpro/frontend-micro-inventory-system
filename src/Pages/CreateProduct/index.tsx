import React from 'react';
import ProductsItemsTable from '../../Components/Tables/ProductsItemsTable';
import TitlePage from '../../Components/TitlePage';

import * as C from './styles';
import FormToCreateProduct from '../../Components/Form/FormToCreateProduct';
import TheadProducts from '../../Components/Tables/TheadProducts';
import Table from '../../Components/Tables/Table';

const CreateProduct: React.FC = () => {

  return (
    <C.Container>
       <C.Container>
        <TitlePage title='Add Products'/>
        <C.ContentFormArea>
          <C.ContentLeftForm>
            <FormToCreateProduct/>
          </C.ContentLeftForm>
          <C.ContentRightTable>
          <Table theadArea={<TheadProducts/>} tbodyArea={<ProductsItemsTable/>}/>
          </C.ContentRightTable>
        </C.ContentFormArea>
    </C.Container>
    </C.Container>
  );
}

export default CreateProduct;