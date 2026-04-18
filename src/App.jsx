import Footer from "./components/Footer";
import FormularioColores from "./components/FormularioColores";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <main className="container my-3">
        <h1 className='text-center my-4'>AdminColors</h1>
        <FormularioColores></FormularioColores>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
