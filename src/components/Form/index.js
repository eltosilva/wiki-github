import { httpClient } from '../../services/axios';
import { Button, Container, Input } from './styles';

export default function Form({onSubmit}) {

  /**
   * @param {Event} event 
   */
  async function submit(event){
    event.preventDefault()

    const regex = /^([A-Za-z][A-Za-z0-9_\-.]+)\/([A-Za-z0-9_\-.]+)$/
    /** @type {string} */
    const repos = event.target.elements.repos.value


    if(!regex.test(repos))
      throw Error('Formato inválido')

    const repository = await httpClient.get(`/repos/${repos}`)

    onSubmit(repository.data)
  }

  return (
    <Container onSubmit={submit}>
      <Input placeholder='usuario/repositório' name='repos'/>
      <Button>Buscar</Button>
    </Container>
  )
}