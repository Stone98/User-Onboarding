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

                <button disabled={disabled}>submit</button>

                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div>
                <h4>Sign Up</h4>
                <label>
                    Name
                <input
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                </label>

                <label>
                    Email
                <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>

                <label>
                    Password
                <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="text"
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
            </div>
        </form>
    )
}
