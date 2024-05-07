import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import TapButtom from "../TapButtom.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [currentContnet, setCurrentContent] = useState();

  function handleClick(selectedButtom) {
    setCurrentContent(selectedButtom);
    console.log(currentContnet);
  }

  let tabContnet = <p>Please select topic to show</p>;
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
    <Section title="Examples" id="examples">
      <Tabs
        buttoms={
          <>
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
          </>
        }>
        {tabContnet}
      </Tabs>
    </Section>
  );
}
