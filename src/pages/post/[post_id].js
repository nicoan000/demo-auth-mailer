import React, { useEffect, useRef } from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';
import { css } from '@emotion/css';
import axios from 'axios';
import AppWrapper from '@components/AppWrapper/AppWrapper';
import { ironSession, withIronSession } from "next-iron-session";
import ironSessionConfig from '@utils/config/ironSessionConfig';
import { colors } from '@data/style.variables';
import DropImageContainer from '@components/DropImageContainer/DropImageContainer';

const style_PostPage = css`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .post_container {
        width: 800px;

        & .post_title {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
        
        & .post_body {
            width: 800px;
            min-height: 300px;
            border-radius: 5px;
            border: 3px solid black;
            background: linear-gradient(to bottom, ${colors.background_components_lighter_2}, ${colors.background_components_lighter_1});
            margin-bottom: 4rem;
        }
    }

    & .image_container {
        width: 100%;
        display: flex;

        & .drop_image {
            width: 100px;
            height: 50px;
            display: flex;
            align-items: center;
            
        }

        & img {
            max-width: 100%;
        }
    }

`;

const PostPage = ({ post_data }) => {
    const { quill, quillRef, Quill } = useQuill({ theme: "bubble", readOnly: true, modules: { magicUrl: true } });
    const modalImageRef = useRef();

    if (quill) {
        quill.setContents(JSON.parse(post_data.body).ops);
    }

    if (Quill && !quill) {
        const MagicUrl = require('quill-magic-url').default;
        Quill.register('modules/magicUrl', MagicUrl);
    };


    return (
        <AppWrapper>
            <div className={style_PostPage}>
                <div className="post_container">
                    <div className="post_title">
                        {post_data.title}
                    </div>
                    <div className="post_body">
                        <div ref={quillRef} />
                    </div>
                    <div className="image_container">
                        {post_data.images.map((image_link) =>
                            <div className="drop_image">
                                <img src={image_link} />
                            </div>
                        )}
                    </div>
                    <DropImageContainer 
                        files={post_data.images} 
                        readOnly={true}
                    />
                </div>
            </div>
        </AppWrapper>
    );
};

export const getServerSideProps = withIronSession(
    async ({ req, res, query }) => {
        const { post_id } = query;
        const { data: post_data } = await axios.get(`http://localhost:3000/api/findPost?post_id=${post_id}`);

        // const user = req.session.get("user");

        // if (user) {
        //     console.log('user already logged in; redirecting to /profile');
        //     res.writeHead(307, { Location: '/profile' });
        //     res.end();
        //     return { props: { user } };
        // }

        return {
            props: {
                post_data
            }
        };
    },
    {
        ...ironSessionConfig
    }
);


export default PostPage;