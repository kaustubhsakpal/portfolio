
import jsondata  from '../assets/Github.json'
import Windows from '../Windows/Windows'
const GithubCard = ({data={id:1,title:"",description:"",techStack:[],previewImage:"",repolink:"",liveLink:''}}) => {
  return (
    <div className='card-container'>
        <img src={data.previewImage} alt="" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
         <div className='tech-stack-container'>
              {
                data.techStack.map((e,indx)=><div className="tag" key={indx}>{e}</div>)
              }
         </div>
         <div className='link'>
          <a href={data.repolink}>Repo</a>
          <a href={data.liveLink}>live</a>
         </div>
    </div>
  )
    
  }
 const Github =({windowname,setWindowState})=>{
    return (
    <Windows windowname={windowname} setWindowState={setWindowState}>
      <div className='cards'>
            {
              jsondata.map((project,indx)=>{
                return <GithubCard key={indx} data={project} />
              })
            }
      </div>
    </Windows>
  )
}

export default Github