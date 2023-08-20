import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App min-h-[100vh] text-primary font-primary relative">
      <BurgerMenu />
      <Header />

      {/* for testing purposes */}
      <div className="h-screen  pt-24">ONE</div>
      <div className="h-screen ">TWO</div>
      <div className="h-screen " id="three">
        <div className="container">THREE</div>
      </div>
    </div>
  );
}

export default App;
