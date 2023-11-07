import styled from 'styled-components'

export const Card = styled.div`
   .container-card {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 48px;

      width: 100%;

      .image {
         width: 100%;
         max-width: 620px;
         height: 304px;

         border-radius: 8px;
      }
      .descriptions {
         display: flex;
         flex-direction: column;
         align-items: start;
         justify-content: flex-start;
         gap: 24px;

         width: 100%;
         height: 100%;

         header {
            display: flex;
            gap: 4px;

            color: ${(props) => props.theme.colors.gray_50};
         }
         p {
            width: 100%;
            max-width: 594px;

            color: ${(props) => props.theme.colors.gray_400};

            line-height: 24px;
         }
         .container-technology {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.7rem;

            width: 100%;
            max-width: 400px;
         }
         span {
            display: flex;
            align-items: center;
            gap: 0.8rem;

            color: ${(props) => props.theme.colors.gray_100};

            margin-top: 8px;

            cursor: pointer;

            .icon {
               font-size: 1.2rem;
            }

            position: relative;

            &::after {
               content: '';
               position: absolute;
               background-color: ${(props) =>
                  props.theme.colors.white};
               height: 2px;
               width: 0;
               left: 0.1rem;
               bottom: -0.625rem;
               transition: all 0.3s ease;
            }
            &:hover {
               &::after {
                  width: 70%;
               }
            }
         }
      }
      @media (min-width: 75rem) {
         flex-direction: row;
         .image {
            height: 100%;
         }
      }
   }
`
