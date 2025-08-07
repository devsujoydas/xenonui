import NavigationPath from '../../../components/NavigationPath/NavigationPath'
import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import Login from '../../../components/Login/Login'
import Signup from '../../../components/Signup/Signup'
import LoginForm1 from '../CompoContainers/Forms/LoginForm1'
import SignupForm1 from '../CompoContainers/Forms/SignupForm1'


const CompoForm = () => {
  const [showCode1, setShowCode1] = useState(true)
  const [showCode2, setShowCode2] = useState(true)

  const npmRef1 = useRef(null);
  const codeRef1 = useRef(null);

  const npmRef2 = useRef(null);
  const codeRef2 = useRef(null);

  const codeString1 = ``
  const codeString2 = ``

  const handleCopyNpm1 = () => {
    const text = npmRef1.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("npm copied!");
      });
    }
  };
  const handleCopycode1 = () => {
    const text = codeRef1.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("Code copied!");
      });
    }
  };
  const handleCopyNpm2 = () => {
    const text = npmRef2.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("npm copied!");
      });
    }
  };
  const handleCopycode2 = () => {
    const text = codeRef2.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("Code copied!");
      });
    }
  };

  return (
    <div className=''>
      <NavigationPath title={"Form"} desc={"A section of the interface that contains interactive controls for submitting information."} />
      <LoginForm1 />
      <SignupForm1 />
    </div>
  )
}

export default CompoForm