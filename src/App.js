import "./styles.css";
import Card from "./components/Card";
import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>Model #1</Tab>
            <Tab>Model #2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Card />
            </TabPanel>
            <TabPanel>
              <Card variant />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </ChakraProvider>
  );
}
