import delivery from './delivery.png';
import coin from './coin.png';
import chat from './chat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'spaceAround',
        margin: '100px'}}>
        <FreeShipping />
        <MoneyBack />
        <OnlineSupport />
      </div>
    </div>
  );
}

export default App;

const title = { 
  freeShipping: 'Free shipping',
  moneyBack: '100% Money back',
  onlineSupport: 'Online Support 24/7'

}

const description = {
  freeShipping: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  moneyBack: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
  onlineSupport: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
}

function Guarantee (props) {
  return (
      <div>
        <div style={{padding:"15px"}}>
          <img src={props.src} alt="img" style={{height:"100px"}}/>
          <h1>{props.title}</h1>
          <p1>{props.description}</p1>
      </div>
      </div>

  );
}

function FreeShipping (props) {
  return (
  <Guarantee 
      src={delivery}
      title = {title.freeShipping}
      description = {description.freeShipping}
      />
  );
}

function OnlineSupport (props) {
    return (
    <Guarantee 
        src={chat}
        title = {title.onlineSupport}
        description = {description.onlineSupport}
        />
    );
  }

  function MoneyBack (props) {
    return (
    <Guarantee 
        src={coin}
        title = {title.moneyBack}
        description = {description.moneyBack}
        />
    );
  }