import styled from 'styled-components'

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;

   background-color: ${(props) => props.theme.colors.background};
`

export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   width: 100%;

   padding: 15px 0;

   nav {
      display: none;

      @media (min-width: 48rem) {
         display: flex;
         align-items: center;
         justify-content: space-between;

         width: 100%;
         max-width: 450px;
         position: relative;

         p {
            color: ${(props) => props.theme.colors.white};

            font-family: ${(props) => props.theme.fonts.family.main};

            padding: 0 0.625rem;

            cursor: pointer;

            position: relative;

            &::after {
               content: '';
               position: absolute;
               background-color: ${(props) => props.theme.colors.dark_blue};
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
`

export const Main = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 20px;

   width: 100%;

   margin-top: 3rem;

   .blur {
      width: 300px;
      position: absolute;
      box-shadow: 0 0 1000px 50px #1d4ed8;
      z-index: 0;
      left: 150px;
      bottom: 450px;
   }

   .image-boy {
      width: 320px;
      height: 100%;
   }

   @media (min-width: 48rem) {
      flex-direction: row-reverse;
      margin: 8rem auto;
   }
   @media (min-width: 62rem) {
      .image-boy {
         width: 550px;
         position: relative;
         bottom: 50px;
      }
   }
`

export const Title = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;

   width: 100%;

   h1 {
      width: 100%;
      max-width: 700px;

      color: ${(props) => props.theme.colors.white};

      margin-bottom: 1rem;

      font-family: ${(props) => props.theme.fonts.family.main};
      font-size: 3rem;
      font-weight: 700;

      line-height: 4rem;

      span {
         -webkit-text-fill-color: transparent;
         -webkit-text-stroke: 1px ${(props) => props.theme.colors.white};

         background-image: url("/back.png");
         -webkit-background-clip: text;
         background-position: 0 0;
         animation: back 15s linear infinite;
      }
      @keyframes back {
         100% {
            background-position: 2500px 0;
         }
      }
   }
   p {
      width: 100%;
      max-width: 600px;

      color: ${(props) => props.theme.colors.gray_light};

      font-family: ${(props) => props.theme.fonts.family.main};

      margin-bottom: 2rem;

      line-height: 1.8rem;
   }
`

export const Features = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   grid-column-gap: 2rem;
   grid-row-gap: 2rem;

   position: relative;
`

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.6rem;

   background-color: ${(props) => props.theme.colors.gray};

   padding: 3rem 2rem;

   border-radius: 6px;

   box-shadow: 10px 5px 5px ${(props) => props.theme.colors.hover_card};

   header {
      display: flex;
      justify-content: space-between;

      color: ${(props) => props.theme.colors.white};

      font-family: ${(props) => props.theme.fonts.family.main};

      h1 {
         margin-bottom: 2rem;
      }
      .icon {
         font-size: 1.5rem;

         cursor: pointer;

         &:hover {
            scale: 1.2;
         }
      }
   }
   .description {
      color: ${(props) => props.theme.colors.gray_light};
      opacity: 0.9;
      margin-bottom: 0.5rem;
   }
   footer {
      display: flex;
      align-items: center;
      gap: 1rem;

      width: fit-content;

      color: ${(props) => props.theme.colors.white};

      font-family: ${(props) => props.theme.fonts.family.main};

      cursor: pointer;

      &:hover {
         p {
            opacity: 0.7;
         }
         .arrow-icon {
            animation: bounce 1.5s infinite;
         }
      }
   }
   @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
         transform: translateY(0);
      }
      40% {
         transform: translateY(-5px);
      }
      60% {
         transform: translateY(-10px);
      }
   }
`

export const Technologies = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
   grid-column-gap: 2rem;
   grid-row-gap: 2rem;

   .card-technologies {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;

      height: 190px;

      background-color: ${(props) => props.theme.colors.gray};
      color: ${(props) => props.theme.colors.white};

      padding: 1.5rem 1rem;

      border-radius: 20px;
      text-align: center;

      h1 {
         font-size: 1.2rem;
         font-family: ${(props) => props.theme.fonts.family.main};
      }

      div {
         font-size: 1.5rem;
      }

      &:hover {
         scale: 1.05;
         transition: 1s;
      }
   }
`

export const Footer = styled.footer`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;

   margin-top: 8rem;

   padding: 2rem 0;

   li {
      display: flex;
      gap: 2rem;

      color: ${(props) => props.theme.colors.white};

      font-size: 2rem;

      list-style: none;
   }
   @media (min-width: 48rem) {
      flex-direction: row;
      li {
         flex-direction: row;
         align-items: center;
         gap: 3rem;

         > svg {
            cursor: pointer;

            &:hover {
               scale: 1.2;
            }
         }
      }
   }
`

export const GridTitle = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   margin: 4rem 0;

   position: relative;

   .blur {
      width: 500px;
      position: absolute;
      box-shadow: 0 0 1000px 50px ${props => props.theme.colors.hover_dark_blue};
      z-index: 0;
      right: 50%;
      left: 50%;
   }

   h1 {
      color: ${(props) => props.theme.colors.white};

      font-family: ${(props) => props.theme.fonts.family.main};
      font-size: 3rem;

     
   }

   @media (min-width: 48rem) {
      margin: 7rem 0;
   }
`
