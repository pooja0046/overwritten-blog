function enterSystem() {
    document.getElementById("start-screen").style.display = "none";
}


function openFile(file) {

    const viewer = document.getElementById("file-viewer");

    if (file === "entry1") {
        viewer.innerHTML = `
            <h2>> ENTRY 01</h2>
            <p>System boot completed. No irregularities detected.</p>
        `;
    }

    if (file === "report") {
        viewer.innerHTML = `
            <h2>> INCIDENT REPORT</h2>
            <p>System responding without input. Logs inconsistent.</p>
        `;
    }

    if (file === "final") {
        viewer.innerHTML = `
            <h2>> FINAL NOTE</h2>
            <p style="color:#9A2C2C;">This is not behaving correctly.</p>
        `;
    }
}