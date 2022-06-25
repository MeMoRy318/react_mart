import Characters from "./components/Characters";
import "../src/components/Characters.css"
function App() {
  return (
    <div >
<Characters name={"Bart"}
            surname={"Simson"}
            body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nulla!"}
            img={"https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif"}
/>
        <Characters name={"Homer"}
            surname={"Simson"}
            body={"Lorem  ipsum dolor sit amet, consectetur adipisicing elit.Culpa" +
                " exercitationem expedita laboriosam nihil nisi recusandae."}
            img={"https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png"}
/>
        <Characters name={"Martha "}
                    surname={"Simson"}
                    body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa" +
                        " exercitationem expedita laboriosam nihil nisi recusandae."}
                    img={"https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png"}
        />
        <Characters name={"liza"}
                    surname={"Simson"}
                    body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa" +
                        " exercitationem expedita laboriosam nihil nisi recusandae."}
                    img={"https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png"}
        />
    </div>
  );
}

export default App;
