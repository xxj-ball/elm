import http from '../../api/http';
import { ENTRIES_API} from '../../api/url';
import axios from 'axios'
export default{
    namespaced:true,
    state:{
        entriesData:[]
    },
    getters:{

    },
    mutations:{
        setDataAction(state,payload){
            state.entriesData=payload;
            // console.log(state.entriesData);
        }
    },
    actions:{
        async singerAction(context){
            let {data:{entries}}= await http.get(ENTRIES_API);
            // console.log(entries);
            const result=entries.map(({id,image_hash,name})=>({
                id,
                name,
                picUrl:`https://cube.elemecdn.com/${image_hash}.jpeg`
            }))
            // console.log(result);
            context.commit('setDataAction',result);
            
        }
    }
}
