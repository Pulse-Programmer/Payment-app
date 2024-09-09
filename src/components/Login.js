import { Link } from "react-router-dom";
import { useOutletContext, useNavigate } from "react-router-dom";
function Login() {
  const setIsLoggedIn = useOutletContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    setIsLoggedIn(true); // Simulating login success
    // Redirect to home page
    navigate("/"); // Using react-router-dom's navigate hook
  };

  return (
    <div>
      <form className="form w-80 flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold">Email</span>
          <input type="text" className="grow" placeholder="daisy@site.com" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input type="password" className="grow" placeholder="Password" />
        </label>

        <button className="btn btn-primary mt-4" type="submit">
          Login
        </button>
      </form>
      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
