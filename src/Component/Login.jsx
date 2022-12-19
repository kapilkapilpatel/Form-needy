
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function Login() {
  const defaultvalue = {

    email: '',
    password: '',
   
  
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required(' Please Enter your email').email('Enter valid email'),
    password: yup.string().required(' Please Enter your password'),
  
    
  });
  const handleSubmit = (value) => {
    console.log('value', value)
  };

  return (
    <div>
      <div className="container col-md-5  d-flex align-items-center mt-5">
        
        <div className="col-md-12 text-center mt-5">
        <h1 className='text-center my-5'>Admin Login</h1>
          <Formik
            initialValues={defaultvalue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
            
              <div className=" mt-4">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                ></Field>
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className=" mt-4">
                <Field
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  className="form-control"
                ></Field>
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>

  



             
              <button className="btn btn-primary px-5 py-3" type="submit">
                Login
              </button>
              <div>

                <a href='/forgetpassword'>Forget Password?</a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
