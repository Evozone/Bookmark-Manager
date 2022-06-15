import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    modalVisibilityAction,
    updateBookmarkInfoAction,
} from '../../../actions';
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
    SaveBookmarkBtn,
} from './AddBookmarkModalElements';

const AddBookmarkModal = ({ onSubmit, onUpdate }) => {
    const dispatch = useDispatch();

    const {
        modalType,
        websiteName: websiteNameInitialValue,
        websiteURL: websiteURLInitialValue,
    } = useSelector((state) => state.modal);

    const [websiteName, setWebsiteName] = useState(websiteNameInitialValue);
    const [websiteURL, setWebsiteURL] = useState(websiteURLInitialValue);

    const handleNameChange = (e) => {
        setWebsiteName(e.target.value.toLowerCase());
    };

    const handleURLChange = (e) => {
        setWebsiteURL(e.target.value);
    };

    const saveBookmark = (e) => {
        e.preventDefault();
        if (!websiteName || !websiteURL) {
            alert('Please Submit values for both fields.');
            return false;
        }
        if (
            websiteName === websiteNameInitialValue &&
            websiteURL === websiteURLInitialValue
        ) {
            alert('Please make a change to update the bookmark');
            return false;
        }
        modalType === 'addBookmark'
            ? onSubmit(websiteName, websiteURL)
            : onUpdate(websiteName, websiteURL);
        closeModal();
    };

    const closeModal = () => {
        dispatch(updateBookmarkInfoAction(''));
        dispatch(modalVisibilityAction(false, '', '', ''));
    };

    return ReactDOM.createPortal(
        <ModalContainer onClick={closeModal}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <CloseIcon onClick={closeModal} />
                <ModalHeader>
                    <H3>
                        {modalType === 'addBookmark' ? 'Add' : 'Update'}{' '}
                        Boookmark
                    </H3>
                </ModalHeader>
                <ModalContent>
                    <form onSubmit={saveBookmark}>
                        <FormGroup>
                            <FormLabel>Website Name</FormLabel>
                            <FormInput
                                autoFocus
                                value={websiteName}
                                onChange={handleNameChange}
                                type='text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Website URL</FormLabel>
                            <FormInput
                                type='url'
                                value={websiteURL}
                                onChange={handleURLChange}
                            />
                        </FormGroup>
                        <SaveBookmarkBtn onClick={saveBookmark}>
                            Save
                        </SaveBookmarkBtn>
                    </form>
                </ModalContent>
            </Modal>
        </ModalContainer>,
        document.querySelector('#addBookmarkModal')
    );
};

export default AddBookmarkModal;
