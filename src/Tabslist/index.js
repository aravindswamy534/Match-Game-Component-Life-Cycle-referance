import './index.css'

const TabsList = props => {
  const {each, selectionActiveTabId, isActive} = props

  const {tabId, displayText} = each

  const selectionTabId = () => {
    selectionActiveTabId(tabId)
  }

  const className = isActive ? 'slectedTab' : 'display-text'

  return (
    <li>
      <button type="button" onClick={selectionTabId}>
        <p className={className}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabsList
