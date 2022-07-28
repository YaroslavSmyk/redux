import { connect } from 'react-redux';
import { availabeleOptionsSelector } from './options.selectors';
import Options from './Options';
import { toogleOption } from './options.actions';

const mapState = (state) => {
  return {
    options: availabeleOptionsSelector(state),
  };
};

const mapDispatch = {
    moveOption: toogleOption
}

export default connect(mapState, mapDispatch)(Options);
