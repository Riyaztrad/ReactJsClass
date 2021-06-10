import React, {Component} from 'react';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tempName: '',
      nameArray: []
    }
  }

  onClickBtn = () => {

    this.setState({name: this.state.tempName}, () => {

      this.setState({nameArray: [...this.state.nameArray, this.state.name]}, () => {
        this.setState({tempName: ''})
      })
      // this.state.nameArray.push({})

    })
  }
  removeItem = (item) => {

    let index = this.state.nameArray.indexOf(item)
    console.log("index", index)
    let tempArray = this.state.nameArray;
    if (index > -1) {
      tempArray = tempArray.splice(index, 1);

    }
    console.log("tempArray", tempArray)
    this.setState({nameArray: tempArray})
  }

  render() {
    return (
      <div className="root">
        <input
          onChange={(event) => {
            // console.log("event", event.target.value)
            this.setState({tempName: event.target.value})
          }}
          placeholder="Enter name"
          value={this.state.tempName}
        />
        <button
          onClick={this.onClickBtn}
        >
          change
        </button>
        {
          this.state.nameArray &&
          this.state.nameArray.map((item, index) => {
            return (
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <h1 key={index}>Hello!  {item}</h1>
                <button
                  style={{
                    height: 35
                  }}
                  onClick={() => {this.removeItem(item)}}
                >
                  close
               </button>
              </div>

            )
          })
        }


      </div>
    )
  }
}

export default App;