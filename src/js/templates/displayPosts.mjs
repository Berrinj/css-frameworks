// import { displayPosts } from "./api/posts/display.mjs";
export function createPostTemplate(postData) {
  const avatar = postData.author.avatar;
  const imageUrl = avatar || "/src/images/default-avatar.png";
  const avatarAlt = `Profile image of ${postData.author.name}`;

  const post = document.createElement("div");
  post.classList.add("feed-example", "mb-3");
  const postContainer = document.createElement("div");
  postContainer.classList.add(
    "publishedWoopsie",
    "w-100",
    "border",
    "rounded",
    "p-3"
  );
  const postContent = document.createElement("div");
  postContent.classList.add(
    "name-date",
    "d-flex",
    "flex-wrap",
    "align-items-center"
  );
  const postImage = document.createElement("img");
  postImage.src = `${imageUrl}`;
  postImage.alt = `${avatarAlt}`;
  postImage.classList.add("feed-image", "me-1");
  postImage.alt = "profile-image";
  const postName = document.createElement("h4");
  postName.classList.add("fw-bold", "h5", "me-2", "mb-0");
  postName.textContent = postData.name;
  const postUsername = document.createElement("p");
  postUsername.classList.add("mb-0", "pe-2", "small");
  postUsername.textContent = `@${postData.author.name}`;
  const postDate = document.createElement("small");
  postDate.classList.add("text-muted");
  postDate.textContent = postData.updated;
  const postText = document.createElement("p");
  postText.classList.add("m-0", "pt-1");
  postText.textContent = postData.body;
  const interactionContainer = document.createElement("div");
  interactionContainer.classList.add(
    "feed-interact",
    "d-flex",
    "justify-content-between",
    "p-2"
  );
  interactionContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
  class="bi bi-chat" viewBox="0 0 16 16">
  <path
      d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-repeat" viewBox="0 0 16 16">
                                <path
                                    d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                            </svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
  class="bi bi-heart" viewBox="0 0 16 16">
  <path
      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
</svg>`;
  postContent.append(postImage, postName, postUsername, postDate);
  postContainer.append(postContent, postText);
  post.append(postContainer, interactionContainer);
  return post;
}

export function renderPostTemplate(postDataList, parent) {
  console.log("Received postDataList:", postDataList);
  parent.append(...postDataList.map(createPostTemplate));
}
/* <div class="feed-example mb-3">
                        <div class="publishedWoopsie w-100 border rounded p-3">
                            <div class="name-date d-flex flex-wrap align-items-center">
                                <img src="/src/images/profile-img-round.png" class="feed-image me-1"
                                    alt="profile-image">
                                <h4 class="fw-bold h5 me-2 mb-0">Frida</h4>
                                <p class="mb-0 pe-2 small">@fridafever</p>
                                <small class="text-muted">1d</small>
                            </div>

                            <p class="m-0 pt-1">Can't believe I got the job guys!!</p>
                        </div>
                        <div class="feed-interact d-flex justify-content-between p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chat" viewBox="0 0 16 16">
                                <path
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-repeat" viewBox="0 0 16 16">
                                <path
                                    d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </div>
                    </div> */