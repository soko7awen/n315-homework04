export function dismissAlert() {
    document.body.removeChild(document.getElementById("alertHolder"))
}

export function createToast(toastObj) {
    const toastDiv = document.createElement("div");
    toastDiv.className = "toast";
    toastDiv.innerText = alertObj.message;
    document.body.appendChild(toastDiv);

    requestAnimationFrame(() => toastDiv.classList.add("show"));

    setTimeout(() => {
        toastDiv.classsList.remove("show");
        toastDiv.classsList.add("hide");
        setTimeout(() => {
            document.body.removeChild(toastDiv);
        }, 500);
    }, 3000);
}

export function createAlert(alertObj) {
    const alertDiv = document.createElement("div");
    alertDiv.id = "alertHolder";
    alertDiv.onclick = dismissAlert;
    alertDiv.style.cursor = "pointer";

    const alertCallout = document.createElement("div");
    alertCallout.className = "alert-callout-out";
    alertDiv.appendChild(alertCallout);

    const title = document.createElement("h1");
    title.innerText = "Signing You In";
    alertCallout.appendChild(title);

    const message = document.createElement("p");
    message.innerText = "Signing the user in...";
    alertCallout.appendChild(message);

    document.body.appendChild(alertDiv);
}

/*
    <div class="alert-holder">
        <div class="alert-callout-out">
            <h1>Alert Title</h1>
            <p>lorem ipsum dolor sit amet</p>
            <span class="x-close-alert">X</span>
            <div class="button-bar">
                <div class="btn-confirm">Confirm</div>
                <div class="btn-cancel">Cancel</div>
            </div>
        </div>
    </div>
    */