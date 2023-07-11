import header from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
  const page = useLocation().pathname
  const [home, setHome] = useState(page==="/")
  const [about, setAbout] = useState(page==='/about')
  const [portfolio, setPortfolio] = useState(page==='/portfolio')
 
  useEffect(()=>{
    setHome(page==="/")
    setAbout(page==='/about')
    setPortfolio(page==='/portfolio')
  }, [page])

  //console.log('pages', page, 'home', home)

  return (
    <div className={header.main}>
{home?<Link to='/' className={header.activated} >Home</Link>:<Link to='/' >Home</Link>}
{about?<Link to='/about' className={header.activated}>About</Link>:<Link to='/about' >About</Link>}
{portfolio?<Link to='/portfolio' className={header.activated}>Portfolio</Link>:<Link to='/portfolio'>Portfolio</Link>}
    
    </div>
  )
}

export default Header