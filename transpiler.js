import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '/* jsx transpiler */',
      output: '',
      err:''
    }
  }
    update(e){
      let code = e.target.value;
      try{
        this.setState({
          output:window.Babel
          .transpile(code, {presets: ['ES2015','React']})
          .code,
          err:''
        })      
      }
      catch(err){
        this.setState({err:err.message})
      }
    }
  
  render(){
    return(
      <div>
        <header>{this.state.err}</header>
        <div className="container">
        <textarea 
          onChange = {this.update.bind(this)}
          defaultValue = {this.state.input}/>
          <pre>
            {this.state.output}
          </pre>

        </div>
      </div>
    )
  }
  
}

export default App
