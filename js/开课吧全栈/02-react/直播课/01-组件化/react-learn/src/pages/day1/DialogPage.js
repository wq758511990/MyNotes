import React, { Component } from 'react'
import Dialog from '../../components/day1/Dialog.js'

export default class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    };
  }
  render() {
    const { showDialog } = this.state;
    return (
      <div>
        <h3>DialogPage</h3>
        <button
          onClick={() =>
            this.setState({
              showDialog: !showDialog
            })
          }>
          toggle
        </button>
        {showDialog && <Dialog>
          <h3>this is text</h3>
        </Dialog>}
      </div>
    );
  }
}