import { connect } from "react-redux";
import { editFriend } from "../../actions/friends_actions";
import AddDetailsForm from './add_details_form';

const mapStateToProps = (state, ownProps) => {
  const friendId = ownProps.match
    ? ownProps.match.params.friendId
    : ownProps.friendId;
  return {
    friend: state.entities.friends[friendId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: data => dispatch(editFriend(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDetailsForm);
