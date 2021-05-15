import { combineReducers } from 'redux'
import { recyclestations } from './recyclestations'

const Reducers = combineReducers({
    recyclestationsState: recyclestations
})

export default Reducers