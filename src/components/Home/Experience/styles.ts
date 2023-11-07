import styled from 'styled-components'

export const Experience = styled.section`
   display: flex;
   flex-direction: column;
   gap: 4rem;

   width: 100%;

   padding-top: 64px;
   padding-bottom: 128px;

   font-family: ${(props) => props.theme.fonts.family.main};

   .title {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      width: 100%;

      h1 {
         color: ${(props) => props.theme.colors.white};
      }
      p {
         width: 100%;
         max-width: 420px;

         color: ${(props) => props.theme.colors.gray_400};
      }
   }
   @media(min-width: 62rem) {
      flex-direction: row;
      gap: 0;
   }
`

export const Companies = styled.div`
   display: flex;
   gap: 1rem;

   width: 100%;

   .line-time-companies {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      img {
         width: 40px;

         border: 1px solid ${props => props.theme.colors.gray_500};

         border-radius: 50%;
      }
      .line {
         width: 1px;
         height: 100%;
         background-color: ${props => props.theme.colors.gray_500};
      }
   }
   .descriptions-companies {
      display: flex;
      flex-direction: column;
      gap: 8px;

      width: 100%;

      .tag {
         color: ${(props) => props.theme.colors.gray_500};
      }
      .office {
         color: ${(props) => props.theme.colors.white};
      }
      .time {
         color: ${(props) => props.theme.colors.gray_500};
      }
      p {
         width: 100%;
         max-width: 508px;

         color: ${(props) => props.theme.colors.gray_400};
      }

      h2 {
         color: ${(props) => props.theme.colors.white};

         margin-top: 24px;
         margin-bottom: 16px;

         font-size: 14px;
      }

      .technologies {
         display: flex;
         align-items: center;
         flex-wrap: wrap;
         gap: 0.7rem;

         width: 100%;
         max-width: 400px;
      }
   }
   @media(min-width: 62rem) {
      gap: 4rem;
   }
`
