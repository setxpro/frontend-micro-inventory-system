import * as C from './styles';

const TheadGeneral = () => {
  return (
    <C.TheadArea>
        <tr>
            <th>
              Products
            </th>
            <th>
              Price
           </th>
            <th>
              Stock
            </th>
            <th>
              Provider Name
            </th>
            <th>
              Provider Number
            </th>
              <th>
             Actions
          </th>
        </tr>
    </C.TheadArea>
  );
}

export default TheadGeneral;