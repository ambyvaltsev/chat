import { withProviders } from "./providers";
import "./index.scss";
import { Header } from "../layout";
import { AppRoutes } from "../components";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default withProviders(App);
