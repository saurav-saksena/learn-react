import { useEffect, useRef, useState } from "react";
import "../scrim.css"
// import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [hello, setHello] = useState(false)
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");
    let ref = useRef()
    let ref2 = useRef()

    const getIsFormValid = () => {
        return (
            firstName &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        })
        setRole("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };
    const handleHello = () => {
        setHello(!hello)
    }
    useEffect(() => {
        ref.current.focus()
    }, [])
    return (
        <div className="white--ground">
            <h2 ref={ref2} onClick={handleHello} style={{ display: hello ? "none" : "block" }}>hello users</h2>

            <div className="App" onClick={() => ref2.current.click()}>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h2>Sign Up</h2>
                        <div className="Field">
                            <label>
                                First name <sup>*</sup>
                            </label>
                            <input
                                ref={ref}
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                placeholder="First name" />
                        </div>
                        <div className="Field">
                            <label>Last name</label>
                            <input
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                placeholder="Last name" />
                        </div>
                        <div className="Field">
                            <label>
                                Email address <sup>*</sup>
                            </label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email address" />
                        </div>
                        <div className="Field">
                            <label>
                                Password <sup>*</sup>
                            </label>
                            <input
                                type="password"
                                value={password.value}
                                onChange={(e) => {
                                    setPassword({ ...password, value: e.target.value })
                                }}
                                onBlur={(e) => {
                                    setPassword({ ...password, isTouched: true })
                                }}
                                placeholder="Password" />
                            {password.isTouched && password.value.length < 8 ?
                                <PasswordErrorMessage /> : null}
                        </div>
                        <div className="Field">
                            <label>
                                Role <sup>*</sup>
                            </label>
                            <select
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value)
                                }}>
                                <option value="role">Role</option>
                                <option value="individual">Individual</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <button type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
