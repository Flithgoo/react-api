import { array } from 'prop-types';
import NotesItemCard from "./NotesItemCard";

function NotesList({ notes }) {

  if (notes.length !== 0) {
    return (
      <div className="container shadow">
        <h2 className="container-header mb-4 text-white">List Buku</h2>
        <div className="list-item">
          <div className="row">
            {
              notes.map((note) => (
                <NotesItemCard
                  key={note.id}
                  id={note.id}
                  {...note} />
              ))
            }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container shadow">
        <h2 className="container-header mb-4 text-white">List Buku</h2>
        <h4 className="text-center my-5 py-3 text-white">Tidak ada buku</h4>
      </div>
    )
  }
}

NotesList.propTypes = {
  notes: array.isRequired,
}

export default NotesList;