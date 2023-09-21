import Image from 'next/image'
import './header.scss'

export function Header(props:any) {
  return (
    <div className='header'>

      <div>
        <h1> Hi, i´m Gabriel! 👋</h1>
        <h2> Software Engineer</h2>
      </div>
      <Image

        src="/Foto.jpg"
        alt="Next.js Logo"
        width={325}
        height={290}
        priority
      />
    </div>
  )

}