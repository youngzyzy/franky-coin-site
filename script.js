document.getElementById("main-contract").addEventListener("click", function () {
  const text = document.getElementById("main-contract").textContent;
  console.log(text);
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});

document.getElementById("main-contract").addEventListener("click", function () {
  this.innerHTML = "CA copied! <i class='fa-solid fa-check'></i>"; // Changes the text
});

// test js
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = question.querySelector("span");

  question.addEventListener("click", () => {
    // Toggle visibility of the answer
    const isOpen = answer.style.display === "block";
    answer.style.display = isOpen ? "none" : "block";

    // Change the "+" icon to "-" and vice versa
    icon.textContent = isOpen ? "+" : "-";
  });
});

// end js
