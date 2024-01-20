import img from "../../assets/banner-acceuil.png"

export default function Banner() {
  return (
    <div className="banner">
        <img src={img} alt="" />
        <div className="banner_overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}
