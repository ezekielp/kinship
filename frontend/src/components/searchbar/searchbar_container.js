import { connect } from 'react-redux';
import Searchbar from './searchbar';

const msp = state => {
    return {
        friends: Object.values(state.entities.friends)
    }
}

const mdp = dispatch => {
    return {
        
    }
}

export default connect(msp, mdp)(Searchbar);