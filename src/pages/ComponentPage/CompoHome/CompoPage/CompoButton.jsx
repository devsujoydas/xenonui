import React from 'react'
import NavigationPath from '../../../../components/NavigationPath/NavigationPath'

const CompoButton = () => {

  const codeString = `
<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
  Click me
</button>
`;

  return (
    <div>
      <NavigationPath title={"Button"} desc={"Displays a button or a component that looks like a button."} />

      <div className="space-y-4">
        {/* Actual Component */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Click me
        </button>

        {/* Code Display */}
        <pre className="bg-gray-900 text-zinc-300 text-sm p-4 rounded-md overflow-x-auto">
          <code>{codeString}</code>
        </pre>
      </div>

    </div>
  )
}

export default CompoButton