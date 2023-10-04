import React from 'react'
import "./Watch.scss"
import { ArrowBackOutlined } from '@mui/icons-material'
import { useLocation,Link } from 'react-router-dom'



export default function Watch() {
  const location = useLocation();
  
  const movie=location.state.movie;
    return (
      <div className="watch">
        <Link to="/">
          <div className="back">
            <ArrowBackOutlined />
            Home
          </div>
        </Link>
        <video className="video" autoPlay progress controls src={movie.video} />
      </div>
    );
  }