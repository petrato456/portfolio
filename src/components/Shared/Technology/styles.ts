import styled from 'styled-components'

export const Technology = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 8px;

   background-color: ${(props) => props.theme.colors.green_900};
   color: ${(props) => props.theme.colors.green_400};

   padding: 4px 12px;

   font-weight: 700;

   border-radius: 8px;

   &:hover {
      background-color: ${(props) => props.theme.colors.green_400};
      color: ${(props) => props.theme.colors.white};
   }
`
