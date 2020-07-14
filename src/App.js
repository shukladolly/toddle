import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocumentInput from './DocumentInput';



class  App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      documents: [],      
    }
    this.add = this.add.bind(this);
  }



  add() {
    const documents = this.state.documents.concat(DocumentInput);
    console.log("documents", documents)
    this.setState({ documents });
  }

  deleteRowP = (val) => {
    const documents = this.state.documents.filter((Element, index)=>{
      return (index !=val && <Element key={ index } index={ index }  parentDelete={this.deleteRowP}  />)
    })
    console.log("the filetered documents ", documents)
    this.setState({
      documents
    })
  }

  addText = (val, val1) => {
    console.log("the value of text input is ", val, "val 1 is ", val1)
    const documentDetails = this.state.documents.map((Element, index) =>{
      return <Element value={val} key={index} index={index} value={val} parentDelete={this.deleteRowP} />
    })

    this.setState({
      documentDetails
    })
  }
    

  render(){
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index }  parentDelete={this.deleteRowP} addText={this.addText}/>
    });
    return(
      <div >
       <div className="grid display-two">
          <div> Actions</div>
             
          <div>
              Standard
              </div> 
              </div>
  
          {documents}
          <div>
          <button className="grid display-one" onClick={ this.add }>Add a Standard</button>
          </div>
  
      </div> 
         )
  }
}

export default App;
