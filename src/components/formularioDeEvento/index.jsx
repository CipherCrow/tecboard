import "./formularioDeEvento_styles.css"

function CampoDeFormulario({children}){
    return(
        <fieldset className="campoForm">
            {children}
        </fieldset>
    )
}

function Label({children,htmlFor}){
    return(
        <label htmlFor={htmlFor}>
            {children}
        </label>
    )
}

function CampoDeEntrada({type,id,placeholder}){
    return(
        <input type={type} id={id} placeholder={placeholder}/>
    )
}

export default function FormularioDeEvento({temas}){
  return(
    <form className="formEvento" action={postMessage}>
      <h2>Preencha para criar um evento:</h2>
      <div className="formEvento_campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do Evento?</Label>
          <CampoDeEntrada type="text" id="nomeEvento" placeholder="Summer Dev Hits"/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="imagemEvento">Qual o enderço da imagem de capa do Evento?</Label>
          <CampoDeEntrada type="text" id="imagemEvento" placeholder="https://minhaimagemfavorita.com.br/imagem.png"/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do Evento</Label>
          <CampoDeEntrada type="date" id="dataEvento"/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do Evento</Label>
          <select id="temaEvento" defaultValue="">
            <option value="" disabled >Selecione uma Opção</option>
            {
              temas.map((tema) => (
                <option key={tema.id} value={tema.id}>{tema.nome}</option>
              ))
            }
          </select>
        </CampoDeFormulario>
      </div>
      <div className="formEvento_acoes">
        <input type="submit" value="Criar Evento" />
      </div>
    </form>
  ) 
}