

export default function card({data}) {
    return (
        <div className="card_content">
            <img src={data.cover} alt={data.alt} />
            <div className="card_overlay"></div>
            <h3>{data.title}</h3>
        </div>
    )
}
 
