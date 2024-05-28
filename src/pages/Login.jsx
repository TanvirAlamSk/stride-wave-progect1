import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"
    const { loginUser, googleLogin, setLoader, githubLogin } = useContext(authContext)
    const handelLogin = (event) => {
        event.preventDefault()
        const name = event.target.email.value;
        const password = event.target.password.value;
        loginUser(name, password)
            // eslint-disable-next-line no-unused-vars
            .then((userCredential) => {
                toast.success("Login SuccessFul")
                setLoader(false);
                navigate(from, { replace: true })
            })
            .catch((error) => alert(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse lg:w-[900px] mx-auto gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 font-medium">Create an account to enhance your shopping experience with the help of our customized services:</p>
                    <ol>
                        <li>Stay up to date with the latest news</li>
                        <li>Buy faster</li>
                        <li>Save your favorite products</li>
                    </ol>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label justify-start">
                                Are you New in here? Go To
                                <Link to="/signup" className="link link-hover text-left ms-1 text-orange-400">Sign Up</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="form-control my-6 mx-8">
                        <button onClick={googleLogin} className="btn btn-info text-white">Sign In With Google</button>
                    </div>
                    <div className="form-control mb-6 mx-8">
                        <button onClick={githubLogin} className="btn btn-warning text-white">Sign In With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;