import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li>Info 1</li>
              <li>Info 2</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li>Info 1</li>
              <li>Info 2</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li>Info 1</li>
              <li>Info 2</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear} Recruitment App
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
