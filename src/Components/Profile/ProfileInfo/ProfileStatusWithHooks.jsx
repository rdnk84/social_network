import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    // let stateWithSetState = useState(true);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    let [status, setStatus] =  useState(props.status);
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect (() => {
        setStatus(props.status)
        }, [props.status]);

    let actitvateEditMode = () => {
        setEditMode(true)
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={actitvateEditMode}>{props.status || "put your status here"}</span>
                </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
