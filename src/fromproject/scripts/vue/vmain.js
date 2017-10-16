new Vue({
   el: "#app",
   data: {
       currentLocale: 'pl',
       langs: {
           pl: "pl",
           ru: "ru",
           en: "en",
           uk: "uk",
       },
       message: {
           pl: "Witam",
           ru: "Привет",
           en: "Hi",
       },
       menu_a: {
           pl: "Glówna",
           ru: "Главная",
           uk: "Головна",
           en: "Main",
       },
       menu_b: {
           pl: "Szukający pracy",
           ru: "Работники",
           uk: "Працівники",
           en: "Workers",
       },
       menu_c: {
           pl: "Pracodawcy",
           ru: "Работадатели",
           uk: "Роботодавці",
           en: "Employers",
       },
       menu_d: {
           pl: "O nas",
           ru: "О нас",
           uk: "О нас",
           en: "About us",
       },
       menu_lang_select: {
           pl: "Język",
           ru: "Язык",
           uk: "Мова",
           en: "Language",
       }
   },
   methods: {
       selectLanguage: function(lang) {
           this.currentLocale = lang;
       }
   }
})
// alert("test Vue");
