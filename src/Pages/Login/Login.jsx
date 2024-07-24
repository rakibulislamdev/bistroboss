import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const [userCaptchaInput, setUserCaptchaInput] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const {login} = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        login(email, password)
        .then(result => {
          const user = result.user
          console.log(user)
          toast.success('User Successfully Logged!');

          navigate(from, {replace: true})
        })
    }

    const handleValidateCaptcha =  event => {
        const value = event.target.value
        setUserCaptchaInput(value)
        if (value.length === 6 && validateCaptcha(value)) {
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

  return (
   <>
   <Helmet>
        <title>Bistro Boss - Sign In</title>
      </Helmet>
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
            < LoadCanvasTemplate />
              <input onChange={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Captcha"
                value={userCaptchaInput}
                className="input input-bordered mt-2"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center pb-2'><small>New Here ?</small> <Link to='/signup'>Create An Account</Link></p>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
