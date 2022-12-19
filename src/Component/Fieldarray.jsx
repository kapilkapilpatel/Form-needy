import React from 'react' 
import { Formik, Form, Field,FieldArray,ErrorMessage } from "formik"
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import * as yup from "yup"

export default function Fieldarray() {
    const defaultValue = {
        name:"",
        mobile:"",
        email:"",
        country:"",
        state:"",
        city:"",
        preferredLanguage:"",
        demoRequired:"",
        startTime:"",
        endTime:"",
        language:"",
        description:"",
        friends: ['startTime', 'endTime']


    }

    const validationSchema = yup.object().shape({
       name: yup.string().required("Name is required"),
       mobile: yup.number('Mobile number Shuld be a number').required("Mobile number is required"),
       email: yup.string().required("Email id is required").email("Please enter your vailed email"),
       country: yup.string().required("Country name is required"),
       state: yup.string().required("State name is required"),
       city: yup.string().required("City name is required"),
       preferredLanguage: yup.string().required("Preferred Language is required"),
       demoRequired: yup.string().required("Please select Required type"),
       startTime: yup.string().required("Start time is required"),
       endTime: yup.string().required("End time is required"),
       language: yup.string().required("Technology language is required"),
       description: yup.string().required("Job description is required"),
    
         
    })

    const handleSubmit = (values) => {
        console.log("value", values)
    }


  return (
    <div>
        <div className="container">
            <div className="col-md-12 mt-5">
                <h1 className="text-center">Needy form</h1>
        <Formik initialValues={defaultValue}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}>
            <Form>

                <div className="d-flex">
                <div className="col-md-6 mt-4">
                    <label>Full Name</label>
                <Field type="text"  name="name" placeholder="FIRST-NAME LAST-NAME" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="name"/>
                </p>
                </div>
                <div className="col-md-6 mt-4">
                    <label>Mobile Number</label>
                <Field type="number"  name="mobile" placeholder="MOBILE NUMBER" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="mobile"/>
                </p>
                </div>
                </div>

                <div className="d-flex">
                <div className="col-md-6 mt-4">
                    <label>Email</label>
                <Field type="email"  name="email" placeholder="EMAIL" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="email"/>
                </p>
                </div>
                <div className="col-md-6 mt-4">
                    <label>Country</label>
                <Field type="text"  name="country" placeholder="COUNTRY" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="country"/>
                </p>
                </div>
                </div>
                <div className="d-flex">
                <div className="col-md-6 mt-4">
                    <label>State</label>
                <Field type="text"  name="state" placeholder="STATE" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="state"/>
                </p>
                </div>
                <div className="col-md-6 mt-4">
                    <label>City</label>
                <Field type="text"  name="city" placeholder="CITY" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="city"/>
                </p>
                </div>
                </div>

                <div className="d-flex">
                <div className="col-md-6 mt-4">
                    <label>Preferred Language</label>
                <Field type="text"  name="language" placeholder="PREFERRED LANGUAGE" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="preferredLanguage"/>
                </p>
                </div>
                <div className="col-md-6 mt-4">
                    <label>Demo Required (in days)</label>
                <Field component="select" name="demo" placeholder="DEMO REQUIRED" className="form-control">

                    <option value="disabled">DEMO REQUIRED</option>
                    <option value="1 day">1 Day</option>
                    <option value="2 days">2 Days</option>
                    <option value="3 days">3 Days</option>
                    </Field>


                    <p className="text-danger">
                    <ErrorMessage name="demoRequired"/>
                </p>
                </div>
                </div>

                <div className="d-flex">
                <div className="col-md-5 mt-4">
                    <label>Start time</label>
                <Field type="time"  name="timing[0].startTime" placeholder="START TIME" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="startTime"/>
                </p>
                </div>
                <div className="col-md-5 mt-4">
                    <label>End time</label>
                <Field type="time"  name="timing[0].endTime" placeholder="END TIME" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="endTime"/>
                </p>
                </div>
                </div>


                <div className="col-md-5 mt-4">
                    <label>Technology</label>
                <Field type="text"  name="technologyS[0].language" placeholder="Language" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="language"/>
                </p>
                </div>


                <div className="col-md-12 mt-4">
                    <label>Job Description</label>
                <textarea type="textarea"  name="jobDescription" placeholder="Please paste or type the JOB DESCRIPTION only" className="form-control"></textarea>
                <p className="text-danger">
                    <ErrorMessage name="description"/>
                </p>
                </div>

                <div className="d-flex justify-content-center mt-5">
                WE WILL CONNECT YOU ON:
                </div>

                <div className="d-flex justify-content-center mt-4">
                
                <button className="btn btn-primary" type="submit">Submit</button>
                </div>

            </Form>
            render={({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((friend, index) => (
                    <div key={index}>
                             <div className="d-flex">
                <div className="col-md-5 mt-4">
                    <label>Start time</label>
                <Field type="time"  name="timing[0].startTime" placeholder="START TIME" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="startTime"/>
                </p>
                </div>
                <div className="col-md-5 mt-4">
                    <label>End time</label>
                <Field type="time"  name="timing[0].endTime" placeholder="END TIME" className="form-control"></Field>
                <p className="text-danger">
                    <ErrorMessage name="endTime"/>
                </p>
                </div>
                <div className='mt-5 py-3'>
                <BsFillPatchMinusFill   onClick={() => arrayHelpers.remove(index)} />
                       
                     
                      </div>
                      <div className='mt-5 py-3'>
                      
                        
              
                        <BsFillPatchPlusFill  onClick={() => arrayHelpers.insert(index, )} />
                      
                      </div>
                    </div></div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                  
                    Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                  
                </div>
              </div>
            )}
          />
        </Form>
      )}
        </Formik>
        </div>
        </div>
    </div>
  )
}  







<FieldArray   name= 'language' placeholder="LANGUAGE" className="form-control">
                        
                        {fieldArrayProps => {
                            console.log('fieldArrayProps',fieldArrayProps)
                            const {push,remove,form}=fieldArrayProps
                            const {values}= form
                            const{ language }= values
                        
                            return(
                               <div>
                                    {startTime.map((language,index)=>(
                                        <div key={index}>
                                            <div className=' d-flex'>
                                           
                                           <div className='col-md-5 mt-4'> 
                                           <label>Technology</label>
                                            <Field  type= "time" name={`language[${index}]`}  className="form-control"/></div>
                                           
                                        
                                        <div className='mt-5  py-3 px-5'> <BsFillPatchPlusFill   onClick={() => fieldArrayProps.push('')} />
                                        {index> 0 &&(<BsFillPatchMinusFill   onClick={() => remove('')}  />)} </div>
                                         </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }}
                        
                        </FieldArray>