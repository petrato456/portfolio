import styled from 'styled-components'

export const WrapperHero = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 24px;

   font-family: ${(props) => props.theme.fonts.family.main};

   h1 {
      color: ${(props) => props.theme.colors.gray_100};
   }
   p {
      width: 100%;
      max-width: 640px;

      color: ${(props) => props.theme.colors.gray_400};

      text-align: center;
   }
   .return {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${(props) => props.theme.colors.gray_100};

      margin-top: 24px;

      cursor: pointer;

      .icon {
         font-size: 20px;
      }
      span {
         position: relative;
         font-size: 14px;
         font-style: normal;
         font-weight: 500;
         line-height: 20px;

         &::after {
            content: '';
            position: absolute;
            background-color: ${(props) => props.theme.colors.white};
            height: 2px;
            width: 0;
            left: 0.1rem;
            bottom: -0.625rem;
            transition: all 0.3s ease;
         }
         &:hover {
            &::after {
               width: 90%;
            }
         }
      }
   }
   @media (min-width: 75rem) {
      margin-top: 70px;
      h1 {
         font-size: 36px;
         font-style: normal;
         font-weight: 500;
         line-height: 40px;
      }
      p {
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
         line-height: 24px;
      }
   }
`
