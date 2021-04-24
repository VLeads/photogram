import React, { useState } from 'react';
// import Title from './comps/Title';
import './index.css';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import './index.css';

import {CgSun} from "react-icons/cg";
import {HiMoon} from "react-icons/hi";

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "./comps/Themes"

const ThemedApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  transition: all .5s ease;
`;

function App() {
  const [selectedImg, setSelectedImg] =  useState(null);
  const [theme, setTheme] = useState("light");
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
      }

      const icon = theme === "light" ? <HiMoon size={25} />: <CgSun size={25} />;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <div className="App">
      <GlobalStyles />
      <ThemedApp>
      <div className="title">
        <div className="nav">
          <h1>PhotoGram</h1>
          <div className="btn">
            <button class="btn-theme" onClick={() => themeToggler()}>{icon}</button>
          </div>
           </div>   
  
            <h2>Your Pictures</h2>
            <p>A image gallery for you to upload your memories and recreate them !!</p>
        </div>
        
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </ThemedApp>
    </div>
    </ThemeProvider>
  );
}

export default App;
