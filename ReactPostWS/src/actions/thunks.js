import axios from 'axios';
import { createPost, readPost, updatePost, deletePost } from './actions'; 

export const getPostInfo = () => {

    var postID = document.getElementById('getPostID').value;
    var numbersReg = new RegExp('^[0-9]+$');

    return (dispatch) => {

        if (postID.trim() === '') {
            alert('You must type a Post ID.');
            return false;
        }
        if (numbersReg.test(postID) === false) {
            alert('Only positive numbers allowed.');
            return false;
        }
        if (parseInt(postID) <= 0) {
            alert('Only numbers greater than 0 allowed.');
            return false;
        }

        return axios.get('https://jsonplaceholder.typicode.com/posts/' + postID)
            .then(response => {
                dispatch(readPost(response.data));
            })
            .catch(error => {
               
            });
    };
};

export const createNewPost = () => {

    var postUserID = document.getElementById('new-post-userID').value;
    var postTitle = document.getElementById('new-post-title').value;
    var postBody = document.getElementById('new-post-body').value;
    var resetButton = document.getElementById('create-form-reset');

    return (dispatch) => {

        if (postUserID === 'Choose') {
            alert('You must choose an user ID.');
            return false;
        }
        if (postTitle.trim() === '') {
            alert('You must type a title for the post.');
            return false;
        }
        if (postTitle.trim().length < 3) {
            alert("The post's title must contain at least 3 characters.");
            return false;
        }
        if (postBody.trim() === '') {
            alert('You must type a body for the post.');
            return false;
        }
        if (postBody.trim().length < 3) {
            alert("The post's body must contain at least 3 characters.");
            return false;
        }

        var postFormData = new FormData();
        postFormData.set('userId', postUserID);
        postFormData.set('title', postTitle.trim());
        postFormData.set('body', postBody.trim());

        return axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            data: postFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                alert('New Post Created.');
                resetButton.click();
                dispatch(createPost());
            })
            .catch(function (response) {

            });
    };
};

export const updateExistingPost = () => {

    var selectPostID = document.getElementById('update-post-postID').value;
    var selectUserID = document.getElementById('update-post-userID').value;
    var newPostTitle = document.getElementById('edit-post-title').value;
    var newPostBody = document.getElementById('edit-post-body').value;
    var resetButton = document.getElementById('reset-update-form');

    return (dispatch) => {

        if (selectPostID === 'Choose') {
            alert('You must choose a Post ID.');
            return false;
        }
        if (selectUserID === 'Choose') {
            alert('You must choose an user ID.');
            return false;
        }

        if (newPostTitle.trim() === '') {
            alert('You must type a new title for the post.');
            return false;
        }
        if (newPostTitle.trim().length < 3) {
            alert("The post's title must contain at least 3 characters.");
            return false;
        }

        if (newPostBody.trim() === '') {
            alert('You must type a new body for the post.');
            return false;
        }
        if (newPostBody.trim().length < 3) {
            alert("The post's new body must contain at least 3 characters.");
            return false;
        }

        var postFormData = new FormData();
        postFormData.set('userId', selectUserID);
        postFormData.set('title', newPostTitle.trim());
        postFormData.set('body', newPostBody.trim());

        return axios({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/' + selectPostID,
            data: postFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                alert('Post Updated.');
                resetButton.click();
                dispatch(updatePost());
            })
            .catch(function (response) {
                //handle error

            });
    };
};

export const deleteExistingPost = () => {

    var selectPostID = document.getElementById('delete-post-postID').value;
    var resetButton = document.getElementById('reset-delete-form');

    return (dispatch) => {

        if (selectPostID === 'Choose') {
            alert('You must choose a Post ID.');
            return false;
        }

        return axios({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/' + selectPostID,
            data: selectPostID,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                alert('Post Deleted.');
                resetButton.click();
                dispatch(deletePost());
            })
            .catch(function (response) {
                //handle error

            });
    };
};