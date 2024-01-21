import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import img from '../../assets/banner-props.png'


export default function A_propos() {
  return (
    <>
      <Banner img={img} page='A propos'/>
      <div className='apropos_contents'>
        <Collapse page='apropos'/>
      </div>
    </>
    
  )
}

