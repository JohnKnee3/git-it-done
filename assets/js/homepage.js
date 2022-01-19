var getUserRepos = function () {
    fetch("https://api.github.com/users/octocat/repos").then(function (response) {
        // console.log(response);
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

getUserRepos();