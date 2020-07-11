(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  data: function data() {
    return {
      form: {
        name: '',
        description: '',
        priceCombinations: [],
        printCriterias: [],
        image: null
      },
      uploadedImage: null,
      is_requesting: false
    };
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  },
  methods: {
    addAttribute: function addAttribute() {
      this.form.priceCombinations.push({
        combination: '',
        price: ''
      });
    },
    removeAttribute: function removeAttribute(index) {
      this.form.priceCombinations.splice(index, 1);
    },
    addPrintingCriteria: function addPrintingCriteria() {
      this.form.printCriterias.push({
        criteria: '',
        price: ''
      });
    },
    removePrintingCriteria: function removePrintingCriteria(index) {
      this.form.printCriterias.splice(index, 1);
    },
    previewImage: function previewImage(event) {
      var _this = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this.uploadedImage = e.target.result;
          _this.form.image = input.files[0];
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    create: function create() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          _this2.is_requesting = true;
          var form_data = new FormData();

          for (var key in _this2.form) {
            if (key === 'priceCombinations' || key === 'printCriterias') {
              form_data.append(key, JSON.stringify(_this2.form[key]));
            } else {
              form_data.append(key, _this2.form[key]);
            }
          }

          _this2.$store.dispatch('category/create', form_data).then(function (response) {
            _this2.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            });

            _this2.$router.push({
              name: 'category'
            });

            _this2.is_requesting = false;
          }).catch(function (error) {
            console.log(error);

            _this2.$vs.notify({
              title: 'Error',
              text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });

            _this2.is_requesting = false;
          });
        } else {
          _this2.$vs.notify({
            title: 'Error',
            text: 'Fix form validation errors',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue-form-wizard .wizard-btn{\n  display:inline-block;\n  font-weight:400;\n  vertical-align:middle;\n  -ms-touch-action:manipulation;\n  touch-action:manipulation;\n  white-space:nowrap;\n  font-size:14px;\n  line-height:1.42857\n}[dir] .vue-form-wizard .wizard-btn{\n  margin-bottom:0;\n  text-align:center;\n  cursor:pointer;\n  background-image:none;\n  border:1px solid transparent;\n  padding:6px 12px;\n  border-radius:4px\n}\n\n.vue-form-wizard .wizard-btn.disabled,.vue-form-wizard .wizard-btn[disabled],fieldset[disabled] .vue-form-wizard .wizard-btn{\n  opacity:.65;\n  filter:alpha(opacity=65);\n  -webkit-box-shadow:none\n}\n\n[dir] .vue-form-wizard .wizard-btn.disabled, [dir] .vue-form-wizard .wizard-btn[disabled], [dir] fieldset[disabled] .vue-form-wizard .wizard-btn{\n  cursor:not-allowed;\n  -webkit-box-shadow:none;\n          box-shadow:none\n}\n\n.vue-form-wizard *{\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box\n}\n\n.vue-form-wizard a{\n  text-decoration:none\n}\n\n.vue-form-wizard .wizard-nav{\n  list-style:none\n}\n\n[dir] .vue-form-wizard .wizard-nav{\n  margin-bottom:0\n}\n\n[dir=ltr] .vue-form-wizard .wizard-nav{\n  padding-left:0\n}\n\n[dir=rtl] .vue-form-wizard .wizard-nav{\n  padding-right:0\n}\n\n.vue-form-wizard .wizard-nav>li{\n  position:relative;\n  display:block\n}\n\n.vue-form-wizard .wizard-nav>li>a{\n  position:relative;\n  display:block\n}\n\n[dir] .vue-form-wizard .wizard-nav>li>a{\n  padding:10px 15px\n}\n\n.vue-form-wizard .wizard-nav>li>a:focus,.vue-form-wizard .wizard-nav>li>a:hover{\n  text-decoration:none\n}\n\n[dir] .vue-form-wizard .wizard-nav>li>a:focus, [dir] .vue-form-wizard .wizard-nav>li>a:hover{\n  background-color:#eee\n}\n\n.vue-form-wizard .wizard-nav>li.disabled>a{\n  color:#777\n}\n\n.vue-form-wizard .wizard-nav>li.disabled>a:focus,.vue-form-wizard .wizard-nav>li.disabled>a:hover{\n  color:#777;\n  text-decoration:none\n}\n\n[dir] .vue-form-wizard .wizard-nav>li.disabled>a:focus, [dir] .vue-form-wizard .wizard-nav>li.disabled>a:hover{\n  background-color:transparent;\n  cursor:not-allowed\n}\n\n.vue-form-wizard .wizard-progress-bar{\n  width:0;\n  height:100%;\n  font-size:12px;\n  line-height:20px;\n  color:#fff;\n  -webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);\n  -webkit-transition:width .6s ease;\n  transition:width .6s ease\n}\n\n[dir] .vue-form-wizard .wizard-progress-bar{\n  text-align:center;\n  background-color:#337ab7;\n  -webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);\n          box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);\n  -webkit-transition:width .6s ease\n}\n\n[dir=ltr] .vue-form-wizard .wizard-progress-bar{\n  float:left\n}\n\n[dir=rtl] .vue-form-wizard .wizard-progress-bar{\n  float:right\n}\n\n.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn,.vue-form-wizard .wizard-btn{\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  font-size:14px;\n  font-weight:600;\n  min-width:140px\n}\n\n[dir] .vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn, [dir] .vue-form-wizard .wizard-btn{\n  border-width:2px;\n  background-color:transparent;\n  padding:6px 12px\n}\n\n.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:focus,.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:hover,.vue-form-wizard .wizard-btn:focus,.vue-form-wizard .wizard-btn:hover{\n  outline:0!important\n}\n\n.vue-form-wizard .wizard-nav-pills{\n  position:relative;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-wrap:wrap;\n  flex-wrap:wrap\n}\n\n[dir] .vue-form-wizard .wizard-nav-pills{\n  margin-top:0;\n  text-align:center\n}\n\n.vue-form-wizard .wizard-nav-pills a,.vue-form-wizard .wizard-nav-pills li{\n  -webkit-box-flex:1;\n  -ms-flex:1;\n  flex:1;\n  -webkit-box-align:center;\n  -ms-flex-align:center;\n  align-items:center;\n  -ms-flex-wrap:wrap;\n  flex-wrap:wrap;\n  -ms-flex-positive:1;\n  flex-grow:1\n}\n\n.vue-form-wizard .wizard-nav-pills>li>a,.vue-form-wizard .wizard-nav-pills a{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex\n}\n\n.vue-form-wizard .wizard-nav-pills>li>a{\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n  -ms-flex-direction:column;\n  flex-direction:column;\n  color:rgba(0,0,0,.2);\n  position:relative;\n  top:3px\n}\n\n[dir] .vue-form-wizard .wizard-nav-pills>li>a{\n  padding:0;\n  margin:0 auto\n}\n\n.vue-form-wizard .wizard-nav-pills>li>a:focus,.vue-form-wizard .wizard-nav-pills>li>a:hover{\n  color:rgba(0,0,0,.2);\n  outline:0!important\n}\n\n[dir] .vue-form-wizard .wizard-nav-pills>li>a:focus, [dir] .vue-form-wizard .wizard-nav-pills>li>a:hover{\n  background-color:transparent\n}\n\n.vue-form-wizard .wizard-nav-pills>li>a.disabled{\n  pointer-events:none\n}\n\n[dir] .vue-form-wizard .wizard-nav-pills>li>a.disabled{\n  cursor:default\n}\n\n.vue-form-wizard .wizard-nav-pills>li.active>a,.vue-form-wizard .wizard-nav-pills>li.active>a:focus,.vue-form-wizard .wizard-nav-pills>li.active>a:hover{\n  -webkit-transition:font-size .2s linear;\n  transition:font-size .2s linear\n}\n\n[dir] .vue-form-wizard .wizard-nav-pills>li.active>a, [dir] .vue-form-wizard .wizard-nav-pills>li.active>a:focus, [dir] .vue-form-wizard .wizard-nav-pills>li.active>a:hover{\n  background-color:transparent;\n  -webkit-transition:font-size .2s linear\n}\n\n.vue-form-wizard .wizard-nav-pills>li.active>a .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:focus .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:hover .wizard-icon{\n  color:#fff;\n  font-size:24px;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n  -ms-flex-align:center;\n  align-items:center;\n  -webkit-box-pack:center;\n  -ms-flex-pack:center;\n  justify-content:center;\n  -webkit-transition:all .2s linear;\n  transition:all .2s linear\n}\n\n[dir] .vue-form-wizard .wizard-nav-pills>li.active>a .wizard-icon, [dir] .vue-form-wizard .wizard-nav-pills>li.active>a:focus .wizard-icon, [dir] .vue-form-wizard .wizard-nav-pills>li.active>a:hover .wizard-icon{\n  -webkit-transition:all .2s linear\n}\n\n[dir] .vue-form-wizard{\n  padding-bottom:20px\n}\n\n[dir] .vue-form-wizard .is_error{\n  border-color:#c84513!important\n}\n\n[dir] .vue-form-wizard .is_error .icon-container{\n  background:#c84513!important\n}\n\n.vue-form-wizard.xs .wizard-icon-circle{\n  width:40px;\n  height:40px;\n  font-size:16px\n}\n\n.vue-form-wizard.xs .wizard-icon-circle.tab_shape{\n  height:25px\n}\n\n.vue-form-wizard.xs .wizard-nav-pills>li.active>a .wizard-icon{\n  font-size:16px\n}\n\n.vue-form-wizard.xs .wizard-navigation .wizard-progress-with-circle{\n  position:relative;\n  top:25px;\n  height:4px\n}\n\n.vue-form-wizard.sm .wizard-icon-circle{\n  width:50px;\n  height:50px;\n  font-size:20px\n}\n\n.vue-form-wizard.sm .wizard-icon-circle.tab_shape{\n  height:30px\n}\n\n.vue-form-wizard.sm .wizard-nav-pills>li.active>a .wizard-icon{\n  font-size:20px\n}\n\n.vue-form-wizard.sm .wizard-navigation .wizard-progress-with-circle{\n  position:relative;\n  top:30px;\n  height:4px\n}\n\n.vue-form-wizard.md .wizard-icon-circle{\n  width:70px;\n  height:70px;\n  font-size:24px\n}\n\n.vue-form-wizard.md .wizard-icon-circle.tab_shape{\n  height:40px\n}\n\n.vue-form-wizard.md .wizard-nav-pills>li.active>a .wizard-icon{\n  font-size:24px\n}\n\n.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{\n  position:relative;\n  top:40px;\n  height:4px\n}\n\n.vue-form-wizard.lg .wizard-icon-circle{\n  width:90px;\n  height:90px;\n  font-size:28px\n}\n\n.vue-form-wizard.lg .wizard-icon-circle.tab_shape{\n  height:50px\n}\n\n.vue-form-wizard.lg .wizard-nav-pills>li.active>a .wizard-icon{\n  font-size:28px\n}\n\n.vue-form-wizard.lg .wizard-navigation .wizard-progress-with-circle{\n  position:relative;\n  top:50px;\n  height:4px\n}\n\n.vue-form-wizard .wizard-icon-circle{\n  font-size:18px;\n  font-weight:600;\n  width:70px;\n  height:70px;\n  position:relative;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack:center;\n  -ms-flex-pack:center;\n  justify-content:center;\n  -ms-flex-line-pack:center;\n  align-content:center\n}\n\n[dir] .vue-form-wizard .wizard-icon-circle{\n  border:3px solid #f3f2ee;\n  border-radius:50%;\n  background-color:#fff\n}\n\n[dir] .vue-form-wizard .wizard-icon-circle.square_shape{\n  border-radius:0\n}\n\n.vue-form-wizard .wizard-icon-circle.tab_shape{\n  width:100%;\n  min-width:100px;\n  height:40px\n}\n\n[dir] .vue-form-wizard .wizard-icon-circle.tab_shape{\n  border:none;\n  background-color:#f3f2ee;\n  border-radius:0\n}\n\n.vue-form-wizard .wizard-icon-circle .wizard-icon-container{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack:center;\n  -ms-flex-pack:center;\n  justify-content:center;\n  -webkit-box-flex:1;\n  -ms-flex:1;\n  flex:1\n}\n\n[dir] .vue-form-wizard .wizard-icon-circle .wizard-icon-container{\n  border-radius:40%\n}\n\n[dir] .vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape, [dir] .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{\n  border-radius:0\n}\n\n.vue-form-wizard .wizard-icon-circle .wizard-icon{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n  -ms-flex-align:center;\n  align-items:center;\n  -webkit-box-pack:center;\n  -ms-flex-pack:center;\n  justify-content:center\n}\n\n.vue-form-wizard .wizard-tab-content{\n  min-height:100px\n}\n\n[dir] .vue-form-wizard .wizard-tab-content{\n  padding:30px 20px 10px\n}\n\n.vue-form-wizard .wizard-header{\n  position:relative\n}\n\n[dir] .vue-form-wizard .wizard-header{\n  padding:15px;\n  border-radius:3px 3px 0 0;\n  text-align:center\n}\n\n.vue-form-wizard .wizard-title{\n  color:#252422;\n  font-weight:300\n}\n\n[dir] .vue-form-wizard .wizard-title{\n  margin:0;\n  text-align:center\n}\n\n.vue-form-wizard .category{\n  font-size:14px;\n  font-weight:400;\n  color:#9a9a9a\n}\n\n[dir] .vue-form-wizard .category{\n  margin-bottom:0;\n  text-align:center\n}\n\n.vue-form-wizard .wizard-navigation .wizard-progress-with-circle{\n  position:relative;\n  top:40px;\n  height:4px\n}\n\n.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{\n  -webkit-box-shadow:none;\n  -webkit-transition:width .3s ease;\n  transition:width .3s ease\n}\n\n[dir] .vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  -webkit-transition:width .3s ease\n}\n\n.vue-form-wizard .clearfix:after{\n  content:\"\";\n  display:table\n}\n\n[dir] .vue-form-wizard .clearfix:after{\n  clear:both\n}\n\n[dir] .vue-form-wizard .wizard-card-footer{\n  padding:0 20px\n}\n\n[dir=ltr] .vue-form-wizard .wizard-card-footer .wizard-footer-left{\n  float:left\n}\n\n[dir=rtl] .vue-form-wizard .wizard-card-footer .wizard-footer-left{\n  float:right\n}\n\n[dir=ltr] .vue-form-wizard .wizard-card-footer .wizard-footer-right{\n  float:right\n}\n\n[dir=rtl] .vue-form-wizard .wizard-card-footer .wizard-footer-right{\n  float:left\n}\n\n@media screen and (max-width:350px){\n  .vue-form-wizard .wizard-card-footer{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n    -ms-flex-pack:center;\n    justify-content:center;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n    -ms-flex-direction:column;\n    flex-direction:column\n  }\n\n  .vue-form-wizard .wizard-card-footer .wizard-footer-left,.vue-form-wizard .wizard-card-footer .wizard-footer-right{\n    -webkit-box-flex:1;\n    -ms-flex:1;\n    flex:1;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n    -ms-flex-pack:center;\n    justify-content:center\n  }\n\n  [dir] .vue-form-wizard .wizard-card-footer .wizard-footer-left, [dir] .vue-form-wizard .wizard-card-footer .wizard-footer-right{\n    float:none\n  }\n\n  [dir] .vue-form-wizard .wizard-card-footer .wizard-footer-right button{\n    margin-top:10px\n  }\n}\n\n.vue-form-wizard.vertical .wizard-card-footer{\n  display:block\n}\n\n.vue-form-wizard.vertical .wizard-nav-pills{\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n  -ms-flex-direction:column;\n  flex-direction:column\n}\n\n.vue-form-wizard.vertical .wizard-navigation{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n  -ms-flex-direction:row;\n  flex-direction:row\n}\n\n[dir] .vue-form-wizard.vertical .wizard-card-footer{\n  padding-top:30px\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-form-wizard/dist/vue-form-wizard.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,n,i,r){var s,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i);var l;if(r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,b=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),b(t,e)}):u.beforeCreate=b?[].concat(b,l):[l]}return{esModule:s,exports:o,options:u}}},function(t,e,a){"use strict";var n=a(2),i=a(4),r=a(14);e.a={name:"form-wizard",components:{WizardButton:n.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach(function(t){t.checked=!1}),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach(function(t){t.checked=!0})},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var n=function n(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,n)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,n):(this.setValidationError(null),n())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(r.a)(e.tabId)}},focusPrevTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(r.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(r.c)(t))this.setLoading(!0),t.then(function(t){a.setLoading(!1);var n=!0===t;a.executeBeforeChange(n,e)}).catch(function(t){a.setLoading(!1),a.setValidationError(t)});else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var n=a.beforeChange();this.validateBeforeChange(n,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find(function(a,n){var i=a.route===t;return i&&(e=n),i});if(a&&!a.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},deactivateTabs:function(){this.tabs.forEach(function(t){t.active=!1})},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function n(t){a(10)}var i=a(3),r=a(11),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function n(t){a(12)}var i=a(5),r=a(13),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=a(16),r=a(2),s=a(4);a.d(e,"FormWizard",function(){return n.a}),a.d(e,"TabContent",function(){return i.a}),a.d(e,"WizardButton",function(){return r.a}),a.d(e,"WizardStep",function(){return s.a});var o={install:function(t){t.component("form-wizard",n.a),t.component("tab-content",i.a),t.component("wizard-button",r.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function n(t){a(9)}var i=a(1),r=a(15),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function n(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n();return t.findIndex(function(t){return t.tabId===e})}function r(t){document.getElementById(t).focus()}function s(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=r,e.c=s},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,function(e,n){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:n},nativeOn:{click:function(e){t.navigateToTab(n)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(n)}}})],{tab:e,index:n,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})})],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var n=a(6),i=a(17),r=a(0),s=r(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],r={render:n,staticRenderFns:i};e.a=r}])});

/***/ }),

/***/ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css ***!
  \*******************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./vue-form-wizard.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

<<<<<<< HEAD
/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.can("create-category")
      ? _c("div", { staticClass: "vx-col w-full mb-base" }, [
          _c(
            "div",
            { ref: "create", attrs: { title: "Create Category" } },
            [
              _c(
                "form-wizard",
                {
                  attrs: {
                    subtitle: null,
                    title: null,
                    color: "rgb(var(--vs-primary))",
                    finishButtonText: "Submit"
                  },
                  on: { "on-complete": _vm.create }
                },
                [
                  _c(
                    "tab-content",
                    { staticClass: "mb-5", attrs: { title: "Category data" } },
                    [
                      _c("vx-card", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-6/6 w-full mb-3" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "image-preview",
                                staticStyle: { display: "inline-flex" }
                              },
                              [
                                _c("img", {
                                  staticClass: "preview-large",
                                  attrs: {
                                    src: _vm.uploadedImage
                                      ? _vm.uploadedImage
                                      : "/images/no-image-found.png",
                                    alt: "photo"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-block mt-3" },
                              [
                                _c("input", {
                                  attrs: {
                                    accept: "image/*",
                                    id: "img-upload",
                                    type: "file"
                                  },
                                  on: { change: _vm.previewImage }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      icon: "icon-upload",
                                      "icon-pack": "feather",
                                      onclick:
                                        "document.getElementById('img-upload').click()",
                                      size: "small",
                                      type: "gradient"
                                    }
                                  },
                                  [_vm._v("Upload Photo\n\t\t\t\t\t\t\t\t\t")]
                                )
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col sm:w-2/2 w-full mb-3" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: { label: "Category Name", name: "name" },
                              model: {
                                value: _vm.form.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "name", $$v)
                                },
                                expression: "form.name"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has("name"),
                                    expression: "errors.has('name')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v(_vm._s(_vm.errors.first("name")))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                          [
                            _c("vs-textarea", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "mb-0",
                              attrs: {
                                label: "Description",
                                name: "description"
                              },
                              model: {
                                value: _vm.form.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "description", $$v)
                                },
                                expression: "form.description"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has("description"),
                                    expression: "errors.has('description')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v(_vm._s(_vm.errors.first("description")))]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    { staticClass: "mb-5", attrs: { title: "Combinations" } },
                    [
                      _c("vx-card", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mb-4",
                                attrs: {
                                  color: "primary",
                                  icon: "icon-plus",
                                  "icon-pack": "feather",
                                  size: "small",
                                  type: "filled"
                                },
                                on: { click: _vm.addAttribute }
                              },
                              [_vm._v("Add Combination\n\t\t\t\t\t\t\t\t")]
                            ),
                            _vm._v(" "),
                            _c(
                              "transition-group",
                              { attrs: { mode: "out-in", name: "slide-down" } },
                              [
                                _c(
                                  "div",
                                  { key: 1 },
                                  _vm._l(_vm.form.priceCombinations, function(
                                    attr,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      { staticClass: "vx-row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-8/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "combination-" + index,
                                                label: "Combination"
                                              },
                                              model: {
                                                value: attr.combination,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    attr,
                                                    "combination",
                                                    $$v
                                                  )
                                                },
                                                expression: "attr.combination"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: _vm.errors.has(
                                                      "combination-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('combination-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "combination-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required|min_value:0",
                                                  expression:
                                                    "'required|min_value:0'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "price-" + index,
                                                label: "Price",
                                                type: "number"
                                              },
                                              model: {
                                                value: attr.price,
                                                callback: function($$v) {
                                                  _vm.$set(attr, "price", $$v)
                                                },
                                                expression: "attr.price"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: _vm.errors.has(
                                                      "price-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('price-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "price-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "attribute-actions mt-5"
                                              },
                                              [
                                                index || (!index && index > 1)
                                                  ? _c("vs-button", {
                                                      staticClass: "ml-2",
                                                      attrs: {
                                                        color: "danger",
                                                        icon: "icon-minus",
                                                        "icon-pack": "feather",
                                                        radius: "",
                                                        type: "border"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeAttribute(
                                                            index
                                                          )
                                                        }
                                                      }
                                                    })
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: { title: "Printing Criteria" }
                    },
                    [
                      _c("vx-card", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mb-4",
                                attrs: {
                                  color: "primary",
                                  icon: "icon-plus",
                                  "icon-pack": "feather",
                                  size: "small",
                                  type: "filled"
                                },
                                on: { click: _vm.addPrintingCriteria }
                              },
                              [
                                _vm._v(
                                  "Add Printing Criteria\n\t\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "transition-group",
                              { attrs: { mode: "out-in", name: "slide-down" } },
                              [
                                _c(
                                  "div",
                                  { key: 2 },
                                  _vm._l(_vm.form.printCriterias, function(
                                    criteria,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      { staticClass: "vx-row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-8/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "criteria-" + index,
                                                label: "Criteria"
                                              },
                                              model: {
                                                value: criteria.criteria,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    criteria,
                                                    "criteria",
                                                    $$v
                                                  )
                                                },
                                                expression: "criteria.criteria"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: _vm.errors.has(
                                                      "criteria-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('criteria-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "criteria-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required|min_value:0",
                                                  expression:
                                                    "'required|min_value:0'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "criteria-price-" + index,
                                                label: "Price",
                                                type: "number",
                                                W: ""
                                              },
                                              model: {
                                                value: criteria.price,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    criteria,
                                                    "price",
                                                    $$v
                                                  )
                                                },
                                                expression: "criteria.price"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: _vm.errors.has(
                                                      "criteria-price-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('criteria-price-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "criteria-price-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "attribute-actions mt-5"
                                              },
                                              [
                                                index || (!index && index > 1)
                                                  ? _c("vs-button", {
                                                      staticClass: "ml-2",
                                                      attrs: {
                                                        color: "danger",
                                                        icon: "icon-minus",
                                                        "icon-pack": "feather",
                                                        radius: "",
                                                        type: "border"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.removePrintingCriteria(
                                                            index
                                                          )
                                                        }
                                                      }
                                                    })
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/category/create.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/category/create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=afbe82da& */ "./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/category/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/category/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/category/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=afbe82da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



=======
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/***/ })

}]);