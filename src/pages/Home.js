import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import NoteRounded from "@material-ui/icons/NoteRounded"
import "../styles/Home.css";

function Home() {

  return (
    <div className="home">
      <div className="about">
        <p id="name"> Hey, I'm Sasi Kanduri</p>
        <div className="prompt">
          <p>I am a graduate student in computer science at <a href="https://www.csus.edu/" style={{color:"steelblue", textDecoration:"none"}} target="_blank">Sacramento State University </a>
          actively seeking internship opportunities. <br /><br />
          Working as a student software engineer at
          <a href="https://www.owp.csus.edu/" style={{color:"steelblue", textDecoration:"none"}} target="_blank"> Office of Water Programs</a> in California, 
          I am a dedicated and passionate developer eager to learn and contribute to impactful technological solutions.</p>

          <a href="https://www.linkedin.com/in/sasi-kiran-kanduri-692a73a9/" target="__blank"><LinkedInIcon /></a>
          <a href="https://github.com/shashikanduri" target="_blank"><GithubIcon /></a>
          <a href="/sasi_kanduri_resume.pdf" target="_blank"><NoteRounded /></a>

        </div>
      </div>
    </div>
  );
}

export default Home;
