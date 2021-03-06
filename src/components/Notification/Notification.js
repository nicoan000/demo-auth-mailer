import style from './style.Notification';

const Notification = ({msg, shown}) => {
    return (
        <div className={`${style} red ${shown ? "shown" : "hidden"}`}>
            <div className="msg">{msg}</div>
            {/* <div className="progress_bar"></div> */}
        </div>
    )
};

export default Notification;