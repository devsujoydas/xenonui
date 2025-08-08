
import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import NavigationPath from '../../components/NavigationPath/NavigationPath'


const ButtonPage = () => {
  const [showCode, setShowCode] = useState(true)
  const npmRef = useRef(null);
  const codeRef = useRef(null);

  const codeString = ``

  const handleCopyNpm = () => {
    const text = npmRef.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("npm copied!");
      });
    }
  };
  const handleCopycode = () => {
    const text = codeRef.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("Code copied!");
      });
    }
  };

  return (
    <div>
      <NavigationPath title={"Button"} desc={"Displays a button or a component that looks like a button."} />


    </div>
  )
}

export default ButtonPage