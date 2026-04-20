//FILES
function openFile(file) {

    const viewer = document.getElementById("file-viewer");

//TASK1
if (file === "t1") {
    viewer.innerHTML = `
        <h2>> TASK 01: VISUAL RESEARCH</h2>

        <p>> PROJECT: "DO NOT TRACK" (2015)</p>
        <p>> CREATED BY: Brett Gaylor (National Film Board of Canada), 2015</p>
        <p>> PURPOSE: To expose online tracking systems and data surveillance.</p>

        <!-- DO NOT TRACK IMAGE -->
        <img src="assets/images/donottrack.png" 
             style="width:100%; border:3px solid #C464AF; margin:10px 0;">

        <p>> An interactive documentary exploring how users are tracked online 
        through data collection systems.</p>

        <p>> AUDIENCE:</p>
        <p>> General internet users. Designed to make invisible systems visible.</p>

        <p>> STRUCTURE:</p>
        <p>> Non-linear, interactive narrative. Users engage directly with content,
        making the experience more personal and impactful.</p>

        <p>> PURPOSE:</p>
        <p>> To expose how digital platforms collect and use personal data.
        The project is not neutral and clearly critiques surveillance systems.</p>

        <p>> STRENGTHS:</p>
        <p>> Strong use of interaction to involve the user. Information is revealed
        gradually, creating tension and awareness.</p>

        <p>> WEAKNESSES:</p>
        <p>> Some sections rely heavily on text, which may reduce engagement.</p>

        <p>> APPLICATION TO MY WORK:</p>
        <p>> I will use a similar system-based structure where users uncover
        information gradually, reinforcing themes of control and restricted access.</p>

        <br>

        <p>> ADDITIONAL VISUAL RESEARCH:</p>

        <!-- MOODBOARD IMAGE -->
        <img src="assets/images/moodboard.png" 
             style="width:100%; border:3px solid #C464AF; margin-top:10px;">

        <p>> Game interfaces and horror systems used as inspiration for tone,
        interaction, and visual style.</p>
    `;
}


//TASK 2
if (file === "t2") {
    viewer.innerHTML = `
        <h2>> TASK 02: STATEMENT OF INTENT</h2>

        <p>> THEME:</p>
        <p>> The impact of AI tools on creative labour within independent game development.</p>

        <p>> RESEARCH QUESTION:</p>
        <p class="corrupt">> How does the integration of AI tools reshape perceptions of creative labour and authorship in independent game development?</p>

        <p>> STARTING POINT:</p>
        <p>> Increasing use of AI within digital creative workflows, particularly in small-scale game development.</p>

        <p>> CASE STUDY:</p>
        <p>> Expedition 33 – Sandfall Interactive</p>

                <!-- E33 IMAGE -->
        <img src="assets/images/e33.png" 
             style="width:100%; border:3px solid #C464AF; margin-top:10px;">


        <p>> Developers initially used AI tools and online tutorials to produce assets.
        These assets were later replaced following public scrutiny. Despite this, the
        project faced industry backlash and lost eligibility for awards due to AI usage.</p>

        <p>> INVESTIGATION:</p>
        <p>> This research explores whether AI acts as a supportive tool for creators
        or contributes to the erosion of authorship and creative identity.</p>

        <p>> APPLICATION:</p>
        <p>> These findings inform the development of <span class="corrupt" style="font-weight: bold">Overwritten</span>,
        a visual essay that represents the loss of control and identity within digital systems.</p>
    `;
}



//TASK 3
if (file === "t3") {
    viewer.innerHTML = `
        <h2>> TASK 03: GEOEPISTEMOLOGY</h2>

        <img src="assets/images/task3.jpg" style="width:300px; height:400px; margin-left:130px; margin-bottom:15px; border:3px solid #C464AF;">

        <p>> SOURCE TEXT: "AFTER THE MAP" – WILLIAM RANKIN (Rankin, 2016, pp. 10-12) </p>

        <p>> KEY IDEA:</p>
        <p>> Geo-epistemology explores how knowledge about the world is created through mapping systems, rather than simply discovered.</p>

        <p>> MEANINGFUL POINT:</p>
        <p>> The idea that maps are not neutral stood out most. They shape understanding rather than just represent reality.</p>

        <p>> QUOTE:</p>
        <p class="corrupt">> "There is a difference between knowing what something is and how something is what it is."</p>

        <p>> INTERPRETATION:</p>
        <p>> This suggests that knowledge is constructed through processes, tools, and perspectives. Maps do not show truth, they show a version of truth.</p>

        <p>> APPLICATION:</p>
        <p>> This directly informs my project. Overwritten presents a controlled system where information is revealed selectively, reinforcing the idea that digital systems shape perception rather than reflect reality.</p>

        <hr>

        <p>> MAP RESPONSE: MMU CAMPUS</p>

        <p>> The map represents Manchester Metropolitan University from a student perspective, focusing on familiar routes, buildings, and social spaces rather than geographic accuracy.</p>

        <p>> The map is not neutral. It reflects my experience and priorities, highlighting areas I use most while ignoring others.</p>

        <p>> It can be considered “trustworthy knowledge” in terms of personal navigation, but not as an objective representation. It is shaped by memory, routine, and subjective importance.</p>

        <p class="corrupt">> CONCLUSION: ALL SYSTEMS OF MAPPING ARE SELECTIVE</p>
    `;
}


//TASK 4

    if (file === "t4") {
        viewer.innerHTML = `
            <h2>> TASK 04: ARE ROBOTS RACIST?</h2>
            <p>> Algorithms reflect human bias.</p>
            <p class="corrupt">> SYSTEM TRAINED ON BIASED DATA</p>
        `;
    }



//TASK 5
    if (file === "t5") {
        viewer.innerHTML = `
            <h2>> TASK 05: DATA PORTRAITS</h2>
            <p>> W.E.B. Du Bois used data as visual storytelling.</p>
            <p>> Data can challenge dominant narratives.</p>
        `;
    }



//TASK 6
    if (file === "t6") {
        viewer.innerHTML = `
            <h2>> TASK 06: PRODUCTION PLANNING</h2>
            <p>> Timeline created.</p>
            <p>> Workflow structured across audio, visuals, and interaction.</p>
        `;
    }





//TASK 6
    if (file === "t7") {
        viewer.innerHTML = `
            <h2>> TASK 07: AUDIO</h2>
            <p>> Designed ambient system sounds + glitch effects.</p>
        `;
    }




//TASK 7
    if (file === "t8") {
        viewer.innerHTML = `
            <h2>> TASK 08: VISUALS</h2>
            <p>> Pixel UI + CRT aesthetic inspired by surveillance tech.</p>
        `;
    }





//TASK 8
    if (file === "t9") {
        viewer.innerHTML = `
            <h2>> TASK 09: PROTOTYPES</h2>
            <p>> Interactive narrative structure tested.</p>
        `;
    }




//TASK 9
    if (file === "t10") {
        viewer.innerHTML = `
            <h2>> TASK 10: REVIEW</h2>
            <p>> Iterative improvements based on testing.</p>
        `;
    }



//TASK 10
    if (file === "t11") {
        viewer.innerHTML = `
            <h2>> FINAL DELIVERABLE</h2>
            <p>> A narrative-driven interactive system.</p>
            <p class="corrupt">> USER EXPERIENCE: CONTROLLED</p>
        `;
    }
}


















//LOADING SYSTEM
function enterSystem() {

    const loading = document.getElementById("loading-screen");
    const start = document.getElementById("start-screen");
    const system = document.getElementById("main-system");

    // show loading
    loading.classList.add("active");

    setTimeout(() => {

        loading.classList.remove("active");
        start.style.display = "none";
        system.style.display = "block";

    }, 2000);
}