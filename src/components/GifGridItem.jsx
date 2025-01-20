export const GifGridItem = ({ titulo, url, id }) => {

  return (
    <div className="card">
        <img src={ url } alt={ titulo }></img>
        <p>{ titulo }</p>
    </div>
  )
}
