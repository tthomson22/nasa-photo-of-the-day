import React from "react";
  
const DailyNasa = props => {
    return (
        
        <div className='nasa-wrap'>
            <div className='text-wrap'>
                <h2>{ props.nasa.title }</h2>
                <p>{ props.nasa.explanation }</p>
            </div>
            <div className='media-wrap'>
                <iframe height='300' width='400' src={ props.nasa.url } />
                <p>{ props.nasa.date }</p>
            </div>
        </div>
    )
}

export default DailyNasa;