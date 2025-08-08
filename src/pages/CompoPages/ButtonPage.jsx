
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import NavigationPath from '../../components/NavigationPath/NavigationPath'
import ButtonContainer1 from '../CompoContainers/ButtonContainer/ButtonContainer1'
import ButtonContainer2 from '../CompoContainers/ButtonContainer/ButtonContainer2'


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

      <ButtonContainer1 />
      <ButtonContainer2 />

    </div>
  )
}

export default ButtonPage