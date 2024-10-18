import React,{useState} from 'react';
import './App.css';
import Users from './components/Users';
import UsersDetail from './components/UsersDetail';

function App() {
  const [activeUserId, setActiveUserId] = useState(null);

  return ( 
  <div className="Container">
      <div>
        <Users setActiveUserId = {setActiveUserId} />
      </div>
      
      {activeUserId &&(
      <div>
        <UsersDetail activeUserId={activeUserId} />
      </div>
      )}
    </div>
  );
}

export default App;
