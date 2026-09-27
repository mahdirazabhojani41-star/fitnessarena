let xp = 100;
let workouts = 5;

function startJourney() {

    alert("Your fitness journey has started!");

}

function showWorkout(day) {

    let title = document.getElementById("trainingTitle");

    let text = document.getElementById("trainingText");


    if (day == "Monday") {

        title.innerText = "Monday - Push Day";

        text.innerText =
            "Bench Press - 3 sets, Shoulder Press - 3 sets, " +
            "Incline Dumbbell Press - 3 sets, Lateral Raises - 3 sets, " +
            "Tricep Pushdown - 3 sets.";

    }


    if (day == "Tuesday") {

        title.innerText = "Tuesday - Pull Day";

        text.innerText =
            "Lat Pulldown - 3 sets, Seated Row - 3 sets, " +
            "Dumbbell Row - 3 sets, Face Pulls - 3 sets, " +
            "Bicep Curls - 3 sets.";

    }


    if (day == "Wednesday") {

        title.innerText = "Wednesday - Leg Day";

        text.innerText =
            "Squats - 3 sets, Leg Press - 3 sets, " +
            "Lunges - 3 sets, Leg Curls - 3 sets, " +
            "Calf Raises - 3 sets.";

    }


    if (day == "Thursday") {

        title.innerText = "Thursday - Rest Day";

        text.innerText =
            "Rest and recovery day. " +
            "You can do light walking or stretching.";

    }


    if (day == "Friday") {

        title.innerText = "Friday - Push Day";

        text.innerText =
            "Incline Bench Press - 3 sets, Dumbbell Shoulder Press - 3 sets, " +
            "Chest Fly - 3 sets, Front Raises - 3 sets, " +
            "Tricep Dips - 3 sets.";

    }


    if (day == "Saturday") {

        title.innerText = "Saturday - Pull Day";

        text.innerText =
            "Pull Ups - 3 sets, Barbell Row - 3 sets, " +
            "Cable Row - 3 sets, Reverse Fly - 3 sets, " +
            "Hammer Curls - 3 sets.";

    }


    if (day == "Sunday") {

        title.innerText = "Sunday - Leg Day";

        text.innerText =
            "Front Squats - 3 sets, Romanian Deadlift - 3 sets, " +
            "Bulgarian Split Squats - 3 sets, Leg Extension - 3 sets, " +
            "Calf Raises - 3 sets.";

    }

}


function chooseGoal(goal) {

    document.getElementById("goalResult").innerText =
        "Your goal: " + goal;

}


function completeChallenge() {

    xp = xp + 50;

    workouts = workouts + 1;


    document.getElementById("xp").innerText = xp;

    document.getElementById("progressXP").innerText = xp;

    document.getElementById("workouts").innerText = workouts;


    let progress = 30 + (workouts - 5) * 5;

    if (progress > 100) {

        progress = 100;

    }


    document.getElementById("progressBar").style.width =
        progress + "%";


    alert("Challenge completed! You earned 50 XP.");

}