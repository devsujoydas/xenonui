
import NavigationPath from '../../components/NavigationPath/NavigationPath'
import CardsContainer1 from '../CompoContainers/CardsContainer/CardsContainer1'
import CardsContainer2 from '../CompoContainers/CardsContainer/CardsContainer2'


const CardsPage = () => {



  return (
    <div>
      <NavigationPath title={"Card"} desc={"Displays a card with header, content, and footer."} />

      <CardsContainer1 />
      <CardsContainer2 />
    </div>
  )
}

export default CardsPage