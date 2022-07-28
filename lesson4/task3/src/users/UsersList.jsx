import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  goPrev = () => {
    this.props.goPrev();
  };

  goNext = () => {
    this.props.goNext();
  };

  render() {
    const { currentPage, usersList } = this.props.users;
    const itemsPerPage = 3;

    const startIndex = currentPage * itemsPerPage;
    const usersToDisplay = usersList.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={usersList.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: {
      usersList: state.users.usersList,
      currentPage: state.users.currentPage,
    },
  };
};

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;
