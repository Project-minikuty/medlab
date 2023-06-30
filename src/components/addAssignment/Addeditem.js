import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AddedItem = (props) => {
  return (
    <div className="component-container">
      <li className="component-li list-item">
        <span></span>
        <button type="button" className="button">
          Delete
        </button>
      </li>
    </div>
  )
}

AddedItem.defaultProps = {
  text: 'Text',
  button: 'Button',
}

AddedItem.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
}

export default AddedItem
