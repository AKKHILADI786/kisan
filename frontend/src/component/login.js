import React from 'react'
import '../css/login.css'

export default function Login() {
    return (
        <div>
            <div className="containe container">
                <div className="d-flex justify-content-center h-100">
                    <div className="car card">
                        <div className="card-header">
                            <h3>Log In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fa fa-facebook-square social" aria-hidden="true"></i></span>
                                <span><i className="fa fa-google social" aria-hidden="true"></i></span>
                                <span><i className="fa fa-twitter social" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text  name_box"><i className="fa fa-user" aria-hidden="true"></i></span>
                                    </div>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="username" />

                                </div>
                                <div className="input-group form-group my-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text  name_box"><i className="fa fa-key" aria-hidden="true"></i></span>
                                    </div>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="password" />
                                </div>
                                <div className="row align-items-center remember my-2">
                                    <input type="checkbox" />Remember Me
					</div>
                                <div className="form-group my-2 ">
                                    <input type="submit" value="Login" id="logg" className="btn float-end login_btn" />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex my-2 justify-content-center links">
                                Don't have an account?
					<div className="link" id="register"> Register</div>
                            </div>
                            <div className="d-flex justify-content-center">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
