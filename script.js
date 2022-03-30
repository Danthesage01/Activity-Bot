document.querySelector("#get-activity").addEventListener("click", getActivity)


function getActivity() {

  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {

      document.querySelector("#activity").innerHTML = `
                                          <ul>
                                          <li>Activity: ${data.activity}</li>
                                          <li>Type: ${data.type}</li>
                                          <li>Participant: ${data.participants}</li>
                                        </ul>
                                                  `

      document.querySelector("#work").textContent = "😋Now you have what to do😋"
      document.querySelector("#title").textContent = "🦾BusyBot🦿"
      document.body.classList.add("fun")
    })
}