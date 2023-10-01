import styled from "styled-components";

export const Button = styled.button`
    width: 130px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.dark_blue};
    color: ${props => props.theme.colors.white};

    border-radius: 6px;

    font-family: ${props => props.theme.fonts.family.main};

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.hover_dark_blue};
    }

`