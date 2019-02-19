import React, { Component } from 'react';

class App extends Component {
  state = {
    value: '',
    textNote: [],
    btnName: 'Add',
    index: -1
  }

  changeHandler = e => {
    this.setState({ value: e.target.value });
  }
  addTextNote = e => {
    e.preventDefault();
    let textNote = this.state.textNote;
    if (this.state.index !== -1) {
      textNote[this.state.index] = this.state.value;
    } else {
      textNote.push(this.state.value);
    }
    this.setState({ textNote, value: '', btnName: 'Add', index: -1 });
  }
  editHandler = i => {
    this.setState({ value: this.state.textNote[i], btnName: 'Update', index: i });
  }
  editDelete = i => {
    let arr = this.state.textNote;
    arr.splice(i, 1);
    this.setState({ textNote: arr });
  }

  render() {
    // console.log(this.state)
    return (
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form onSubmit={this.addTextNote}>
            <div className="row form-group" style={{ margin: "20px 0 20px 0" }}>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.changeHandler} />
              </div>
              <div className="col-sm-3">
                <button type="submit" name="addNotes" id="addNotes">{this.state.btnName}</button>
              </div>
            </div>
          </form>
          {this.state.textNote.map((el, i) =>
            (
              <div className="row form-group" key={i}>
                <div className="col-sm-12">
                  <div className="alert alert-success">
                    <div className="row">
                      <div className="col-sm-8">{el}</div>
                      <div className="col-sm-4">
                        <button type="button" name="Edit" className="btn btn-warning btn-sm" onClick={(e) => this.editHandler(i)}>Edit</button>
                        <button type="button" name="Delete" className="btn btn-danger btn-sm" onClick={(e) => this.editDelete(i)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

        </div>
      </div>
    );
  }
}

export default App;
