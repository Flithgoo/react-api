import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { number, func } from 'prop-types';
import { getNote } from '../utils/network-data';
import DetailNote from '../components/DetailNote';
import ErrorPage from '../pages/ErrorPage';
import { deleteNote } from '../utils/network-data';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {},
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);
    this.setState({ note: data })
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    this.props.navigate('/');
  }

  render() {
    if (!this.state.note) return <ErrorPage />
    return (
      <DetailNote {...this.state.note} onDelete={this.onDeleteHandler} />
    );
  }
}

DetailPage.propTypes = {
  id: number.isRequired,
  navigate: func.isRequired
}

export default DetailPageWrapper;