import React from 'react'

import PropTypes from 'prop-types'

import AddedItem from './Addeditem'
import './component1.css'

const AddedItems = (props) => {
  return (
    <div className="component1-container">
      <div className="component1-container1">
        {props.list.map((e)=>(<AddedItem></AddedItem>))}
      </div>
      <div className="component1-container2">
        <span className="component1-text">{props.text}</span>
      </div>
    </div>
  )
}

AddedItems.defaultProps = {
  text: 'Added files',
}

AddedItems.propTypes = {
  text: PropTypes.string,
}

export default AddedItems
