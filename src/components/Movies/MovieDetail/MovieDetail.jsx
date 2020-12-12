import { useState } from 'react'
import CharacterDetail from '../Characters/CharacterDetail';
import CharacterForm from '../Characters/CharacterForm';
import './styles.css'

const newCharacterInitialState = {
    name: '',
    img: '',
    biography: ''
}

export default function MovieDetail({
    movie,
    index,
    handleSelectMovie,
    handleDeleteMovie,
    handleAddCharacter
}) {
    const [newCharacter, setNewCharacter] = useState(newCharacterInitialState)

    const handleChangeNewCharacter = event => {
        setNewCharacter({
            ...newCharacter,
            [event.target.name]: event.target.value
        })
    }

    const handleAddNewCharacter = () => {
        handleAddCharacter(newCharacter, index)
    }

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
            <CharacterForm
                    form={newCharacter}
                    handleChangeNewCharacter={handleChangeNewCharacter}
                    handleAddNewCharacter={handleAddNewCharacter}
                />
            <br />
            <br />
            <br />
            <button onClick={() => handleSelectMovie(index)}>Editar película</button>
            <button onClick={() => handleDeleteMovie(index)}>Eliminar película</button>
        </div>
    )
}