import styled from "styled-components";


function Strength({ charsetFunc, password }: { password: any, charsetFunc: any }) {

  return (
    <StrengthWrapper>
      <StrengthText>STRENGTH</StrengthText>
      <StrengthType>{password.length > 0 && password.length <= 5 ? "TOO WEAK" : ""}
      {password.length > 5 && password.length <= 10 ? "WEAK" : ""}
      {password.length > 10 && password.length <= 15 ? "MEDIUM" : ""}
      {password.length > 15 && password.length ? "STRONG" : ""}</StrengthType>

      {password.length > 0 && password.length <= 5? <ColumnsWrapperTooWeak>
        <ColumnTooWeak onClick={charsetFunc()}></ColumnTooWeak>
        <EmptyColumn></EmptyColumn>
        <EmptyColumn></EmptyColumn>
        <EmptyColumn></EmptyColumn>
      </ColumnsWrapperTooWeak> : ""}

      {password.length > 5 && password.length <= 10? <ColumnsWrapperWeak>
        <ColumnWeak onClick={charsetFunc()}></ColumnWeak>
        <ColumnWeak></ColumnWeak>
        <EmptyColumn></EmptyColumn>
        <EmptyColumn></EmptyColumn>
      </ColumnsWrapperWeak> : ""}

      {password.length > 10 && password.length <= 15? <ColumnsWrapperMedium>
        <ColumnMedium onClick={charsetFunc()}></ColumnMedium>
        <ColumnMedium></ColumnMedium>
        <ColumnMedium></ColumnMedium>
        <EmptyColumn></EmptyColumn>
      </ColumnsWrapperMedium> : ""}
      
      {password.length > 15 ? <ColumnsWrapperStrong>
        <ColumnStrong onClick={charsetFunc()}></ColumnStrong>
        <ColumnStrong></ColumnStrong>
        <ColumnStrong></ColumnStrong>
        <ColumnStrong></ColumnStrong>
      </ColumnsWrapperStrong> : ""}
    </StrengthWrapper>
  )
}


const EmptyColumn = styled.div`
  width: 10px;
  height: 28px;
  border: 2px solid white;
`

const ColumnTooWeak = styled.div`
  width: 10px;
  height: 28px;
  background-color: #F64A4A;
`
const ColumnWeak = styled.div`
  width: 10px;
  height: 28px;
  background-color: #FB7C58;
`

const ColumnStrong = styled.div`
  width: 10px;
  height: 28px;
  background-color: #A4FFAF;
`
const ColumnMedium = styled.div`
  width: 10px;
  height: 28px;
  background-color: #F8CD65;
`

const ColumnsWrapperStrong = styled.div`
  margin-left: 16px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ColumnsWrapperTooWeak = styled.div`
  margin-left: 16px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ColumnsWrapperWeak = styled.div`
  margin-left: 16px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ColumnsWrapperMedium = styled.div`
  margin-left: 16px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StrengthType = styled.p`
  margin-left: 57px;
  font-size: 18px;
  font-weight: 700;
  line-height: 23.76px;
  color: #E6E5EA;
  font-family: 'JetBrains Mono', monospace;
  @media (min-width: 540px) {
    font-size: 24px;
    line-height: 31.68px;
    margin-left: 150px;
  }
`

const StrengthText = styled.p`
  margin-left: 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.12px;
  color: #817D92;
  font-family: 'JetBrains Mono', monospace;
  @media (min-width: 540px) {
    margin-left: 32px;
    font-size: 18px;
    line-height: 23.76px;
  }
`

const StrengthWrapper = styled.div`
  width: 311px;
  height: 56px;
  align-items: center;
  display: flex;
  background-color: #18171F;
  @media (min-width: 540px) {
    width: 476px;
    height: 72px;
  }
`

export default Strength;