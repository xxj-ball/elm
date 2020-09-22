import http from '../../api/http';
import { FILTER_API} from '../../api/url';
import axios from 'axios'
export default{
    namespaced:true,
    state:{
        filterData:[],
        rankData:[],
        selectData:{},
        selectActionData:[]
    },
    getters:{

    },
    mutations:{
        setRankAction(state,payload){
            state.rankData=payload;
            // console.log(state.rankData);
        },
        selsetData(state,payload){
            state.selectData = payload;
            // console.log(state.selectData);
        },
        selsetAction(state,payload){
            state.selectActionData = payload;
            // console.log(state.selectActionData);
        }
    },
    actions:{
        async filterRequest(context){
            let {data}= await http.get(FILTER_API);
            // console.log(data);
            let {outside:{inside_sort_filter}} = data;
            let {bar:{delivery_mode}} = data;
            let {bar:{supports}} = data;
            let support = supports.map(({id,name,icon_hash})=>({id,name,icon_hash}));
            let {bar:{activity_types}} = data;
            context.commit('setRankAction',inside_sort_filter);
            context.commit('selsetData',{delivery_mode,support});
            context.commit('selsetAction',activity_types);
            
        }
    }
}
