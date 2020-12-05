export default function MovieForm(props) {
    return (
        <>
            <h2>Agrega una nueva película</h2>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Título"
                onChange={props.handleChangeTitle}
                value={props.form.title}
            />
            <input
                type="text"
                name="photo"
                id="photo"
                placeholder="URL de la imagen"
                onChange={props.handleChangeImg}
                value={props.form.img}
            />
            <textarea
                name="description"
                id="description"
                onChange={props.handleChangeDesc}
                value={props.form.description}
            />
            <button onClick={props.handleAddMovie}>Agregar película</button>
        </>
    )
}
