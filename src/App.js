import React, {useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import VideoList from './components/VideoList';
import Header from './components/Header';


const API_URL = 'https://qgkpjarwfl.execute-api.us-east-1.amazonaws.com/dev/getNormalVideoFiles';

function App() {

  const [videoList, updateVideoList] = useState([]),
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



  return (
    <div className="App">
      <Header />
      <VideoList data={videoList}/>
    </div>
  );
}

export default App;
