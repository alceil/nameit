import  React ,{useState}from 'react'
import Header from '../Header/Header'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'
const name = require('@rstacruz/startup-name-generator')

const App = () =>{
    const [headerText,setHeaderText] = useState('Name It');
    const [headerExpanded,setheaderExpanded] = useState(true);
    const [suggestedNames,setsuggestedNames] = useState([]);

   const handleInputChange=(inputText) => {
        setheaderExpanded(inputText);
        setsuggestedNames(inputText? name(inputText):[]);
     }
    return (
    <div>
        <Header headerExpanded={headerExpanded} headTitle={headerText}/>
        <SearchBox handleInputChange = {handleInputChange}/>
        <ResultsContainer suggestedNames={suggestedNames}/>
    </div>
    );
}

export default App