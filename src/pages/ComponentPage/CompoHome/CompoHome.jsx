import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../../context/AuthContext"
import NavigationPath from "../../../components/NavigationPath/NavigationPath"
import { desc } from "framer-motion/client"


const CompoHome = () => {
  const { compo } = useContext(AuthContext)

  return (
    <div className=''>
      <NavigationPath
        title={"Components"}
        desc={`Here you can find all the components available in the library.`}
        desc1={"We are working on adding more components."}
      />



      <div className=' grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-3 rounded-md mt-16 '>
        {compo.map((com, idx) => (
          <Link key={idx} to={com.path} className='hover:underline'>
            {com.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CompoHome