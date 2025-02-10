import { HttpClient } from "./helpers/httpClient.js";
const issueLists = document.querySelector('#issuesList')
const initApp = () => {
    listAllIssues();

}
const listAllIssues = async () => {
    const httpClient = new HttpClient();

    const result = await httpClient.get('issues')
    displayIssues(issues)
    console.log(result)
}
const displayIssues = (issues) => {

    for (let issue of issues) {
        const div = document.createElement('div')
        const caption = document.createElement('span')
        const issueDate = document.createElement('span')
        const issuer = document.createElement('span')

        caption.textContent = issue.caption
        issueDate.textContent = issue.issueDate
        issuer.textContent = issue.email


        div.appendChild(caption)
        div.appendChild(issueDate)
        div.appendChild(issuer)

        issueLists.appendChild(div)

    }
}
document.addEventListener('DOMContentLoaded', initApp)