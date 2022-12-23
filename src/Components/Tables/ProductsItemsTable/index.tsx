
import axios from 'axios';
import { useEffect, useState } from 'react';

import * as C from './styles';

type ProductsType = {
    nome: string;
    preço: string;
    estoque: number;
    telefone: string;
}

const ProductsItemsTable = () => {

    const [products, setProducts] = useState<ProductsType[]>([]);

    useEffect(() => {

        (async () => {
            const { data } = await axios.get('http://localhost:3333/api/find-products')
            setProducts(data.rows)
            return data;
        })()

    }, [])


  return (
    <C.Container>
        {products.map((prod, indice) => (
            <tr key={indice}>
                <td>
                    {prod.nome}
                </td>
                <td>
                    {prod.preço}
                </td>
                <td>
                    {prod.estoque}
                </td>
                <td>
                    <button>EDIT</button>
                </td>
                <td>
                    <button>DEL</button>
                </td>
            </tr>
        ))}
        
    </C.Container>
  );
}

export default ProductsItemsTable;