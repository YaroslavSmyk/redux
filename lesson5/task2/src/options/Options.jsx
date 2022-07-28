import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ title, options, moveOption }) => {
  return (
    <div class="options">
      <div class="options__title">{title}</div>
      <ul class="options__list">
        {options.map((option) => (
          <li key={options.id}>
            <button
              className="options__list-item"
              onClick={() => moveOption(options.id)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Options.PropTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  moveOption: PropTypes.func.isRequired,
};

export default Options;
