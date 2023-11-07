import { hypographQuery } from "./hypograph"

export const getData = async () => {
    const query = `
  query MyQuery {
     home(where: {id: "clo2hguxt270z0blqchgkam6m"}) {
       title
       subtitle
       technologies {
         name
         id
       }
       projectsId {
         ... on Projects {
           id
           description
           url
           title
           projectimage {
              url
            }
           listProjectsName {
             id
             projectName
           }
         }
       }
       companiesId {
         ... on Companies {
           id
           title
           professionId
           descriptionId
           dateId
           technologiesId {
             ... on Technology {
               id
               name
             }
           }
           imageUrlId
         }
       }
     }
   }
  `

    return hypographQuery(query)
 }