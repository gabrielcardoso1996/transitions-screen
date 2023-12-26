import { DateSection } from "./date";
import { DoneSection } from "./done";
import { FoodSection } from "./foodOptions";
import { HomeSection } from "./home";
import "./styles.css";
import "animate.css/animate.min.css";
import {ArrayProvider} from "./utils/ArrayProvider";

function App() {
  return (
    <ArrayProvider>
    <>
      <HomeSection />
      <FoodSection />
      <DateSection />
      <DoneSection />
    </>
    </ArrayProvider>
  );
}

export default App;
