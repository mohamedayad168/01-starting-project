import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TapButtom from "./Components/TapButtom.jsx";
import { useState } from "react";

function App() {
  const [currentContnet, setCurrentContent] = useState();

  function handleClick(selectedButtom) {
    setCurrentContent(selectedButtom);
    console.log(currentContnet);
  }

  let tabContnet = <p>Please select topic.</p>;
  if (currentContnet) {
    tabContnet = (
      <div id="tab-content">
        <h3>{EXAMPLES[currentContnet].title}</h3>
        <p>{EXAMPLES[currentContnet].description}</p>
        <pre>
          <code>{EXAMPLES[currentContnet].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header></Header>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreItem) => {
              return (
                <CoreConcept key={coreItem.title} {...coreItem}></CoreConcept>
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TapButtom
              IsSelected={currentContnet === "Components"}
              onSelect={() => handleClick("Components")}>
              Components
            </TapButtom>
            <TapButtom
              IsSelected={currentContnet === "JSX"}
              onSelect={() => handleClick("JSX")}>
              JSX
            </TapButtom>
            <TapButtom
              IsSelected={currentContnet === "Props"}
              onSelect={() => handleClick("Props")}>
              Props
            </TapButtom>
            <TapButtom
              IsSelected={currentContnet === "State"}
              onSelect={() => handleClick("State")}>
              State
            </TapButtom>
          </menu>
          {tabContnet}
        </section>
      </main>
    </div>
  );
}

export default App;
