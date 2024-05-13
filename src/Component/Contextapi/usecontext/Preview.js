import React, { useContext } from 'react';
import { NewContext } from '../Newcontext';

function Preview() {
  const { details } = useContext(NewContext);

  return (
    <>
      {
        details.length > 0 ? (<div className='space-y-6'>
          {details.map((data, index) => (
            <div key={index}>
              <div>
                <h1 className='text-center text-2xl'>Basic Information</h1>
                <h1  >FullName:<span>{data?.fullName}</span> </h1>
                <h1  >Email: {data?.email}</h1>
                <h1 >Pincode: {data?.age}</h1>
              </div>

              <div>
                <h1 className='text-center text-2xl'>Personal Information</h1>
                <div>
                  <h1  >FirstName: {data?.firstName}</h1>
                  <h1  >LastName: {data?.lastName}</h1>
                  <h1  >DOB: {data?.dob}</h1>
                  <h1  >Address: {data?.address}</h1>
                  <h1  >City: {data?.city}</h1>
                  <h1  >Pincode: {data?.pincode}</h1>
                  <h1 >PhoneNo: {data?.mobileno}</h1>
                  <h1  >Gender: {data?.gender}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>) : (
          <div className='text-center text-2xl'>
            <h1>No Information Found...</h1>
          </div>
        )
      }
    </>
  );
}

export default Preview;
