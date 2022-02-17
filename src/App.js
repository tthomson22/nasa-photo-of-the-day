import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components'

import "./App.css";

import DailyNasa from "./Components/DailyNasa";

const StyledApp = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
`

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <StyledApp className="App">
      { data && <DailyNasa nasa={data} /> }
    </StyledApp>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
