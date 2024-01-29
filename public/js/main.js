document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var postViewBox = document.getElementById('Post_view_box');
    form.addEventListener('submit', refresh);

    function showOutput(imageUrl, description) {
        var newDiv = document.createElement('div');
        var newimg = document.createElement('img');
        var newh5 = document.createElement('h5');
        var commentIcon = document.createElement('i');
        var commentbtn = document.createElement('button');
        var lineBreak = document.createElement('br');

        newDiv.setAttribute('height','600');
        newDiv.setAttribute('width','400')
        newDiv.style.backgroundColor= 'white'
        newDiv.setAttribute('id', 'Post_view_box');
        newDiv.setAttribute('class', 'container');

        newimg.src = imageUrl;
        newimg.setAttribute('height', '300');
        newimg.setAttribute('width', '300');

        newh5.textContent = 'User' + ':' + description;

        commentIcon.className = 'fa-solid fa-comment';
        commentbtn.style.border = 0;
        commentbtn.style.backgroundColor = '#ffffff';

        newDiv.appendChild(newimg);
        newDiv.appendChild(lineBreak);
        newDiv.appendChild(newh5);
        newDiv.appendChild(lineBreak);
        newDiv.appendChild(commentIcon);
        newDiv.appendChild(commentbtn);
        document.body.appendChild(newDiv);
    }

    async function refresh(event) {
        event.preventDefault();
        const postlink = document.querySelector('#Postlink').value;
        const postdesc = document.querySelector('#PostDesc').value;
        const formData = {postlink,postdesc};
        console.log(formData)
        try {
            const response = fetch('http://localhost:3000/post',{method:'POST',header:{'Content-Type': 'application/json' },body:JSON.stringify(formData)})
            //const response = await axios.post('http://localhost:3000/post',{postlink,postdesc});
            //showOutput(response.data.imageUrl, response.data.description);
        } catch (err) {
            console.log(err);
        }
    }
});
