import React, {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";

class App extends Component {
  state = {
    searchInput: '',
  }

  formSubmitHandler = (data) => {
    this.setState ({...data})
  }

  render() {
    return (

      <div>
        <Searchbar onSubmit= {this.formSubmitHandler} />
      </div>
    );
  }
};

export default App;
