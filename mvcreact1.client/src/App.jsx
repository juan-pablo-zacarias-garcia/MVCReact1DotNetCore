import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tarjeta from './Tarjeta';

function App() {
    ////Parte 1
    const [numero, setNumero] = useState(0);

    let modeloPersona = {
        Nombre: "Juan Pablo",
        Correo:"17030990@itcelaya.edu.mx"
    };

    const [persona, setPersona] = useState(modeloPersona);

    ////Parte 2
    const [nombre, setNombre] = useState('Juan Pablo');
    useEffect(() => {
        console.log(nombre);
    }, [nombre]);

    function cambiarNombre() {
        setNombre('Nombre editado');
    }

    /////Parte 3 API
    const [empleado, setEmpleado] = useState([]);
    useEffect(() => { consumirAPI() }, []);
    async function consumirAPI() {
        const response = await fetch('/api/Empleado/obtener-empleados', { method: 'GET' });
        if (response.ok) {
            const data = await response.json();
            setEmpleado(data);
        }
    }


    return (
        <div className="container-fluid">
            <hr />
            <h1>Parte 1</h1>
            <h1>Valor del número: {numero}</h1>
            <button onClick={() => setNumero(numero + 1)}>Aumentar 1</button>
            <hr/>
             <label>Nombre: {persona.Nombre}</label>
                <label>Correo: {persona.Correo}</label>
                <button onClick={() => setPersona(
                    {...persona, Correo: 'nuevocorreo@gmail.com'}
            )} >Cambiar correo</button>


            <hr />
            <h1>Parte 2</h1>
            <h3>El nombre actual es: {nombre}</h3>
            <button onClick={() => { cambiarNombre() }}>Cambiar nombre</button>
            <hr />
            <h1>Parte 3 API</h1>
            <h5>Lista de empelados</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleado.map(item => (
                            <tr key={item.idEmpelado}>
                                <td>{item.Nombre}</td>
                                <td>{item.Correo}</td>
                                <td>{item.Direccion}</td>
                                <td>{item.Telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}
export default App;