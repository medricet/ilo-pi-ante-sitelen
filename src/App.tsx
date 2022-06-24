import { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';

import ColorButton from './components/ColorButton';
import Counter from './components/Counter';
import SitelenPona from './components/SitelenPona';
import TextBox from './components/TextBox';

import './App.css';

function App() {
  const [latinText, setLatinText] = useState('');
  const [fontSize, setFontSize] = useState(100);

  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const sitelenPonaRef = useRef(null);

  function saveSitelenPona() {
    htmlToImage.toPng(sitelenPonaRef.current as any)
      .then((dataUrl) => {
        let link = document.createElement('a');
        
        link.download = 'sitelen-pona.png';
        link.href = dataUrl;

        link.click();
      })
  }

  return (
    <div className="app">
      <p className="title">ilo pi ante sitelen - <span className="sitelen">ilo pi ante sitelen</span></p>
      <p style={{ textAlign: "center", lineHeight: 1.8 }}>
        <a href="https://github.com/medricet/ilo-pi-ante-sitelen">medricet/ilo-pi-ante-sitelen</a>
        <br />
        <a href="https://musilili.net/linja-pona/">linja pona</a> font by David A Roberts and jan Seme
      </p>

      <section className="user-input">
        <div className="text-box-wrapper">
          <TextBox height="200px" onChange={setLatinText}/>
        </div>

        <div className="options">
          <div className="option round-item">
            <p>Text size</p>
            <Counter defaultValue={fontSize} onChange={setFontSize} />
          </div>
          <div className="option round-item">
            <p>Text color</p>
            <ColorButton defaultColor={textColor} onChange={setTextColor} />
          </div>
          <div className="option round-item">
            <p>Background color</p>
            <ColorButton defaultColor={backgroundColor} onChange={setBackgroundColor} />
          </div>
          <button className="option save-button round-item" onClick={saveSitelenPona}>
            <p><strong>Save</strong></p>
          </button>
        </div>
      </section>

      <section
        className="round-item"
        style={{
          backgroundColor,
          display: latinText === "" ? "none" : "unset"
        }}
      >
        <div ref={sitelenPonaRef}>
          <SitelenPona latinText={latinText} fontSize={fontSize} color={textColor} />
        </div>
      </section>
    </div>
  );
}

export default App;
