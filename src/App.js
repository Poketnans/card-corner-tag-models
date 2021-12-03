import "./styles.css";
import Card from "./components/Card";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Card />
      </div>
    </ChakraProvider>
  );
}
