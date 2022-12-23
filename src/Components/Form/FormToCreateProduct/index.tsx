import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as C from './styles';

type ProvidersType = {
    id: number;
    nomeFornecedor: string;
}

const FormToCreateProduct: React.FC = () => {

    const [option, setOption] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [minStock, setMinStock] = useState("");

    const [provider, setProvider] = useState<ProvidersType[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:3333/api/find-providers')
            setProvider(data.rows)
            return data;
        })()
    }, [])

    const addProduct = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3333/api/create-products', {
          nome: name,
          fornecedorId: parseInt(option),
          preço: price,
          estoque: parseInt(stock),
          minEstoque: parseInt(minStock)
      })
      window.location.reload()
      return data;
    }


  return(
        <C.ContentForm>
            <input type="text" placeholder="Name's Product" value={name} onChange={e => setName(e.target.value)}/>
                <select onChange={e => setOption(e.target.value)}>
                    <option>Providers</option>
                    {provider.map((item, indice) => (
                    <option value={item.id} key={indice}>{item.nomeFornecedor}</option>
                    ))}
                </select>
                <input type="text" placeholder="Price's Product" value={price} onChange={e => setPrice(e.target.value)}/>
                <input type="text"  placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)}/>
                <input type="text"  placeholder="Min Stock" value={minStock} onChange={e => setMinStock(e.target.value)}/>
                <button onClick={addProduct}>Send</button>
        </C.ContentForm>
    );
}

export default FormToCreateProduct;