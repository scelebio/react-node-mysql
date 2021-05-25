import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {withRouter} from "react-router-dom";

function Profile() {
  const [English, setEnglish] = useState('');
  const [German, setGerman] = useState('');
  const [wordList, setWordList] = useState([]);
  const [newgerword,setnewGerWord] = useState("");


  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      setWordList(response.data)
      console.log(response.data);

    })
  },[])

  const submitWords =() => {
    Axios.post('http://localhost:3001/api/insert', 
    {eng: English, ger: German,
    });
      setWordList([...wordList, 
        {eng: English, ger: German},
      ]);
  };

  const deleteReview = (engword) => {
    Axios.delete(`http://localhost:3001/api/delete/${engword}`);
  };
  
  
  const updateGerWord = (engword) => {
    Axios.put("http://localhost:3001/api/update", 
    {eng: engword, ger: newgerword,
    });
    setnewGerWord("")
  };

  return (
    <div className="App">
    <h1>Admin Console</h1>
    <div className="form">
      <label>English</label>
      <input 
        type="text" 
        name="English" 
        onChange={(e) => {
          setEnglish(e.target.value);
      }}/>
        
      <label>German</label>
      <input 
        type="text" 
        name="German" 
        onChange={(e) => {
          setGerman(e.target.value);
      }}/>
      <button onClick={submitWords}>Submit</button>

      {wordList.map((val) => {
        return (
          <div className = "card">
            <h1>{val.eng} </h1>
            <p>{val.ger}</p>
            <button onClick={() => {deleteReview(val.eng)}}>Delete</button>
            <input type='text' id="updateInput" onChange={(e) => {
              setnewGerWord(e.target.value)}}/>
            <button onClick={()=>{updateGerWord(val.eng)}}>Update</button>
          </div>
        )}
      )}
      
      </div>
    </div>
  );
}

export default withRouter(Profile);
