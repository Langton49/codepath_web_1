import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Card from './components/card'

function App() {

  return (
   <div>
    <h1>🎬🎬🎬Our Upcoming 2025 Premieres🎬🎬🎬</h1>
    <h2>A list of some upcoming movies in 2025, with links to their trailers.</h2>
    <Card trailerLink="https://www.youtube.com/watch?v=tA1s65o_kYM"
     imgSrc="https://upload.wikimedia.org/wikipedia/en/2/2d/Mickey_17_film_poster.png" 
   title="Mickey 17" 
   content="Mickey 17, known as an 'expendable,' goes on a dangerous journey to colonize an ice planet."></Card>
   <Card 
   trailerLink="https://www.youtube.com/watch?v=-PyOIlJEdqA"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/e/e8/Novocaine_%282025%29_poster.jpg" 
   title="Novocaine" 
   content="When the girl of his dreams is kidnapped, a man incapable of feeling physical pain turns his rare condition into an unexpected advantage in the fight to rescue her."></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=Z8Jh__XdTYM"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/b/bb/The_Day_the_Earth_Blew_Up_A_Looney_Tunes_Movie_poster.jpg"
   title="The Day the Earth Blew Up: A Looney Tunes Movie"
   content="Porky Pig and Daffy Duck are Earth's only hope when facing the threat of alien invasion."></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=iV46TJKL8cU"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/5/5f/Snow_White_%282025_film%29.jpg"
   title="Snow White"
   content="Live-action adaptation of the 1937 Disney animated film 'Snow White and the Seven Dwarfs'."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=9mTVko4Kmak"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/d/d7/Alexander_and_the_Terrible_Horrible_No_Good_Very_Bad_Road_Trip_poster.jpg"
   title="Alexander and the Terrible, Horrible, No Good, Very Bad Road Trip"
   content="This film follows a Mexican American family who have recently lost their connection to each other and their roots, as they embark on an epic road trip that immediately goes hilariously wrong."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=GQY2cqwwPk0"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/7/7c/Kayara_poster.jpg"
   title="Kayara"
   content="A young Inca girl dreams of joining the all-male Chasqui messenger group. She challenges traditions and gender norms to pursue her ambition against all odds."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=8B1EtVPBSMw"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/6/66/A_Minecraft_Movie_poster.jpg"
   title="A Minecraft Movie"
   content="Four misfits are suddenly pulled through a mysterious portal into a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a quest with an unexpected, expert crafter."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=hUUszE29jS0"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/9/90/Thunderbolts%2A_poster.jpg"
   title="Thunderbolts*"
   content="After finding themselves ensnared in a death trap, an unconventional team of antiheroes must embark on a dangerous mission that will force them to confront the darkest corners of their pasts."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=KnWzz0n60pE"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/a/ab/Final_Destination_Bloodlines_%282025%29_poster.jpg"
   title="Final Destination: Bloodlines"
   content="Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=m5fMyIImwEY"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/1/18/Lilo_%26_Stitch_2025_Teaser_Poster.jpeg"
   title="Lilo & Stitch"
   content="Live-action remake of Disney's animated classic 'Lilo and Stitch'."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=m5fMyIImwEY"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/3/32/Superman_%282025_film%29_poster.jpg"
   title="Superman"
   content="Follows the titular superhero as he reconciles his heritage with his human upbringing. He is the embodiment of truth, justice and the human way in a world that views this as old-fashioned."
   ></Card>
   <Card
   trailerLink="https://www.youtube.com/watch?v=uhUht6vAsMY"
   imgSrc="https://upload.wikimedia.org/wikipedia/en/8/88/Karate_Kid_Legends_Poster.jpg"
   title="Karate Kid: Legends"
   content="Kung fu prodigy Li Fong is uprooted from his home in Beijing and forced to move to New York City. When a friend needs his help, Li enters a karate competition. Li's teacher Mr. Han enlists original Karate Kid Daniel LaRusso for help."
   ></Card>
   </div>
  )
}

export default App
