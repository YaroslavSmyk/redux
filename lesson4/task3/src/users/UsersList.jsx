import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import * as userActions from './users.actions';
import { connect } from 'react-redux';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { users } = this.props;
    const { currentPage, itemsPerPage } = this.state;
    // console.log(users);

    const startPage = (currentPage - 1) * itemsPerPage;
    const countUsersOnPage = users.slice(startPage, startPage + itemsPerPage);
// console.log(countUsersOnPage);
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {countUsersOnPage.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
