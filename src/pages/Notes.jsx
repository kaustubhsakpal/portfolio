import React, { useEffect, useState } from "react";
import Windows from '../Windows/Windows'
import markdown from "markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import notes from "../../public/note.txt";
import "./Notes.scss";

const Notes = ({windowname,setWindowState}) => {
  const [markdown, setmarkdown] = useState(null);

  useEffect(() => {
    fetch("./note.txt")
      .then((raw) => raw.text())
      .then((res) => setmarkdown(res));
  }, []);
  return (
    <Windows windowname={windowname} setWindowState={setWindowState}>
      <div className="notes-container">
        <SyntaxHighlighter language="javascript" style={atelierDuneDark}>
        {markdown?markdown:"Loading"}
        </SyntaxHighlighter>
        
        </div>
    </Windows>
  );
};

export default Notes;
