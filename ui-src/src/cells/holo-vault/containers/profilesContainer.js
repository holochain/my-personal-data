
import { connect } from 'react-redux'
import Profiles from '../components/profile/profiles'
import  * as constants from '../constants.js'
import {
  personaCreate,
  profileMappingCreate,
  profilesList
} from '../actions'




const mapStateToProps = state => {
  return {
    profiles: [constants.profile1, constants.profile2, constants.profile3, constants.profile4]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    profilesList: (mapping) => {
      dispatch(profilesList(mapping))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles)
