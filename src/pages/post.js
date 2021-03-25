import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const Post = () => {
    const { quill, quillRef, Quill } = useQuill({ modules: { magicUrl: true }});

    if (Quill && !quill) { // For execute this line only once.
      const MagicUrl = require('quill-magic-url').default; // Install with 'yarn add quill-magic-url'
      Quill.register('modules/magicUrl', MagicUrl);
    }
  
    return (
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
      </div>
    );
};

export default Post;