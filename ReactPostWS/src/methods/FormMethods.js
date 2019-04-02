export const resetPostGET = () => {

    // ------------ MOBILE VERSION VARIABLES ------------- //

    var mobileParagraphs = document.getElementsByClassName('mobile-response-paragraph');
    var mobileBody = document.getElementsByClassName('mobile-post-body');

    // ------------ DESKTOP VERSION VARIABLES - READ POST PAGE ------------- //

    var desktopParagraphs = document.getElementsByClassName('post-response');
    var desktopBody = document.getElementById('desktop-post-body');

    // ------------ LOOP TO REMOVE TEXT FROM ALL MOBILE PARAGRAPHS ------------- //

    for (var i = 0; i < mobileParagraphs.length; ++i) {
        var item = mobileParagraphs[i];
        item.innerHTML = '';
    }

    // ------------ LOOP TO REMOVE TEXT FROM THE MAIN POST BODY ------------- //

    for (i = 0; i < mobileBody.length; ++i) {
        item = mobileBody[i];
        item.innerHTML = '';
    }

    // ------------ LOOP TO REMOVE TEXT FROM THE DESKTOP VERSION'S PARAGRAPHS ------------- //

    for (i = 0; i < desktopParagraphs.length; ++i) {
        item = desktopParagraphs[i];
        item.innerHTML = '';
    }

    // ------------ REMOVE TEXT FROM DESKTOP VERSION'S MAIN BODY ------------- //

    desktopBody.innerText = '';
}

export const resetPostDELETE = () => {

    // ------------ DELETE POST PAGE VARIABLES ------------- //

    var deleteParagraphs = document.getElementsByClassName('delete-post-paragraph');
    var deleteBody = document.getElementsByClassName('delete-post-body');

    // ------------ LOOP TO REMOVE TEXT FROM THE DELETE POST PARAGRAPH'S PAGE ------------- //

    for (var i = 0; i < deleteParagraphs.length; ++i) {
        var item = deleteParagraphs[i];
        item.innerText = '';
    }

    // ------------ LOOP TO REMOVE TEXT FROM THE DELETE POST'S MAIN BODY PAGE ------------- //

    for (i = 0; i < deleteBody.length; ++i) {
        item = deleteBody[i];
        item.innerText = '';
    }
}
