import NavigationPath from '../../components/NavigationPath/NavigationPath'
import NavbarContainer1 from '../CompoContainers/NavbarContainer/NavbarContainer1'

const NavbarPage = () => {
    return (
        <div>
            <NavigationPath title={"Navbar"} desc={"Fully Responsive Navbar for your project. Ready to use, fully tailwind based component"} />

            <NavbarContainer1 />
        </div>
    )
}

export default NavbarPage