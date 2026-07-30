(function ($) {
    "use strict"

    toastr.success("Beware of Fraudulent Activities. Report all Suspected Transactions.", "Risk Management Team!", {
         timeOut: 12000,
        closeButton: !0,
        debug: !1,
        newestOnTop: !0,
        progressBar: !0,
        positionClass: "toast-top-right demo_rtl_class",
        preventDuplicates: !0,
        onclick: null,
        showDuration: "1000",
        hideDuration: "5000",
        extendedTimeOut: "5000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
        tapToDismiss: !1,
        closeHtml: '<div class="circle_progress"></div><span class="progress_count"></span> <i class="la la-close"></i> '
    });

})(jQuery);