import React from "react";
  
const DailyNasa = props => {
    if( props.nasa.media_type  === 'image'){
        return (
            <div className='nasa-wrap'>
                <div className='text-wrap'>
                    <h2>{ props.nasa.title }</h2>
                    <p>{ props.nasa.explanation }</p>
                </div>
                <div className='media-wrap'>
                    <img height='300' width='400' src={ props.nasa.url } />
                    <p>{ props.nasa.date }</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className='nasa-wrap'>
                <div className='text-wrap'>
                    <h2>{ props.nasa.title }</h2>
                    <p>{ props.nasa.explanation }</p>
                </div>
                <div className='media-wrap'>
                    <img height='300' width='400' src={ props.nasa.url } />
                    <p>{ props.nasa.date }</p>
                </div>
            </div>
        )
    }
}

export default DailyNasa;