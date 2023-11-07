import styled from 'styled-components'

export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: flex-end;

   width: 100%;

   padding: 35px 0;

   nav {
      display: none;

      @media (min-width: 48rem) {
         display: flex;
         align-items: center;
         justify-content: space-between;

         width: 100%;
         max-width: 250px;
         position: relative;

         .feature {
            display: flex;
            align-items: center;

            .icon {
               color: ${(props) => props.theme.colors.green_600};
            }

            p {
               color: ${(props) => props.theme.colors.white};

               font-family: ${(props) =>
                  props.theme.fonts.family.main};
                  font-weight: 800;

               padding: 0 0.625rem;

               cursor: pointer;

               position: relative;

               &::after {
                  content: '';
                  position: absolute;
                  background-color: ${(props) =>
                     props.theme.colors.green_600};
                  height: 2px;
                  width: 0;
                  left: 0.625rem;
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
      }
   }
`
