function Movie(props) {

    console.log("props", props)
  return (

  <div key={props.details.id} className="card">
    <p>{props.details.title}</p>
    <p>{props.details.year}</p>
    {/* <img src={props.details.imgURL} alt="movie" /> */}

    {props.details.imgURL ? (
      <img src={props.details.imgURL} />
    ) : (
      <img src="https://dummyimage.com/182x268/ffffff/000000" />
    )}

    <p>Rating: {props.details.rating}</p>
    {props.details.rating > 8 && <p>RECOMMENDED</p>}

    <br></br>
    {/* <button onClick={ () => {deleteMovie(props.details.id)}}>
                            Delete this movie
                            </button> */}
  </div>
)}

export default Movie;
