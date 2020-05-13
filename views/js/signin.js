// INPUT VALIDATION FOR MAIN FORM - ADDING
$(document).ready(function () {
    $("form[name='signvalidated']").validate({
        rules: {
            email: "required",
            password: "required",
            termscheckbox: "required",
        },
        messages: {
            email: "Please enter valid email",
            password: "Please enter a valid password",
            termscheckbox: "You must",            
        },
        submitHandler: function (form) {
            form.submit();
        }
    })
});