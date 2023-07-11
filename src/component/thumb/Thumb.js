import thumb from './Thumb.module.css'


function Thumb(props) {
  const overview = props.value.overview.length>0

  return (
    <div className={thumb.main} >
      <figure className={thumb.figure}>
      <img className={thumb.image} src={require( `../../assets/images/${props.value.image}`)} alt={props.value.name} />
      <figcaption className={thumb.figcaption}>
          <h2>{props.value.name}</h2>
          <div className={thumb.links}>
          <a href={props.value.source}><i className="fa-solid fa-code"></i> Source code</a>
          {overview?<a href={props.value.overview}><i className="fa-regular fa-circle-play"></i> Live Demo</a>:<></>}
          </div>
      </figcaption>
      </figure>

    
    </div>
  )
}

export default Thumb