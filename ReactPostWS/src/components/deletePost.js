import React, { Component } from 'react';

class deletePost extends Component {

    componentDidMount = () => {
        document.title = "ReactJS - API Call - DELETE";

        // --------------------- ARRAY TO STORE RESULTS FROM THE API CALL ------------------ //

        var postList = [];

        // --------------------- ARRAY TO EXTRACT ID'S FROM THE USER LIST ARRAY --------------- //

        let postIDList = [];

        let selectPostID = document.getElementById('delete-post-postID');

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

                        document.getElementById('delete-post-userID').innerText = data.userId;
                        document.getElementById('delete-post-title').innerText = data.title;
                        document.getElementById('delete-post-body').innerText = data.body;

                    });

            } else {
                document.getElementById('delete-post-userID').innerText = '';
                document.getElementById('delete-post-title').innerText = '';
                document.getElementById('delete-post-body').innerText = '';
            }

        };

        const { deleteExistingPost, resetPostDELETE } = this.props;

        return (
            <div>
                <h2 className="body-header">DELETE AN EXISTING POST</h2>
                <form method="POST" onSubmitCapture={e => { e.preventDefault(); }} onSubmit={deleteExistingPost} >
                    <div className="form-div">

                        <p><b>P</b>ost <b>I</b>D</p>
                        <select id="delete-post-postID" onChange={updateForm}>
                            <option defaultValue>Choose</option>
                        </select>

                        <p><b>U</b>ser <b>I</b>D</p>
                        <p className="delete-post-paragraph" id = "delete-post-userID">
                           
                        </p>
                        
                        <p><b>T</b>itle</p>
                        <p className="delete-post-paragraph" id = "delete-post-title">
                          
                        </p>

                        <p><b>B</b>ody</p>
                        <p className="delete-post-body" id = "delete-post-body">
                            
                        </p>
                       

                        <div className="form-buttons">
                            <button onClickCapture={e => { e.preventDefault(); }} onClick={deleteExistingPost} >Delete</button>
                            <button type="reset" onClick={resetPostDELETE} id = "reset-delete-form">Reset</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default deletePost;