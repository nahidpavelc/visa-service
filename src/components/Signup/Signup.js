import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div>
            <div className="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" name="firstname" placeholder="First Name" required="required" />
                            <input type="text" className="form-control" name="lastname" placeholder="Last Name" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary">Sign up</button>
                    </div>
                    <p className="text-center">Already have an account? <Link to="/login">Login here  <i class="fas fa-angle-right"></i></Link></p>
                </form>

            </div>

        </div >
    );
};

export default Signup;