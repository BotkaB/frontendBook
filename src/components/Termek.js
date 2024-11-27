import React from 'react'
import './Termek.css'


function Termek(props) {

  return (
      
    <div className="card kivalaszt col-lg-4 col-md-6 col-sm-12">
        <div className='card-body'>
            <h3>
            {props.kartya.author}       {/*átadtam a listaelem értékeit a megjelenítésre */}
            </h3>
            <div className='card-img-holder'>
                <div>
                    <p>
                        {props.kartya.title}       {/*átadtam a listaelem értékeit a megjelenítésre */}
                    </p>
                    
                </div>
                <div>
                    <p>
                        {props.kartya.pieces}
                    </p>
                </div>
            


            </div>
        </div>
    </div>



  )
}

export default Termek
