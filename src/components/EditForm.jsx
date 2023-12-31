import { string, func } from 'prop-types';
import useInput from '../hooks/useInput';

function EditForm({ id, editBook }) {
  const [title, titleChange] = useInput('');
  const [description, descriptionChange] = useInput('');
  const [author, authorChange] = useInput('');
  const [publisher, publisherChange] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault()
    editBook(id, title, description, author, publisher);
  }

  return (
    <div className="container shadow mt-5">
      <h2 className="text-center text-white">Edit Buku</h2>
      <form onSubmit={onSubmit} className="form" id="form">
        <div className="form-floating mb-3">
          <input required value={title} onChange={titleChange} type="text" className="form-control fs-5" id="floatingInput" placeholder="judul" />
          <label className="" htmlFor="floatingInput">Judul</label>
        </div>
        <div className="form-floating h-50 mb-3">
          <textarea required value={description} onChange={descriptionChange} className="form-control fs-5" style={{ height: '10em' }} placeholder="Catatan" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Deskripsi</label>
        </div>
        <div className="form-floating mb-3">
          <input required value={publisher} onChange={publisherChange} type="text" className="form-control fs-5" id="turu" placeholder="publisher" />
          <label className="" htmlFor="turu">Penerbit</label>
        </div>
        <div className="form-floating mb-3">
          <input required value={author} onChange={authorChange} type="text" className="form-control fs-5" id="auth" placeholder="publisher" />
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

EditForm.propTypes = {
  id: string.isRequired,
  editBook: func.isRequired
}

export default EditForm;