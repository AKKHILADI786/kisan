import React from 'react'
import '../css/login.css'
import '../css/Register.css'
export default function Register() {
    return (
        <div>
            <div classNameName="containe container">
  <div className="d-flex justify-content-center h-100">
    <div className="car carr card">
      <div className="card-header">
        <h3>Register</h3>
       
         <div className="d-flex justify-content-end social_icon">
          <span><i className="fa fa-facebook-square" aria-hidden="true"></i></span>
          <span><i className="fa fa-google" aria-hidden="true"></i></span>
          <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
        </div>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="row g-3">
            <div className="col">
              <label htmlFor="First name" className="form-label">First name</label>
              <input type="text" className="form-control" id="first" placeholder="First name" aria-label="First name"/>
            </div>
            <div className="col">
              <label htmlFor="Last name" className="form-label">Last name</label>

              <input type="text" className="form-control" id="last" placeholder="Last name" aria-label="Last name"/>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="password1"/>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="Address" placeholder="1234 Main St"/>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="Address2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="City"/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="State" className="form-select">
              <option value="select">Select</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value=" Andaman and Nicobar Islan"> Andaman and Nicobar Islan</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Benga">West Benga</option>
                </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="Zip"/>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
              <label className="form-check-label" htmlFor="gridCheck">
                Accepting the term and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" id="signin" className="btn btn-warning m-3 float-end">Sign in</button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center my-3 links">
          Already Have account? 
          <div className="link" id="loginn">LogIn</div>
        </div>
      </div>

    </div>
  </div>
</div>
        </div>
    )
}
