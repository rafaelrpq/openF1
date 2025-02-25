const body = document.querySelector("body");

function clear(main) {
    main.innerHTML = "";
}   
  
const Dialog = {
    dialog: document.createElement("dialog"),
    header: document.createElement("header"),
    main: document.createElement("main"),
    closeBtn: document.createElement("i"),
    loading: document.createElement("div"),

    create_dialog: (title) => {
        Dialog.header.innerText = title;
        Dialog.header.appendChild(Dialog.closeBtn);
        Dialog.dialog.appendChild(Dialog.header);

        Dialog.dialog.appendChild(Dialog.main);

        // Dialog.loading.className = "loading";
        // Dialog.main.appendChild(Dialog.loading);

        Dialog.closeBtn.classList.add("ph-bold", "ph-x");
        Dialog.closeBtn.onclick = () => {
            clear(Dialog.main);
            Dialog.dialog.close();
        };

        return Dialog;
    },
};

const radios = document.querySelectorAll("a[title='radio']");

console.log (radios)

radios.forEach (item => {
    item.addEventListener("click", () => {
        let radio = Dialog.create_dialog("Radio");
        body.appendChild(radio.dialog);
        radio.main.innerHTML = "Radio from car "+item.getAttribute("data-value");
        radio.dialog.showModal();
    });
});


