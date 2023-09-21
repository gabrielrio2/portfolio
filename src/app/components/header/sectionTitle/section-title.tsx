import './section-title.scss'
interface SectionTileProps{
    text:string
}  

export function SectionTile({text} :SectionTileProps){
    return(
        <h3 className="section-title">{text}</h3>
    )
}