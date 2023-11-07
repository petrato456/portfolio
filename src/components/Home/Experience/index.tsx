import Technology from '@/components/Shared/Technology'
import { Grid } from '@/styles/grid'
import * as Styles from './styles'
import { CompaniesProps, Technologies } from '@/types'

type CompaniesComponentProps = {
   companies: CompaniesProps[]
}

export default function Experience({
   companies,
}: CompaniesComponentProps) {
   return (
      <Grid>
         <Styles.Experience id="experience">
            <div className="title">
               <h1>Experiência Profissional</h1>
               <p>
                  Estou sempre aberto a novos desafios e projetos
                  emocionantes. Vamos trabalhar juntos para criar
                  soluções incríveis para sua empresa!
               </p>
            </div>
            {companies &&
               companies.map((company, index) => (
                  <Styles.Companies key={index}>
                     <div className="line-time-companies">
                        <img
                           src={company.imageUrlId}
                           alt="logo-company"
                        />
                        <div className="line" />
                     </div>

                     <div className="descriptions-companies">
                        <div className="tag">@ {company.title}</div>
                        <div className="office">
                           {company.professionId}
                        </div>
                        <div className="time">{company.dateId}</div>
                        <p>{company.descriptionId}</p>

                        <h2>Competência</h2>
                        <div className="technologies">
                           {company.technologiesId.map(
                              (technology) => (
                                 <Technology
                                    key={technology.id}
                                    name={technology.name}
                                 />
                              )
                           )}
                        </div>
                     </div>
                  </Styles.Companies>
               ))}
         </Styles.Experience>
      </Grid>
   )
}
