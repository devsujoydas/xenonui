import React from 'react'
import NavigationPath from '../../components/NavigationPath/NavigationPath'
import FootersContainer1 from '../CompoContainers/FootersContainer/FootersContainer1'

const FooterPage = () => {
    return (
        <div>
            <NavigationPath title={"Footer"} desc={"Displays a card with header, content, and footer."} />

            <FootersContainer1 />
        </div>
    )
}

export default FooterPage