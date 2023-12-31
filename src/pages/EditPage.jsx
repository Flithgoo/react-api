import { useParams, useNavigate } from 'react-router-dom';
import { editBook } from '../utils/network-data';
import EditForm from "../components/EditForm";

function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  async function onEditBook(id, title, description, author, publisher) {
    await editBook(id, title, description, author, publisher)
    navigate('/');
  }

  return (
    <div className='wrapper'>
      <EditForm id={id} editBook={onEditBook} />
    </div>
  )
}

export default EditPage;