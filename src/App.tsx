import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Button from "./Components/Button";
import User from "./Components/User";
import { Counter } from "./Components/Counter";
import { ThemeContextProvider } from "./Components/context/ThemeContext";
import { Box } from "./Components/context/Box";

function App() {
  return (
    <div>
      <h1>React and Typescript tutorial</h1>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      <Status status="loading" />
      <Heading>This is placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Jihan</Heading>
      </Oscar>
      <Button
        handleClick={(e, id) => {
          console.log("Button Clicked", e, id);
        }}
      />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
