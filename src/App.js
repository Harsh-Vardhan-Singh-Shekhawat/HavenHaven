import styles from './App.module.css';
import FeatureProperty from './components/FeatureProperty';
import Header from './components/Header'
import landingImg from './components/Images/landing.jpg'
import ComfortableLiving from './components/UI/ComfortableLiving';
import FirstDisplay from './components/UI/FirstDisplay';
import ChooseSection from './ChooseSection';
import SecondDisplay from './components/UI/SecondDisplay';
import FamilyNeed from './components/UI/FamilyNeed';
import Appointment from './components/UI/Appointment';
import Sales from './components/UI/Sales';
function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <img className={styles['landing-img']} src={landingImg} alt='Landing Img'></img>
        <div className={styles['intro-text']}>
          <h1 className={styles['intro-heading']}>
            Find You Suitable Dream Home.
          </h1>
          <h2>Find new & featured property located in your local city.</h2>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <FeatureProperty />
      <ComfortableLiving />
      <FirstDisplay />
      <ChooseSection />
      <SecondDisplay />
      <FamilyNeed />
      <Appointment />
      <Sales />
    </div>
  );
}

export default App;
