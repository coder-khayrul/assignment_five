

const taskCompleteButton = document.querySelectorAll(".task-button");
let taskBoxes = document.querySelectorAll(".task-box");
const historyDeleteButton = document.getElementById("clear-history-button");
const taskMsgContainer = document.querySelector(".task-msg-container");
const blogPageButton = document.getElementById("blog-page-btn");
const todayDate = document.getElementById("today-date");
const todayDayName = document.getElementById("today-dayname");
let time = new Date();

todayDate.innerText = time.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
todayDayName.innerText = time.toLocaleDateString("en-US", { weekday: "short" })

for (box of taskBoxes) {
    box.addEventListener("click", function (event) {
        const taskNumber = document.getElementById("task-number");
        const userPoint = document.getElementById("user-point");
        const taskTitle = event.target.parentNode.parentNode.querySelector("h3").innerText;


        let taskCompleteTime = time.toLocaleTimeString();

        if (event.target.className.includes("task-button")) {

            alert("Board Updated Successfully");
            taskNumber.innerText = `0${parseInt(taskNumber.innerText) - 1}`
            userPoint.innerText = parseInt(userPoint.innerText) + 1;
            event.target.setAttribute("disabled", "true");
            if (taskNumber.innerText === "00") {
                alert("Congrates! You have completed current task")
            }

            let completedMsg = document.createElement("li");
            completedMsg.innerHTML = `You have Complete The Task ${taskTitle} at ${taskCompleteTime}`;
            taskMsgContainer.appendChild(completedMsg);

        }
    })

}

historyDeleteButton.addEventListener("click", function () {
    taskMsgContainer.innerHTML = ` `;
})

blogPageButton.addEventListener("click", function () {
    window.location.href = "blog.html"
})

const bgChangeButton = document.getElementById("bgcolor-handler");
const bodyArea = document.body;

bgChangeButton.addEventListener("click", function () {
    
    const red = Math.floor(Math.random() * (255 - 0) + 0);
    const green = Math.floor(Math.random() * (255 - 0) + 0);
    const blue = Math.floor(Math.random() * (255 - 0) + 0);

    bodyArea.style.backgroundColor = `rgba(${red},${green},${blue}, .2)`;
    console.log("clicked")

})