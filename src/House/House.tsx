type HouseProps = {
  adress: String
  name: String
  dates: [String, String]
  price: number
  currency?: String
}

const House = ({
  adress,
  name,
  dates,
  price,
  currency = 'MAD'
}: HouseProps) => {
  return (
    <article className="house">
      <h2 className="type">{adress}</h2>
      <h3 className="name">{name}</h3>
      <div className="dates" role="time">
        <time>{dates[0]}</time>&nbsp;-&nbsp;
        <time>{dates[1]}</time>
      </div>
      <div className="price" role="price">
        {currency}
        {price}
      </div>
    </article>
  )
}

export default House
