import styled from 'styled-components';

export const Container = styled.div`
   padding: 0 1rem;
`;

export const ContentFormArea = styled.div`
   height: calc(100vh - (70px + 65px));

   display: flex;

`;

export const ContentLeftForm = styled.div`
    width: 29.99%;
    height: 100%;
    border-right: 1px solid #555;
`;
export const ContentRightTable = styled.div`
    width: 70%;
    height: 100%;

    table {
        width: 100%;
        thead {
            tr {

                th {
                    background: lightcoral;
                    padding: 0.5rem;
                }
            }
        }
    }
`;