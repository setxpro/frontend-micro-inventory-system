import styled from 'styled-components';


export const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    padding: 0 10px;

    input {
        padding: 0.5rem 3px;
        border-radius: 8px;
        border: none;
        outline: none;
        border: 1px solid #555;
        background: transparent;
        color: #fff;
    }

    select {
        padding: 0.5rem 3px;
        border-radius: 8px;
        border: none;
        outline: none;
        border: 1px solid #555;
        background: transparent;
        color: #fff;

        transition: all 1s ease;
        option {
            color: #333;
        }
    }

    button {
        width: 200px;
        padding: 0.5rem 3px;
        margin: auto;
        border-radius: 8px;
        border: none;
    }
`;
