const inputBox = document.querySelector("#inputBox");
const searchButton = document.querySelector(".search-btn");

let enteredUserName = "";

inputBox.addEventListener("input", function (evt) {
  enteredUserName = evt.target.value.trim();
});

searchButton.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  const url = `https://api.github.com/users/${enteredUserName}`;

  xhr.open("GET", url, true);

  xhr.responseType = "json"; //OR: Use JSON.parse()

  const profileDetails = `
    <div class="img-container">
        <img src="" alt="" class="profile-pic" />
        <p>Joined: <span class="joining-date"></span></p>
      </div>
      <div class="user-details-container">
        <h2 class="fullName"></h2>
        <h3 class="userName"><a href="" target="_blank"></a></h3>
        <p class="bio"></p>
        <div class="user-publicity">
          <div class="followers">
            <div class="followers-wrapper">
              <i class="fa-solid fa-users icon-style"></i
              ><span class="followers-count"></span>
            </div>
            <div class="followers-text">Followers</div>
          </div>
          <div class="following">
            <div class="following-wrapper">
              <i class="fa-solid fa-user icon-style"></i
              ><span class="following-count"></span>
            </div>
            <div class="following-text">Following</div>
          </div>
          <div class="public-repos">
            <div class="repo-wrapper">
              <i class="fa-solid fa-book icon-style"></i
              ><span class="repo-count"></span>
            </div>
            <div class="repo-text">Public Repos</div>
          </div>
        </div>
        <div class="button-wrapper">
            <a href="" target ="_blank" class="view-profile-btn-link">
                <i class="fa-solid fa-up-right-from-square"></i>
                <button class="view-profile-btn">View GitHub Profile</button>
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
      </div>`;

  xhr.onload = function () {
    const response = xhr.response;

    document.querySelector(".user-details-wrapper").innerHTML = profileDetails;

    document.querySelector(".profile-pic").src = response.avatar_url;
    document.querySelector(".joining-date").textContent = response.created_at;
    document.querySelector(".fullName").textContent = response.name;
    document.querySelector(".userName a").textContent = "@" + response.login;
    document.querySelector(".userName a").href = response.html_url;
    document.querySelector(".bio").textContent = response.bio;
    document.querySelector(".followers-count").textContent = response.followers;
    document.querySelector(".following-count").textContent = response.following;
    document.querySelector(".repo-count").textContent = response.public_repos;
    document.querySelector(".view-profile-btn-link").href = response.html_url;

    document.querySelector(".user-details-wrapper").style.visibility =
      "visible";
  };

  xhr.send();
});
