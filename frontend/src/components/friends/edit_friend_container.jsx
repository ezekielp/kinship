import React from 'react';
import {connect} from 'react-redux';
import {editFriend} from '../../actions/friends_actions';
import CreateEditForm from './create_and_edit_form';
import { fetchFriend } from '../../actions/friends_actions';
import { closeModal } from '../../actions/modal_actions';


class EditFriendForm extends React.Component {

    componentDidMount () {
        this.props.fetchFriend(this.props.match.params.friendId)
    }

    render () {

        const { friend, formType, action} = this.props

        if (!friend) return null;

        return (
            <CreateEditForm
                action={action}
                formType={formType}
                friend={friend}
            />
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        friend: state.entities.friends[ownProps.match.params.friendId],
        formType: "Update"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriend: (id) => dispatch(fetchFriend(id)),
        action: (data) => dispatch(editFriend(data)),
        closeModal: () => dispatch(closeModal())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFriendForm);

