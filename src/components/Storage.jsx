
const Storage = () => {
  return (
    <div className="storage">
        <p>You've used <span className="storage__gb">815 GB</span> of your storage</p>
        <div className="storage__slider">
            <div className="storage__limit">
                <div className="storage__indicator"></div>
            </div>
        </div>
        <div className="storage__capacity">
            <span>0 GB</span>
            <span>1000 GB</span>
        </div>
        <div className="storage__left">
            <p className="storage__number">185</p>
            <p className="storage__gb-left">GB LEFT</p>
        </div>
    </div>
  )
}

export default Storage