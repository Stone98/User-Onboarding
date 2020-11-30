import React from 'react'

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a User</h2>

                <div>
                    <div className="errors">{errors.name}</div>
                    <div className="errors">{errors.email}</div>
                    <div className="errors">{errors.password}</div>
                    <div className="errors">{errors.terms}</div>
                </div>
            </div>

            <div style={{ maxWidth: 300 }}>
                <h4>Sign Up</h4>
                <label>
                    Name
                <input
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                        placeholder="Enter name"
                    />
                </label>

                <label>
                    Email
                <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                        placeholder="Enter email"
                    />
                </label>

                <label>
                    Password
                <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="text"
                        placeholder="Enter password"
                    />
                </label>

                <label>
                    Terms of Service
          <input
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>

                <button disabled={disabled} id="submitBtn">Submit</button>

            </div>
        </form>
    )
}
