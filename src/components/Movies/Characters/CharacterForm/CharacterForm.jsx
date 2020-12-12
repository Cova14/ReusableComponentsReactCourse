export default function CharacterForm(props) {
    return (
        <>
            <h2>{props.index ? 'Edita' : 'Agrega'} un nuevo personaje</h2>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                onChange={props.handleChangeNewCharacter}
                value={props.form.name}
            />
            <input
                type="text"
                name="img"
                id="photo"
                placeholder="URL de la imagen"
                onChange={props.handleChangeNewCharacter}
                value={props.form.img}
            />
            <textarea
                name="biography"
                id="biography"
                onChange={props.handleChangeNewCharacter}
                value={props.form.description}
            />
            <button
                onClick={props.handleAddNewCharacter}
            >
                    {props.index ? 'Editar' : 'Agregar'} personaje
            </button>
        </>
    )
}
