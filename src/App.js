import logo from './logo.svg';
import './App.css';
// import { t } from 'i18next';
import Code from './enum/lang-code.enum'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { withTranslation , useTranslation} from 'react-i18next';
import changeLanguage  from './utils/changeLanguage';
function App() {
  const options = [
    Code.AR, Code.EN
  ];
  const {t, i18n} = useTranslation()
  const defaultOption = localStorage.getItem("langCode");
  const onSelectionChange=(e)=>{
    const {value}=e
    console.log(value);
    localStorage.setItem("langCode",value)
    i18n.changeLanguage(value)
    // changeLanguage()
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <span>{t('Welcome.welcome')}</span> 
          <Dropdown options={options} onChange={onSelectionChange} value={defaultOption} placeholder="Select an option" />
        </div>
      </header>
    </div>
  );
}

export default withTranslation() (App);
