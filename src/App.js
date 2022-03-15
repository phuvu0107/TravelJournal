import NavBar from './components/NavBar';
import "./index.css"
import data from "./data.js"
import Main from "./components/Main"

function App() {
  //continue here
  const cards = data.map(item => {
    return (
      <Main 
        key={item.title}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })
  //const 
  return (
    <div className="app">
      <NavBar />
      <div className="cards-list">
        {cards}
      </div>
      
    </div>
  );
}

export default App;
