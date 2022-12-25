import React from 'react'
import { useParams } from 'react-router-dom'
function Film() {
  const params=useParams()
  const films=[{title:"TheInvitation" ,description:"After the death of her mother and having no other known relatives, Evie takes a DNA test and discovers a long-lost cousin she never knew she had. Invited by her newfound family to a lavish wedding in the English countryside, Evie's at first seduced by the aristocratic host. However, she's soon thrust into a nightmare of survival as she uncovers twisted secrets about her family history and the unsettling intentions behind their sinful generosity.",videolink:<iframe width="560" height="315" src="https://www.youtube.com/embed/5bL1ftuxgOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
    ,{title:"BlackPanther",description:"After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",videolink:<iframe width="560" height="315" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
,{title:"HarryPotter",description:"Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.",videolink:<iframe width="560" height="315" src="https://www.youtube.com/embed/VyHV0BRtdxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}]
const currentfilm= films.filter(film=>film.title===params.film) 

return (
    <div className='titre'>
      {params.film}
      <div className='description'>
        {currentfilm[0].description}
      </div>
      <div>
        {currentfilm[0].videolink}
      </div>
    </div>
  )
}

export default Film
