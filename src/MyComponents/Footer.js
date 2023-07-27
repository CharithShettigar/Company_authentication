import React from 'react'

let footerstyle={
  position:"fixed",
  bottom:"0",
  width:"100%",
  textAlign:"center"
}

const Footer = () => {
  return (
    <footer className='bg-light text-dark py-2' style={footerstyle}>
      <p className='mb-0'>Copyright &copy; www.abc.com</p>
    </footer>
  )
}

export default Footer