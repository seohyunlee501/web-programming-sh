function getFortune() {
  const name = document.getElementById("nameInput").value;
  const fortuneOutput = document.getElementById("fortuneOutput");

  const fortunes = [
    `${name}님의 오늘은 대박을 가질 가능성이 높습니다.`,
    `${name}님의 오늘은 운수가 비교적 좋은 편입니다.`,
    `${name}님의 오늘은 보통의 하루가 될 것으로 예상됩니다.`,
    `${name}님의 오늘은 유의미한 변화가 일어날 것입니다.`,
    `${name}님의 오늘은 행운이 따를 것입니다.`,
    `${name}님의 오늘은 성공적인 하루를 보낼 수 있을 것입니다.`,
    `${name}님의 오늘은 긍정적인 에너지가 넘칩니다.`,
  ];

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];

  fortuneOutput.textContent = fortune;
}
