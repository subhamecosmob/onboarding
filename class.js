/**
 * Class keyword
 * javascript supports object protyping inheritance
 * Class syntax is a syntactical coat over prototyping inheritance to refacor main code in more orgainised way and in abbreviated
 */

class People
{
    constructor(realname)
    {
        this.name = realname;

    }

}
class Hero extends People
{
    constructor(herodetails)
    {
        super(herodetails.realName)
        this.heroname = herodetails.heroName;
    }

    getDetails = () =>
    {
        console.log(this.heroname);
        console.log(this.name);
    }
}

const hero = new Hero({
    realName: "clark kent",
    heroName: "superman"
});

hero.getDetails()