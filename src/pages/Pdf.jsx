import './Pdf.scss'
import Windows from '../Windows/Windows'

const Pdf = ({windowname,setWindowState}) => {
  return (
   <Windows windowname={windowname} setWindowState={setWindowState}>
     <div className="pdf-container ">
          <iframe src="\kaustubhsakpal.CV(1).pdf" frameborder="0"></iframe>
      </div>
   </Windows>
  )
}

export default Pdf