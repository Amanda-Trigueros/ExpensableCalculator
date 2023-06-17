import Calculator from "./calculator"
import trolley from "./assets/images/trolley.svg"
import { colors } from "./global/colors";


const App = () => {
  const category = {
    name: "Groceries",
    color: colors.blue[50],
    icon: trolley,
  };

  return (
    <div>
      {/* Otras partes de tu aplicación */}
      <Calculator category={category} />
    </div>
  );
};


export default App;
