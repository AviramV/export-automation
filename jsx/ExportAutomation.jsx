function automation(selectedFolder, preset) {
    // premiere render sequence
    var project = app.project;
    var sequence = project.activeSequence;
    var projectFolder = project.path.slice(0, project.path.lastIndexOf('/'));
    var exportLocation = selectedFolder || projectFolder // user selected. defaults to project folder
    
    app.encoder.launchEncoder();
    
    app.encoder.encodeSequence(
        sequence, 
        exportLocation + '/' + sequence.name, 
        preset, 
        0, 
        true);
    
    app.encoder.startBatch();
}