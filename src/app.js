import React from 'react';
import PropTypes from 'prop-types';

const App = () => (
  <div>
    Hello world!
    Hey!
    Hey!
    Hey!
    Hey!
    Hey ho!
  </div>
);

App.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

export default App;
