import "./styles.css"

export default function FormularioDeEvento(){
  return(
    <form className="formEvento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
          <label htmlFor="nomeEvento">Qual o nome do evento?</label>
          <input type="text" id="nomeEvento" />
      </fieldset>
      <fieldset>
          <label htmlFor="dataEvento">Data do Evento</label>
          <input type="date" id="dataEvento" />
      </fieldset>
      <fieldset>
          <label htmlFor="temaEvento">Tema do Evento</label>
          <input type="text" id="nomeEvento" />
      </fieldset>
      <input type="submit" value="Criar Evento" />
    </form>
  ) 
}