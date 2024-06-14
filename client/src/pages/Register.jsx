import { Link, redirect, Form } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Account created successfully');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>register</h4>
        <FormRow type='text' name='name' />
        <FormRow type='text' name='lastName' labelText='Last Name' />
        <FormRow type='text' name='location' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />

        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            {' '}
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
