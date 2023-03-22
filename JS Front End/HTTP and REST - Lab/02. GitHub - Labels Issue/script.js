function solve(){
    let url = 'https://api.github.com/repos/testnakov/test-nakov-repo/issues/1'

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })
            .catch(function () {
                console.log("Bad things just happened")
            })
}