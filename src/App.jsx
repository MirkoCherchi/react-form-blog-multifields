import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [valoreAttualeDelloStato, funzionePerAggiornareLoStato] = useState(0);
  return (
    <>
      <h1>I miei Post</h1>
      <Form />
    </>
  );
}

export default App;
