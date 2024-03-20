import React from 'react';
// import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <h1>{props.design} </h1>
            </nav>
        </div>
    );
};

// Navbar.propTypes = {
//     design: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// };

// Navbar.defaultProps = {
//     design: 'Set Title  here',
// };

export default Navbar;
