import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddItem from "./pages/AddItem";
//redux
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="text-center px-8 py-12 sm:px-40 sm:py-20 bg bg-gray-100">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:itemId" element={<Detail />} />
            <Route path="add-item" element={<AddItem />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
