import Image from "next/image";
import { Experience } from "./components/header/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/header/information/information";
import './styles/home.scss'
import { Emailicon } from "./components/header/icons/email-icon";
import { SocialBtns } from "./components/header/social-btns/social";


export default function Home() {
  return (
    <main className="conteiner" >
      <Header />
      <Experience/>
      <Info/>
    
      <div className="buttons">
        <SocialBtns/>
        
        <a className="btn-primary" href="mailto:gabrielnobreviana2@gmail.com"  >Contact me
        <Emailicon/>
        </a>
        
      </div>
    </main>
  )
}
