import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App(){
  let items = [
    "New York",
    "Tokyo",
    "Stockholm",
    "Taipei"
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  // always close your react components or you get compliation error
  return (
    <>
      <h1>Countries</h1>
      <div><ListGroup items = {items} heading = "Cities" onSelectItem={handleSelectItem}/></div>

      <div>
        {/* set Alert to not be visible (false) */}
        {alertVisible && <Alert onClose= {() => setAlertVisibility(false)}>My alert</Alert>}
        <Button colour = "danger" onClick= {() => setAlertVisibility(true)}
        >
          information
        </Button>
      </div>
    </>
  );
}

export default App;