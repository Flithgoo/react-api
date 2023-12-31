import { useNavigate } from 'react-router-dom';
import { number, func, any } from 'prop-types';
import { MdDelete, MdEditDocument } from "react-icons/md";
function DetailNoteButton({ id, onDelete, }) {
  const navigate = useNavigate();

  const BtnComponent = ({ onclick, children }) => <a className='btn btn-outline-light rounded-circle fs-3 mx-3 mt-2' onClick={() => onclick(id)}>{children}</a>

  BtnComponent.propTypes = {
    onclick: func.isRequired,
    children: any
  }

  return (
    <>
      <BtnComponent onclick={() => navigate(`/edit/${id}`)}><MdEditDocument /></BtnComponent >
      <BtnComponent onclick={onDelete}><MdDelete /></BtnComponent>
    </>
  )
}

DetailNoteButton.propTypes = {
  id: number.isRequired,
  onDelete: func.isRequired,
}

export default DetailNoteButton;