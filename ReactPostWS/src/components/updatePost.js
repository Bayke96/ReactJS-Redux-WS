import React, { Component } from 'react';

class updatePost extends Component {

    componentDidMount = () => {

        document.title = "ReactJS - API Call - UPDATE";

        // --------------------- ARRAY TO STORE RESULTS FROM THE API CALL ------------------ //

        let userList = [];
        var postList = [];

        // --------------------- ARRAY TO EXTRACT ID'S FROM THE USER LIST ARRAY --------------- //

        let idList = [];
        let postIDList = [];

        let selectUserID = document.getElementById('update-post-userID');
        let selectPostID = document.getElementById('update-post-postID');

        // ----------------------- API CALL TO GET ALL POSTS ---------------------- //

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {

                // ------------ PUSH THE RESPONSE TO THE POST LIST ARRAY -------- //

                postList.push(data);

                // ----------------- LOOP TO PUSH ONLY THE ID'S TO THE ID LIST ARRAY --- //

                for (var i = 0; i < postList[0].length; i++) {
                    postIDList.push(postList[0][i].id);
                }

                // -- LOOP TO POPULATE THE SELECT OPTION WITH THE ID'S FROM THE POST ID LIST ARRAY -- //

                for (i = 0; i < postIDList.length; i++) {
                    var opt = postIDList[i];
                    var el = document.createElement('option');
                    el.textContent = opt;
                    el.value = opt;
                    selectPostID.appendChild(el);
                }

            });


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
                    selectUserID.appendChild(el);
                }

            });
    }

    render() {

        // --- CONST FUNCTION TO UPDATE FORM DATA DEPENDING ON USER'S POST CHOICE --- //

        const updateForm = (select) => {

            // --- VARIABLE THAT STORES THE POST ID SELECTED BY THE USER --- //

            let postID = select.target.value;

            // --- API CALL - GET THAT SPECIFIC POST BASED ON THE ID --- //

            if (postID !== 'Choose') {

                fetch('https://jsonplaceholder.typicode.com/posts/' + postID)
                    .then(response => response.json())
                    .then(data => {

                        // --- SET THE RESPECTIVE VALUES ON THE TEXTFIELD, TEXTAREA AND USERID SELECT --- //

                        document.getElementById('update-post-userID').selectedIndex = data.userId;
                        document.getElementById('edit-post-title').value = data.title;
                        document.getElementById('edit-post-body').value = data.body;

                    });

            } else {
                document.getElementById('update-post-userID').selectedIndex = 0;
                document.getElementById('edit-post-title').value = '';
                document.getElementById('edit-post-body').value = '';
            }

           
        };

        const { updateExistingPost } = this.props;

        return (
            <div>
                <h2 className="body-header">UPDATE AN EXISTING POST</h2>
                <form method="POST" onSubmitCapture={e => { e.preventDefault(); }} onSubmit={updateExistingPost} >
                    <div className="form-div">

                        <p><b>P</b>ost <b>I</b>D</p>
                        <select id="update-post-postID" onChange={updateForm}>
                            <option defaultValue value='Choose'>Choose</option>
                        </select>

                        <p><b>N</b>ew <b>U</b>ser <b>I</b>D</p>
                        <select id = "update-post-userID">
                            <option defaultValue value='Choose'>Choose</option>
                        </select>

                        <p><b>N</b>ew Title</p>
                        <input type="text" id = "edit-post-title" />

                        <p><b>N</b>ew Body</p>
                        <textarea id = "edit-post-body" /> <br />

                        <div className="form-buttons">
                            <button onClickCapture={e => { e.preventDefault(); }} onClick={updateExistingPost}>Update</button>
                            <button type="reset" id = "reset-update-form">Reset</button>
                        </div>

                    </div>
                </form>
            </div>
            );
    }
}

export default updatePost;