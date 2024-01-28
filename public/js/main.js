document.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector('#form');
    var container = document.querySelector('#Post_view_box');

    loadComments();

    form.addEventListener('submit', function(event){
        event.preventDefault();
        var postLinkValue = document.getElementById('Postlink').value;
        var postDescValue = document.getElementById('PostDesc').value;

        // Create new elements
        var newBox = document.createElement('div');
        var newImg = document.createElement('img');
        var newDesc = document.createElement('p');
        var commentIcon = document.createElement('i');
        var commentTextArea = document.createElement('textarea');
        var saveCommentButton = document.createElement('button'); // New button element

        // Set attributes and content for the new elements
        newImg.setAttribute('src', postLinkValue);
        newImg.setAttribute('height', '500');
        newImg.setAttribute('width', '500');
        newDesc.textContent = postDescValue;

        // Center the content using flexbox
        newBox.style.display = 'flex';
        newBox.style.flexDirection = 'column';
        newBox.style.alignItems = 'center';

        // Add comment icon
        // commentIcon.classList.add('fa', 'fa-comment');

        // Add event listener to show/hide comment textarea
        commentIcon.addEventListener('click', function() {
            commentTextArea.style.display = commentTextArea.style.display === 'none' ? 'block' : 'none';
            saveCommentButton.style.display = 'block'; // Show the "Save Comment" button when the textarea is displayed
        });

        // Set the initial value of the comment textarea based on stored comment
        commentTextArea.value = '';

        // Set attributes for the "Save Comment" button
        saveCommentButton.textContent = 'Save Comment';
        saveCommentButton.style.display = 'none'; // Initially hide the button
        saveCommentButton.addEventListener('click', function() {
            // Handle the action when the "Save Comment" button is clicked
            alert('Comment has been saved!');
        });

        // Append new elements to the container
        newBox.appendChild(newImg);
        newBox.appendChild(newDesc);
        newBox.appendChild(commentIcon);
        newBox.appendChild(commentTextArea);
        newBox.appendChild(saveCommentButton);

        container.appendChild(newBox);

        // Save comment to local storage
        saveComment({
            postLink: postLinkValue,
            postDesc: postDescValue,
            comment: '', // Initialize comment as empty
        });

        // Clear the form after submission
        form.reset();
    });

    // Function to load comments from local storage and populate the UI
    function loadComments() {
        var comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(function(comment) {
            createCommentBox(comment);
        });
    }

    // Function to save a new comment to local storage
    function saveComment(comment) {
        var comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // Function to create a comment box based on comment data
    function createCommentBox(comment) {
        var newBox = document.createElement('div');
        var newImg = document.createElement('img');
        var newDesc = document.createElement('p');
        var commentIcon = document.createElement('i');
        var commentTextArea = document.createElement('textarea');
        var saveCommentButton = document.createElement('button');

        newImg.setAttribute('src', comment.postLink);
        newImg.setAttribute('height', '300');
        newImg.setAttribute('width', '300');
        newDesc.textContent = comment.postDesc;

        newBox.style.display = 'flex';
        newBox.style.flexDirection = 'column';
        newBox.style.alignItems = 'center';

        commentIcon.classList.add('fa', 'fa-comment');
        commentIcon.addEventListener('click', function() {
            commentTextArea.style.display = commentTextArea.style.display === 'none' ? 'block' : 'none';
            saveCommentButton.style.display = 'block';
        });

        // Set the initial value of the comment textarea based on stored comment
        commentTextArea.value = comment.comment;

        saveCommentButton.textContent = 'Save Comment';
        saveCommentButton.style.display = 'none';
        saveCommentButton.addEventListener('click', function() {
            alert('Comment has been saved!');
        });

        newBox.appendChild(newImg);
        newBox.appendChild(newDesc);
        newBox.appendChild(commentIcon);
        newBox.appendChild(commentTextArea);
        newBox.appendChild(saveCommentButton);

        container.appendChild(newBox);
    }
});
