import React, { Component } from 'react';
import { deleteNote } from '../../actions';
import { connect } from 'react-redux';
import './index.css';

class DeleteNote extends Component {

    handleDelete = () => {
        this.props.deleteNote(this.props.toDelete); // This comes from Redux Connect
        this.props.history.push('/'); // This comes from Browser Router inside NoteView
    }
    
    render() {
        console.log('Delete Note Props:', this.props)
        let toggle = this.props.toggle; // This comes from NoteView
        let style = 'delete_wrapper';
        if (toggle === false) {
            style = 'hidden';
        }
        return (
            <div className={style}>
                <div>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div className='delete_buttons_wrapper'>
                    <div
                        className='button button--danger'
                        onClick={this.handleDelete}
                    >
                        DELETE
                    </div>
                    <div
                        className='button'
                        onClick={this.props.showModal}
                    >
                        NO
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {deleteNote})(DeleteNote);