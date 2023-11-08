import styled from 'styled-components'

export const Main = styled.section`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   gap: 15px;

   width: 100%;

   padding-bottom: 3rem;

   font-family: ${(props) => props.theme.fonts.family.main};

   .animation {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
   }

   .blur {
      width: 100px;
      position: absolute;
      box-shadow: 100px 100px 100px 100px
         ${(props) => props.theme.colors.green_400};
      z-index: 0;
      animation: identifier infinite;
   }
   @keyframes identifier {
      from {
         width: 200px;
      }
      to {
         width: 500px;
      }
   }

   @media (min-width: 48rem) {
      flex-direction: row-reverse;
      margin: 4rem auto;
      padding-bottom: 0;
   }
   @media (min-width: 62rem) {
      .image-boy {
         display: inherit;

         width: 550px;
         height: 100%;

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

   .title {
      color: ${(props) => props.theme.colors.green_600};

      font-weight: 800;
   }

   h1 {
      width: 100%;
      max-width: 700px;

      color: ${(props) => props.theme.colors.white};

      margin-bottom: 0.5rem;

      font-size: 3rem;
      font-weight: 700;

      line-height: 4rem;

      span {
         -webkit-text-fill-color: transparent;
         -webkit-text-stroke: 1px
            ${(props) => props.theme.colors.white};

         background-image: url('/back.png');
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

      color: ${(props) => props.theme.colors.gray_400};

      font-weight: 600;

      margin-bottom: 1rem;

      line-height: 1.8rem;
   }
`

export const Technologies = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 0.7rem;

   width: 100%;
   max-width: 400px;

   footer {
      display: flex;
      align-items: center;
      gap: 1rem;

      width: 100%;
      max-width: 330px;

      margin-top: 22px;

      li {
         display: flex;
         align-items: center;
         justify-content: start;
         gap: 8px;
         
         width: 100%;
         height: 100%;
         
         color: ${(props) => props.theme.colors.gray_light};
         
         font-size: 24px;
                  
         .icon {
            display: flex;
            align-items: center;
            justify-content: center;

            color: ${(props) => props.theme.colors.gray_light};

            cursor: pointer;
         }
      }
   }
`
