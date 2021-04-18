import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Editor from '@components/Editor/Editor';
import AppWrapper from '@components/AppWrapper/AppWrapper';
import Dropzone from '@components/Dropzone/Dropzone';
import { css } from '@emotion/css';
import Context from '@utils/context/post-context';
import uploadPhoto from '@utils/uploadPhoto';
import Loading from '@components/Loading/Loading';
import TitleContainer from '@components/TitleContainer/TitleContainer';
import GenericButton from '@components/GenericButton/GenericButton';
import MultiSelect from '@components/MultiSelect/MutliSelect';

const style_PostPage = css`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    & .subtitle_container {
        width: 100%;
        display: flex;
        flex-direction: row;
        max-width: 700px;
        justify-content: space-between;
        margin-bottom: 2rem;
        align-items: center;
        margin-top: -5rem;
    }
`;

export const PostContext = React.createContext();

const Post = () => {
    const router = useRouter()
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);

    const submitPost = async quill => {
        try {
            setLoading(prevState => !prevState);
            Promise.all(selectedFiles.map(file => (uploadPhoto(file))))
                .then(async () => {
                    const res = await axios.post('/api/createPost', {
                        title,
                        files: selectedFiles.map(({ id, name }) => ({ id, name })),
                        body: JSON.stringify(quill.getContents())
                    });
                    setLoading(prevState => !prevState); // error check and then go

                    console.log(res);

                    // router.push(`/post/${res.post_id}`);
                });
        }
        catch (e) {
            console.log(e);
        }
    };


    return (
        <AppWrapper>
            <PostContext.Provider
                value={{
                    selectedFiles, setSelectedFiles,
                    title, setTitle
                }}
            >
                <div className={style_PostPage}>
                    <Loading visible={loading} />
                    <TitleContainer />
                    <div className="subtitle_container">
                        <MultiSelect 
                            items={tags}
                            setItems={setTags}
                            placeholderText={"Tag your post..."}
                            disableDuplicates={true}
                            tagsAsLowercase={true}
                            prefixCharacters={'#'}
                            selectedItemsAs={'label'}
                        />
                        <GenericButton 
                            label="Submit" 
                            type="submit" 
                            click={() => click(quill)} 
                            color="green"
                        />
                    </div>
                    <Editor click={submitPost} />
                    <Dropzone />
                </div>
            </PostContext.Provider>
        </AppWrapper>
    )
};

export default Post;