const fetch = require('node-fetch')

const showResolver = {
    Query : {
        getHello: ()=> "hi there",
        shows: async (_, {name}, {dataSources})=>{
            //console.log(dataSources)
            return dataSources.showsAPI.getShows(name)
        },
        schedule: async (_,{date, country}, {dataSources})=>{ 
            if (date){
                return dataSources.showsAPI.getDaysSchedule(date, country)
            }else{
                return dataSources.showsAPI.getFullSchedule()
            }
        },
        show: async (_,{name}, {dataSources})=>{ 
            return dataSources.showsAPI.getShow(name)
        },
        // People: async ({name})=>{ 
        //     let result  =  await fetch(`http://api.tvmaze.com/search/people?q=${name}`)
        //     let json = await result.json()
        //     console.log(json)
        //     return json
        // }
    },
    Show:{
        episodes: async (parent,args, {dataSources})=>{ 
            return dataSources.showsAPI.getEpisodes(parent)
        },
        cast:async (parent,args, {dataSources})=>{ 
            return dataSources.showsAPI.getCast(parent)
        },
        crew:async (parent,args, {dataSources})=>{ 
            return dataSources.showsAPI.getCrew(parent)
        },
        seasons:async (parent,args, {dataSources})=>{ 
            return dataSources.showsAPI.getSeasons(parent)
        },
    }
}


module.exports = showResolver
