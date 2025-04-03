import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {

useNowPlayingMovies()
usePopularMovies()


  return (
    <>
    {/* 
    mainContainer
      - videBackground
      - videoTitle
    secondaryContainer
      - movielist * n
        - cards  
    */}
    <Header/>
   
      <MainContainer/>
      <SecondaryContainer/>
    
    </>
  )
}

export default Browse