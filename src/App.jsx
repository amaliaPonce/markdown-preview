import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialMarkdown = `# Mi Documento

## Sección 1
Este es un párrafo de texto en **negrita**.

### Subsección
- Elemento de lista 1
- Elemento de lista 2

> Esto es una cita.

[Enlace a Google](https://www.google.com/)

![Imagen de ejemplo](https://via.placeholder.com/150)

\`Código en línea\`
`;

const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleEditorChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center text-center bg-light
    ">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="text-center mb-4">Markdown previewer</h1>
          <h2>Instrucciones</h2>
          <p>
            Bienvenido al Markdown previewer. Utiliza el editor para escribir tu
            documento en formato Markdown. Observa la vista previa actualizada en tiempo real.
          </p>
          <p>
            Puedes comenzar con el contenido predefinido o escribir tu propio Markdown.
          </p>
          <Editor handleChange={handleEditorChange} defaultValue={markdown} />
        </div>
        <div className="col-lg-6">
          <Previewer markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default App;
