import './App.css'
import Header from './components/header/index.jsx'
import FormularioDeEvento from './components/formularioDeEvento/index.jsx'
import SectionApresentacao from './components/sectionApresentacao/index.jsx';

function App() {

  /*Idealmente aqui, o fonte pegaria todos os temas existentes no banco de dados*/
  const temas = [
    {id: 1, nome: 'Front-end'},
    {id: 2, nome: 'Back-end'},
    {id: 3, nome: 'Devops'},
    {id: 4, nome: 'Inteligência Artificial'},
    {id: 5, nome: 'Data Science'},
    {id: 6, nome: 'Cloud Computing'}
  ];

  return (
    <main>
      <Header/>
      <FormularioDeEvento temas={temas}/>
      <section className="sessao_apresentacao_container">
        {
          temas.map((tema) => (
            <SectionApresentacao key={tema.id} section={tema} />
          ))
        }
      </section>

    </main>
  )
}

export default App
