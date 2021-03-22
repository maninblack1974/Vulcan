/* 
-----------------Icons included---------------------------

#############################################################
# When adding additional icons provide brief description,
# if neccessary and
# list it under corresponding heading, add new on if needed.
#############################################################

---------------------------------------
  UI elements icons:
  - SearchIconButton(magnifying glass on button)

##############    TEMPLATE     ############
export const  = props => {
  const path = '';

  return <Icon path={path} {...props} />;
};

*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { size, path, viewBoxSize } = this.props;
    const viewBox = `0 0 ${viewBoxSize || size} ${viewBoxSize || size}`;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="currentColor"
      >
        <path d={path} fillRule="evenodd" />
      </svg>
    );
  }
}

Icon.defaultProps = {
  size: '18',
  path: '',
  viewBoxSize: null,
};

Icon.propTypes = {
  size: PropTypes.string,
  path: PropTypes.string,
  viewBoxSize: PropTypes.string,
};

export default Icon;

export const SearchIconButton = props => {
  const path =
    'M7.499875,11 C5.569875,11 3.999875,9.43 3.999875,7.5 C3.999875,5.57 5.569875,4 7.499875,4 C9.429875,4 10.999875,5.57 10.999875,7.5 C10.999875,9.43 9.429875,11 7.499875,11 M15.706875,14.293 L12.027875,10.614 C12.639875,9.729 12.999875,8.656 12.999875,7.5 C12.999875,4.467 10.531875,2 7.499875,2 C4.467875,2 1.999875,4.467 1.999875,7.5 C1.999875,10.533 4.467875,13 7.499875,13 C8.654875,13 9.728875,12.64 10.613875,12.028 L14.292875,15.707 C14.487875,15.902 14.743875,16 14.999875,16 C15.255875,16 15.511875,15.902 15.706875,15.707 C16.097875,15.316 16.097875,14.684 15.706875,14.293';

  return <Icon path={path} {...props} />;
};

