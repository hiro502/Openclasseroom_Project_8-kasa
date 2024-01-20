import logo from '../../assets/logo-footer.png'

function Footer() {
  return (
    <footer className='footer_container'>
    <div className='footer_contents'>
      <div className='footer_logo'>
        <img src={logo} alt="logo de kasa"/>
      </div>
      <p>
        © 2020 Kasa. All rights reserved
      </p>
    </div>
  </footer>
  )
}

export default Footer