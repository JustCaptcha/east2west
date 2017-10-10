new Vue({
   el: "#app",
   data: {
       langs: {
           pl: "pl",
           ru: "ru",
           en: "en",
           uk: "uk"
       },
       message: {
           pl: "Witam",
           ru: "Привет",
           en: "Hi"
       },
       currentLocale:'pl'
   },
   methods: {
       selectLanguage: function(lang){
           this.currentLocale = lang;
       }
   }
})
//alert("test Vue");
