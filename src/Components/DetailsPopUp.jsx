

const DetailsPopUp = ({userDetails,onClose}) => {
  return (
    <div className="popup-overlay">
        <div className="popup bg-info text-dark">
            <h5>Submitted User Details</h5>
            <p>{`Email : ${userDetails.email}`}</p>
            <p>{`Phone No : ${userDetails.phoneNo}`}</p>
            <p>{`Message : ${userDetails.message}`}</p>
            <button className='popup-button btn-primary' onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default DetailsPopUp