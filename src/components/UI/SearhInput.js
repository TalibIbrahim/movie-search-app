import React, { useRef } from 'react';

const SearchInput = (props) => {
  const searchInputRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearch(searchInputRef.current.value);
    searchInputRef.current.value = "";
  }
//  The submit handler takes the value from our ref and then passes it to the onSearch prop (app.js) and then resets the value of the input to an empty string. (This is a controlled component.)

  return (
    <form onSubmit={submitHandler}>
      <div className='flex justify-center align-center py-7'>
        <input
          type='text'
          ref={searchInputRef}
          placeholder='Find a movie, grab some popcorn...'
          className='focus:outline-none focus:w-1/2 text-xl rounded-full focus:p-2  py-2 focus:pl-6 pl-4 w-1/5  transition-all ease-in-out duration-500'
        />
        <span className="material-symbols-outlined relative top-1 right-11 text-3xl">
          search
        </span>
      </div>
    </form>
  );
}

export default SearchInput;
