
const Card = () => {
  return (
    <div className="card">
        <img className="card__logo" src="/images/logo.svg" alt="logo" />
        <div className="card__btns">
            <button><img src="/images/icon-document.svg" alt="document" /></button>
            <button><img src="/images/icon-folder.svg" alt="folder" /></button>
            <button><img src="/images/icon-upload.svg" alt="cloud" /></button>
        </div>
    </div>
  )
}

export default Card