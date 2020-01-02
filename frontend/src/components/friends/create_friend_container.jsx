import {connect} from 'react-redux';
import { makeFriend } from '../../actions/friends_actions';
import CreateEditForm from './create_and_edit_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        userId: state.session.user.id,
        formType: "Create"
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        action: (data) => dispatch(makeFriend(data)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditForm);