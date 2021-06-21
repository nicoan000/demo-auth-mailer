import { useState, useContext } from 'react'
import { css } from '@emotion/css'

const style = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    & .parent {
        font-size: 3rem;
        
        & > span {
            color: blue;
        }
    }
`

const FindPage = () => {
    return (
        <div className={style}>
            <div className="parent">
                <span>Testing 1</span>
                <span>Testing 2</span>
            </div>
        </div>
    )
}

export default FindPage;
