import styled from "styled-components";
import ArrrowRight from '/assets/icon-arrow-right.svg';


function GenerateButton( {handleClick}: {handleClick: any}) {
    return (
        <Button  onClick={ () => {handleClick()}}>
        <GenerateText>GENERATE</GenerateText>
        <ArrowImage src={ArrrowRight} />
      </Button>
    )
}

const ArrowImage = styled.img`
  width: 11.11px;
  height: 12px;
  margin-left: 8px;
`

const GenerateText = styled.div`
  margin-right: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.12px;
  color: #24232C;
  font-family: 'JetBrains Mono', monospace;
  @media (min-width: 540px) {
    font-size: 18px;
  line-height: 23.76px;
  }
`

const Button = styled.div`
  cursor: pointer;
  width: 311px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A4FFAF;
  @media (min-width: 540px) {
    width: 476px;
    height: 65px;
  }
`

export default GenerateButton;