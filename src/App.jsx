

import './index.css'
import List from "./components/list/List.jsx"
import Chat from "./components/chat/Chat.jsx"
import Detail from "./components/detail/Detail.jsx"
import Login from "./components/login/Login.jsx"
const App = () =>{
  const user = true;
  return(
    <div className='container'>
      {  user?(
        <>
     <List />
     <Chat />
     <Detail />
     </>
      ):(<Login />)
      }
    </div>
      
  )
}

export default App