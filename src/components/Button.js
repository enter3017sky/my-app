import PropTypes from 'prop-types'

// rafcp

const Header = ({ color, text }) => (
  <button className='btn' style={{ backgroundColor: color }}>
    {text}
  </button>
)

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
