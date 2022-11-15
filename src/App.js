import "./styles.css";
import { connect } from "react-redux";
import MainPage from "./View/main";
const App = (props) => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(App);
