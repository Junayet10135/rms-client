import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Components/SocialLogin';

const LogIn = () => {

    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    //for use captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // for handle log in
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    //handle captcha
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }

    return (
        <div>
            <Helmet>
                <title>Minimalist Cafe | Log In</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row-reverse md:w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 md:w-1/2 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabled} className="btn btn-primary" type="submit" value="LOG IN" />
                            </div>
                        </form>
                        <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;