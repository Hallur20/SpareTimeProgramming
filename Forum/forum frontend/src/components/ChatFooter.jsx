import React, { Component } from 'react';

class ChatFooter extends Component {
    constructor(){
        super();
        this.closeForm = this.closeForm.bind(this);
        this.openForm = this.openForm.bind(this);
        this.myForm = React.createRef();
    }


    closeForm(e){
        const node = this.myForm.current;
        node.style.display = 'none';
    }

    openForm(e){
        const node = this.myForm.current;
        node.style.display = 'block';
    }
    render() {
        return (
            <div className="open-button">
                friends online: 3
                <button  onClick={this.openForm}>Chat</button>
                <div className="chat-popup" ref={this.myForm}>
                    <form action="/action_page.php" className="form-container">
                        <h1>Chat</h1>

                        <label htmlFor="msg"><b>Message</b></label>
                        <textarea placeholder="Type message.." name="msg" required></textarea>

                        <button type="submit" className="btn">Send</button>
                        <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ChatFooter;