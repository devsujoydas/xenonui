import React from 'react'
import NavigationPath from '../../components/NavigationPath/NavigationPath'
import HeroContainer1 from '../CompoContainers/HeroContainer/HeroContainer1'

const HerosPage = () => {
    return (
        <div>
            <NavigationPath title={"Hero"} desc={"A section of the interface that contains interactive controls for submitting information."} />


            <div>
                <HeroContainer1 />
            </div>
        </div>
    )
}

export default HerosPage