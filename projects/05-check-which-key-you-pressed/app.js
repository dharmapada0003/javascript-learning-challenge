const keyDetails = document.querySelector("#keyDetails");

window.addEventListener(
  "keydown",
  function (evt) {
    console.log(evt.key);

    keyDetails.innerHTML = `
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${evt.key === " " ? "Space" : evt.key}</td>
    <td>${evt.keyCode}</td>
    <td>${evt.code}</td>
  </tr>
</table>
    `;
  },
  false,
);
