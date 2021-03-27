import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import style from './style.Editor';


const Editor = () => {
    const { quill, quillRef, Quill } = useQuill({ modules: { magicUrl: true }});

    if (Quill && !quill) { // For execute this line only once.
      const MagicUrl = require('quill-magic-url').default; // Install with 'yarn add quill-magic-url'
      Quill.register('modules/magicUrl', MagicUrl);
    }

    return (
      <div className={style}>
        <div ref={quillRef} />
      </div>
    );
};

export default Editor;

// import fetch from 'isomorphic-unfetch';

// const Editor = () => {
//     const { quill, quillRef } = useQuill({
//         theme: 'snow',
//         modules: {
//             toolbar: ['bold', 'italic', 'underline', 'strike']
//         }
//     });

//     // Insert Image(selected by user) to quill
//     const insertToEditor = (url) => {
//         const range = quill.getSelection();
//         quill.insertEmbed(range.index, 'image', url);
//     };

//     // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
//     const saveToServer = async (file) => {
//         const body = new FormData();
//         body.append('file', file);

//         const res = await fetch('Your Image Server URL', { method: 'POST', body });
//         insertToEditor(res.uploadedImageUrl);
//     };

//     // Open Dialog to select Image File
//     const selectLocalImage = () => {
//         const input = document.createElement('input');
//         input.setAttribute('type', 'file');
//         input.setAttribute('accept', 'image/*');
//         input.click();

//         input.onchange = () => {
//             const file = input.files[0];
//             saveToServer(file);
//         };
//     };

//     React.useEffect(() => {
//         if (quill) {
//             // Add custom handler for Image Upload
//             quill.getModule('toolbar').addHandler('image', selectLocalImage);
//         }
//     }, [quill]);

//     return (
//         <div style={{ width: 500, height: 300, border: '1px solid lightgray' }}>
//             <div ref={quillRef} />
//         </div>
//     );
// };

// export default Editor;