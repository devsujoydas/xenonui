import NavigationPath from '../../components/NavigationPath/NavigationPath' 
import CarouselContainer1 from '../CompoContainers/CarouselContainer/CarouselContainer1'


const CarouselPage = () => {


    return (
        <div className=''>
            <NavigationPath title={"Carousel"} desc={"A carousel with motion and swipe built using Embla."} />

            <CarouselContainer1 />
        </div>
    )
}

export default CarouselPage