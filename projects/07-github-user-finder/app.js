const inputBox = document.querySelector("#inputBox");
const searchButton = document.querySelector(".search-btn");
const errorMessage = document.getElementById("error-message");

inputBox.addEventListener("input", function () {});

searchButton.addEventListener("click", function () {
  let username = inputBox.value.trim();

  // Check empty input
  if (username === "") {
    removeUserProfile();
    errorMessage.textContent = "Please enter a GitHub username.";
    return;
  }

  // Validate username format
  if (!validateUsername(username)) {
    username = inputBox.value = "";
    errorMessage.textContent = "Please enter a valid GitHub username.";
    removeUserProfile();
    return;
  }

  // Clear previous error
  errorMessage.textContent = "";

  // Send API request
  searchGitHubUser(username);

  username = inputBox.value = "";
});

function validateUsername(username) {
  const usernamePattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

  return usernamePattern.test(username);
}

function searchGitHubUser(username) {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.github.com/users/${encodeURIComponent(username)}`,
    true,
  );

  xhr.setRequestHeader("Accept", "application/vnd.github+json");
  xhr.setRequestHeader("X-GitHub-Api-Version", "2022-11-28");

  xhr.onload = function () {
    if (xhr.status === 200) {
      const userData = JSON.parse(xhr.responseText);

      errorMessage.textContent = "";

      // Rendering profile card
      displayUserProfile(userData);
    } else if (xhr.status === 404) {
      hideLoader();

      errorMessage.textContent =
        "GitHub user not found. Please check the username.";

      removeUserProfile();
    } else if (xhr.status === 403 || xhr.status === 429) {
      const remaining = xhr.getResponseHeader("X-RateLimit-Remaining");
      const response = JSON.parse(xhr.responseText);

      if (
        xhr.status === 429 ||
        remaining === "0" ||
        response.message?.toLowerCase().includes("rate limit")
      ) {
        hideLoader();

        errorMessage.textContent =
          "GitHub API rate limit exceeded. Please try again later.";

        removeUserProfile();
      } else {
        hideLoader();

        errorMessage.textContent = "Access forbidden. Please try again later.";

        removeUserProfile();
      }
    } else if (xhr.status >= 500) {
      hideLoader();

      errorMessage.textContent = "GitHub server error. Please try again later.";

      removeUserProfile();
    } else {
      hideLoader();

      errorMessage.textContent = "Something went wrong. Please try again.";

      removeUserProfile();
    }
  };

  xhr.onerror = function () {
    hideLoader();

    errorMessage.textContent =
      "Network error. Please check your internet connection.";

    removeUserProfile();
  };

  xhr.timeout = 10000;

  xhr.ontimeout = function () {
    hideLoader();

    errorMessage.textContent = "Request timed out. Please try again.";

    removeUserProfile();
  };

  removeUserProfile();

  showLoader();

  xhr.send();
}

function displayUserProfile(userData) {
  hideLoader();

  document.querySelector(".user-details-wrapper").innerHTML = profileDetails;

  document.querySelector(".profile-pic").src = userData.avatar_url;

  const createdAt = userData.created_at;
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  document.querySelector(".joining-date").textContent = formattedDate;
  document.querySelector(".fullName").textContent =
    userData.name || "No name available";
  document.querySelector(".userName a").textContent =
    "@" + userData.login || "No username available";
  document.querySelector(".userName a").href = userData.html_url;
  document.querySelector(".bio").textContent =
    userData.bio || "No bio available";
  document.querySelector(".followers-count").textContent = userData.followers;
  document.querySelector(".following-count").textContent = userData.following;
  document.querySelector(".repo-count").textContent = userData.public_repos;
  document.querySelector(".view-profile-btn-link").href = userData.html_url;

  document.querySelector(".user-details-wrapper").style.display = "flex";
}

function removeUserProfile() {
  document.querySelector(".user-details-wrapper").style.display = "none";
}

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

function showLoader() {
  document.querySelector(".loader-container").classList.remove("hidden");
}

function hideLoader() {
  document.querySelector(".loader-container").classList.add("hidden");
}
