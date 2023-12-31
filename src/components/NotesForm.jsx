import React from "react";
import { func } from 'prop-types';

class NotesForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      publisher: '',
      author: '',
      maxCharacters: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPublisherChange = this.onPublisherChange.bind(this);
    this.onAuthorChange = this.onAuthorChange.bind(this);

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputText = event.target.value;
    if (inputText.length <= this.state.maxCharacters) {
      this.setState({
        title: inputText,
      });
    }
  }

  onDescriptionChange(event) {
    this.setState(() => {
      return {
        description: event.target.value
      }
    })
  }

  onPublisherChange(event) {
    this.setState(() => {
      return {
        publisher: event.target.value
      }
    })
  }

  onAuthorChange(event) {
    this.setState(() => {
      return {
        author: event.target.value
      }
    })
  }


  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state);
  }

  render() {
    const remainingCharacters = this.state.maxCharacters - this.state.title.length;

    return (
      <div className="container shadow mt-5">
        <h2 className="text-center text-white">Tambah Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler} className="form" id="form">
          <p className="text-secondary text-end">Sisa karakter : {remainingCharacters}</p>
          <div className="form-floating mb-3">
            <input required value={this.state.title} onChange={this.onTitleChangeEventHandler} type="text" className="form-control fs-5" id="floatingInput" placeholder="judul" />
            <label className="" htmlFor="floatingInput">Judul</label>
          </div>
          <div className="form-floating h-50 mb-3">
            <textarea required value={this.state.description} onChange={this.onDescriptionChange} className="form-control fs-5" style={{ height: '10em' }} placeholder="Catatan" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Deskripsi</label>
          </div>
          <div className="form-floating mb-3">
            <input required value={this.state.publisher} onChange={this.onPublisherChange} type="text" className="form-control fs-5" id="turu" placeholder="publisher" />
            <label className="" htmlFor="turu">Penerbit</label>
          </div>
          <div className="form-floating mb-3">
            <input required value={this.state.author} onChange={this.onAuthorChange} type="text" className="form-control fs-5" id="auth" placeholder="publisher" />
            <label className="" htmlFor="auth">Pengarang</label>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className="btn btn-outline-light fs-6 px-4 rounded-pill">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

NotesForm.propTypes = {
  addNote: func.isRequired
}

export default NotesForm;