import Card from "./components/Card";
import Storage from "./components/Storage";

function App() {
  return (
    <div className="container">
      <div className="subcontainer">
        <Card />
        <Storage />
      </div>
      <img className="bg-mobile" src='/images/bg-mobile.png' alt="mobile" />
      <img className="bg-desktop" src="/images/bg-desktop.png" alt="desktop" />
    </div>
  );
}

export default App;
