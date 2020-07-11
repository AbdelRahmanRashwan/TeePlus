(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design-print-price/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        print_criteria_id: 0,
        price: 0
      },
      printCriterias: [],
      designPrintPrice: []
    };
  },
  props: {
    payload: {
      required: false,
      default: ''
    },
    designId: {
      required: true
    }
  },
  mounted: function mounted() {
    this.getDesignPricePrice();
  },
  methods: {
    addnew: function addnew() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$emit('addnew', _objectSpread({}, _this.form, {
            design_id: _this.designId
          }));
        }
      });
    },
    getDesignPricePrice: function getDesignPricePrice() {
      var _this2 = this;

      this.$store.dispatch('designPrintPrice/getData', "?design=".concat(this.designId)).then(function (response) {
        _this2.designPrintPrice = response.data.data;

        _this2.getPrintCriterias();
      }).catch(function (error) {
        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getPrintCriterias: function getPrintCriterias() {
      var _this3 = this;

      this.$store.dispatch('criteria/getData', this.payload).then(function (response) {
        _this3.printCriterias = response.data.data;

        for (var i = 0; i < _this3.printCriterias.length; i++) {
          for (var j = 0; j < _this3.designPrintPrice.length; j++) {
            if (_this3.printCriterias[i].id === _this3.designPrintPrice[j].print_criteria_id) {
              _this3.printCriterias[i].selected = true;
              break;
            }
          }

          if (!_this3.printCriterias[i].selected) {
            _this3.printCriterias[i].selected = false;
          }
        }
      }).catch(function (error) {
        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design-print-price/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
<<<<<<< HEAD
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
  name: "edit",
  data: function data() {
    return {
      printCriterias: [],
      designPrintPrice: [],
      is_requesting: false
    };
  },
  props: {
    payload: {
      required: false,
      default: ''
    },
    designId: {
      required: true
    }
  },
  mounted: function mounted() {
    this.getDesignPricePrice();
  },
  methods: {
    confirmDeleteDesign: function confirmDeleteDesign(item) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteDesignPrice,
        parameters: item
      });
    },
    deleteDesignPrice: function deleteDesignPrice(item) {
      var _this = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(item.id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('designPrintPrice/delete', item.id).then(function (response) {
        _this.is_requesting = false;

        _this.$vs.loading.close("#btn-delete-".concat(item.id, " > .con-vs-loading"));

        _this.designPrintPrice = _this.designPrintPrice.filter(function (type) {
          return type.id !== item.id;
        });

        _this.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this.is_requesting = false;

        _this.$vs.loading.close("#btn-delete-".concat(item.id, " > .con-vs-loading"));

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    editDesignPrice: function editDesignPrice(item) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-edit-".concat(item.id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('designPrintPrice/update', {
        id: item.id,
        data: {
          price: parseInt(item.price)
        }
      }).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-edit-".concat(item.id, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-edit-".concat(item.id, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    addDesignPrintPrice: function addDesignPrintPrice(item) {
      if (item.selected) {//remove from list and remove api (print_price_id)
      }

      return {
        price: 0,
        print_criteria: item //create api (print_price_id)

      };
    },
    validateCheck: function validateCheck(item) {
      item.selected = true;
    },
    getDesignPricePrice: function getDesignPricePrice() {
      var _this3 = this;

      this.$store.dispatch('designPrintPrice/getData', "?design=".concat(this.designId)).then(function (response) {
        _this3.designPrintPrice = response.data.data;

        _this3.getPrintCriterias();
      }).catch(function (error) {
        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getPrintCriterias: function getPrintCriterias() {
      var _this4 = this;

      this.$store.dispatch('criteria/getData', this.payload).then(function (response) {
        _this4.printCriterias = response.data.data;

        for (var i = 0; i < _this4.printCriterias.length; i++) {
          for (var j = 0; j < _this4.designPrintPrice.length; j++) {
            if (_this4.printCriterias[i].id === _this4.designPrintPrice[j].print_criteria_id) {
              _this4.printCriterias[i].selected = true;
              break;
            }
          }

          if (!_this4.printCriterias[i].selected) {
            _this4.printCriterias[i].selected = false;
          }
        }
      }).catch(function (error) {
        _this4.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
    /*update(){
        this.$validator.validateAll().then(result => {
            if (result) {
                // if form have no errors
                this.is_requesting = true;
                 this.$store.dispatch('designPrintPrice/update', {
                    id: this.designId,
                 data:this.designPrintPrice
                })
                    .then(response => {
                        console.log(response)
                        console.log(this.designPrintPrice)
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
                
            }
        })
    }*/

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_print_price_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../design-print-price/edit */ "./resources/js/src/views/design-print-price/edit.vue");
/* harmony import */ var _design_print_price_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../design-print-price/create */ "./resources/js/src/views/design-print-price/create.vue");
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
=======
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
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
<<<<<<< HEAD


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "edit",
  components: {
    DesignPrintPrice: _design_print_price_edit__WEBPACK_IMPORTED_MODULE_0__["default"],
    CreateDesignPrintPrice: _design_print_price_create__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getDesign();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
=======
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
// import {FormWizard, TabContent} from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  mounted: function mounted() {
    this.getFoods();
    this.getCities();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.title !== "" && this.form.date !== '' && this.form.price !== '' && this.form.days !== '' && this.form.nights !== '' && this.form.season !== '' && this.form.description !== '' && this.form.food_id !== '' && this.form.total_tickets !== '' && this.form.start_city !== '' && this.form.end_city !== '' && this.form.currency !== '';
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
    }
  },
  data: function data() {
    return {
<<<<<<< HEAD
      form: {
        name: '',
        designPrintPrice: []
      },
      uploadedImages: [],
      is_requesting: false
    };
  },
  methods: {
    addnew: function addnew(item) {
      var _this = this;

      console.log(item);
      this.is_requesting = true;
      this.$store.dispatch('designPrintPrice/create', item).then(function (response) {
        _this.is_requesting = false;

        _this.$vs.notify({
=======
      roles: [],
      food: [],
      cities: [],
      form: {
        home_page: false,
        title: '',
        date: '',
        price: 0,
        currency: '',
        days: 0,
        nights: 0,
        season: '',
        description: '',
        images: [],
        schedule: [],
        inclusions: [],
        exclusions: [],
        accommodations: [],
        food_id: 0,
        total_tickets: 0,
        start_city_id: 0,
        end_city_id: 0
      },
      uploadedImage: null,
      is_requesting: false
    };
  },
  components: {
    FormWizard: FormWizard,
    TabContent: TabContent
  },
  methods: {
    getFoods: function getFoods() {
      var _this = this;

      this.$store.dispatch('food/getData', '').then(function (response) {
        _this.food = response.data.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    getCities: function getCities() {
      var _this2 = this;

      this.$store.dispatch('city/getData', '?country=egypt').then(function (response) {
        _this2.cities = response.data.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    addSchedule: function addSchedule() {
      this.form.schedule.push({
        day_number: this.form.schedule.length,
        description: ''
      });
    },
    removeSchedule: function removeSchedule(index) {
      if (this.form.schedule.length > 0) {
        this.form.schedule.splice(index, 1);
      }
    },
    addInclusion: function addInclusion() {
      this.form.inclusions.push({
        name: ''
      });
    },
    removeInclusion: function removeInclusion(index) {
      if (this.form.inclusions.length > 0) {
        this.form.inclusions.splice(index, 1);
      }
    },
    addExclusion: function addExclusion() {
      this.form.exclusions.push({
        name: ''
      });
    },
    removeExclusion: function removeExclusion(index) {
      if (this.form.exclusions.length > 0) {
        this.form.exclusions.splice(index, 1);
      }
    },
    addAccommodation: function addAccommodation() {
      this.form.accommodations.push({
        city: '',
        hotel: '',
        rate: 1,
        nights: 1,
        dbl: 0,
        sgl: 0,
        child: 0
      });
    },
    removeAccommodation: function removeAccommodation(index) {
      if (this.form.accommodations.length > 0) {
        this.form.accommodations.splice(index, 1);
      }
    },
    uploadImages: function uploadImages(e) {
      var selectedImages = e.target.files;

      if (!selectedImages.length) {
        return false;
      }

      this.form.images = [];

      for (var i = 0; i < selectedImages.length; i++) {
        this.form.images.push(selectedImages[i]);
      }
    },
    create: function create() {
      var _this3 = this;

      this.is_requesting = true;
      var form_data = new FormData();

      for (var key in this.form) {
        if (key === 'images' && this.form.hasOwnProperty(key)) {
          for (var i = 0; i < this.form[key].length; i++) {
            form_data.append(key + '[]', this.form[key][i]);
          }
        } else {
          form_data.append(key, this.form[key]);
        }
      }

      this.$store.dispatch('package/create', form_data).then(function (response) {
        _this3.$router.push("/dashboard/package");

        _this3.$vs.notify({
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
<<<<<<< HEAD
        _this.is_requesting = false;

        _this.$vs.notify({
=======

        _this3.$vs.notify({
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
<<<<<<< HEAD
    getDesign: function getDesign() {
      var _this2 = this;

      this.$store.dispatch('design/view', this.$route.params.id).then(function (response) {
        _this2.form = response.data.data;
      }).catch(function (error) {
        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    update: function update() {
      var _this3 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          _this3.is_requesting = true; // create new object for sending object without extra data

          var form_data = new FormData();

          for (var key in _this3.form) {
            if (key === 'images' && _this3.form.hasOwnProperty(key)) {
              for (var i = 0; i < _this3.form[key].length; i++) {
                form_data.append(key + '[]', _this3.form[key][i]);
              }
            } else {
              form_data.append(key, _this3.form[key]);
            }
          }

          _this3.$store.dispatch('design/update', {
            id: _this3.$route.params.id,
            data: form_data
          }).then(function (response) {
            _this3.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            });

            _this3.$router.push({
              name: 'design'
            });

            _this3.is_requesting = false;
          }).catch(function (error) {
            console.log(error);

            _this3.$vs.notify({
              title: 'Error',
              text: error.response.data,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });

            _this3.is_requesting = false;
          });
        } else {
          _this3.$vs.notify({
            title: 'Error',
            text: 'Fix form validation errors',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
        }
      });
    },
    uploadImages: function uploadImages(e) {
      this.uploadedImages = [];
      var selectedImages = e.target.files;

      if (!selectedImages.length) {
        return false;
      }

      this.form.images = [];

      for (var i = 0; i < selectedImages.length; i++) {
        this.form.images.push(selectedImages[i]);
        this.uploadedImages.push({
          url: URL.createObjectURL(selectedImages[i])
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
=======
    previewImage: function previewImage(event) {
      var _this4 = this;
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

<<<<<<< HEAD
// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);
=======
        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this4.uploadedImage = e.target.result;
          _this4.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/create.vue?vue&type=template&id=8f482012&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design-print-price/create.vue?vue&type=template&id=8f482012&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22& ***!
  \****************************************************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
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
<<<<<<< HEAD
  return _c(
    "div",
    { staticClass: "add-new-design-price mt-5" },
    [
      _c("vs-row", { staticClass: "d-flex" }, [
        _c(
=======
  return _c("div", [
    _vm.can("create-package")
      ? _c(
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
          "div",
          { staticClass: "vx-col md:w-6/12 w-full px-4 mb-3" },
          [
            _c(
<<<<<<< HEAD
              "vs-select",
              {
                staticClass: "selectExample w-full",
                attrs: { label: "Criteria" },
                model: {
                  value: _vm.form.print_criteria_id,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "print_criteria_id", $$v)
                  },
                  expression: "form.print_criteria_id"
                }
              },
              [
                _vm._l(_vm.printCriterias, function(item, index) {
                  return !item.selected
                    ? _c("vs-select-item", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        key: index,
                        attrs: {
                          name: "criteria",
                          text: item.criteria,
                          value: item.id
                        }
                      })
                    : _vm._e()
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("criteria"),
                        expression: "errors.has('criteria')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("criteria")))]
                )
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col md:w-3/12 w-full px-4 mb-3" },
          [
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|min_value:0",
                  expression: "'required|min_value:0'"
                }
              ],
              staticClass: "w-full",
              attrs: { name: "price", label: "Price", type: "number" },
              model: {
                value: _vm.form.price,
                callback: function($$v) {
                  _vm.$set(_vm.form, "price", $$v)
                },
                expression: "form.price"
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
                    value: _vm.errors.has("price"),
                    expression: "errors.has('price')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("price")))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col md:w-3/12 w-full px-4 mb-3" },
          [
            _c(
              "vs-button",
              {
                staticClass: "mt-5 w-full",
                attrs: {
                  color: "primary",
                  icon: "icon-save",
                  "icon-pack": "feather",
                  type: "filled"
                },
                on: { click: _vm.addnew }
              },
              [_vm._v("Add\n\t\t\t")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/edit.vue?vue&type=template&id=57cdc2c5&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design-print-price/edit.vue?vue&type=template&id=57cdc2c5&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "edit-design-print-price" },
    [
      _c(
        "vs-list",
        _vm._l(_vm.designPrintPrice, function(item, index) {
          return _vm.designPrintPrice.length
            ? _c(
                "vs-list-item",
                {
                  key: item.print_criteria.id,
                  attrs: { title: item.print_criteria.criteria, icon: "check" }
                },
                [
                  _c("vs-row", { staticClass: "d-flex" }, [
                    _c(
                      "div",
                      { staticClass: "w-1/3" },
                      [
                        _c("vs-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min_value:0",
                              expression: "'required|min_value:0'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: {
                            name: "price-" + index,
                            label: "Price",
                            type: "number"
                          },
                          model: {
                            value: item.price,
                            callback: function($$v) {
                              _vm.$set(item, "price", $$v)
                            },
                            expression: "item.price"
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
                                value: _vm.errors.has("price-" + index),
                                expression: "errors.has('price-'+index)"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("price-" + index)))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-1/3" },
                      [
                        _vm.can("edit-design-price")
                          ? _c("vs-button", {
                              staticClass:
                                "vs-con-loading__container mx-auto mt-4",
                              attrs: {
                                id: "btn-edit-" + item.id,
                                radius: "",
                                color: "warning",
                                type: "border",
                                "icon-pack": "feather",
                                icon: "icon-edit"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.editDesignPrice(item)
                                }
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-1/3" },
                      [
                        _vm.can("delete-design-price")
                          ? _c("vs-button", {
                              staticClass:
                                "vs-con-loading__container mx-auto mt-4",
                              attrs: {
                                id: "btn-delete-" + item.id,
                                radius: "",
                                color: "danger",
                                type: "border",
                                "icon-pack": "feather",
                                icon: "icon-trash"
                              },
                              on: {
                                click: function($event) {
                                  _vm.is_requesting
                                    ? _vm.$store.dispatch(
                                        "viewWaitMessage",
                                        _vm.$vs
                                      )
                                    : _vm.confirmDeleteDesign(item)
                                }
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            : _vm._e()
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=template&id=28f791be&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/edit.vue?vue&type=template&id=28f791be& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: " w-full mb-base" }, [
      _c(
        "div",
        { ref: "create", attrs: { title: "Edit design" } },
        [
          _c("vx-card", [
            _c("div", { staticClass: "vx-row" }, [
              _c("div", { staticClass: "vx-col md:w-12/12 w-full mb-3" }, [
                _c("div", { staticClass: "image-preview" }, [
                  _c(
                    "div",
                    { staticClass: "vx-row" },
                    [
                      _vm._l(_vm.form.images, function(image) {
                        return _vm.uploadedImages.length === 0
                          ? _c("img", {
                              staticClass:
                                "preview-large img-fluid vx-col md:w-3/12 w-full mb-2 px-2",
                              attrs: { src: image.url }
                            })
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.uploadedImages, function(image) {
                        return _vm.uploadedImages
                          ? _c("img", {
                              staticClass:
                                "preview-large img-fluid vx-col md:w-3/12 w-full mb-2 px-2",
                              attrs: { src: image.url }
                            })
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-block mt-3" },
                  [
                    _c("input", {
                      staticClass: "form-control d-none",
                      attrs: { id: "img-upload", multiple: "", type: "file" },
                      on: { change: _vm.uploadImages }
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
                      [_vm._v("Upload Photos\n\t\t\t\t\t\t\t")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
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
                    attrs: { label: "Name", name: "name" },
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
                { staticClass: "vx-col md:w-12/12 w-full" },
                [
                  _c(
                    "vx-card",
                    [
                      _c("DesignPrintPrice", {
                        attrs: { designId: _vm.$route.params.id }
                      }),
                      _vm._v(" "),
                      _c("CreateDesignPrintPrice", {
                        ref: "createDesignPrice",
                        attrs: { designId: _vm.$route.params.id },
                        on: { addnew: _vm.addnew }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ])
=======
              "vx-card",
              { ref: "create", attrs: { title: "Create Package" } },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: { label: "Package Title" },
                        model: {
                          value: _vm.form.title,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "title", $$v)
                          },
                          expression: "form.title"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder"
                      },
                      [
                        _c("div", { staticClass: "vs-con-input" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.date,
                                expression: "form.date"
                              }
                            ],
                            staticClass:
                              "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                            staticStyle: {
                              border: "1px solid rgba(0, 0, 0, 0.2)"
                            },
                            attrs: { required: "", type: "date" },
                            domProps: { value: _vm.form.date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "date", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label"
                            },
                            [
                              _vm._v(
                                "\n                                    Date\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"
                          })
                        ]),
                        _vm._v(" "),
                        _c("span")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Price:" },
                          model: {
                            value: _vm.form.price,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "price", $$v)
                            },
                            expression: "form.price"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.currency,
                          expression: "form.currency"
                        }
                      ],
                      attrs: { type: "radio", name: "currency", value: "LE" },
                      domProps: { checked: _vm._q(_vm.form.currency, "LE") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.form, "currency", "LE")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("LE")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.currency,
                          expression: "form.currency"
                        }
                      ],
                      attrs: { type: "radio", name: "currency", value: "$" },
                      domProps: { checked: _vm._q(_vm.form.currency, "$") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.form, "currency", "$")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("$")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Days:" },
                          model: {
                            value: _vm.form.days,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "days", $$v)
                            },
                            expression: "form.days"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Nights:" },
                          model: {
                            value: _vm.form.nights,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "nights", $$v)
                            },
                            expression: "form.nights"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: { label: "Season" },
                        model: {
                          value: _vm.form.season,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "season", $$v)
                          },
                          expression: "form.season"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "file", multiple: "" },
                      on: { change: _vm.uploadImages }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c("ul", { staticClass: "switch-container" }, [
                      _c(
                        "li",
                        [
                          _c("label", [_vm._v("Is Featured")]),
                          _vm._v(" "),
                          _c("vs-switch", {
                            model: {
                              value: _vm.form.home_page,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "home_page", $$v)
                              },
                              expression: "form.home_page"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mt-5" },
                    [
                      _c("vs-textarea", {
                        attrs: { label: "Description" },
                        model: {
                          value: _vm.form.description,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "description", $$v)
                          },
                          expression: "form.description"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "Food",
                            autocomplete: "",
                            "label-placeholder": "Food",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.food_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "food_id", $$v)
                            },
                            expression: "form.food_id"
                          }
                        },
                        _vm._l(_vm.food, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.id, text: item.name }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "Start City",
                            autocomplete: "",
                            "label-placeholder": "Start City",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.start_city_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "start_city_id", $$v)
                            },
                            expression: "form.start_city_id"
                          }
                        },
                        _vm._l(_vm.cities, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.id, text: item.name }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "End City",
                            autocomplete: "",
                            "label-placeholder": "End City",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.end_city_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "end_city_id", $$v)
                            },
                            expression: "form.end_city_id"
                          }
                        },
                        _vm._l(_vm.cities, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.id, text: item.name }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Total Tickets:" },
                          model: {
                            value: _vm.form.total_tickets,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "total_tickets", $$v)
                            },
                            expression: "form.total_tickets"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "vs-row",
                  {
                    attrs: {
                      "vs-align": "center",
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-w": "12"
                    }
                  },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "center",
                          "vs-align": "center",
                          "vs-w": "12"
                        }
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              id: "btn-create",
                              disabled: !_vm.validateForm,
                              "icon-pack": "feather",
                              icon: "icon-save",
                              type: "gradient"
                            },
                            on: {
                              click: function($event) {
                                _vm.is_requesting
                                  ? _vm.$store.dispatch(
                                      "viewWaitMessage",
                                      _vm.$vs
                                    )
                                  : _vm.create()
                              }
                            }
                          },
                          [_vm._v("Create Package")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/design-print-price/create.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/design-print-price/create.vue ***!
  \**************************************************************/
=======
/***/ "./resources/js/src/views/package/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/package/create.vue ***!
  \***************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _create_vue_vue_type_template_id_8f482012_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=8f482012&scoped=true& */ "./resources/js/src/views/design-print-price/create.vue?vue&type=template&id=8f482012&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/design-print-price/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=14a1ec22& */ "./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/package/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5





/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_8f482012_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_8f482012_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
  false,
  null,
  "8f482012",
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/design-print-price/create.vue"
=======
component.options.__file = "resources/js/src/views/package/create.vue"
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/design-print-price/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/design-print-price/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/design-print-price/create.vue?vue&type=template&id=8f482012&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/design-print-price/create.vue?vue&type=template&id=8f482012&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8f482012_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=8f482012&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/create.vue?vue&type=template&id=8f482012&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8f482012_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8f482012_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/design-print-price/edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/design-print-price/edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_57cdc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=57cdc2c5&scoped=true& */ "./resources/js/src/views/design-print-price/edit.vue?vue&type=template&id=57cdc2c5&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/design-print-price/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_57cdc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_57cdc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57cdc2c5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/design-print-price/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/design-print-price/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/design-print-price/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/design-print-price/edit.vue?vue&type=template&id=57cdc2c5&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/design-print-price/edit.vue?vue&type=template&id=57cdc2c5&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_57cdc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=57cdc2c5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design-print-price/edit.vue?vue&type=template&id=57cdc2c5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_57cdc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_57cdc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/design/edit.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/design/edit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_28f791be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=28f791be& */ "./resources/js/src/views/design/edit.vue?vue&type=template&id=28f791be&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/design/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_28f791be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_28f791be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/design/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/design/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/design/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
=======
/***/ "./resources/js/src/views/package/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/design/edit.vue?vue&type=template&id=28f791be&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/design/edit.vue?vue&type=template&id=28f791be& ***!
  \*******************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22& ***!
  \**********************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_28f791be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=28f791be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/edit.vue?vue&type=template&id=28f791be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_28f791be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_28f791be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=14a1ec22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5



/***/ })

}]);