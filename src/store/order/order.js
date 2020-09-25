import http from '../../api/http';
import { DETAILS_API} from '../../api/url';
export default{
    namespaced:true,
    state:{
        data:[]
    },
    getters:{

    },
    mutations:{
        orderAction(state,payload){
             state.data.push(payload);
            // console.log(payload);
            console.log(state.data);
        }
    },
    actions:{

            
        
    }
}
