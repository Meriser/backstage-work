// 切換左側選單
const toggleMenuBtn = document.querySelector("#toggle-btn");
const body = document.querySelector("body");
toggleMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("sidebar-toggled");
});

// 動態圖表 chart.js
(() => {
  const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
  };
  var randomScalingFactor = function () {
    return Math.round(Math.random() * 2000000);
  };

  const pieCtx = document.getElementById("pie-chart").getContext("2d");
  const barCtx = document.getElementById("bar-chart").getContext("2d");

  const config = {
    type: "pie",
    data: {
      datasets: [
        {
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
          ],
          backgroundColor: [
            chartColors.red,
            chartColors.orange,
            chartColors.yellow,
            chartColors.green,
            chartColors.blue,
          ],
          label: "Dataset 1",
        },
      ],
      labels: [
        "無限肉肉美食餐",
        "肥宅快樂水",
        "牛肉麵很飽套餐",
        "薯條加大吃不完",
        "雲林老先覺套餐",
      ],
    },
    options: {
      responsive: true,
    },
  };
  const barConfig = {
    type: "bar",
    data: {
      datasets: [
        {
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
          ],
          backgroundColor: [
            chartColors.red,
            chartColors.orange,
            chartColors.yellow,
            chartColors.green,
            chartColors.blue,
            chartColors.purple,
          ],
          label: "Dataset 1",
        },
      ],
      labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
    },
    options: {
      responsive: true,
    },
  };
  const pieChart = new Chart(pieCtx, config);
  const barChart = new Chart(barCtx, barConfig);
})();

// 互動視窗 Modal JS
const modalByDelete = document.querySelector("#deleteModal");
modalByDelete.addEventListener("show.bs.modal", (e) => {
  const button = e.relatedTarget;
  const orderId = button.getAttribute('data-bs-order-id');
  const modalText = modalByDelete.querySelector("#deleteText");
  modalText.textContent = orderId;
});
