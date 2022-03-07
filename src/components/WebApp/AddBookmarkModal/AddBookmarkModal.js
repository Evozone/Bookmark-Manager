import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './AddBookmarkModalElements.js';
import { 
    ModalContainer,
    Modal,
    ModalHeader,
    CloseIcon,
    H3,
    ModalContent,
    FormGroup,
    FormLabel,
    FormInput,
    SaveBookmarkBtn
} from './AddBookmarkModalElements';

const AddBookmarkModal = ({ onSubmit, setModalVisibility }) => {

    const [websiteName, setWebsiteName] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');

    const handleNameChange = (e) => {
        setWebsiteName(e.target.value);
    };

    const handleURLChange = (e) => {
        setWebsiteURL(e.target.value);
    };
  
    const saveBookmark = (e) => {
      e.preventDefault();
  
      onSubmit({
        id: Math.floor(Math.random() * 100000),
        websiteName: websiteName,
        websiteURL: websiteURL
      });
      setWebsiteName('');
      setWebsiteURL('');
      setModalVisibility(false);
    };

    const toggleModalVisibility = () => {
        setModalVisibility(false);
    }

    return ReactDOM.createPortal (
        <ModalContainer onClick={toggleModalVisibility}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <CloseIcon onClick={toggleModalVisibility}/>
                <ModalHeader> 
                    <H3>Add Boookmark</H3>
                </ModalHeader>
                <ModalContent>
                    <form onSubmit={saveBookmark}>
                        <FormGroup>
                            <FormLabel>Website Name</FormLabel>
                            <FormInput 
                                value={websiteName} 
                                onChange={handleNameChange} 
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel >Website URL</FormLabel>
                            <FormInput 
                                type="url" 
                                value={websiteURL} 
                                onChange={handleURLChange} 
                            />
                        </FormGroup>
                        <SaveBookmarkBtn 
                            onClick={saveBookmark}
                        >
                            Save
                        </SaveBookmarkBtn>
                    </form>
                </ModalContent>
            </Modal >
        </ModalContainer >,
        document.querySelector('#addBookmarkModal')
    );
}

export default AddBookmarkModal;