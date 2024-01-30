document.addEventListener('DOMContentLoaded', function () {
    console.log(1)
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
        console.log(2)
        event.preventDefault();
        const postlink = document.querySelector('#Postlink').value;
        const postdesc = document.querySelector('#PostDesc').value;
        console.log(3)
        try {
            const response = await axios.post('http://localhost:3000/post',{postlink,postdesc});
            console.log(4)
        } catch (err) {
            console.log(err);
        }
    }
});
