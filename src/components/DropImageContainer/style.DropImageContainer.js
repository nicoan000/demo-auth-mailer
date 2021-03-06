import { css } from '@emotion/css';

const style_DropImageContainer = css`
    --drop-row-length: 90px;
    --drop-col-length: 125px;
    --drop-col-count: 5;
    --drop-row-count: 2;
    --drop-row-gap: 10px;
    --drop-col-gap: 10px;

    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(var(--drop-row-count), var(--drop-row-length));
    grid-template-columns: repeat(var(--drop-col-count), var(--drop-col-length));
    grid-row-gap: var(--drop-row-gap);
    grid-column-gap: var(--drop-col-gap);
    justify-content: space-around;

    & .drop_block {
        border: 3px solid black;
        font-size: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        position: relative;

        &:hover .drop_image {
            background-position: 50% 60%;

        }

        &.invalid {
            border: 3px solid red;

            & .info_icon {
                color: red;
            }

            & .file_name {
                margin-right: 2rem;
            }
        }

        
        & .drop_image {
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
            transition: .3s;
        }

        & .remove_btn {
            position: absolute;
            top: 2px;
            right: -2px;
            background: none;
            outline:none;
            border: none;
            cursor: pointer;
            transition: .1s;
            color: black;

            &:hover {
                color: red;
            }
        }

        & .file_name_container {
            padding: 3px;
            background-color: black;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            & .file_name {   
                -webkit-line-clamp: 2; /* number of lines to show */
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                word-break: break-all;
            }
        }

        & .info_icon {
            position: absolute;
            bottom: 2px;
            right: 4px;
        }
    };
    `;

export default style_DropImageContainer;