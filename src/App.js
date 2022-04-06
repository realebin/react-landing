import { init } from "./utils/initDronesLayer.js"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    init();
  }, [])
  return (
    <div className="App container">
      <div className="hero my-5">
        <h1 className="title">
          Misalkan Nama Barang
        </h1>
        <p className="text">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
      </div>
      <div className="row h-100 pb-5 pricing-table">
        <div className="col pricing-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#" className="btn btn-primary mt-4">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col pricing-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#" className="btn btn-primary mt-4">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col pricing-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="#" className="btn btn-primary mt-4">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
