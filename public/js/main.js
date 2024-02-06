var form = document.getElementById("form");
form.addEventListener("submit", addPost);

var list = document.getElementById("list");

var link = document.querySelector("#link");
var desc = document.querySelector("#desc");

async function addPost(e) {
  e.preventDefault();
  const post = {
    link: e.target.link.value,
    desc: e.target.desc.value,
  };
  try {
    let res = await axios.post("http://localhost:4000/get/addPost", post);
    var li = document.createElement("li");
    var commentBox = document.createElement("input");

    commentBox.setAttribute("type", "text");
    var commentBtn = document.createElement("button");
    var sendBtn = document.createElement("button");
    var form1 = document.createElement("form");
    li.className = "posts";
    commentBtn.className = "commentBtn btn btn-dark";
    sendBtn.className = "sendBtn btn btn-danger";

    commentBtn.appendChild(document.createTextNode("Comment"));
    let img = document.createElement("img");
    img.src = `${post.link}  `;
    let desc = document.createElement("p");
    desc.textContent = `User - ${post.desc}  `;

    form1.appendChild(commentBox);
    form1.appendChild(sendBtn);
    form1.style.display = "none";
    li.appendChild(img);
    li.appendChild(desc);

    li.appendChild(commentBtn);
    li.appendChild(form1);
    list.appendChild(li);
  } catch (e) {
    console.log(e);
  }
}

async function renderList() {
  try {
    const posts = await axios.get("http://localhost:4000/get/posts");

    posts.data.forEach((post) => {
      var li = document.createElement("li");
      var commentBox = document.createElement("input");
      var commentBtn = document.createElement("button");
      commentBox.id = post.id;
      commentBox.setAttribute("type", "text");
      var sendBtn = document.createElement("button");
      var form1 = document.createElement("form");
      li.className = "posts";
      commentBtn.className = "commentBtn btn btn-dark";
      sendBtn.className = "sendBtn btn btn-danger";

      commentBtn.appendChild(document.createTextNode("Comment"));
      sendBtn.appendChild(document.createTextNode("Send"));
      let img = document.createElement("img");
      img.style.width = 350 + "px";
      img.style.height = 300 + "px";
      img.style.borderRadius = 10 + "px";
      img.src = `${post.link}  `;
      let desc = document.createElement("p");
      desc.textContent = `User - ${post.desc}  `;
      desc.style.fontFamily = "Charcoal,sans-serif";

      form1.appendChild(commentBox);
      form1.appendChild(sendBtn);

      let divA = document.createElement("div");
      divA.className = "showcomments";
      divA.appendChild(form1);
      let divB = document.createElement("div");
      post.comments.forEach((comment) => {
        let p = document.createElement("p");
        p.textContent = `Anonymous - ${comment.comment}`;
        divB.appendChild(p);
      });

      divA.appendChild(divB);
      divA.style.display = "none";
      li.appendChild(img);
      li.appendChild(desc);

      li.appendChild(commentBtn);
      li.appendChild(divA);

      commentBtn.onclick = function () {
        divA.style.display = "block";
        console.log(post.id);
      };
      sendBtn.onclick = async function (e) {
        e.preventDefault();
        var cmt = document.getElementById(`${post.id}`);
        const commentInfo = {
          comment: cmt.value,
          postId: post.id,
        };
        try {
          let sendComment = await axios.post(
            "http://localhost:4000/get/addComment",
            commentInfo
          );
          let comm = document.createElement("div");
          comm.textContent = `Anonymous - ${commentInfo.comment}  `;
          divB.appendChild(comm);
        } catch (e) {
          console.log(e);
        }
        divA.appendChild(divB);
        li.appendChild(divA);
      };
      list.appendChild(li);
    });
  } catch (e) {
    console.log(e);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  renderList();
});