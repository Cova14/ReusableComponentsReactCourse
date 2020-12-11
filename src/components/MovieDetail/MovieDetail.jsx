import CharacterDetail from '../CharacterDetail';
import './styles.css'

export default function MovieDetail({
    movie,
    index,
    handleSelectMovie,
    handleDeleteMovie
}) {
    return (
        <div className='movie-detail-container'>
            <div className='details-container'>
                <div className='title-container'>
                    <h1>{movie.title}</h1>
                    <img className='movie-picture' src={movie.img} alt={movie.title}/>
                </div>
                <div>
                    <h2>Sinopsis</h2>
                    <p>{movie.description}</p>
                </div>
            </div>

            <h2>Lista de personajes</h2>
            <div className='characters-container'>
                {movie.characters.length > 0
                    ? movie.characters.map((character, index) =>
                    <CharacterDetail character={character} key={index} />

                ): <p> No ay nada aki karnal ira  </p>   }
            </div>
            <button onClick={() => handleSelectMovie(index)}>Editar película</button>
            <button onClick={() => handleDeleteMovie(index)}>Eliminar película</button>
        </div>
    )
}