import Main from '../components/filmpage/main/Main'
import { useParams } from 'react-router';

const Film = () => {
  const { id } = useParams();
  return (
    <>
      <Main filmId={id}/>
    </>
  )
}

export default Film
