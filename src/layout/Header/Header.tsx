import { FormComponent } from "../../components/Header/FormComponent";

export const HeaderComponent = () => {
  return (<>
    <header className="container mb-4 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-[.6rem] text-white">TODO</h1>
        <img className="w-5" src="/icons/icon-moon.svg" alt="dark_mode" />
      </div>
      <FormComponent />
    </header>
  </>);
};