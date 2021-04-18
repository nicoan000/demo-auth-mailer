import { useState, useEffect, useRef, useContext } from 'react';
import { BsUpload } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import style from './style.Dropzone';
// import PostContext from '@utils/context/post-context';
import {PostContext} from '@pages/post';
import DropImageContainer from '@components/DropImageContainer/DropImageContainer';

const max_file_size = 5 * 1048576; // in bytes

const Dropzone = () => {
    const {selectedFiles, setSelectedFiles} = useContext(PostContext);
    const [errorMessage, setErrorMessage] = useState('');
    const modalImageRef = useRef();

    const handleFiles = files => {
        const validateFile = file => {
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
            if (validTypes.indexOf(file.type) === -1) {
                return false;
            }
            return true;
        }

        // const fileSize = (size) => {
        //     if (size === 0) return '0 Bytes';
        //     const k = 1024;
        //     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        //     const i = Math.floor(Math.log(size) / Math.log(k));
        //     return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        // }

        // const fileType = (fileName) => {
        //     return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
        // }

        for (let i = 0; i < files.length; i++) {
            files[i]['id'] = uuidv4();
            if (!validateFile(files[i])) {
                files[i]['invalid'] = true;
                setErrorMessage('File type not permitted');
            }
            if (files[i].size > max_file_size) {
                files[i]['invalid'] = true;
                setErrorMessage('File size is too big.');
            }
            
            setSelectedFiles(prevArray => [...prevArray, files[i]]);
        }
    }

    const removeItem = (id) => {
        setSelectedFiles(prevArray => prevArray.filter(item => item.id !== id));
    }

    const dragOver = (e) => {
        console.log('drag over');
        e.preventDefault();
    }

    const dragEnter = (e) => {
        console.log('drag enter');
        e.preventDefault();
    }

    const dragLeave = (e) => {
        console.log('drag leave');
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        // console.log(files);
        if (files.length > 0) {
            handleFiles(files);
        }
    }


    return (
        <div className={style}>
            <div className="drop_container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
            {!selectedFiles.length 
                ? (
                    <div className="drop_message">
                        <div className="upload_icon"><BsUpload /></div>
                        <p>Drag & drop images here or click to upload (max: 10)</p>
                    </div>
                )
                : (
                    <DropImageContainer files={selectedFiles}/>
                )

            }
            </div>
        </div>
    )
}

export default Dropzone;