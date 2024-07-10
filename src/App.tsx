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
        lg:bg-[url('/images/bg-desktop-light.jpg')]
        bg-[url('/images/bg-mobile-light.jpg')]
        bg-contain
        bg-no-repeat
        lg:items-center
        "
      >
      <div className="lg:w-[40%]">
        <HeaderComponent />
        <MainComponent />
      </div>
      <FooterComponent />
    </ContextProvider>
  </>);
};

export default App;