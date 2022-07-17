import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import './App.scss';

import LeftRail from "./components/left-rail";
import MainContent from "./components/main-content";

function App() {
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(() => {
    async function getData() {
      await Axios.get("https://pathstealer-2e.herokuapp.com/api/get").then((response) => {
        setMovieList(response.data)
      })
    }
    getData()
  }, [])

  const submitReview = async () => {
    await Axios.post('https://pathstealer-2e.herokuapp.com/api/insert', {
      movieName,
      movieReview: review
    }).then(() => {
      console.log("Successful insert")
    }).catch(err => {
      console.log("Submit review call failed with Err: ", err)
    })
  }
  return (
    <div className="App ">
      <div className="left-rail">
        <LeftRail />
      </div>
      <div className="main-center">
        <MainContent />
      </div>
      {/* <h1>CRUD App</h1>

      <div className="form">
        <label>Movie Name: </label>
        <input type="text" name="movieName" onChange={(e) => { setMovieName(e.target.value) }} />
        <label>Review: </label>
        <input type="text" name="review" onChange={(e) => { setReview(e.target.value) }} />
        <button onClick={submitReview}>Submit</button>
      </div>

      {
        movieReviewList?.length > 0
          ?
          movieReviewList.map((review) => <div>{"Movie Name: " + review.movieName}</div>)
          :
          <div></div>
      } */}
    </div>
  );
}

export default App;
