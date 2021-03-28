import style from './style.GenericButton';

const GenericButton = ({label, type, click}) => {

    return (
        <button className={style} type={type} onClick={click}>
            {label}
        </button>
    )
};

export default GenericButton;