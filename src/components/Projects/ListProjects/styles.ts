import styled from 'styled-components'

export const WrapperListProjects = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   column-gap: 1rem;
   row-gap: 1rem;

   width: 100%;
   height: 100%;

   margin:100px 0;

   @media(min-width: 75rem) {
    justify-content: center;
    grid-template-columns: repeat( auto-fit,minmax(300px, 350px));
   }
`

export const Card = styled.div`
   width: 100%;

   background-color: ${(props) => props.theme.colors.background_card};

   opacity: 0.6;

   border-radius: 8px;

   &:hover {
      opacity: 1;
   }

   .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      padding: 32px;

      font-style: normal;

      h1 {
         color: ${(props) => props.theme.colors.gray_50};

         font-size: 16px;
         font-weight: 500;
         line-height: 24px;
      }

      p {
         color: ${(props) => props.theme.colors.gray_400};

         font-size: 16px;
         font-weight: 400;
         line-height: 24px;
      }
      span {
         color: ${(props) => props.theme.colors.gray_400};

         margin-top: 24px;

         font-family: Inter;
         font-size: 14px;
         font-weight: 500;
         line-height: 20px;
      }
   }
`
