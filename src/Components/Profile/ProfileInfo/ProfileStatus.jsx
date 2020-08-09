import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deActivateEditMode = () => {

        this.setState({editMode: false})
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "put your status here"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode} onChange={this.onStatusChange}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;
