// Change - status ------------------

const buttonChangestatus = document.querySelectorAll("[button-change-status]")
if(buttonChangestatus.length > 0){
    const formChangestatus = document.querySelector("#form-change-status");
    const path = formChangestatus.getAttribute("data-path");

    buttonChangestatus.forEach(button => {
        button.addEventListener("click", () => {
            const statusCurrent = button.getAttribute("data-status");

            const id = button.getAttribute("data-id");

            let statusChange = statusCurrent == "active" ? "inactive" : "active";

            const action = path + `/${statusChange}/${id}?_method=PATCH`;
            formChangestatus.action = action;
            formChangestatus.submit();
        })
    })
    
}

//-----------------------------------

// Xoá sản phẩm ------------------------------

const buttonDelete = document.querySelectorAll("[button-delete")
if(buttonDelete.length>0){
    const formDeleteItem = document.querySelector("#form-delete-item");
    const path = formDeleteItem.getAttribute("data-path");

    buttonDelete.forEach(button => {
        button.addEventListener("click", () => {
            const isComfirm = confirm("Bạn muốn xoá sản phẩm này");

            if(isComfirm){
                const id = button.getAttribute("data-id");
                
                const action = `${path}/${id}?_method=DELETE`;
                
                formDeleteItem.action = action;
                
                formDeleteItem.submit();
            }
        })
    })
}
//--------------------------------------------