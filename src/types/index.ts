export type Technologies = {
   name: string
   id: string
}

export type listProjectsName = {
   id: string
   projectName: string
}

export type ProjectsProps = {
   id: string
   description: string
   url: string
   title: string
   projectimage: { url: string }
   listProjectsName: listProjectsName[]
}

export type CompaniesProps = {
   id: string
   title: string
   professionId: string
   descriptionId: string
   dateId: string
   technologiesId: Technologies[]
   imageUrlId: string
}

export type PortfolioProps = {
   title: string
   subtitle: string
   photo: string
   technologies: Technologies[]
   projectsId: ProjectsProps[]
   companiesId: CompaniesProps[]
}

export type ListProjectsProps = {
   listProjects: [
      {
         title: string
         description: string
         tecnnologies: string
      },
   ]
}

export type ProjectsPageProps = {
   listprojectspageid: any
}
