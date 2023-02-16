const cs = new CSInterface();

const btn = document.getElementById('button');
btn.addEventListener("click", startExport);

const exportLocation = document.getElementById('browse');
exportLocation.addEventListener("click", selectFolder);

const menu = document.getElementById('menu');
let preset = menu.value;
menu.addEventListener("change", (e) => {
    preset = e.target.value;
})


function startExport() {
    const presetPath = cs.getSystemPath(SystemPath.EXTENSION) + preset;
    if (!folder) {
        cs.evalScript(`automation(null, '${presetPath}')`);
    } else {
        cs.evalScript(`automation('${folder}', '${presetPath}')`);
    }
}

let folder;
function selectFolder() {
    cs.evalScript("Folder.selectDialog('Select a folder').fsName", (res) => {
        if (res === 'null' || res === "EvalScript error.") return;
        folder = res;
        const location = document.getElementById('location');
        location.innerText = folder;
    });
}