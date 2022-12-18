import axios from 'axios';
import React, { useEffect, useState } from 'react';

import * as C from './styles';

type ProductsType = {
    nome: string;
    preço: string;
    estoque: number;
    nomeFornecedor: string;
    telefone: string;
}

const ProductItems = () => {

    const [product, setProduct] = useState<ProductsType[]>([]);

    useEffect(() => {

        (async () => {
            const { data } = await axios.get('http://localhost:3333/api/find-products-and-providers')
            setProduct(data.rows)
            console.log(data.rows)
            return data;
        })()

    }, [])


  return (
    <C.Container>
        {product.map((prod, indice) => (
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
                    {prod.nomeFornecedor}
                </td>
                <td>
                    {prod.telefone}
                </td>
                <td>
                    <button>EDIT</button>
                </td>
            </tr>
        ))}
        
    </C.Container>
  );
}

export default ProductItems;