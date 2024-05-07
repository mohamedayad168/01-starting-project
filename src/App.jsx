import Header from "./Components/Header/Header.jsx";

import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./Components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <Header></Header>

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
