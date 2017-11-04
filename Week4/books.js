var myBooks = ['james_hadley_chase_just_the_way_it_is','osilamah_solomon_imhomoh_consumers\'s_perceptions_of_health_claims_in_functional_foods:_a_concise_review','james_hadley_chase_consider_yourself_dead','david_oyedepo_the_healing_balm','sam_adeyemi_success_is_who_you_are','sam_adeyemi_ideas_rule_the_world','david_oyedepo_keys_to_divine_health','myles_munroe_uncover_your_potential','tim_lahaye_the_act_of_marriage','creflo_dollar_total_life_prosperity'];
console.log();

/*"James_Hadley_Chase_Jsut_The_Way_it_is",
"Osilamah_Solomon_Imhomoh_Consumers'_Perceptions_of…alth_Claims_in_Functional_Foods:_A_Concise_Review",
"James_Hadley_Chase_Jsut_The_Way_it_is_Consider_Yourself_Dead",
"David_Oyedepo_The_Healing_Balm",
"Sam_Adeyemi_Success_is_Who_you_are",
"Sam_Adeyemi_Ideas_Rule_the_World",
 "David_Oyedepo_Keys_to_Divine_Health",
 "Myles_Munroe_Uncover_your_Potential"
"Tim_Lahaye_The_Act_of_Marriage"
"Creflo_Dollar_Total_Life_Prosperity"*/
(function(){
    var ul = document.createElement('ul');
    ul.setAttribute('id','myList');

    var t, tt;
    myBooks = ['james_hadley_chase_just_the_way_it_is','osilamah _solomon_imhomoh_consumers\'s_perceptions_of_health_claims_in_functional_foods: a_concise_review','james_hadley_chase_consider_yourself_dead','david_oyedepo_the_healing_balm','sam_adeyemi_success_is_who_you_are','sam_adeyemi_ideas_rule_the_world','david_dyedepo_keys_to_divine_health','myles_munroe_uncover_your_potential','tim_lahaye_the_act_of_marriage','creflo_dollar_total_life_prosperity'];

    document.getElementById('renderList').appendChild(ul);
    myBooks.forEach(renderMyList);

    function renderMyList(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class','book');

        ul.appendChild(li);

        t = document.createTextNode(element);

        li.innerHTML=li.innerHTML + element;
    }
})();

(function(){
    const books = {
        james_hadley_chase_collection: {
            title: 'The Way it is',
            language: 'English',
            author: 'J. H. Chase',
            genre: 'Fantasy',
            year: 1956
        },
        osilamah_solomon_imhomoh: {
            title: 'Consumers\'s Perceptions of Health Claims in Functional Foods: A Concise Review',
            language: 'English',
            author: 'O. S. Imhomoh',
            genre: 'Scientific'
            year: 2011
        },
        james_hadley_chase_collection: {
            title: 'Consider yourself Dead',
            language: 'English',
            author: 'J.H. Chase',
            genre: 'Fantasy'.
            year: 1960
        },
        david_oyedepo: {
            title: 'The Healing Balm',
            language: 'English',
            author: 'David Oyedepo',
            genre: 'Spirituality'.
            year: 1996
        },
        sam_adeyemi: {
            title: 'Success is Who you are',
            language: 'English',
            author: 'Sam Adeyemi',
            genre: 'Motivational'.
            year: 2016
        },
        sam_adeyemi: {
            title: 'Ideas Rule the World',
            language: 'English',
            author: 'Sam Adeyemi',
            genre: 'Motivational'.
            year: 2000
        },
        david_oyedepo: {
            title: 'Keys to Devine Health',
            language: 'English',
            author: 'David Oyedepo',
            genre: 'Spirituality'.
            year: 1986
        },
        myles_munroe: {
            title: 'Uncover your Potential',
            language: 'English',
            author: 'Myles Munroe',
            genre: 'Motivational'.
            year: 2012
        },
        tim_lahaye: {
            title: 'The Act of Marriage',
            language: 'English',
            author: 'Time Lahaye',
            genre: 'Marriage'.
            year: 1998
        },
        creflo_dollar: {
            title: 'Total life Prosperity',
            language: 'English',
            author: 'Creflo Dollar',
            genre: 'Motivational'.
            year: 1998
          },
    };
})();
