import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';

import { db } from '../../../firebase/firebase-config.js';
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

const AddBookmarkModal = ({ setModalVisibility }) => {
    const userId = useSelector((state) => 
        state.auth.userId
    );

    const [websiteName, setWebsiteName] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');

    const handleNameChange = (e) => {
        setWebsiteName(e.target.value);
    };

    const handleURLChange = (e) => {
        setWebsiteURL(e.target.value);
    };
  
    const saveBookmark = async(e) => {
        e.preventDefault();
        if (!websiteName || !websiteURL) {
            alert('Please Submit values for both fields.');
            return false;
        }
        let id = new Date().getTime();
        if(userId){ 
            setModalVisibility(false);
            await setDoc(doc(db, userId, `_${id}`), 
                { 
                    id: `_${id}`, 
                    websiteName: websiteName, 
                    websiteURL: websiteURL 
                }
            );        
        }
        setWebsiteName('');
        setWebsiteURL('');
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
                                autoFocus
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