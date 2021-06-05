import React, {useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const API_URL = 'https://qgkpjarwfl.execute-api.us-east-1.amazonaws.com/dev/getNormalVideoFiles';

function App() {

  const [videList, updateVideoList] = useState([]),
    [loading, setLoading] = useState(false),
    limit = 6,
    offset = 0;


  useEffect(()=> {
        const fetchVideoList = async () => {
          setLoading(true);
          const res = await axios.get(API_URL, {
            mode : "no-cors",
            headers : {
              "x-api-key" : "jvmNAyPNr1JhiCeUlYmB2ae517p3Th0aGG6syqMb"
            },
            params : {
              limit : limit,
              offset : offset
            }
          });
          console.log("home",res);
          updateVideoList(res.data);
          setLoading(false);
        }
        fetchVideoList();
      }, []);






      var myHeaders = new Headers();
      myHeaders.append("x-api-key", "jvmNAyPNr1JhiCeUlYmB2ae517p3Th0aGG6syqMb");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://qgkpjarwfl.execute-api.us-east-1.amazonaws.com/dev/getNormalVideoFiles?limit=6&offset=0", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
