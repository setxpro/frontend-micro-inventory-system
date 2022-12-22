
import axios from 'axios';
import { useEffect, useState } from 'react';

import * as C from './styles';

type ProvidersType = {
  nomeFornecedor: string;
    telefone: string;
}

const ProvidersItems = () => {

    const [provider, setProvider] = useState<ProvidersType[]>([]);

    useEffect(() => {

        (async () => {
            const { data } = await axios.get('http://localhost:3333/api/find-providers')
            setProvider(data.rows)
            return data;
        })()

    }, [])


  return (
    <C.Container>
        {provider.map((prod, indice) => (
            <tr key={indice}>
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

export default ProvidersItems;