export function changePage (pageName) {
    console.log(`Changing to page: ${pageName}`);
    if (pageName === "") {
        $.get("pages/home.html", (data) => {
            $("#app").html(data);
        }).fail((error) => {
            Swal.fire({
                title: "Home Page Missing",
                text: "You are missing a home.html file",
                icon: "error",
            });
        });
    } else {
        $.get("pages/" + pageName + ".html", (data) => {
            $("#app").html(data);
        }).fail((error) => {
            Swal.fire({
                title: `${pageName} Page Missing`,
                text: `${pageName} page file is missing.`,
                icon: "error",
            });
        });
    }
}