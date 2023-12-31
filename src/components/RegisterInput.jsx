import useInput from '../hooks/useInput';
import { func } from 'prop-types'
import { Link } from 'react-router-dom';

function LoginInput({ register }) {
  const [name, nameChange] = useInput();
  const [email, emailChange] = useInput();
  const [password, passwordChange] = useInput();
  const [confirmPassword, confirmPasswordChange] = useInput();

  function onSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) return alert('Confirm Password must be the same with password');
    register({
      name, email, password, password_confirmation: confirmPassword
    })
  }

  return (
    <div className="container shadow mt-5">
      <h2 className="text-center text-white">Form Register</h2>
      <form onSubmit={onSubmit} className="form" id="form">
        <div className="form-floating mb-3">
          <input required value={name} onChange={nameChange} type="text" className="form-control fs-5" id="name" placeholder="name" />
          <label className="" htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input required value={email} onChange={emailChange} type="email" className="form-control fs-5" id="email" placeholder="email" />
          <label className="" htmlFor="email">Email</label>
        </div>
        <div className="form-floating h-50 mb-3">
          <input required value={password} onChange={passwordChange} type='password' className="form-control fs-5" placeholder="password" id="password"></input>
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating h-50 mb-3">
          <input required value={confirmPassword} onChange={confirmPasswordChange} type='password' className="form-control fs-5" placeholder="confirm password" id="confirmPassword"></input>
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <p className='text-light'>Sudah punya akun? <Link to="/">Login di sini.</Link></p>

        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-outline-light fs-6 px-4 rounded-pill">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  register: func.isRequired,
}

export default LoginInput;