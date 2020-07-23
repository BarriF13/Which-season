import React from 'react'

const Loader = (props) => {
  return (
    <div>

      <div className="ui active dimmer">
        <div className="ui big text loader">{props.message }</div>
      </div>
      <p></p>
    </div>

  )
}
Loader.defaultProps = {
  message: 'loading...'
}
export default Loader;
