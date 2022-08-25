const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

const formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can't be empty";
    console.log("Post is empty");
  } else {
    msg.innerHTML = "";
    console.log("Success");
    acceptData();
  }
};

let data = {};

const acceptData = () => {
  data["text"] = input.value;
  posts.innerHTML += `
      <div>
          <p>${data.text}</p>
          <div class="options">
              <i onClick='editPost(this)' class="fa-solid fa-pen-to-square"></i>
              <i onClick='deletePost(this)' class="fa-solid fa-trash"></i>
          </div>
      </div>
    `;
};

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
