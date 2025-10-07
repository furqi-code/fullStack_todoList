import { Header } from "./components/header";
import {TaskContextProvider} from "./store/contextTask";

export function App() {
  return(
    <>
    <TaskContextProvider>
      <Header></Header>
    </TaskContextProvider>
    </>
  )
}
