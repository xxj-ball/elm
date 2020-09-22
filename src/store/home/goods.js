import http from '../../api/http';
import { GOODS_API} from '../../api/url';
import axios from 'axios'
export default{
    namespaced:true,
    state:{
        goodsData:[]
    },
    getters:{

    },
    mutations:{
        setDataAction(state,payload){
            state.goodsData=payload;
            // console.log(state.goodsData);
        }
    },
    actions:{
        async goodsAction(context){
            let {data:{items}}= await http.get(GOODS_API);
            // console.log(items);
            let goodsData = items.map(({restaurant:{support_tags,order_lead_time,distance,rating,recent_order_num,flavors,activities,id,image_path,name,piecewise_agent_fee,delivery_mode}})=>({
                activities,
                delivery_mode,
                id,
                name,
                image_path:`https://cube.elemecdn.com/${image_path.slice(0,1)}/${image_path.slice(1, 3)}/${image_path.slice(3)}.${(image_path.match(/(JPEG|jpeg|png|PNG)/g))}`,
                piecewise_agent_fee,
                flavors,
                rating,
                recent_order_num,
                distance,
                order_lead_time,
                support_tags
            }));
            // console.log(goodsData);
            context.commit('setDataAction',goodsData);
        }
    }
}
