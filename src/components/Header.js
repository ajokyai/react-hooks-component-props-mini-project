import React from 'react'

function Header({name}) {
  return (
    <Header>
        <h1>{name}</h1>
        <nav>
          <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#articles">Articles</a>
            
        </nav>
    </Header>
      
    
  )
}

export default Header
