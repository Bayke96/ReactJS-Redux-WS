import React, { Component } from 'react';

class createPost extends Component {

    componentDidMount = () => {

        // ---------------------- SET WINDOW'S TITLE --------------- //

        document.title = "ReactJS - API Call - POST";

        // --------------------- ARRAY TO STORE RESULTS FROM THE API CALL ------------------ //

        let userList = [];

        // --------------------- ARRAY TO EXTRACT ID'S FROM THE USER LIST ARRAY --------------- //

        let idList = [];

        let select = document.getElementById('new-post-userID');

        // ----------------------- API CALL TO GET ALL USERS ---------------------- //

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {

                // ------------ PUSH THE RESPONSE TO THE USER LIST ARRAY -------- //

                userList.push(data);

                // ----------------- LOOP TO PUSH ONLY THE ID'S TO THE ID LIST ARRAY --- //

                for (var i = 0; i < userList[0].length; i++) {
                    idList.push(userList[0][i].id);
                }

                // -- LOOP TO POPULATE THE SELECT OPTION WITH THE ID'S FROM THE ID LIST ARRAY -- //

                for (i = 0; i < idList.length; i++) {
                    var opt = idList[i];
                    var el = document.createElement('option');
                    el.textContent = opt;
                    el.value = opt;
                    select.appendChild(el);
                }

            });
    }

    render() {

        const { createPost } = this.props;

        return (
            <div>
                <h2 className="body-header">CREATE A POST</h2>
                <form method="POST" onSubmitCapture={e => { e.preventDefault(); }} onSubmit={createPost}>
                    <div className="form-div">

                        <p><b>U</b>ser <b>I</b>D</p>
                        <select id = "new-post-userID">
                            <option defaultValue value='Choose'>Choose</option>
                        </select>

                        <p><b>T</b>itle</p>
                        <input type="text" id = "new-post-title" />

                        <p><b>B</b>ody</p>
                        <textarea id = "new-post-body" /> <br />

                        <div className="form-buttons">
                            <button onClickCapture={e => { e.preventDefault(); }} onClick={createPost} > Create</button>
                            <button type="reset" id = "create-form-reset">Reset</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
};

export default createPost;