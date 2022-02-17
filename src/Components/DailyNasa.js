import React from "react";
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`
const StyledNasa = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
`

const StyledImg = styled.div`
    width: 100%;
    transform: scale(2);
    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
`
  
const DailyNasa = props => {
    if( props.nasa.media_type  === 'image'){
        return (
            <StyledNasa className='nasa-wrap'>
                <StyledNasa className='text-wrap'>
                    <h2>{ props.nasa.title }</h2>
                    <p>{ props.nasa.explanation }</p>
                </StyledNasa>
                <StyledImg className='media-wrap'>
                    <img height='300' width='400' src={ props.nasa.url } />
                    <p>{ props.nasa.date }</p>
                </StyledImg>
            </StyledNasa>
        )
    } else {
        return (
            <StyledNasa className='nasa-wrap'>
                <div className='text-wrap'>
                    <h2>{ props.nasa.title }</h2>
                    <p>{ props.nasa.explanation }</p>
                </div>
                <div className='media-wrap'>
                    <img height='300' width='400' src={ props.nasa.url } />
                    <p>{ props.nasa.date }</p>
                </div>
            </StyledNasa>
        )
    }
}

export default DailyNasa;