  import React from 'react'
  import './footer.css'
  import { Icon } from '@iconify/react'
  function Footer() {
    return (
      <div>
        <footer>
        <div className="logo-footer">JSX</div>
        <nav>
          <ul className='footer-list'>
              <li className='footer-li'><a href="https://www.instagram.com/qasimgardezi420/"><Icon style={{'color':'blue'}} icon="akar-icons:instagram-fill" /></a></li>
              <li className='footer-li'><a href="https://www.facebook.com/qasimgardezi420/"><Icon style={{'color':'blue'}} icon="fontisto:facebook" /></a></li>
              <li className='footer-li'><a href="https://github.com/SyedQasimGardezi"><Icon style={{'color':'blue'}} icon="akar-icons:github-fill" /></a></li>
          </ul>
        </nav>
      </footer>
      </div>
    )
  }

  export default Footer