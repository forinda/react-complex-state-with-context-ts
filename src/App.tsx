import React from 'react';
import { AppContext } from 'state';

function App() {
  const { state: { user }, useAppDispatch: dispatch } = React.useContext(AppContext)
  React.useEffect(() => { }, [])
  return (
    <div className="App">
      <h1 className='text-red-400'>Hello {user.profile.username ? user.profile.username : "Anonymous"}</h1>
      <button onClick={e => {
        dispatch({ type: "loginSuccess", payload: { isAuthenticated: true, profile: { username: "Mike" } } })
      }}>Add</button>
      <button className='bg-red-400 text-white' onClick={e => {
        dispatch({ type: 'logoutUser', payload: {} })
      }}>Logout</button>
    </div>
  );
}

export default App;
