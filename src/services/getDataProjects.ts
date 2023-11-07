import { hypographQuery } from "./hypograph"

export const getDataProjects = async () => {
    const query = `
    query MyQuery {
        projectspage(where: {id: "cloodwssv4bal0blnw0efllup"}) {
          listprojectspageid {
            ... on Listprojectspage {
              id
              description
              title
              tecnnologies
            }
          }
        }
      }
    `
    return hypographQuery(query)
}