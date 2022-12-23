import React, { useState } from 'react';
import axios from 'axios';
import * as C from './styles';

const FormToCreateProvider: React.FC = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const addProviders = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3333/api/create-providers', {
        nomeFornecedor: name,
        telefone: parseInt(phone),
      })
      window.location.reload()
      return data;
    }


  return(
        <C.ContentForm>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)}/>
                <button onClick={addProviders}>Send</button>
        </C.ContentForm>
    );
}

export default FormToCreateProvider;