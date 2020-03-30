import Component from '@ember/component';

export default Component.extend({
    languages: null,
    init(){
        this._super(...arguments);
        this.getLanguages();
    },
    getLanguages: function() {
        let languages = [{
            "image": "HTML5",
            "link": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        },{
            "image": "CSS3",
            "link": "https://developer.mozilla.org/en-US/docs/Archive/CSS3"
        }, {
            "image": "JS",
            "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },{
            "image": "Csharp",
            "link": "https://docs.microsoft.com/en-us/dotnet/csharp/"
        },{
            "image": "Java",
            "link": "https://www.java.com/en/download/"
        }];

        this.languages = languages;
    }
});
