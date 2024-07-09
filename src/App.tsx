import ContextProvider from "./context";
import { FooterComponent, HeaderComponent, MainComponent } from "./layout";

const App = () => {
  
  return (<>
    <ContextProvider
      className="
        flex
        py-2
        px-4
        flex-col
        justify-between
        min-h-screen
        bg-[url('/images/bg-mobile-light.jpg')]
        bg-contain
        bg-no-repeat
        "
      >
      <div>
        <HeaderComponent />
        <MainComponent />
      </div>
      <FooterComponent />
    </ContextProvider>
  </>);
};

export default App;