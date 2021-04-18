import style from './style.GenericButton';

const GenericButton = ({label, type, click, color}) => {

    return (
        <button className={`${style()} ${color}`} type={type} onClick={click}>
            {label}
        </button>
    )
};

export default GenericButton;