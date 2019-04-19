import React, { Component } from 'react';

class readPost extends Component {

    render() {


        const { post, readPost, resetPostGET } = this.props;

        return (
            <div>
                <h2 className="body-header">GET A POST</h2>

                <div id="get-post-info-div">
                    <form id="get-post-form" method="GET" onSubmitCapture={e => { e.preventDefault(); }} onSubmit={readPost}>

                        <p><b>P</b>ost <b>I</b>D</p>
                        <input type="text" id = "getPostID" />

                        <div className="form-buttons">
                            <button type="button" onClickCapture={e => { e.preventDefault(); }} onClick={readPost}>Search</button>
                            <button type="reset" onClick={resetPostGET}>Reset</button>
                        </div>

                    </form>
                </div>

                <div id = "post-info-mobile">
                    <div className="post-info-container">
                        <p>Post ID</p>
                    </div>

                    <p className="mobile-response-paragraph">
                        {post.id === 0 ? '' : post.id}
                    </p>

                    <div className="post-info-container">
                        <p>User ID</p>
                    </div>

                    <p className="mobile-response-paragraph">
                        {post.userID === 0 ? '' : post.userID}
                    </p>

                    <div className="post-info-container">
                        <p>Post's Title</p>
                    </div>

                    <p className="mobile-response-paragraph">
                        {post.title}
                    </p>

                    <div className="post-info-container">
                        <p>Post's Body</p>
                    </div>

                    <p className="mobile-post-body">
                        {post.body}
                    </p>

                </div>

                <div id="post-info-desktop">

                    <div id="left-div-desktop">
                        <h2><b>B</b>ody</h2>
                        <p id = "desktop-post-body">
                            {post.body}
                        </p>
                    </div>

                    <div id="right-div-desktop">

                        <h5><b>P</b>ost ID</h5>
                        <p className="post-response">
                            {post.id === 0 ? '' : post.id}
                        </p>

                        <h5><b>U</b>ser ID</h5>
                        <p className="post-response">
                            {post.userID === 0 ? '' : post.userID}
                        </p>

                        <h5><b>T</b>itle</h5>
                        <p className="post-response">
                            {post.title}
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default readPost;
