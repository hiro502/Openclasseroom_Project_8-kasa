import logo from "../../assets/logo-aceeuil.svg"
import Nav from "../../components/header/Nav"

const Header = () => {
  return (
    <header className='header_container'>
      <div className="logo_kasa">
        <img src={logo} alt="logo de Kasa" />
      </div>
      <Nav />
    </header>

  )
}

export default Header