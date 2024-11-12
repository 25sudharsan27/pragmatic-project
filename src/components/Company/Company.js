import './Company.css';
import company1 from '../images/company1.png';
import company2 from '../images/company2.png';
import company3 from '../images/company3.png';
import company4 from '../images/company4.png';


function App() {

  return (
    <div className="company-container">
        <h1 className="company-container-name">Brands We Collaborate</h1>
    <div className="company">
        <img src={company1} alt="company" id="company-image" />
        <img src={company2} alt="company" id="company-image" />
        <img src={company3} alt="company" id="company-image" />
        <img src={company4} alt="company" id="company-image" />

    </div>
    </div>
  );
}

export default App;
