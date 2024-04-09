
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FileUpload from './components/fileupload/FileUpload';
import Login from './components/login/Login'
import { Switch } from 'react-router-dom';
import { useContext, useState} from 'react';
import TrackBoard from './components/track board/TrackBoard';



function App() {
  const [user,setUser] = useState(null);
  const [pwd,setPwd] = useState(null);
  
  

  return (
    <Router>
    <div className="App">
      
          <Switch>
          <Route path="/" exact render={()=> <Login user={user} pwd ={pwd} setUser={setUser} setPwd={setPwd}/>}/>
            
            
            <Route path="/fileupload" render={()=> <FileUpload name={user}/>} />
            <Route path="/trackBoard" render={()=> <TrackBoard/>} />
            
            
          </Switch>
      
    </div>
      

    </Router>
  );
}

export default App;
