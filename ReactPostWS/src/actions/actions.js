import { CREATE_POST, READ_POST, UPDATE_POST, DELETE_POST } from './types';

export const createPost = () => {
    return {
        type: CREATE_POST
    }
}

export const readPost = (postInfo) => {
    return {
        type: READ_POST,
        id: postInfo.id,
        userID: postInfo.userId,
        title: postInfo.title,
        body: postInfo.body
    }
};

export const updatePost = () => {
    return {
        type: UPDATE_POST
    }
}

export function deletePost() {
    return {
        type: DELETE_POST
    }
}

export function resetPostGET() {
    return {
        type: 'RESET_POST_GET'
    }
}

export function resetPostDELETE() {
    return {
        type: 'RESET_POST_DELETE'
    }
}
