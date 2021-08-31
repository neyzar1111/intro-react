import React from "react";
import Header from './components/Hearder';
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';
// import './App.css';

function App() {
  return (
    <div className="App">
        <Header title= "TODO app" />
        <Form/>
        <TaskContainer/>
    </div>
  );
}
// class App extends React.Component{
//     render(){
//         return<div><Header title="TODO app"/><Form/></div>
//     }
// }
export default App;
