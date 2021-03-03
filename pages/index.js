import React from 'react';
import axios from 'axios';

const Index = ({ data }) => {
    return (
        <>
        </>
    )
}

export const getServerSideProps = async (context) => {
    try {
        const {data} = await axios.get('');

        return {
            props: {
                data
            }
        }
    }
    catch (e) {
        console.log(e);
        return {
            props: {
                error: "Unhandled error."
            }
        }
    }
};

export default Index;