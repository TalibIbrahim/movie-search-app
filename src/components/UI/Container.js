import React from 'react';

const Container = (props) => {
  return (
    <div className='h-screen  bg-neutral-800'>
        {props.children}
    </div>
  );
}

export default Container;