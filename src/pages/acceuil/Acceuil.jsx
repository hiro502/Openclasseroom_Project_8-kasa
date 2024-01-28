import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import img from "../../assets/banner-acceuil.png"

const Acceuil = () => {
  return (
    <>
        <Banner img={img} text='Chez vous, partout et ailleurs' page='acceuil' />
        <Gallery />
    </>
  )
}

export default Acceuil