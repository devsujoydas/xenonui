import NavigationPath from '../../components/NavigationPath/NavigationPath' 
import Carousel1 from '../CompoContainers/CarouselContainer/Carousel1'


const CarouselPage = () => {


    return (
        <div className=''>
            <NavigationPath title={"Carousel"} desc={"A carousel with motion and swipe built using Embla."} />

            <Carousel1 />
        </div>
    )
}

export default CarouselPage