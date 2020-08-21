import React from 'react'

function Body( {spotify} ) {
    return (
        <div className="body">
            <Header  spotify={spotify} />

            <div className="body_info">
                <img 
                    src="" 
                    alt="" 
                />
                <div className="body_infoText">
                    <strong> </strong>
                    <h2>Discover Weekly</h2>
                    <p>Description</p>
                </div>        
            </div>       
        </div>
    )
}

export default Body
