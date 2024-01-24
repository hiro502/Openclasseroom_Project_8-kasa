import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import img from '../../assets/banner-props.png'
import dataPropos from '../../data/apropos.json'




export default function A_propos() {

//  const [dataPropos, setDataPropos] = useState([]);

//  useEffect(() => {
//   const fetchData = async () => {

//     try{
//       const response = await  axios.get('/apropos.json');
//       setDataPropos(response.data);
//       console.log('Data:', response.data);
//     } catch (error) {
//       console.error('Error fetching data', error);
//     }

//   };

//   fetchData();
// }, []);


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

