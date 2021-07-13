const fetch = require('node-fetch')

const showResolver = {
    Query : {
        getHello: ()=> "hi there",
        shows: async (_, {name}, {dataSources})=>{
            //console.log(dataSources)
            return dataSources.showsAPI.getShows(name)
        },
        // Shows: async ({name, id})=>{ 
        //     let result  =  await fetch(`http://api.tvmaze.com/search/shows?q=${name}`)
        //     let json = await result.json()
        //     console.log(json)
        //     return json
        // },
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
        }
    }
}


module.exports = showResolver
