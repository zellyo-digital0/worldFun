//lightbox
var datanum = 0;
var $popimg = $('#popimg');
var imgclone = $(".light-img").clone();
$('document').ready(function () {
    $('.light-img').click(function () {
        datanum = $(this).data('num');
        var imgsrc = $(this).attr('src');
        $('#popup').fadeIn(800);
        $popimg.attr('src', imgsrc);
        $('#popup').css('display', 'block');

    })

})


$('#prev').click(function () {
    --datanum;
    if (datanum < 0) {
        datanum = imgclone.length - 1;
    }
    $popimg.slideDown(3000);
    $popimg.attr('src', imgclone[datanum].src);
})
$('#next').click(function () {
    ++datanum;
    if (datanum > 9) {
        datanum = imgclone.length - 10;
    }
    $popimg.attr('src', imgclone[datanum].src);
})


$('#close').click(function () {
    $('#popup').css('display', 'none');
})

//contribute form add pictures js
function addPicture() {
    const picturesContainer = document.getElementById('pictures');
    const numPictures = picturesContainer.children.length;

    if (numPictures < 5) {
        const newPictureDiv = document.createElement('div');
        newPictureDiv.innerHTML = `
        <div class="datapart">
        <label for="picture">Picture:</label>
        <input type="file" name="picture[]" accept="image/*" class="form-control" required>
        </div>
        `;
        picturesContainer.appendChild(newPictureDiv);

        // Disable button when maximum pictures reached
        if (numPictures + 1 === 5) {
            document.getElementById('addPictureButton').disabled = true;
        }
    } else {
        alert("Maximum of 5 pictures allowed.");
    }
}


//offcanvas close button
document.addEventListener("DOMContentLoaded", function () {
    const sideButton = document.querySelector(".side_button");
    const sideOffcanvas = document.getElementById("sideOffcanvas");
    const closeButton = document.getElementById("sideCloseOffcanvas");
    const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");

    // Toggle offcanvas when side button is clicked
    sideButton.addEventListener("click", () => {
        sideOffcanvas.classList.toggle("show");
        offcanvasBackdrop.classList.toggle("fade");
    });

    // Close offcanvas when close button is clicked
    closeButton.addEventListener("click", () => {
        sideOffcanvas.classList.remove("show");
        offcanvasBackdrop.classList.remove("fade");
    });

    // Close offcanvas when clicking outside of it
    document.addEventListener("click", (event) => {
        const targetElement = event.target;

        // Check if the clicked element is not inside the offcanvas
        if (!sideOffcanvas.contains(targetElement) && !sideButton.contains(targetElement)) {
            sideOffcanvas.classList.remove("show");
            offcanvasBackdrop.classList.remove("fade");
        }
    });
});
