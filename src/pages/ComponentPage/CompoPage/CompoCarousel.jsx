import NavigationPath from '../../../components/NavigationPath/NavigationPath'      

import Carousel1 from '../CompoContainers/Carousel/Carousel1'

const CompoCarousel = () => {




    return (
        <div className=''>
            <NavigationPath title={"Carousel"} desc={"A carousel with motion and swipe built using Embla."} />

            <Carousel1 />
        </div>
    )
}

export default CompoCarousel