import React from 'react';
import { Formik, Form, Field, FieldArray,ErrorMessage } from 'formik';
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
export const Dynamic= () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ friends: ['jared', 'ian', 'brent'] }}
      onSubmit={values =>
        console.log("value", values)}
    
      
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
                      
                      <BsFillPatchPlusFill   onClick={() => arrayHelpers.insert('')} />
              
              
                      
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
    />
  </div>
);
