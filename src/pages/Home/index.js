import { useState } from 'react';
import Form from '../../components/Form';
import GitHub from '../../components/GitHub';
import { Header, Main } from './styles';

export default function Home() {

  const [reposList, setReposList] = useState([])

  return (
    <>
      <Header>
        <GitHub />
      </Header>
      <Main>
        <Form onSubmit={(repos) => updateReposList(repos)} />
        {reposList.length ? <ul>
          {reposList.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul> : null}
      </Main>
    </>
  )

  /**
   * @param {[]} repos 
   */
  function updateReposList(repos) {
    if (reposList.some(item => repos.id === item.id)){
      console.log('Esse repositório já está na lista')
      return
    }

    setReposList(reposList.concat(repos))
  }
}