import './index.css'

const ImageList = props => {
  const {each, selectionActiveTabId} = props
  const {imageUrl, thumbnailUrl, id} = each

  return (
    <li>
      <button>
        <img alt="thumbnail" className="image-logo" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageList
