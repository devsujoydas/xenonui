import NavigationPath from '../../components/NavigationPath/NavigationPath'
import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthContext"


const CompoHomePage = () => {
  const { compo } = useContext(AuthContext)

  return (
    <div className=''>
      <NavigationPath title={"Components"} desc={`Here you can find all the components available in the library.`} desc1={"We are working on adding more components."} />



      <div className='md:text-[14px] text-sm grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-3 rounded-md my-8 md:mt-16 '>
        {compo.map((com, idx) => (
          <Link key={idx} to={com.path} className='hover:underline'>
            {com.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CompoHomePage