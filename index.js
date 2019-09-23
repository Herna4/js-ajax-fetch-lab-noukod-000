const token = 'Herna4';

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/reposlearn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token${getToken()}`
    }
    
  })
  .then(resp => resp.json())
  .then(json => console.log(json));
}
// function forkRepo() {
//   const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
//   const url = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
//   fetch(url, {
//   method: 'post',
//     headers: {
//       Accept: 'application/vnd.github.v3+json',
//       Authorization: `token ${getToken()}`
//     }
//   })
//   .then(res => res.json())
//   .then(json => console.log(json));
// }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
