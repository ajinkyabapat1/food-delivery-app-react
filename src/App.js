import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <Header></Header>
   <main>
    <Meals/>
   </main>
    </>
 
  );
}

export default App;
