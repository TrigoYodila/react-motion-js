import PropTypes from 'prop-types'

const Button = ({children, onClick}) => {
  return (
    <button className="bg-blue-800 text-white p-1 rounded-md" onClick={onClick}>
        {children}
    </button>
  )
}

export default Button

Button.propTypes = {
    children:PropTypes.string,
    onClick:PropTypes.func
}