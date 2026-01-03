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

export default function FormularioDeEvento(){
  return(
    <form className="formEvento">
      <h2>Preencha para criar um evento:</h2>
      <div className="formEvento_campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada type="text" id="nomeEvento" placeholder="Summer Dev Hits"/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do Evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" placeholder="XX/XX/XXXX"/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do Evento</Label>
          <select name="" id="">
            <option value="">Tecnologia</option>
            <option value="">Saúde</option>
            <option value="">Educação</option>
          </select>
        </CampoDeFormulario>
      </div>
      <div className="formEvento_acoes">
        <input type="submit" value="Criar Evento" />
      </div>
    </form>
  ) 
}