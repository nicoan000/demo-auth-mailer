import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/css';

const constructInputStyle = ({ textAlign, width, padding, fontSize, height } = {}) => (css`
    outline: none;
    border: 1px solid black;
    background-color: #454545;
    padding: ${padding || '4px 6px'};
    font-size: ${fontSize || 'inherit'};
    border-radius: 3px;
    text-align: ${textAlign || 'left'};
    width: ${width || '4rem'};
    height: ${height || 'auto'};

    &:focus {
        box-shadow: inset 0px 0px 5px 1px #181818;
        border: 1px solid lightblue;
    }
`);

const colors = {
    gold: '#80722A',
    primary: '#252525',
    secondary: '#181818',
    tertiary: '#f5f5dc',
    darkenedTertiary: '#8c8c7d',
    shadowColor: '#1e1e1e', // used in the box shadow for Card
    darkerShadowColor: '#0a0a0a', // used in the inner box shadow for card > actions
    test1: '#8e8e8e',
    test2: '#717171',
    lighterPrimary: '#393939'
}

const style = css`
    position: relative;
    width: 80%;

    & .selected_item_container {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: row;
        font-size: 1.5rem;
        align-items: center;
        height: 100%;
        padding: 0px 5px;

        & .selected_item {
            padding: 3px 5px;
            background-image: linear-gradient(to bottom, ${colors.lighterPrimary}, ${colors.primary});
            cursor: pointer;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .2s;

            &:hover {
                background-image: linear-gradient(to bottom, #424242, #292929);
                color: lightblue;
            }

            &:not(:first-child) {
                margin-left: 3px;
            }

            &:not(:last-child) {
                margin-right: 3px;
            }
        }
    }

    & .dropdown {
        width: 100%;
        min-height: 0px;
        max-height: 0px;
        background-color: #1F1F1F;
        transition: .3s;
        overflow: hidden;
        padding: 0px;
        box-shadow: 0px 0px 4px 0px ${colors.secondary};
        border-radius: 0px 0px 5px 5px;

        & .dropdown_item {
            padding: 3px;
            background-image: linear-gradient(to bottom, ${colors.lighterPrimary}, ${colors.primary});
            cursor: pointer;
            margin-bottom: 5px;
            transition: .2s;

            &:hover {
                color: lightblue;
                background-image: linear-gradient(to bottom, #424242, #292929);
            }
        }
    }

    & input {
        ${constructInputStyle({ width: '100%', height: '100%', fontSize: '1.5rem', padding: '8px 4px' })};

        &:focus ~ .dropdown {
            min-height: 100px;
            max-height: 200px;
            padding: 5px;
        }
    }
`;


const MultiSelect = ({
    options = [],
    items,
    setItems,
    placeholderText,
    disableDuplicates = true,
    tagsAsLowercase = false,
    tagsAsUppercase = false,
    prefixCharacters,
    suffixCharacters,
    selectedItemsAs = "label"
}) => {
    const targetRef = useRef();
    const [contWidth, setContWidth] = useState({ width: 0, height: 0 });
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setContWidth({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight
        });
    }, [items]);

    const addSelectedItem = (item) => {
        let key, label;
        if (tagsAsLowercase) {
            key = item.key.toLowerCase();
            label = item.key.toLowerCase();
        }
        else if (tagsAsUppercase) {
            key = item.key.toUpperCase();
            label = item.key.toUpperCase();
        }
        else {
            key = item.key;
            label = item.label;
        }

        const strAfterPrefix = str => str.slice(prefixCharacters.length);

        if (prefixCharacters && key.slice(0, prefixCharacters.length) == prefixCharacters) { // remove prefixed characters if user opts to type them in
            key = strAfterPrefix(key);
            label = strAfterPrefix(label);
        }

        if (disableDuplicates && items.some(item =>
            item.key.toLowerCase() == inputValue.toLowerCase()
            || item.key.toLowerCase() == strAfterPrefix(inputValue).toLowerCase()
        )) return;

        setItems(prevState => [...prevState, {
            key,
            label
        }]);
        setInputValue('');
    };

    const captureKey = e => {
        const key_map = {
            32: "space",
            188: "comma",
            9: "tab",
            13: "enter"
        };

        if (e.keyCode == 8 && inputValue.length == 0) {
            setItems(prevState => [...prevState.slice(0, prevState.length - 1)])
        }
        if (Object.keys(key_map).some(key => key == e.keyCode)) {
            e.preventDefault();
            if (inputValue.length !== 0) {
                if (disableDuplicates && items.every(item => item.key.toLowerCase() != inputValue.toLowerCase())) {
                    addSelectedItem({ key: inputValue, label: inputValue });
                }
            }
        }

    };
    return (
        <div className={style}>
            <input
                type="text"
                style={{ textIndent: contWidth.width - 3 }}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => captureKey(e)}
                placeholder={(items.length == 0 && inputValue.length == 0 && placeholderText) || ''}
                value={inputValue}
            />
            <div className="selected_item_container" ref={targetRef}>
                {items.map((item, i) =>
                    <div
                        className="selected_item"
                        key={i}
                        style={{ animation: `fadeIn .5s` }}
                        onClick={() => setItems(prevState => [...prevState.filter(x => x.key !== item.key)])}
                    >
                        {prefixCharacters + item.label}
                    </div>
                )}
            </div>
            {options.length > 0 &&
                <div className="dropdown">
                    {options
                        .filter(option => !items.some(x => x.key == option.key))
                        .filter(option => option.label.toLowerCase().includes(inputValue) || option.key.toLowerCase().includes(inputValue))
                        .map((option, i) =>
                            <div
                                key={i}
                                className="dropdown_item"
                                onClick={() => addSelectedItem({ key: option.key, label: option.label })}
                            >
                                {option.label}
                            </div>
                        )}
                </div>
            }
        </div>
    )
};

export default MultiSelect;