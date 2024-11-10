import './Value.css';
// import { a } from 'react-router-dom';
import money1 from './images/money1.svg';
import money2 from './images/money2.svg';
import money3 from './images/money3.svg';

function App() {
  return (
    <div className="value1">
        <div className="value">
            <div className="value-item">
                <img src={money1} alt="i" className="value-icon" />
                <h1 className="value-heading">$522M</h1>
                <p className="value-para">Claims Recieved</p>
            </div>
            <div className="value-item">
                <img src={money2} alt="i" className="value-icon" />
                <h1 className="value-heading">$6.1B</h1>
                <p className="value-para">Worth Projects</p>
            </div>
            <div className="value-item">
                <img src={money3} alt="i" className="value-icon" />
                <h1 className="value-heading">95.3%</h1>
                <p className="value-para">Success Rate</p>
            </div>
        </div>
        <div className="value2">
            <div class="value2-content">
            </div>
        </div>
    </div>

  );
}

export default App;
