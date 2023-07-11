import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';

import template from './Template.module.css'
import { Outlet } from 'react-router-dom'

function Template() {
  return (
    <div className={template.app}>
        <Header />
        <Outlet />
        <Footer />
      </div>
  
  )
}

export default Template