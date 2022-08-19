import React, { useState } from 'react'
import { api } from '../../utils/api'
import {
  Container,
  FileInput,
  Form,
  HeaderContainer,
  Label,
  MainApplication,
  TextField,
  UploadButton,
  UrlContainer
} from './styled'

const Home: React.FC = () => {
  const [image, setImage] = useState<File | string | null>('')
  const [url, setUrl] = useState('')

  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files!.item(0)
    setImage(file)
  }
  const handleSubmitImage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', image as any)
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await api.post('upload', formData, headers)
    setUrl(res.data.url)
  }
  return (
    <MainApplication>
      <Container>
        <HeaderContainer>
          Up<span>Images</span>
        </HeaderContainer>
        <Form>
          <TextField>
            <Label> Selecione a sua imagem </Label>
            <FileInput type={'file'} onChange={handleSelectImage} />
          </TextField>
          <UploadButton onClick={handleSubmitImage}>Upload</UploadButton>
        </Form>
        {url !== '' && (
          <UrlContainer>
            <span id={'important'}>Link:</span>

            <p>{url}</p>
          </UrlContainer>
        )}
      </Container>
    </MainApplication>
  )
}

export default Home
