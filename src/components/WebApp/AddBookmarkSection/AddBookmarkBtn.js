import React, { useState } from 'react';
import { Btn } from './AddBookmarkBtnElement';

function AddBookmarkBtn(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 100000),
        text: input
      });
      setInput('');
    };

    // return (
    //     <form className="addBKMbtn" onSubmit={handleSubmit} action="">
    //         <input
    //             placeholder = "website name"
    //             value = {input}
    //             onChange = {handleChange}
    //             className = "AddBookmarkInput"
    //         />
    //         <button onClick={handleSubmit} className='bookmark-button'>
    //             Add Bookmark
    //         </button>
    //     </form>
    // )

    return (
      <Btn>ADD BOOKMARK</Btn>
    )
}

export default AddBookmarkBtn;