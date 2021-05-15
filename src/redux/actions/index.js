import { RECYCLESTATIONS_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase'


export function fetchRecycleStations() {
    return ((dispatch) = {
        firebase.firestore()
            .collection('recycleStations')
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({ type: RECYCLESTATIONS_STATE_CHANGE, currentRecycleStations: snapshot.data() })
                } else {
                    console.log('does not exist')
                }
            })
    }