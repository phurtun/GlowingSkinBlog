function addPost() {
    let title = document.getElementById("post-title").value;
    let content = document.getElementById("post-content").value;

    if (title === "" || content === "") {
        alert("Please enter both title and content!");
        return;
    }

    let postSection = document.getElementById("posts");
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h3>${title}</h3><p>${content}</p><hr>`;

    postSection.prepend(postDiv); // Add new post at the top

    // Clear input fields
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
}
