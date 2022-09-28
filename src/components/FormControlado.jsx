import { useState } from 'react';

const FormControlado = () => {
	const [frm, setFrm] = useState({ email: 'asdd', password: 'as' });
	const { email, password } = frm;

	const handlerInputChange = ({ target: { name, value } }) => {
		setFrm({ ...frm, [name]: value });
	};
	/*
	const handlerInputChangeEmail = env => {
		setFrm({ ...frm, email: env.target.value });
	};

	const handlerInputChangePassword = env => {
		setFrm(prevState => ({ ...prevState, password: env.target.value }));
	};
*/

	return (
		<>
			<input
				type='text'
				name='email'
				value={email}
				onChange={handlerInputChange}
				placeholder='Email'
				autoComplete='off'
			></input>
			<input
				type='password'
				name='password'
				value={password}
				onChange={handlerInputChange}
				placeholder='Password'
				autoComplete='off'
			></input>
			<button>Login</button>
			<br />
			<span>Email:{email}</span>
			<br />
			<span>Password:{password}</span>
		</>
	);
};

export default FormControlado;
