const {RESTDataSource} = require('apollo-datasource-rest')

class ShowsApi extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'http://api.tvmaze.com/';
    }

    async getShows(name){
        return await this.get(`search/shows?q=${name}`);
    };

    async getShow(name){
        return await this.get(`singlesearch/shows?q=${name}`);
    };
    
    async getEpisodes(show){
        return await this.get(`shows/${show.id}/episodes`);
    };

    async getCast(show){
        return await this.get(`shows/${show.id}/cast`);
    };

    async getCrew(show){
        return await this.get(`shows/${show.id}/crew`);
    };

    async getSeasons(show){
        return await this.get(`shows/${show.id}/seasons`);
    };
    
    async getDaysSchedule(date, country){
        return await this.get(`schedule?country=${country}&date=${date}`);
    };

    async getFullSchedule(){
        return await this.get(`schedule/full`);
    };
}

module.exports = {ShowsApi}