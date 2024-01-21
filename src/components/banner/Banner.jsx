

export default function Banner({img, text, page}) {
  return (
    <div className="banner">
        <img src={img} alt={`banner d'${page}`} />
        <div className="banner_overlay"></div>
        <h1>{text}</h1>
    </div>
  )
}
