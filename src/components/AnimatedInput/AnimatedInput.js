import { css } from '@emotion/css';

const style = css`
    position: relative;
    padding: 15px 0 0;
    width: 300px;
    margin-top: 10px;
    & input {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid lightgray;
        outline: 0;
        font-size: 1.3rem;
        color: white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
        transition: .2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }

        &:focus {
            ~ label {
                position: absolute;
                top: 0;
                display: block;
                transition: 0.2s;
                font-size: 1rem;
                color: lightblue;
                font-weight: 700;
            }
            font-weight: 700;
            border-width: 3px;
            border-bottom: 2px solid lightblue;
        }

        &:required,&:invalid { box-shadow:none; }

        &:valid {
            border-bottom: 2px solid lightblue;
            & ~ label {
                color: lightblue
            }
        }
    }

    & label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: gray;
    }
`;

const AnimatedInput = ({placeholder, tag}) => {
    return (
        <div className={style}>
            <input type="input"  placeholder={placeholder} name={tag} id={tag + '_input'} required/>
            <label for={tag + '_input'}>{placeholder}</label>
        </div>
    )
};

export default AnimatedInput;