
const Docks = ({WindowState,setWindowState}) => {
  return (
    <footer>
      <div className="icon calender"  onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r?tab=mc&pli=1","_blank")}}>
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div className="icon cli"  onClick={()=>{setWindowState(state =>({...state,terminal:true}))}}>
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
      <div className="icon github" onClick={()=>{setWindowState(state =>({...state,github:true}))}}>
        <img src="/doc-icons/github.svg" alt="" />
      </div>
      <div className="icon link"  onClick={()=>{window.open("https://www.linkedin.com/in/kaustubh-sakpal/","_blank")}}>
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div className="icon mail"  onClick={()=>{ window.open("mailto:kaustubhsakpal9@gmail.com","_blank");}}>
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div className="icon note"  onClick={()=>{setWindowState(state =>({...state,notes:true}))}}>
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div className="icon pdf"  onClick={()=>{setWindowState(state =>({...state, pdf:true}))}}>
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div className="icon spotify"  onClick={()=>{setWindowState(state =>({...state,spotify:true}))}}>
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
    </footer>
  );
};

export default Docks;
