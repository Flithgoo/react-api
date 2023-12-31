import { string, func, number } from "prop-types";
import DetailNoteButton from './DetailNoteButton';

function DetailNote({ id, isbn, title, description, publisher, author, onDelete }) {
  return (
    <div className="container py-5 rounded-4">
      <div className="row mt-3 text-bg-dark justify-content-center p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-12 p-3 p-lg-5 pt-lg-1">
          <h1 className="display-4 fw-bold lh-1">{title}</h1>
          <p className="text-secondary">{`${publisher} - ${isbn}`}</p>
          <p className="lead">{description}</p>
          <p className="text-secondary">{author}</p>
          <div className="d-flex justify-content-end">
            <DetailNoteButton id={id} onDelete={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

DetailNote.propTypes = {
  id: number,
  isbn: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  author: string.isRequired,
  publisher: string.isRequired,
  onDelete: func.isRequired,
};

export default DetailNote;