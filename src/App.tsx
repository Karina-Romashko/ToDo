import React from 'react';
import { Input } from "./components/Input"
// import { InputProps } from './components/Input/Input';
import { RadioGroup } from "./components/RadioGroup"
import { TaskList} from "./components/TaskList"
import { Button } from './components/Button';




export class  App extends React.Component{
  state = {
    value: "",
    todos: [
      { id: "1", text: "My name", isDone: false },
      { id: "2", text: "His name", isDone: true }
    ],
    filter: "all",
    showFilters: true
  };

  changeValue = (event:any) => {
    this.setState({ value: event.target.value });
  };

  buttonOnClick = () => {
    this.setState((prevState:any) => ({
      todos: [
        ...prevState.todos,
        { text: prevState.value, isDone: false, id: prevState.todos.length + 1 }
      ],
      value: ""
    }));
  };

  


  render(){
    return (
    <div className="App">
      <h2>TODO LIST </h2>

     <Input value={this.state.value} onChange={this.changeValue}/> 
     <Button onBtnClick={this.buttonOnClick}/>
     <RadioGroup/>
     <TaskList/>
    
          <ul>
            {this.state.todos
              
              .map((item) => {
                return (
                  <li key={item.id}>
                    <input type="checkbox"
                     
                    />{" "}
                    {item.text}
                  </li>
                );
              })}
          </ul>



    </div>
  );
  }
  
}

export default App;
