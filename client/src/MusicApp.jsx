import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
const [keyword, setKeyword] =useState("");
const [tracks, setTracks] = useState([]);
const navigate = useNavigate();


  const getTracks =async () =>{
    let data =await fetch(`https://v1.nocodeapi.com/subhamjha/spotify/EwmdiMzhUQbwmEAl/search?q=${keyword}&type=track`)
  let convertedData =await data.json()
  // console.log(convertedData.tracks.items)
  setTracks(convertedData.tracks.items)

  }

//logout function
const handleLogout = () => {
    // localStorage.removeItem("token"); // logout: token clear
    navigate("/login");
  }


  return (
   <>
<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="  collapse navbar-collapse d-flex justify-content-center">
    <a className="navbar-brand">Music Tracks</a>
    
      <input
      value={keyword}
      onChange={(event)=>setKeyword(event.target.value)}
        className="form-control me-2 w-75"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button onClick={getTracks} className="btn btn-outline-success">
        Search
      </button>

//logout button

 <button onClick={handleLogout} className="btn btn-danger ms-auto">
          Logout
        </button>



    
  </div>

</nav>
 <p className='py-2 collapse navbar-collapse d-flex justify-content-center' >Music Player</p>

<div className='col'>
</div>
<div className='container'>
<div className='row'>
{
  tracks.map((element) =>{
    return (                 //you have to add bracket in the same line of return to avoid error  "no data show"
    
    <div  className='col-lg-3 col-md-6 py-2'>
      
      <div className="card" style={{ width: "18rem" }}>
  <img src={element.album.images[0].url} className="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
     Artist: {element.album.artists[0].name}
    </p>
    <p className="card-text">
     Date: {element.album.release_date}
    </p>
    
    <audio src={element.preview_url} controls className='w-100'></audio>
    
  </div>
</div>
    </div>
    );
  })
}
</div>
</div>

   </>
   
  );
}

export default App;
