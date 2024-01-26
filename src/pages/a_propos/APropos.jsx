import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import img from '../../assets/banner-props.png'
import dataPropos from '../../data/apropos.json'


export default function A_propos() {


  return (
    <>
      <Banner img={img} page='A propos'/>
      <div className='apropos_contents'>
        {dataPropos.map((dataPropos, index) =>(
          <Collapse key={index} page='apropos' title={dataPropos.title} text={dataPropos.text} />
        ))} 
      </div>
    </>
    
  )
}

