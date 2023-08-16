import Header from '../templates/header';
import Footer from '../templates/footer';
import Body from '../templates/body';
import allProps from '../utils/allProps';

// Styles
import '../styles/App.css';

function App() {

  const props = allProps()

  return (
    <div className="App">
      <Header {...props}/>
      <Body {...props}/>
      <Footer {...props}/>
    </div>
  );
}

export default App;
