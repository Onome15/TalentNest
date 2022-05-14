import React from 'react'
import {Button } from 'react-bootstrap'

const BodyTwo = () => {
  return (
    <div className='outsideDiv'>
<div className='insideDiv'> 
    <h1 className='formHeader'>Join the waitlist</h1>
                <form action="">
                    <label htmlFor="name">Full Name (Surname First) <br />
                        <input type="text" id="name" name="name" className='sc' /><br /><br />
                    </label><br />
                    <label htmlFor="email">Email Address<br />
                        <input type="email" id="email" name="email"  className='sc' /><br /><br />
                    </label><br />
                    <label htmlFor="number">Phone number<br />
                        <input type="number" id="number" name="number" className='sc' /><br /><br />
                    </label><br />
                    <label htmlFor="text">What would you like to do on TalentNest?<br />
                        <input type="text" id="text" name="text"  className='sc' /><br /><br />
                    </label><br />
                    <label htmlFor="text">What is your current role?<br />
                        <input type="text" id="text" name="text"  className='sc' /><br /><br />
                    </label><br />
                    <Button type="submit"> Send Message </Button>
                    <br /><br /><br />
                </form>
    </div>
    </div>
  )
}

export default BodyTwo