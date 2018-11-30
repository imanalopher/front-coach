import $ from "jquery";
import Dropzone from "dropzone";

$(function() {
  var myDropzone = new Dropzone(document.body, {
    url: '/target-url', // Set the url
    thumbnailWidth: 180,
    thumbnailHeight: 180,
    parallelUploads: 120,
    autoQueue: false, // Make sure the files aren't queued until manually added
  });
});
