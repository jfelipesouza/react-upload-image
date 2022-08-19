import styled from 'styled-components'

export const MainApplication = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  max-width: 700px;
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 1px 1px 10px #0000007f;
  border-radius: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  justify-content: center;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  font-weight: bold;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.secundary};
  position: relative;
  span {
    color: ${({ theme }) => theme.colors.background};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    height: 3px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 3rem;
  }
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
`
export const FileInput = styled.input`
  margin: 1rem 0;
`
export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 400;
`
export const UploadButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.secundary};
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:active {
    transform: translateY(-1px);
  }
`

export const UrlContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #222;
  margin-top: 1.25rem;
  span {
    font-size: 1rem;
  }
  span {
    font-weight: 700;
  }
  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`
