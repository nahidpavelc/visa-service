import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Log in</h2>

                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-check-label"><input type="checkbox" required="required" /> Remember me </label>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">log in</button>
                        <button className="btn btn-primary" type="button"><i className="fab fa-google"></i> google log in</button>
                    </div>
                    <p className="text-center m-2"><Link to="/Signup">Create an Account <i class="fas fa-angle-right"></i></Link></p>
                </form>

            </div>

        </div >

        // <div>
        //     <div className="login-form">
        //         {/* <form action="/examples/actions/confirmation.php" method="post"> */}
        //         <form action="" method="post">
        //             <h2 className="text-center">Log in</h2>
        //             <div className="form-group">
        //                 <input type="text" className="form-control" placeholder="Username" required="required" />
        //             </div>
        //             <div className="form-group">
        //                 <input type="password" className="form-control" placeholder="Password" required="required" />
        //             </div>
        //             <div className="form-group">
        //                 <button type="submit" className="btn btn-primary btn-block">Log in</button>
        //             </div>
        //             <div className="clearfix">
        //                 <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
        //                 <a href="#" className="float-right">Forgot Password?</a>
        //             </div>
        //         </form>
        //         <p className="text-center"><a href="#">Create an Account</a></p>
        //     </div>
        // </div>
    );
};

export default Login;