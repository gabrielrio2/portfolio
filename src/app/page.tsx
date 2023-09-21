import { Header } from "./components/header/header";
import'./styles/home.scss'


export default function Home() {
  return (
    <main className="conteiner" > 
      <Header/>
      
      <div className='experience'>
        <h3>Experiencia</h3>
        <p>Texto</p>
        <div className='experience-time'></div>
        <div className='infos'>
          <h3>idiomas</h3>
          <div className='languages-info'>
            <span>EN-Fluent</span>
            <span>  PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className='educational-info'>
            <span> </span>
            <span>Information system Bachelors Degree - Universidade Estacio de Sá </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
      </div>

    </main>
  )
}
