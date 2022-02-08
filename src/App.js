import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/FooterComponent'
import WelcomeComponent from './components/WelcomeComponent';
import LatestComponent from './components/LatestComponent'

function App() {
  return (
    <div>
      <NavbarComponent branding='StriveBook' titleColor='red' />
      <WelcomeComponent branding='StriveBook' fontSize='100px' titleColor='red' fontSizeSubtitle='50px' />
      <LatestComponent />
      <FooterComponent />
    </div>

  );
}

export default App;
