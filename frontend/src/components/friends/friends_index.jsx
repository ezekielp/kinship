import React from 'react';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div>
                <FriendsIndexItem />
                <FriendsIndexItem />
                <FriendsIndexItem />
                <FriendsIndexItem />
                <FriendsIndexItem />
                <FriendsIndexItem />
            </div>
        )
    }
}

export default FriendsIndex;