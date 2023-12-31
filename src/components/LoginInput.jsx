import useInput from '../hooks/useInput';
import { func } from 'prop-types'
import { Link } from 'react-router-dom';

function LoginInput({ login }) {
  const [email, emailChange] = useInput();
  const [password, passwordChange] = useInput();

  function onSubmit(event) {
    event.preventDefault();

    login({
      email, password
    })
  }

  return (
    <div className="container shadow mt-5">
      <h2 className="text-center text-white">Form Login</h2>
      <form onSubmit={onSubmit} className="form" id="form">
        <div className="form-floating mb-3">
          <input required value={email} onChange={emailChange} type="email" className="form-control fs-5" id="floatingInput" placeholder="email" />
          <label className="" htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating h-50 mb-3">
          <input required value={password} onChange={passwordChange} type='password' className="form-control fs-5" placeholder="password" id="floatingTextarea"></input>
          <label htmlFor="floatingTextarea">Password</label>
        </div>
        <p className='text-light'>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>

        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-outline-light fs-6 px-4 rounded-pill">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  login: func.isRequired,
}

export default LoginInput;