import Image from 'next/image'
import CarouselComponent from './component/carousel/carroulselImage.component'
import Catalogo from './component/catalogo.component'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{backgroundColor:'#2D2D2D'}}>
      <div className='px-16 '>
        <CarouselComponent/>
        <p>What premuin for free</p>
        <Catalogo/>
      </div>
      <br></br>
    </main>
  )
}
