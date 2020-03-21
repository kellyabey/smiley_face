$(document).ready(() => {
    let $clearDrawing = $("#clear_drawing");
    let $showDrawing = $(".show_drawing");

    $clearDrawing.on({
        click: () => {
            $showDrawing.show();
        }
    });
    $showDrawing.dblclick(() => {
        $showDrawing.hide();
    });
});
