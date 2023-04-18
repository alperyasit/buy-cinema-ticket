const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.querySelector(".amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)")

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateToggle();
  }
});

select.addEventListener("change", function (e) {
  calculateToggle();
});

function calculateToggle() {
  const selectedSeats = container.querySelectorAll(".seat.selected");
    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    })

    seats.forEach(function(seat){
        seatsArr.push(seat)
    });

    let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat)
    });


  let selectedSeatCount = container.querySelectorAll(".seat.selected").length;

  count.innerText = selectedSeatCount;

  amount.innerText = selectedSeatCount * select.value;

  saveToLocalStorage(selectedSeatIndexs);
}

function saveToLocalStorage(index){
    localStorage.setItem("selectedSeats", JSON.stringify(index));
    localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}