import React from 'react'
import { useDataLayerValue } from '../DataLayer'

function Body( {spotify} ) {
    const [{ discover_weekly}, dispatch] = useDataLayerValue();
    
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
