import React from 'react';

class DocumentInput extends React.Component {

    constructor(props){
        super(props)
    }

    doClick = (e) =>{
        this.props.parentDelete(e);
    }

    addText = (e) => {
        this.props.addText(e.target.value, e.target.id);
    }

    render() {
        return (
            <div className="grid display-four">
            <button value={this.props.index} key={this.props.index} onClick={e => this.doClick(this.props.index)}>
            <i value={this.props.index} className="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button><i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button><i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        
        <input 
        type="text" id={this.props.index}
        name={`document-${ this.props.index }-document`} onChange={e => this.addText(e)} 
      />
        </div>
        )

    }
  }

  export default DocumentInput;