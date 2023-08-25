import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from'../../constants/constants'
import Youtube from 'react-youtube'
import axios from '../../axios'

function RowPost(props) {
    const [movies,setmovies]= useState([])
    const [urlid,seturlid]=useState('')
    const [popup,setPopup] =useState(false);

    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response)
            setmovies(response.data.results)
        }).catch(err=>{
            // alert('Network error')
        })

    },[])
    const closeVideo = () =>{
        setPopup(false);
    }
    const opts =  {
      
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie =(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data)
            if (response.data.results.length !==0){
                seturlid(response.data.results[0])
                setPopup(true);
            }else{
                console.log("array is empty")
                console.log("array is empty")

            }
        });

      

      }

  return (
    <div className='row'>
      <h2> {props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'samllPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />


        )}
        
     
      </div>
      {  popup  && 
            <div className="video-popup">
              
            <div className="video-content">
            <button className="close-button" onClick={closeVideo}>
  x
</button>
              < Youtube videoId={urlid.key} opts={opts}/>
              <h2 className='video-title'>{urlid.name}</h2>
             
            </div>
          </div>
      
      
      }
    </div>
  )
}

export default RowPost
