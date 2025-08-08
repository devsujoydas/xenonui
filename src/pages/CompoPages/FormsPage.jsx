import NavigationPath from '../../components/NavigationPath/NavigationPath' 
import LoginForm1 from '../CompoContainers/FormsContainer/LoginForm1'
import LoginForm2 from '../CompoContainers/FormsContainer/LoginForm2'
import SignupForm1 from '../CompoContainers/FormsContainer/SignupForm1'

const FormsPage = () => {

  return (
    <div className=''>
      <NavigationPath title={"Form"} desc={"A section of the interface that contains interactive controls for submitting information."} />
      <LoginForm1 />
      <LoginForm2 />
      <SignupForm1 />
    </div>
  )
}

export default FormsPage