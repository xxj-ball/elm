import http from '../../api/http';
import { RATE_API} from '../../api/url';
export default{
    namespaced:true,
    state:{
        rateData:[]
    },
    getters:{

    },
    mutations:{
        setDataAction(state,payload){
            state.rateData=payload;
            // console.log(state.rateData);
        }
    },
    actions:{
        async requestRate(context,id){
            // console.log(id);
            let {data:{data}}= await http.get(RATE_API);
            data.map(item=>{
                if(item.id===id){
                    context.commit('setDataAction',item);
                    console.log(item);
                }
            })
        
        }
    }
}