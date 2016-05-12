$(document).ready(function() {
  var framitDropzone = new Dropzone(document.getElementById("framit-upload-btn"), {
    url: "/file/post",
    thumbnailWidth: 180,
    thumbnailHeight: 180,
    parallelUploads: 20,
    autoQueue: false, // Make sure the files aren't queued until manually added
    clickable: ".upload"
  });
})