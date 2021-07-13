const {gql}  = require('apollo-server')


const schema = gql`
    type Query {
        getHello: String
        shows(name: String): [ShowResult]
        show(name: String, id: Int): Show
        people(name: String): [PeopleResult]
    }

    type ShowImages{
        medium: String
        original: String
    }

    type Country{
        code: String
        name: String
        timezone: String
    }

    type Network{
        id :ID
        name: String
        country: Country
    }

    type Rating{
        average: Float
    }

    type Schedule {
        days:[String]
        time: String
    }

    type External {
        tvrage: Int
        thetvdb: Int
        imdb: String
    }

    type ShowResult {
        score: Float
        show: Show
    }

    type Show{
        averageRuntime: Int
        dvdCountry: String
        externals: External
        genres: [String]
        id: ID!
        image: ShowImages
        language: String
        name: String
        network: Network
        officialSite: String
        premiered: String
        rating: Rating
        runtime: Int
        schedule: Schedule
        status: String
        summary: String
        type: String
        updated: Int
        url: String
        webChannel: String
        weight: Int
        episodes: [Episodes]
        cast: [Cast]
    }

    type PersonImages{
        medium: String
        original: String
    }

    type Person{
        birthday: String
        country: Country
        deathday: String
        gender: String
        id: Int
        image: PersonImages
        name: String
        url: String
        _links:PersonLink
    }

    type PersonLink{
        self: Link
    }

    type Link{
        href: String
    }

    type PeopleResult {
        score: Float
        person: Person
    }

    type Episodes {
        airdate: String
        airstamp: String
        airtime: String
        id: Int
        image: ShowImages
        name: String
        number: Int
        runtime: Int
        season: Int
        summary: String
        type: String
        url: String
    }

    type Cast{
        character: Character
        person: Person
    }
    
    type Character{
        id: Int
        image: PersonImages
        name: String
        url: String
        _links: Link
    }
`
module.exports = {schema}