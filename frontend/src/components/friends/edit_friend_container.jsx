import React from 'react';
import {connect} from 'react-redux';
import {editFriend} from '../../actions/friends_actions';
import CreateEditForm from './create_and_edit_form';
import { fetchFriend } from '../../actions/friends_actions';


class EditFriendForm extends React.Component {

    componentDidMount () {
        this.props.fetchFriend(this.props.friend._id);
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
    const friendId = ownProps.match ? ownProps.match.params.friendId : ownProps.friendId;
    return {
        friend: state.entities.friends[friendId],
        formType: "Update"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriend: (id) => dispatch(fetchFriend(id)),
        action: (data) => dispatch(editFriend(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFriendForm);

