import React from 'react'
import PropTypes from 'prop-types'

function Header({text,bgcolor,textcolor}) {   //functional component

    const headerStyles={
        backgroundColor:bgcolor,
        color:textcolor
    }

  return (
    <header>
        <div style={headerStyles} className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// Here we can give the default value of Props
Header.defaultProps={
    text:'Feedback UI',
    bgcolor:'rgba(0,0,0,0.4)',
    textcolor:'yellow',
}

// Here we can set the type of Props
Header.propTypes={
    text:PropTypes.string,
    bgcolor:PropTypes.string,
    textcolor:PropTypes.string,
}

export default Header