import CheckImage from '/assets/icon-check.svg';
import styled from "styled-components";
import { useState } from 'react';

function FilterMarker({setUppercase, uppercase, lowercase, setlowercase, numbers, setNumbers, symbols, setSymbols}: {setSymbols: any, symbols: any, setNumbers: any, numbers: any, setlowercase: any, lowercase: any, setUppercase: any, uppercase: any}) {
  const [isUpper, setIsUpper] = useState<any>(false)
  const [isLower, setIsLower] = useState<any>(false)
  const [isNumber, setisNumber] = useState<any>(false)
  const [isSymbol, setIsSymbol] = useState<any>(false)

  function handle(set: any, state: any) {
    return set(!state);
  }

  function upper(setValue: any, value: any) {
    console.log(uppercase)
    return (
      setValue(!value)
    )
  }

    return (
        <FilterAndMarkerWrapper>
        <FilterAndMarker><Markerdiv onClick={() => {handle(setIsUpper, isUpper), upper(setUppercase, uppercase)}} color={isUpper ? "#A4FFAF" : ''} image={isUpper ? CheckImage : ""}></Markerdiv> <FilterText>Include Uppercase Letters</FilterText></FilterAndMarker>
        <FilterAndMarker><Markerdiv onClick={() => {handle(setIsLower, isLower), upper(setlowercase, lowercase)}} color={isLower ? "#A4FFAF" : ''} image={isLower ? CheckImage : ""}></Markerdiv> <FilterText>Include Lowercase Letters</FilterText></FilterAndMarker>
        <FilterAndMarker><Markerdiv onClick={() => {handle(setisNumber, isNumber), upper(setNumbers, numbers)}} color={isNumber ? "#A4FFAF" : ''} image={isNumber ? CheckImage : ""}></Markerdiv> <FilterText>Include Numbers</FilterText></FilterAndMarker>
        <FilterAndMarker><Markerdiv onClick={() => {handle(setIsSymbol, isSymbol), upper(setSymbols, symbols)}} color={isSymbol ? "#A4FFAF" : ''} image={isSymbol ? CheckImage : ""}></Markerdiv> <FilterText>Include Symbols</FilterText></FilterAndMarker>
      </FilterAndMarkerWrapper>
    )
}


const FilterText = styled.div`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.12px;
  color: #E6E5EA;
  font-family: 'JetBrains Mono', monospace;
  @media (min-width: 540px){
    font-size: 18px;
  line-height: 23.76px;
  }
`

const Markerdiv = styled.div<any>`
  display: flex;
  background-position: center;
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  border: 2px solid #E6E5EA;
 `

const FilterAndMarker = styled.div<any>`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const FilterAndMarkerWrapper = styled.div`
  display: flex;
  width: 280px;
  height: 132px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (min-width: 540px) {
    width: 315px;
    height: 152px;
  }
`

export default FilterMarker;
