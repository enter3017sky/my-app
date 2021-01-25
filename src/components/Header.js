import PropTypes from 'prop-types'
import Button from './Button'

// https://www.youtube.com/watch?v=w7ejDZ8SWv8
// rafcp

const Header = ({ title }) => {
  const onClick = () => {

  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color='green'
        text='Add'
        onClick={onClick}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
