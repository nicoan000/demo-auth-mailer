import style from './style.GenericButton';

const GenericButton = ({label, type}) => {

    return (
        <button className={style} type={type}>
            {label}
        </button>
    )
};

export default GenericButton;