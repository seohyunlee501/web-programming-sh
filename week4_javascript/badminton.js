let latecomers = [];
let nicecomers = [];

function checkTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours < 7) {
    return false; // 7시 이전
  } else if (hours == 7 && minutes == 0 && seconds == 0) {
    return true; // 7시 정각
  } else {
    return true; // 7시 이후
  }
}

function addLatecomer() {
  let input = document.getElementById("name-input");
  let name = input.value;
  if (name === "") {
    alert("이름을 입력해주세요.");
  } else {
    let now = new Date();
    let hour = now.getHours().toString().padStart(2, "0");
    let minute = now.getMinutes().toString().padStart(2, "0");
    let time = `${hour}:${minute}`;
    let comer = { name: name, time: time };
    if (!checkTime()) {
      nicecomers.push(comer);
      let safelist = document.getElementById("nicecomers-list");
      let safelistItem = document.createElement("li");
      safelistItem.textContent = `${name} (${time})`;
      safelist.appendChild(safelistItem);
    } else {
      latecomers.push(comer);
      let list = document.getElementById("latecomers-list");
      let listItem = document.createElement("li");
      listItem.textContent = `${name} (${time})`;
      list.appendChild(listItem);
    }
    input.value = "";
  }
}

console.log(latecomers);

let list = document.getElementById("latecomers-list");
for (let i = 0; i < latecomers.length; i++) {
  let listitem = document.createElement("li");
  listitem.textContent = latecomers[i];
  list.appendChild(listitem);
}
latecomers.push("John");
