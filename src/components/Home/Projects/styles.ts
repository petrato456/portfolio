import styled from 'styled-components'

export const WrapperProjects = styled.section`
   background: ${(props) => props.theme.colors.background_secondary};

   padding: 6rem 0;

   font-family: ${(props) => props.theme.fonts.family.main};

   h1 {
      color: ${(props) => props.theme.colors.gray_100};

      margin-bottom: 32px;

      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 36px;
   }
   .container {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;

      padding: 64px 0;

      border-top: 1px;
      border-bottom: 1px;
      border-style: solid;
      border-color: ${(props) => props.theme.colors.gray_light};
      border-left: none;
      border-right: none;
   }
   @media (min-width: 75rem) {
      .container {
         justify-content: flex-start;
      }
   }
`
