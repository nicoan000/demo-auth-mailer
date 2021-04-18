import { useRef } from 'react';
import style from './style.DropImageContainer';

const DropImageContainer = ({ files, readOnly }) => {
    const modalImageRef = useRef();

    const attachImageRef = (file) => {
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }

        return modalImageRef;
    }

    return (
        <div className="drop_image_container">
            {files.map((data, i) =>
                <div
                    className={[
                        "drop_block",
                        data.invalid ? "invalid" : ""
                    ].join(' ')}
                    key={i}
                >
                    {!data.invalid && 
                        <div 
                            className="drop_image" 
                            ref={readOnly ? null : attachImageRef(data)}
                        ></div>
                    }
                    {!readOnly &&
                        <div className="file_name_container">
                            <div className="file_name">{data.name.slice(0, 30)}</div>
                        </div>
                    }
                    {data.invalid && 
                        <div className="info_icon">
                            <AiOutlineInfoCircle />
                        </div>
                    }
                    {!readOnly && 
                        <button 
                            className="remove_btn" 
                            onClick={() => removeItem(data.id)}
                        >
                            X
                        </button>
                    }
                </div>
            )}
        </div>
    )
};

export default DropImageContainer;