import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
function BookTable() {
  const [value, onChange] = useState(new Date());
  return (
    <div
      id='book-table'
      className='row justify-content-center align-items-center book-table'>
      <div className='row justify-content-center align-items-center bg-light p-3 col-10 col-md-7 col-lg-8 rounded-5'>
        <div className='col-12 justify-content-center align-items-center row'>
          <div className='row w-100 text-center'>
            <span className='font-pacifico'>Reservation</span>
            <h2 className='font-nunito' s>
              Book A Table Online
            </h2>
          </div>
          <div className='col-10 col-lg-6 my-2'>
            <input
              type='text'
              className='form-control  '
              placeholder='Your Name'
              aria-label='Your Name'
            />
          </div>
          <div className='col-10  col-lg-6 my-2'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              id='inputEmail4'
            />{" "}
          </div>
        </div>

        <div className='col-12 justify-content-center align-items-center row'>
          <div className='col-10 col-lg-6 my-2'>
            <DateTimePicker
              className=' form-control '
              onChange={onChange}
              value={value}
            />
          </div>
          <div
            className='form-floating col-10 col-lg-6 my-2'
            style={{ height: "58px" }}>
            <select
              className='form-select'
              id='floatingSelect'
              aria-label='Floating label select example'>
              <option selected value='1'>
                One
              </option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value='4'>Four</option>
              <option value='5'>Five</option>
            </select>
            <label for='floatingSelect'>No. of person</label>
          </div>
          <div className='form-floating col-10 col-lg-12 my-3'>
            <textarea
              className='form-control'
              placeholder=''
              id='floatingTextarea2'></textarea>
            <label for='floatingTextarea2'>Special Request</label>
          </div>
          <button className='btn btn-success text-light col-4 m-1'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
