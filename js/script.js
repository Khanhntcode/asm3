function handleSubmit() {
  // lấy giá trị cỉa input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  //lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  //điều kiện để là 1 email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // console.log("check value email", emailValue);

  //dùng match để kiểm tra với email vừa nhập
  const checkEmail = emailValue.match(regex);

  console.log("email", checkEmail);

  //Lấy phần chứa thông tin user
  const sectionContent = document.querySelector("#info .section-content");
  console.log("check section", sectionContent);

  //Laasy element ddeer kieemr soats submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng địa chỉ ";
  }
}
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
  //element.querySelector(".control-view").style.backgroundColor = "red";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");
  const sectionContent = parentElement.querySelector(".section-content");

  if (sectionContent.classList.contains("hidden")) {
    sectionContent.classList.remove("hidden");
    viewMore.innerHTML = "View less";
  } else {
    sectionContent.classList.add("hidden");
    viewMore.innerHTML = "View more";
  }
}
