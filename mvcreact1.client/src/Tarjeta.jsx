function Tarjeta({ encabezado = "Bienvenido", texto = "Texto de la tarjeta", textoBoton = "Comprar" }) {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-4 col-lg-4">
                <div className="card text-center bg-dark mt-5">
                    <div className="card-body">
                        <h1 className="card-title text-info">{ encabezado}</h1>
                        <p className="card-text text-light">{ texto}</p>
                        <a href="#" className="btn btn-danger">{textoBoton}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tarjeta;