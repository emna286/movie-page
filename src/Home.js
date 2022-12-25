import React, { useRef } from 'react'
import { Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'

function Home(props) {

    const p=useRef()
    const p2=useRef()
    const p3=useRef()
    const add=()=>{
      props.setList([...props.list,{
        name:p.current.value,
        rate:p2.current.value,
        imgsr:p3.current.value,
      }])
    
    }
  return (

    <div>

<input type={"text"} ref={p} placeholder="name of film"/>
     <input type={"text"} ref={p2} placeholder="rate of film"/>
     <input type={"text"} ref={p3} placeholder="image of film"/>
    
     <button onClick={add}>add</button>
     <main className="films">
      
     {props.filtredlist.map(e=><p>
      <Link to={e.name}><img className="imgstyle" src={e.imgsr}></img></Link>
      <div className="titl">
      <div>
      {e.name}
      </div>
      <div>
    
    
     <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={e.rate}
        />
     </div>
     </div>
     </p>)}
     </main>

 
      







    </div>
  )
}

export default Home
