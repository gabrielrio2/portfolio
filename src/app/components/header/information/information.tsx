import { SectionTile } from '../sectionTitle/section-title'
import './information.scss'

export function Info(){
    return(
        <div className='infos'>
        
        <SectionTile text='Languages'/>
        <div className='languages-info'>
          <span>  EN-Fluent</span>
          <span>  PT-BR - Native Speaker</span>
        </div>
        <SectionTile text='Education'/>
        <div className='educational-info'>
         <span>🎓</span>
          <span>Information system Bachelors Degree - Universidade Estacio de Sá </span>
        </div>
      </div>
    )
}