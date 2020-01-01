import {connect} from 'react-redux';
import { makeFriend } from '../../actions/friends_actions';
import CreateEditForm from './create_and_edit_form';

const mapStateToProps = (state) => {
    return {
        formType: "create"
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        action: (data) => dispatch(makeFriend(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditForm);