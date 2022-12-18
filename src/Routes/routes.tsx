import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout';
import CreateProduct from '../Pages/CreateProduct';
import CreateProvider from '../Pages/CreateProvider';
import TableProducts from '../Pages/TableProducts';

const RoutesApp = () => {
  return (
      <Routes>
          <Route path="/" element={
                <Layout>
                    <TableProducts/>
                </Layout>
            }/>
          <Route path="/add-products" element={
                <Layout>
                    <CreateProduct/>
                </Layout>
            }/>
          <Route path="/add-providers" element={
                <Layout>
                    <CreateProvider/>
                </Layout>
            }/>
      </Routes>
  );
}

export default RoutesApp;