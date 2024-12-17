
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  
}

const ProfileDetails = props => {
  const renderProfile = () => {
    const {profileDetails} = props
    const { profileImageUrl, } = profileDetails

    return (
      <div className="profile-details-container">
        <img src={profileImageUrl} alt="profile" className="profile-image" />
        <h1 className="profile-name">Akshay kumar</h1>
        <p className="profile-bio">Fullstack Developer</p>
      </div>
    )
  }

  const renderProfileFailure = () => {
    const {getProfileDetails} = props
    return (
      <div className="profile-failure-container">
        <button
          className="retry-button"
          type="button"
          onClick={getProfileDetails}
        >
          Retry
        </button>
      </div>
    )
  }

  

  const {profileApiStatus} = props

  switch (profileApiStatus) {
    case apiStatusConstants.success:
      return renderProfile()
    case apiStatusConstants.failure:
      return renderProfileFailure()
    default:
      return null
  }
}

export default ProfileDetails
