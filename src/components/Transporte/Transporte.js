import React from 'react'
import traslado from './imagenes/traslados.jpg'
import "./Transporte.css"

function Transporte() {
    return (
    <div className='transporte' style={{backgroundColor: '#f5f5f5'}}>

        <h1>---TRASLADOS---</h1>
        
             <img src={traslado} />
        
            <h2 >Desde ahora ya podes contratar tu traslado!!!</h2>

            <p>Desde el aeropuerto, terminal de omnibus hasta tu hotel o alojamiento, tanto ida, como ida o vuelta, en servicios regulares o privados.
            Con todos los medios de pago</p>

    </div>
    
 )
}

export default Transporte
