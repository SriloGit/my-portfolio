import portfolio from './Portfolio.module.css'
import projectList from '../../assets/projects.json'
import Thumb from '../../component/thumb/Thumb'

function Portfolio() {
  console.log(projectList)
  return (
    <div className={portfolio.main}>
      {projectList.map((value, index) => {
        return <div key={index} className={portfolio.thumb}><Thumb value={value}/></div>
      })}
    
    </div>
  )
}

export default Portfolio