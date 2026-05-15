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
        <p class="caption">Gaylor, B. (2015) <i>Do Not Track</i> [Interactive documentary]. National Film Board of Canada. Available at:
        https://donottrack-doc.com/ (Accessed: 17 March 2026).</p>

            

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

        <hr>

        <p>> ADDITIONAL VISUAL RESEARCH:</p>

        <!-- MOODBOARD IMAGE -->
        <img src="assets/images/moodboard.png" 
             style="width:100%; border:3px solid #C464AF; margin-top:10px;">

     <p class="caption">Kaur, P. (2026) <i>Overwritten Moodboard</i> [Digital moodboard]. Personal collection.</p>

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

        
        <hr>

        <p>> CASE STUDY:</p>
        <p>> Expedition 33 – Sandfall Interactive</p>

                <!-- E33 IMAGE -->
        <img src="assets/images/e33.png" 
             style="width:100%; border:3px solid #C464AF; margin-top:10px;">
        
             <p class="caption">Sandfall Interactive (2025) <i>Clair Obscur: Expedition 33</i> [Video game]. Montpellier: Sandfall Interactive.</p>


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
        <img src="assets/images/task3.jpg" style="width:300px; height:400px; margin-left:130px; margin-bottom:15px; border:3px solid #C464AF;"></img>
        <p class="caption">Kaur, P. (2026) <i>Notes for extract from After the Map</i> [Photograph]. Personal collection.</p>

        <p>> SOURCE TEXT: "AFTER THE MAP" – WILLIAM RANKIN </p>

        <p>> KEY IDEA:</p>
        <p>> Geo-epistemology explores how knowledge about the world is produced through systems like maps, rather than simply observed.</p>

        <p>> MEANINGFUL POINT:</p>
        <p>> The most important idea is that maps are not neutral tools. They actively shape how we understand space and reality.</p>

        <p>> QUOTE:</p>
        <p class="corrupt">> "There is a difference between knowing what something is and how something is what it is."</p>
        <p class="caption">Rankin, W. (2016), After the Map: Cartography, Navigation, and the Transformation
of Territory in the Twentieth Century. Chicago: University of Chicago Press, p. 2.</p>

        <p>> INTERPRETATION:</p>
        <p>> This highlights that knowledge is constructed. Maps do not present pure truth, but a version shaped by methods, tools, and perspective.</p>

        <p>> APPLICATION:</p>
        <p>> This idea informs my project Overwritten, where the system controls what the user sees. Like maps, the interface presents selective information that appears authoritative but is constructed.</p>

        <hr>

        <p>> MAP RESPONSE: ORDNANCE SURVEY MAP</p>

                <img src="assets/images/task3map.jpg" style="width:300px; height:400px; margin-left:130px; margin-bottom:15px; border:3px solid #C464AF;"></img>
        <p class="caption">Kaur, P. (2026) <i>Ordnance Survey map drawing photograph taken at Manchester Metropolitan University.</i> [Photograph]. Personal collection.</p>


        <p>> This map represents a geographic area using precise measurements, symbols, and standardized design systems.</p>

        <p>> It appears objective and authoritative because it is produced by an official organisation. However, it is not neutral. It reflects decisions about what information is important, what is included, and what is excluded.</p>

        <p>> The map can be considered “trustworthy knowledge” due to its accuracy and consistency, but it is still shaped by human choices, tools, and institutional priorities.</p>

        <p class="corrupt">> CONCLUSION: EVEN AUTHORITATIVE SYSTEMS CONSTRUCT REALITY</p>
    `;
}


//TASK 4

if (file === "t4") {
    viewer.innerHTML = `
        <h2>> TASK 04: ARE ROBOTS RACIST?</h2>

        <img src="assets/images/task4.jpg" style="width:300px; height:400px; margin-left:130px; margin-bottom:15px; border:3px solid #C464AF;"></img>
        <p class="caption">Kaur, P. (2026) <i>Notes for extract from Race After Technology: Abolitionist Tools for the New Jim Code</i> [Photograph]. Personal collection.</p>

        <p>> SOURCE TEXT: RUHA BENJAMIN </p>

        <p>> SUMMARY:</p>
        <p>> The text explains that AI systems are built using human-generated data, meaning they inherit human biases. Technology cannot distinguish between what is stereotypical and what is fair, leading to the reproduction of inequality.</p>
        <p class="caption">Benjamin, R. (2019) Race After Technology: Abolitionist Tools for the New Jim Code.
Cambridge, UK: Polity, pp. 63–64.</p>

        <p>> KEY IDEA:</p>
        <p>> Systems project an <span class="corrupt">illusion of objectivity</span>, making them appear neutral while hiding the biases embedded within them.</p>

        <p>> IS TECHNOLOGY NEUTRAL?</p>
        <p>> No. Humans rely on subjective data to make what appear to be objective decisions. As a result, technology reflects existing social structures rather than operating independently from them.</p>

        <p>> WHY OUTCOMES MATTER:</p>
        <p>> It is critical to assess technology based on outcomes rather than intention. Even if a system is designed to be fair, it can still produce harmful or biased results. This makes accountability difficult, as systems obscure responsibility.</p>

        <p>> AVOIDING BIAS:</p>
        <p>> Instead of presenting my project as neutral, I intentionally expose the system’s control. Overwritten reveals how information is filtered and manipulated, encouraging users to question the authority of digital systems.</p>

        <p class="corrupt">> OBJECTIVITY: COMPROMISED</p>

        <hr>

        <p>> USER PERSONA: STEEVE MORGAN</p>
                <img src="assets/images/persona.png" style="width:300px; height:300px; margin-left:130px; margin-bottom:15px; border:3px solid #C464AF;"></img>
        <p class="caption"> Kaur, P. (2026) <i>User Persona Development</i> [Digital persona design]. Personal collection.</p>

        <p>> A 22-year-old freelance creative and final-year student working across digital media and game design.</p>

        <p>> Steeve is engaged in discussions around AI and creativity, particularly within online communities such as indie game spaces and social media.</p>

        <p>> They have experimented with AI tools but feel conflicted about their impact, especially regarding authorship and job security.</p>

        <p>> Their interests in atmospheric, narrative-driven games align with Overwritten’s design approach.</p>

        <p>> This persona represents a state of uncertainty — someone who is neither fully supportive nor fully opposed to AI, but actively questioning its role.</p>

        <p class="corrupt">> USER STATE: UNCERTAIN / CRITICAL</p>
    `;
}



//TASK 5
if (file === "t5") {
    viewer.innerHTML = `
        <h2>> TASK 05: DATA PORTRAITS + MAP RESEARCH</h2>

        <div class="image-row">
            <img src="assets/images/map1.jpg" alt="Map Museum Photo 1" style="width:300px; height:400px; margin-right:10px; margin-bottom:15px; border:3px solid #C464AF;">
            <img src="assets/images/map2.jpg" alt="Map Museum Photo 2" style="width:300px; height:400px; margin-right:10px; margin-bottom:15px; border:3px solid #C464AF;">
        </div>

        <p class="caption">Kaur, P. (2026) <i>Photographs from the University of Manchester Map Collection</i> [Photographs]. Personal collection.</p>

        <h3>> KATE MCLEAN — SMELLS OF AULD REEKIE (2011)</h3>

                <img src="assets/images/smellmap.jpg" style="width:300px; height:400px; margin-left:130px; margin-bottom:15px; border:3px solid #C464AF;"></img>
                
        <p class="caption">Kaur, P. (2026) <i>Photograph of Smells of Auld Reekie from the University of Manchester Map Collection</i> [Photographs]. Personal collection.</p>

        <p>> Map Collection Ref: C17:70 Manchester (14)</p>
    

        <p>> This work visualises the sensory experience of smell within Edinburgh, 
        mapping something normally invisible. Rather than focusing on geography alone, 
        it represents human perception and memory.</p>

        <p>> The purpose of the map is to challenge traditional ideas of what maps should 
        represent. It shifts mapping from objective measurement to subjective experience.</p>

        <p>> This relates to my project as it shows how systems can represent invisible 
        forces — similar to how AI operates in unseen ways.</p>

        <h3>> W.E.B. DU BOIS — DATA VISUALISATION</h3>

        <img src="assets/images/duboismap.png" class="single-image" style="width:300px; height:400px; margin-left:130px; margin-bottom:15px; border:3px solid #C464AF;" alt="Du Bois Data Portrait">
         <p class="caption">Du Bois — Data Visualisation, W.E.B. (no date) “City & Rural Population 1890.” Goverment Collections. Available at: https://www.loc.gov/collections/african-american-photographs-1900-paris-exposition/?c=100&sp=6&st=list.</p>

        <p>> This visualisation represents the distribution of Black populations between 
        rural and urban areas in 1890.</p>

        <p>> The image appears hand-drawn, using bold colour and geometric structure to 
        guide the viewer’s eye. The spiral form visually emphasises scale and contrast.</p>

        <p>> The graphic is most effective in how it simplifies complex data into a clear, 
        striking visual. It communicates both information and emotion.</p>

        <p>> This influences my project through its use of minimal but powerful visuals, 
        showing how design can communicate political meaning through form.</p>
    `;
}



//TASK 6
if (file === "t6") {
    viewer.innerHTML = `
        <h2>> TASK 06: PRODUCTION PLANNING</h2>

        <div class="image-row">
            <img src="assets/images/week4planning.png" style="margin-bottom:15px; border:3px solid #C464AF;">
            <img src="assets/images/week8planning.png" style="margin-bottom:15px; margin-right:10px; border:3px solid #C464AF;">
        </div>

          <p class="caption">Kaur, P. (2026) <i>Screenshots of Trello board.</i> [Screenshots]. Personal collection.</p>

        <p>> PLANNING TOOL:</p>
        <p>> A Kanban-style workflow was used to organise production tasks
        across research, design, and development stages.</p>

        <p>> WORKFLOW:</p>
        <p>> Tasks were categorised into To Do, Doing, and Done, allowing
        for clear tracking of progress and prioritisation of key milestones.</p>

        <p>> DEVELOPMENT:</p>
        <p>> The Week 4 board shows early ideation and research-heavy tasks,
        while Week 8 reflects a shift towards production, refinement,
        and implementation.</p>

        <p>> KEY INSIGHT:</p>
        <p>> The structure revealed how the project evolved from conceptual
        research into a more defined interactive system, mirroring the
        transition from theory to practice.</p>

        <p>> APPLICATION:</p>
        <p>> This planning approach ensured consistent progress and allowed
        flexibility when refining ideas, supporting an iterative design process.</p>
    `;
}





//TASK 7
if (file === "t7") {
    viewer.innerHTML = `
        <h2>> TASK 07: AUDIO PRODUCTION</h2>

        <p>> APPROACH:</p>
        <p>> Audio is used to reinforce the atmosphere of control,
        tension, and system instability within the project.</p>


        <p>> DIALOGUE DESIGN:</p>
        <img src="assets/images/undertale.png" 
             style="width:100%; height:400px; border:3px solid #C464AF; margin-top:10px;">

              <p class="caption">Fox, T. (2015) <i>Undertale</i> [Video game]. 8-4.</p>

        <p>> Placeholder dialogue sounds were inspired by retro RPG
        systems, referencing audio styles from Undertale (2015).
        These sounds create a sense of artificial speech and
        emotional ambiguity without using full voice acting.</p>

        <p>> SOUND EFFECTS:</p>
        <p>> Additional audio elements include stock
        system loading sounds, and environmental audio such as
        footsteps. These contribute to a cohesive “digital system”
        aesthetic.</p>

        <p>> PURPOSE:</p>
        <p>> The combination of synthetic dialogue and distorted
        sound effects reflects the project’s themes of AI mediation
        and the fragmentation of human identity within digital
        environments.</p>

        <p>> DEVELOPMENT:</p>
        <p>> While some sounds are currently placeholders, they
        establish the intended tone and will be refined or replaced
        with original assets in the final production.</p>

        <p class="corrupt">> AUDIO STATUS: PARTIALLY SYNTHETIC</p>
    `;
}




//TASK 8
if (file === "t8") {
    viewer.innerHTML = `
        <h2>> TASK 08: VISUAL PRODUCTION</h2>

        <p>> VISUAL APPROACH:</p>
        <p>> The project adopts a retro, CRT-inspired interface combined with
        horror aesthetics to reflect themes of surveillance, control, and system
        instability.</p>

        <p class="corrupt">> VISUAL LANGUAGE: CONTROLLED / DECAYING</p>

        <hr>

        <h3>> STORYBOARD</h3>

        <img src="assets/images/storyboard.png" 
             style="width:100%; border:3px solid #C464AF; margin-top:10px;">

        <p class="caption">Kaur, P. (2026) <i>Overwritten Storyboard</i> [Digital storyboard]. Personal collection.</p>

        <p>> The storyboard maps out key narrative beats and user interaction.
        It establishes pacing, choice moments, and transitions between scenes,
        ensuring the experience feels structured despite its fragmented tone.</p>

        <hr>

        <h3>> STYLE GUIDE</h3>

        <img src="assets/images/styleguide.png" 
             style="width:100%; height:400px; border:3px solid #C464AF; margin-top:10px;">
            <p class="caption">Kaur, P. (2026) <i>Overwritten Style Guide</i> [Digital style guide]. Personal collection.</p>

        <p>> The style guide defines typography and colour palette.
        A limited palette and pixel-based fonts reinforce the retro system
        aesthetic while maintaining readability.</p>

        <hr>

        <h3>> EARLY ENVIRONMENT SKETCHES</h3>

        <div class="image-row">
            <img src="assets/images/sketch1.png" style="border:3px solid #C464AF; margin-top:10px;">
            <img src="assets/images/sketch2.png" style="border:3px solid #C464AF; margin-top:10px;">
        </div>
            <p class="caption"> Kaur, P. (2026) <i>Overwritten Environment Sketches</i> [Digital sketches]. Personal collection.</p>

        <p>> Initial sketches explore composition and atmosphere for key scenes.
        These drawings focus on layout and lighting rather than detail,
        helping to establish mood before digital production.</p>

        <hr>

        <h3>> ANTAGONIST DEVELOPMENT</h3>

        <div class="image-row">
            <img src="assets/images/antag1.png" style="border:3px solid #C464AF; margin-top:10px;">
            <img src="assets/images/antag2.png" style="border:3px solid #C464AF; margin-top:10px;">
        </div>

             <p class="caption"> Kaur, P. (2026) <i>Overwritten Antagonist Sketches</i> [Digital sketches]. Personal collection.</p>

        <p>> The 1st antagonist was conceptualised as a system entity rather than a
        physical character. I wanted to avoid a traditional villain and instead reinforcing
        the idea of an invisible controlling system. However, I was not happy with the design
        not matter how many tweaks I made and it didn't make sense for when the player is 
        confronted by it as it can be a bunch of monitors with legs.</p>

        <p>> The second design takes the form of a "human" but not by it wearing a uniform/ suit 
        but it is quite damaged and wires are exposed. The head is a monitor with simple eyes, so it is
        creepy but approachable. Having the antagonist take the form of a "human" was better suited for this
        project as the AI is seen as an "employee" rather than a full villian.</p>

        <p class="corrupt">> ENTITY STATUS: UNDEFINED / EVOLVING</p>
    `;
}



//TASK 9
if (file === "t9") {
    viewer.innerHTML = `
        <h2>> TASK 09: PROTOTYPES</h2>

        <p>> DEVELOPMENT APPROACH:</p>
        <p>> The project was developed as an interactive web-based experience
        using HTML, CSS, and JavaScript. This allowed for full control over
        structure, styling, and interactivity.</p>

        <hr>

        <h3>> ENVIRONMENT DEVELOPMENT</h3>

        <div class="image-row">
            <img src="assets/images/openingscene.png" style="border:3px solid #C464AF; margin-top:10px;">
            <img src="assets/images/scene3.png" style="border:3px solid #C464AF; margin-top:10px;">
        </div>
         <p class="caption"> Kaur, P. (2026) <i>Overwritten Developed Sketches using Pixilart</i> [Digital sketches]. Personal collection.</p>


        <p>> Visual environments were first sketched and then developed into
        pixel-based scenes using Pixilart. This process ensured consistency
        with the retro aesthetic while allowing flexibility in iteration.</p>

        <hr>

        <h3>> INTERACTION SYSTEMS</h3>

        <div class="image-row">
            <img src="assets/images/code1.png" style="border:3px solid #C464AF; margin-top:10px;">
            <img src="assets/images/code2.png" style="border:3px solid #C464AF; margin-top:10px;">
        </div>

                 <p class="caption"> Kaur, P. (2026) <i>Screenshots of Code in Visual Studio Code</i> [Screenshots]. Personal collection.</p>

        <p>> JavaScript was used to implement interaction systems including
        clickable hotspots, branching dialogue, and timed choices.</p>

        <p>> CSS was used to create visual effects such as scanlines,
        layering, and UI transitions, reinforcing the CRT interface style.</p>

        <p>> HTML structured the system layout, enabling a file-based
        navigation system that mirrors the concept of restricted access.</p>

        <hr>

        <p>> TESTING:</p>
        <p>> The prototype was iteratively tested to refine pacing,
        interaction clarity, and visual readability.</p>

        <p class="corrupt">> SYSTEM BUILD: FUNCTIONAL</p>
    `;
}



//TASK 10
if (file === "t10") {
    viewer.innerHTML = `
        <h2>> TASK 10: REVIEW + FEEDBACK</h2>

        <p>> FEEDBACK PROCESS:</p>
        <p>> Feedback was collected from peers during development to evaluate
        usability, clarity, and overall experience.</p>

        <hr>


        <h3>> PEER FEEDBACK 01</h3>

        <p>> COMMENT: Interaction for dialogue. </p>
        <p>> "I like the dialgoue sections but the sections feel longer than they should because
        you have to wait till the dialogue is done on its own before it moves on to the next. It ruins
        the experience a little as you can start to feel impatience."</p>

        <p>> RESPONSE: Added continue input for dialogue.</p>
        <p>> I had to agree with this comment, when having to wait for dialogue to finish was a bit
        frustrating when I was making the game as, like the user said, it made the experience longer
        than it needed to be. So, to fix this I added 2 inputs the user can do to move onto the next
        piece of dialogue; when the line of dialogue finishes, an arrow pops up promting the user to
        make an input, using space bar or right arrow key, to move on.</p>

        <hr>

        <h3>> PEER FEEDBACK 02</h3>

        <p>> COMMENT: Controls section needed.</p>
        <p>> "The interactions to continue the dialogue is great but I would have not 
        known how to do it if you wasn't here since I don't play video games."</p>

        <p>> RESPONSE: Added Control Pannel.</p>
        <p>> I appreciated that not everyone is familiar with video games, especially on PC, so adding
        somewhere where controls can be seen was essential and a good point. I added a controls button
        to the start screen so that users can see it before entering the experience and it is usually
        where most video games place it.</p>

        <hr>

        <h3>> PEER FEEDBACK 03</h3>

        <p>> COMMENT: Adding physical timer.</p>
        <p>>"The 3 endings are cool but I think it could be better if you added a timer that you can
        actually see because the overwritten ending is a good addition if the player does not choose
        either endings on the screen but, the user might be confused why they got a different ending 
        beause they don't know that the decision is timed."</p>

        <p>> RESPONSE: Added timer for final choices.</p>
        <p>> The final endings trigger dependent on the users choice, choosing one of the buttons but 
        I wanted a 3rd ending if the user does not choose in time so I put a timer in but instead of
        it just working in the background I added a small countdown to make the decision more suspensful. </p>

        <hr>

        <h3>> CRITICAL REFLECTION</h3>

        <p>> Feedback highlighted areas for improvement in pacing,
        clarity of interaction, and visual communication.</p>

        <p>> Iterative changes were made to refine user guidance and
        strengthen the narrative flow.</p>

        <p>> This process reinforced the importance of testing and
        external perspectives when designing interactive systems.</p>

        <p class="corrupt">> SYSTEM STATUS: ITERATED</p>
    `;
}


//TASK 11
if (file === "t11") {
    viewer.innerHTML = `
        <h2>> FINAL PRODUCT</h2>

        <p class="corrupt">> SYSTEM COMPLETE</p>

        <p>> OVERVIEW:</p>
        <p>> Overwritten is an interactive visual essay that explores the
        relationship between artificial intelligence and creative labour.
        Through a narrative-driven system interface, users uncover a hidden
        reality behind automated production.</p>

        <p>> The experience combines pixel-based environments, branching
        dialogue, and timed decision-making to immerse the user in a
        controlled digital space.</p>

        <hr>

        <p>> THEMES:</p>
        <p>> • AI and authorship</p>
        <p>> • Control vs agency</p>
        <p>> • The replacement of human creativity</p>

        <hr>

        <p>> FINAL EXPERIENCE:</p>

        <a href="https://pooja0046.github.io/overwritten-game/" target="_blank" class="launch-button">
            ▶ LAUNCH OVERWRITTEN
        </a>

        <p class="corrupt">> USER ROLE: UNDEFINED</p>
    `;
}




//TASK 12

if (file === "t12") {
    viewer.innerHTML = `
        <h2>> BIBLIOGRAPHY + REFERENCES</h2>

        <p class="corrupt">> SOURCES ARCHIVED</p>

        <hr>

        <h3>> BOOKS + THEORY</h3>

        <p>> Benjamin, R. (2019) <i>Race After Technology: Abolitionist Tools for the New Jim Code</i>. Cambridge: Polity Press.</p>

        <p>> Rankin, W. (2016) <i>After the Map: Cartography, Navigation, and the Transformation of Territory</i>. Chicago: University of Chicago Press.</p>

        <hr>

        <h3>> CASE STUDIES + MEDIA</h3>

        <p>> Gaylor, B. (2015) <i>Do Not Track</i> [Interactive documentary]. National Film Board of Canada. Available at:
        https://donottrack-doc.com/ (Accessed: 17 March 2026).</p>

        <p>> Sandfall Interactive (2025) <i>Clair Obscur: Expedition 33</i> [Video game]. Montpellier: Sandfall Interactive.</p>

        <p>> Fox, T. (2015) <i>Undertale</i> [Video game]. 8-4.</p>

        <hr>

        <h3>> AUDIO SOURCES</h3>

        <p>> YouTube (n.d.) <i>Undertale Sound Effects Playlist</i> [Audio]. Available at:
        https://youtube.com/playlist?list=PL8tAv4-ty9A48C_RROEbx0r3KtxMq4U8b
        (Accessed: 22 April 2026).</p>

        <p>> YouTube (n.d.) <i>Footsteps Sound Effect</i> [Audio]. Available at:
        https://youtu.be/mPgGg4MJKKc
        (Accessed: 22 April 2026).</p>

        <p>> YouTube (n.d.) <i>Loading Sound Effect</i> [Audio]. Available at:
        https://youtu.be/DP-_QNCx51s
        (Accessed: 22 April 2026).</p>

        <p>> YouTube (n.d.) <i>Signal Lost Sound Effect</i> [Audio]. Available at:
        https://youtu.be/gDIQBsG-4oU
        (Accessed: 22 April 2026).</p>

        <hr>

        <h3>> PRIMARY RESEARCH + SELF-CREATED MATERIAL</h3>

        <p>> Kaur, P. (2026) <i>Overwritten Moodboard</i> [Digital moodboard]. Personal collection.</p>

        <p>> Kaur, P. (2026) <i>Overwritten Style Guide</i> [Digital style guide]. Personal collection.</p>

        <p>> Kaur, P. (2026) <i>Overwritten Environment Sketches</i> [Digital sketches]. Personal collection.</p>

        <p>> Kaur, P. (2026) <i>Overwritten Storyboard</i> [Digital storyboard]. Personal collection.</p>

        <p>> Kaur, P. (2026) <i>User Persona Development</i> [Digital persona design]. Personal collection.</p>

        <p>> Kaur, P. (2026) <i>Photographs from the University of Manchester Map Collection</i> [Photographs]. Personal collection.</p>

        <p>> Kaur, P. (2026) <i>Ordnance Survey map photograph taken at the University of Manchester Map Collection</i> [Photograph]. Personal collection.</p>

        <hr>

        <h3>> VISUAL + HORROR INSPIRATION</h3>

        <p>> Kister, A. (2021) <i>The Mandela Catalogue</i> [YouTube horror series]. Available at:
        https://youtu.be/C8d12w6pMos
        (Accessed: 27 February 2026).</p>

        <p>> Cloak and Dagger Games (2022) <i>The Excavation of Hob’s Barrow</i> [Video game]. Cloak and Dagger Games.</p>

        <p>> Powerhoof (2023) <i>The Drifter</i> [Video game]. Powerhoof.</p>

        <p>> Snoring Dog Games (2023) <i>The Flayed Man</i> [Video game]. Snoring Dog Games.</p>

        <p>> Spacefarer Games (2025) <i>The Corruption Within</i> [Video game]. Spacefarer Games.</p>

        <hr>

        <h3>> SOFTWARE + TOOLS</h3>

        <p>> Figma (2025) <i>Figma Design Platform</i> [Software]. Available at:
        https://www.figma.com/
        (Accessed: 14 May 2026).</p>

        <p>> Pixilart (2025) <i>Pixilart Pixel Art Platform</i> [Software]. Available at:
        https://www.pixilart.com/
        (Accessed: 14 May 2026).</p>

        <p>> Microsoft (2025) <i>Visual Studio Code</i> [Software]. Available at:
        https://code.visualstudio.com/
        (Accessed: 14 May 2026).</p>

        <p>> OpenAI (2025) <i>ChatGPT</i> [AI software]. Available at:
        https://chat.openai.com/
        (Accessed: 14 May 2026).</p>

        <hr>

        <h3>> AI DECLARATION</h3>

        <p>> AI tools were used during ideation and concept development stages
        of this project, particularly for visual experimentation and discussion
        of themes relating to AI and creative labour.</p>

        <p>> All final implementation, coding, narrative structure, interaction
        systems, and project design decisions were completed independently.</p>

        <p class="corrupt">> ARCHIVE COMPLETE</p>
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