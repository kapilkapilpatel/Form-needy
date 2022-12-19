import React from 'react' 
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik"
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import * as yup from "yup"

export default function Needy() {
    const defaultValue = {
        name:"",
        mobile:"",
        email:"",
        country:"",
        state:"",
        city:"",
        preferredLanguage:"",
        demoRequired:"",
        startTime:[""],
        endTime:[""],
        language:[""],
        description:""

    }

    const validationSchema = yup.object().shape({
       name: yup.string().required("Name is required").min(3,"More than 2 characters!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").max(30,"Less than 30 characters!"),
       mobile: yup.number('Mobile number Shuld be a number').required("Mobile number is required").max(10,),
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

    const handleSubmit = (value) => {
        console.log("value", value)
    }


  return (
    <div>
        <div className="container">
            <div className="col-md-12  mt-5">
                <h1 className="text-center">Needy form</h1>
        <Formik initialValues={defaultValue}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}>
            <Form>

                <div className="d-flex">
                    <div className='row col-12 g-3'>
 
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
                </div>
                <div className="d-flex">
                <div className='row col-12 g-3'>
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
                </div></div>
                <div className="d-flex">
                <div className='row col-12 g-3'>
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
                </div></div>

                <div className="d-flex">
                <div className='row col-12 g-3'>
                <div className="col-md-6 mt-4">
                    <label>Preferred Language</label>
                <Field type="text"  name="preferredLanguage" placeholder="PREFERRED LANGUAGE" className="form-control"></Field>
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
                 </div>
                <div>
                <FieldArray   name= 'startTime' placeholder="START TIME" className="form-control">
                        
                            {fieldArrayProps => {
                                console.log('fieldArrayProps',fieldArrayProps)
                                const {push,remove,form}=fieldArrayProps
                                const {values}= form
                                const{ startTime}= values

                                return(
                                   <div>
                                        {startTime.map((startTime,index)=>(
                                            <div key={index}>
                                                <div className=' d-flex'>
                                                <div className='row col-12 g-3'>
                                               <div className='col-md-5 mt-4'> 
                                               <label>Start time</label>
                                                <Field  type= "time" name={`timing[0].startTime[${index}]`}  className="form-control"/></div>
                                               
                                                 <div className='col-md-5 mt-4'>
                                                 <label>End time</label>
                                                    <Field  type= "time" name={`timing[0].endTime[${index}]`} className="form-control" /></div>
                                            <div className='mt-5  py-3 px-5'> <BsFillPatchPlusFill   onClick={() => fieldArrayProps.push('')} />
                                            {index> 0 &&(<BsFillPatchMinusFill   onClick={() => remove('')}  />)} </div>
                                             </div>
                                            </div></div>
                                        ))}
                                    </div>
                                )
                            }}
                        
                </FieldArray>
              
              
                </div>

                <FieldArray   name= 'language' placeholder="LANGUAGE" className="form-control">
                        
                        {fieldArrayProps => {
                            console.log('fieldArrayProps',fieldArrayProps)
                            const {push,remove,form}=fieldArrayProps
                            const {values}= form
                            const{ language }= values
                        
                            return(
                               <div>
                                    {language.map((language,index)=>(
                                        <div key={index}>
                                            <div className=' d-flex'>
                                           
                                           <div className='col-md-5 mt-4'> 
                                           <label>Technology</label>
                                            <Field  type= "text" placeholder="LANGUAGE" name={`language[${index}]`}  className="form-control"/></div>
                                           
                                        
                                        <div className='mt-5  py-3 px-5'> <BsFillPatchPlusFill   onClick={() => fieldArrayProps.push('')} />
                                        {index> 0 &&(<BsFillPatchMinusFill   onClick={() => remove('')}  />)} </div>
                                         </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }}
                        
                        </FieldArray>


                <div className="col-md-12 mt-4">
                    <label>Job Description</label>
                <textarea type="textarea"  name="jobDescription" placeholder="Please paste or type the JOB DESCRIPTION only" className="form-control"></textarea>
                <p className="text-danger">
                    <ErrorMessage name="description"/>
                </p>
                </div>

                <div className="d-flex justify-content-center mt-5">
                WE WILL CONNECT YOU ON:   <p>{defaultValue.mobile.values}</p>
                </div>

                <div className="d-flex justify-content-center mt-4">
                
                <button className="btn btn-primary" type="submit">Submit</button>
                </div>

            </Form>


        </Formik>
        </div>
        </div>
    </div>
  )
}