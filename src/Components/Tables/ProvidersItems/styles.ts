import styled from 'styled-components';

export const Container = styled.tbody`
    tr {

        td {
            padding: 0.5rem;
            text-align: center;
            color: #FFF;
        }

        &:nth-child(even) {
            background: #5555;
        }
    }
`;
