import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='homepage'>
                <br></br>
                <br></br>

        <h1 className='center'>Page not found.</h1>
        <h2 className='center'>Press <Link to ="/" className='text-link'>here</Link> to go back to safety</h2>
    </div>
  )
}

export default PageNotFound