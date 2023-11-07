import styled from 'styled-components'

export const Footer = styled.footer`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 50px;

   color: ${(props) => props.theme.colors.white};

   font-family: ${(props) => props.theme.fonts.family.main};

   .icon {
      color: ${(props) => props.theme.colors.green_600};

      position: relative;
      top: 1px;
   }
`
