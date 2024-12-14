export default function Register(){
    return(
        <div className="register-bar">
            <form style={{zIndex:"1000000"}} className="register-form">
            <div className="welcome_register">
                        <h3>Welcome to Romancy Hotel</h3>
                    </div>
                <div className="form1">
                <label>First Name</label>
                <input className="First_Name" type="text" placeholder="  First Name" required/>

                <label className="Last_Name_label">Last Name</label>
                <input className="Last_Name" type="text" placeholder="  Last Name" required/>
                </div>
                <div className="form2">
                <label>Phone</label>
                <input className="Phone" type="text" placeholder="  Phone" required/>

                <label className="Country_label">Country</label>
                <input className="Country" type="text" placeholder="  Country" required/>
                </div>
                <div className="form4">
                <label>Email</label>
                <input className="Email" type="email" placeholder="  Email" required/>
                </div>
                <div className="form3">
                <label>Password</label>
                <input className="Password" type="password" placeholder="  Password" required/>

                <label className="Confirm_Password_label">Confirm Password</label>
                <input className="Confirm_Password" type="password" placeholder="  Confirm Password" required/>
                </div>
                <button className="reg-submit" type="submit">Create Account</button>
            </form>
        </div>
    );
}