import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <div className="form w-80 flex flex-col gap-3">
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold">Product</span>
          <input type="text" className="grow" placeholder="Product" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold">Name</span>
          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold">Email</span>
          <input type="text" className="grow" placeholder="daisy@site.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold">Phone</span>
          <input type="text" className="grow" placeholder="0712345678" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="password" className="grow" placeholder="Password" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Repeat password"
          />
          {/* <span className="badge badge-info">password</span> */}
        </label>

        <button className="btn btn-primary mt-4">Sign up</button>
      </div>
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
