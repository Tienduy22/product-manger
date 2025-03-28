//  Xử lý Button status

const buttonStatus = document.querySelectorAll("[button-status]");
if(buttonStatus.length > 0){
    let url = new URL(window.location.href);

    buttonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");

            if(status){
                url.searchParams.set("status", status);
            }
            else{
                url.searchParams.delete("status");
            }

            window.location.href = url.href;
        })
    })
}

// Xử lý tìm kiếm -------------------

const formSearch = document.querySelector("#form-search");
if(formSearch){
    let url = new URL(window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        
        if(keyword){
            url.searchParams.set("keyword", keyword);
        }
        else{
            url.searchParams.delete("keyword");
        }

        window.location.href = url.href;
    });
}

//--------------------------------------------------

// Checkbox Multi ----------------------------------

const checkboxMulti = document.querySelector("[checkbox-multi]");
if(checkboxMulti){
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
    console.log(inputCheckAll);
    const inputsId = checkboxMulti.querySelectorAll("input[name='id']");

    inputCheckAll.addEventListener("click", () => {
        if(inputCheckAll.checked){
            inputsId.forEach(input => {
                input.checked = true;
            })
        }
        else{
            inputsId.forEach(input => {
                input.checked = false;
            })
        }
    });

    inputsId.forEach((input) => {
        input.addEventListener("click", () => {
            const countChecked = checkboxMulti.querySelectorAll(
                "input[name='id']:checked"
            ).length;

            if(countChecked == inputsId.length){
                inputCheckAll.checked = true;
            } else{
                inputCheckAll.checked = false;
            }
        });
    });
}

// -------------------------------------------------
// Form Change Multi -------------------------------

const formChangeMulti = document.querySelector("[form-change-multi]");

if(formChangeMulti){
    formChangeMulti.addEventListener("submit", (e) => {
        e.preventDefault();

        const checkboxMulti = document.querySelector("[checkbox-multi]");

        const inputChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");

        const typeChange = e.target.elements.type.value;


        if(typeChange == "delete-all"){
            const isConfirm = confirm("Bạn có chắc muốn xoá những sản phẩm này không")
            
            if(!isConfirm){
                return;
            }
        }
        
        if(inputChecked.length>0){
            let ids = [];
            const inputIds = formChangeMulti.querySelector("input[name='ids']");

            inputChecked.forEach(input => {
                const id = input.value;

                if(typeChange == "change-position"){
                    const position = input.closest("tr").querySelector("input[name='position']").value;
                    ids.push(`${id}-${position}`);
                } else {
                    ids.push(id);
                }

            });

            inputIds.value = ids.join(",  ");

            formChangeMulti.submit();
        } else {
            alert("Vui lòng chọn ít nhất một mục");
        }
    });
}

// -------------------------------------------------

// Xử lý phân trang pagination ---------------------

const buttonpagination = document.querySelectorAll("[button-pagination]");
if(buttonpagination){
    let url = new URL(window.location.href);
    
    buttonpagination.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");

            url.searchParams.set("page", page);

            window.location.href = url.href;
        });
    });
}

// Show Alert - Xứ lý thông báo --------------------

const showAlert = document.querySelector("[show-alert]");
if(showAlert){
    const time = parseInt(showAlert.getAttribute("data-time"));
    const closeAlert = showAlert.querySelector("[close-alert]")
    setTimeout(() => {
        showAlert.classList.add("alert-hidden");
    },time);

    closeAlert.addEventListener("click", () => {
        showAlert.classList.add("alert-hidden");
    })
}

//--------------------------------------------------

// Upload Image ----------------
const uploadImage = document.querySelector("[upload-image]");

if(uploadImage) {
    const uploadImageInput = document.querySelector("[upload-image-input]")
    const uploadImagePreview = document.querySelector("[upload-image-preview]");

    uploadImageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if(file) {
            uploadImagePreview.src = URL.createObjectURL(file)
        }
    })
}