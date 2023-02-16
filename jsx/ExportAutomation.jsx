function automation(selectedFolder, preset) {
    // premiere render sequence
    var project = app.project;
    var sequence = project.activeSequence;
    var projectFolder = project.path.slice(0, project.path.lastIndexOf('/'));
    var exportLocation = selectedFolder || projectFolder // user selected. defaults to project folder
    // var preset = "/Users/aviramv/Documents/Adobe/Adobe Media Encoder/23.0/Presets/EDX 101, FHD ,mp4, 50Mbps.epr"
    
    app.encoder.launchEncoder();
    
    app.encoder.encodeSequence(
        sequence, 
        exportLocation + '/' + sequence.name, 
        preset, 
        0, 
        true);
    
    app.encoder.startBatch();
}