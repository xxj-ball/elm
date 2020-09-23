import http from '../../api/http';
import { RATE_API} from '../../api/url';
export default{
    namespaced:true,
    state:{
        entriesData:[]
    },
    getters:{

    },
    mutations:{
        // setDataAction(state,payload){
        //     state.entriesData=payload;
        // }
    },
    actions:{
        async requestRate(context){
            let result= await http.get(RATE_API);
            console.log(result);
            // context.commit('setDataAction',result);
            
        }
    }
}