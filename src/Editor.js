import React from 'react'
import MediumEditor from 'medium-editor'

import 'medium-editor/dist/css/medium-editor.css'
// import 'medium-editor/dist/css/themes/default.css'
// import 'medium-editor-insert-plugin';

class Editor extends React.Component {
    componentDidMount() {
        new MediumEditor('.editor', {
            imageDragging: true,
            autoLink: true,
            keyboardCommands: true,
        })
    }

    render() {
        return (
            <div className="editor"></div>
        )
    }
}

export default Editor