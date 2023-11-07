import styled from 'styled-components'

export const Button = styled.button`
   width: 194px;
   height: 48px;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.7rem;

   background-color: ${(props) => props.theme.colors.green_600};
   color: ${(props) => props.theme.colors.gray_50};

   border-radius: 8px;

   font-family: ${(props) => props.theme.fonts.family.main};
   font-weight: 700;

   cursor: pointer;
   transition: 0.4s;

   &:hover {
      background-color: ${(props) => props.theme.colors.green_400};
      transform: scaleX(1.03);
   }

   .icon {
      font-size: 1.2rem;
   }
`
