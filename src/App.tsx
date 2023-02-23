import { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import CopyImage from '/assets/icon-copy.svg';
import FilterMarker from './components/FilterMarker';
import Strength from './components/Strength';
import GenerateButton from './components/GenerateButton';
import { useClipboard } from 'use-clipboard-copy';

function App() {
  const [number, setNumber] = useState(0)
  const [rangeValue, setRangeValue] = useState(0)
  const [password, setPassword] = useState<any>('');
  const [uppercase, setUppercase] = useState<any>(false);
  const [lowercase, setlowercase] = useState<any>(false);
  const [numbers, setNumbers] = useState<any>(false);
  const [symbols, setSymbols] = useState<any>(false);

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const allNumbers = "0123456789";
  const allSymbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  let charsetAll: any = " ";

  const { copy } = useClipboard();

  const handleCopyClick = () => {
    copy(password);
  };

  function charsetFunc() {
    if (uppercase == true && lowercase == true && numbers == true && symbols == true) {
      return charsetAll = upperCase + lowerCase + allNumbers + allSymbols;
    } else if (uppercase == true && lowercase == true && numbers == true && symbols == false) {
      return charsetAll = upperCase + lowerCase + allNumbers;
    } else if (uppercase == true && lowercase == true && numbers == false && symbols == false) {
      return charsetAll = upperCase + lowerCase
    } else if (uppercase == true && symbols == false && numbers == false && lowercase == false) {
      return charsetAll = upperCase;
    } else if (uppercase == true && lowercase == false && numbers == true && symbols == true) {
      return charsetAll = upperCase + allNumbers + allSymbols;
    } else if (uppercase == true && lowercase == true && numbers == false && symbols == true) {
      return charsetAll = upperCase + lowerCase + allSymbols;
    } else if (uppercase == false && lowercase == true && numbers == false && symbols == false) {
      return charsetAll = lowerCase;
    } else if (uppercase == false && lowercase == true && numbers == true && symbols == false) {
      return charsetAll = lowerCase + allNumbers
    } else if (uppercase == false && lowercase == true && numbers == false && symbols == true) {
      return charsetAll = upperCase + allNumbers;
    } else if (uppercase == false && lowercase == true && numbers == true && symbols == true) {
      return charsetAll = lowerCase + allNumbers + allSymbols
    } else if (uppercase == false && lowercase == false && numbers == true && symbols == false) {
      return charsetAll = allNumbers
    } else if (uppercase == false && lowercase == false && numbers == true && symbols == true) {
      return charsetAll = allNumbers + allSymbols
    } else if (uppercase == true && lowercase == false && numbers == true && symbols == false) {
      return charsetAll = allNumbers + upperCase
    } else if (uppercase == false && lowercase == false && numbers == false && symbols == true) {
      return charsetAll = allSymbols
    } else if (uppercase == true && lowercase == false && numbers == false && symbols == true) {
      return charsetAll = upperCase + allSymbols
    }
  }

  const handleClick = () => {
    return setPassword(PasswordGenerator(number));
  }

  function PasswordGenerator(length: any) {

    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charsetAll.length);
      password += charsetAll[randomIndex];
    }
    return password;
  }

  function handleRangeChange(event: any) {
    setRangeValue(parseInt(event.target.value));
    setNumber(parseInt(event.target.value));
  }

  return (
    <MainWrapper>
      <GlobalStyles />
      <Cude>
        <Heading>Password Generator</Heading>
        <GeneratedPasswordWrapper>
          <GeneratedPassword>{password}</GeneratedPassword>
          <CopyIcon onClick={handleCopyClick} src={CopyImage} />
        </GeneratedPasswordWrapper>
        <GeneratorDiv>
          <CharacterLengthDiv>
            <CharacterLength >Character Length</CharacterLength>
            <LengthNumber>{number}</LengthNumber>
          </CharacterLengthDiv>

          <Range type="range" min="0" max="20" value={rangeValue} onChange={handleRangeChange} />

          <FilterMarker symbols={symbols} setSymbols={setSymbols} numbers={numbers} setNumbers={setNumbers} lowercase={lowercase} setlowercase={setlowercase} setUppercase={setUppercase} uppercase={uppercase} />

          <Strength password={password} charsetFunc={charsetFunc} />

          <GenerateButton handleClick={handleClick} />

        </GeneratorDiv>
      </Cude>
    </MainWrapper>
  )
}



const Range = styled.input.attrs({ type: 'range' })`
  width: 311px;
  margin-left: -1px;
  height: 8px;
  -webkit-appearance: none;
  background-color: #A4FFAF;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    background-color: #E6E5EA;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
  }
  @media (min-width: 540px) {
    width: 476px;
    height: 8px;
  }
`;

const LengthNumber = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 31.68px;
  color: #A4FFAF;
  font-family: 'JetBrains Mono', monospace;
  @media (min-width: 540px) {
    font-size: 32px;
    line-height: 42.24px;
  }
`

const CharacterLength = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21.12px;
  color: #E6E5EA;
  font-family: 'JetBrains Mono', monospace;
  @media (min-width: 540px) {
    font-size: 18px;
    line-height: 23.76px;
  }
`

const CharacterLengthDiv = styled.div`
  width: 311px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 540px) {
    width: 476px;
  }
`

const GeneratorDiv = styled.div`
  height: 423px;
  width: 343px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #24232C;
  @media (min-width: 540px) {
    width: 540px;
    height: 458px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;
  }
`

const CopyIcon = styled.img`
  cursor: pointer;
  width: 17.5px;
  height: 20px;
  @media (min-width: 540px) {
    width: 21px;
    height: 24px;
  }
`

const GeneratedPassword = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 31.68px;
  color: #E6E5EA;
  font-family: 'JetBrains Mono', monospace;
  opacity: 0.25;
  @media (min-width: 54px) {
    font-size: 32px;
    line-height: 42.24px;
  }
`

const GeneratedPasswordWrapper = styled.div`
  width: 343px;
  height: 64px;
  background-color: #24232C;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 22px;
  @media (min-width: 540px) {
    width: 540px;
  height: 80px;
  padding-left: 32px;
  padding-right: 32px;
  }
`

const Heading = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21.12px;
  color: #817D92;
  font-family: 'JetBrains Mono', monospace;
  @media (min-width: 540px) {
    font-size: 24px;
  line-height: 31.68px;
  }
`

const Cude = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 343px;
  height: 540px;
  background-color: #08070B;

  @media (min-width: 540px) {
    width: 540px;
    height: 605px;
  }

`

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #08070B;
`


const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

textarea {
  resize: none;
}

`



export default App;
