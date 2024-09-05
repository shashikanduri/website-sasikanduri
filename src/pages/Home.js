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
          <p>I am a graduate student in computer science at <a href="https://www.csus.edu/" style={{color:"steelblue", textDecoration:"none"}} target="_blank">California State University, Sacramento </a>
          actively seeking internship and fulltime opportunities. <br /><br />
          Working as a software engineer intern at
          <a href="https://www.owp.csus.edu/" style={{color:"steelblue", textDecoration:"none"}} target="_blank"> Office of Water Programs</a> in California, 
          I am a dedicated and passionate developer eager to learn and contribute to impactful technological solutions. I have an experience of over three years as a software engineer including specialization in web development, microservices, database management, and distributed systems.
          What I can bring to the team is a strong foundation in building scalable and efficient software, ability to write robust code and work on complex projects. With my expertise in programming languages such as Java, Python, and JavaScript, my professional experience, along with my passion for continuous learning and capability to contribute to the development of significant large-scale applications, I believe I am well-suited for the Software Engineer position.
          </p>

          <a href="https://www.linkedin.com/in/sasi-kiran-kanduri-692a73a9/" target="__blank"><LinkedInIcon /></a>
          <a href="https://github.com/shashikanduri" target="_blank"><GithubIcon /></a>
          <a href="/website-sasikanduri/Sasi_Kanduri.pdf" target="_blank"><NoteRounded /></a>

        </div>
      </div>
    </div>
  );
}

export default Home;
