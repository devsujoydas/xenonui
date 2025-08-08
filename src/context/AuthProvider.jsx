import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {
  const compo = [
    { "name": "Accordion", "path": "/components/accordion" },
    { "name": "Card", "path": "/components/card" },
    { "name": "Form", "path": "/components/form" },
    { "name": "Carousel", "path": "/components/carousel" },
    { "name": "Hero", "path": "/components/hero" },
    { "name": "Button", "path": "/components/button" },
    { "name": "Checkbox", "path": "/components/checkbox" },
    { "name": "Combobox", "path": "/components/combobox" },
    { "name": "Corner Dialog", "path": "/components/corner-dialog" },
    { "name": "Dialog", "path": "/components/dialog" },
    { "name": "File Uploader", "path": "/components/file-uploader" },
    { "name": "Filepicker", "path": "/components/filepicker" },
    { "name": "Form Field", "path": "/components/form-field" },
    { "name": "Group", "path": "/components/group" },
    { "name": "Menu", "path": "/components/menu" },
    { "name": "Overlay", "path": "/components/overlay" },
    { "name": "Pagination", "path": "/components/pagination" },
    { "name": "Popover", "path": "/components/popover" },
    { "name": "Portal", "path": "/components/portal" },
    { "name": "Positioner", "path": "/components/positioner" },
    { "name": "Pulsar", "path": "/components/pulsar" },
    { "name": "Radio", "path": "/components/radio" },
    { "name": "Search Input", "path": "/components/search-input" },
    { "name": "Select", "path": "/components/select" },
    { "name": "Select Menu", "path": "/components/select-menu" },
    { "name": "Side Sheet", "path": "/components/side-sheet" },
    { "name": "Spinner", "path": "/components/spinner" },
    { "name": "Status Indicator", "path": "/components/status-indicator" },
    { "name": "Switch", "path": "/components/switch" },
    { "name": "Tab", "path": "/components/tab" },
    { "name": "Table", "path": "/components/table" },
    { "name": "Tag Input", "path": "/components/tag-input" },
    { "name": "Text Input", "path": "/components/text-input" },
    { "name": "Textarea", "path": "/components/textarea" },
    { "name": "Toaster", "path": "/components/toaster" },
    { "name": "Tooltip", "path": "/components/tooltip" }
  ]

  const data = {
    compo
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider