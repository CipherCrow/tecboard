import "./formularioDeEvento_styles.css"

function CampoDeFormulario({ children }) {
  return (
    <fieldset className="campoForm">
      {children}
    </fieldset>
  )
}

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function CampoDeEntrada({ type, id, placeholder, name }) {
  if (type === "textarea") {
    return <textarea id={id} name={name} placeholder={placeholder}></textarea>
  }
  else {
    return <input type={type} id={id} name={name} placeholder={placeholder} />
  }
}

export default function FormularioDeEvento({ temas, aoSubmeter }) {

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const eventoCriado = {
      tema: temas.find(
        tema => tema.id === parseInt(formData.get("temaEvento"))
      ),
      imagem: formData.get("imagemEvento"),
      data: new Date(formData.get("dataEvento")),
      nome: formData.get("nomeEvento"),
      descricao: formData.get("descricaoEvento")
    };

    aoSubmeter(eventoCriado);
    event.target.reset();
  }

  return (
    <form className="formEvento" onSubmit={submitHandler}>
      <h2>Preencha para criar um evento:</h2>
      <div className="formEvento_campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do Evento?</Label>
          <CampoDeEntrada type="text" id="nomeEvento" placeholder="Summer Dev Hits" name="nomeEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="imagemEvento">Qual o endereço da imagem de capa do Evento?</Label>
          <CampoDeEntrada type="text" id="imagemEvento" placeholder="https://minhaimagemfavorita.com.br/imagem.png" name="imagemEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="descricaoEvento">Descrição do Evento</Label>
          <CampoDeEntrada type="textarea" id="descricaoEvento" name="descricaoEvento" placeholder="Descreva o Evento..." />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do Evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do Evento</Label>
          <select id="temaEvento" defaultValue="" name="temaEvento">
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