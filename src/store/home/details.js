import http from '../../api/http';
import { DETAILS_API} from '../../api/url';
export default{
    namespaced:true,
    state:{
        detailsList:[],
        dataImg:{},
        foodsData:[]
    },
    getters:{

    },
    mutations:{
        setData(state,payload){
            state.detailsList = payload;
            // console.log(state.detailsList);
        },
        setImg(state,payload){
            state.dataImg = payload;
        },
        setDataAction(state,payload){
            state.foodsData = payload;
            console.log(state.foodsData);
        }
    },
    actions:{
        async requestDetails(context,payload){
            // console.log(payload);
            let {data:{data}}= await http.get(DETAILS_API);
            // console.log(data);
            let result = data.map(({menu,rst,recommend})=>({
                menu:menu.map(({description,name,foods})=>({description,name,foods})),
                rst,
                recommend:recommend[0]
            }))
            // console.log(result);
            result.map((item)=>{
                // console.log(item.rst.id);
                if(item.rst.id==payload){
                   console.log(item);
                    context.commit('setData',item);
                    let path1 = `https://cube.elemecdn.com/${item.rst.shop_sign.image_hash.slice(0,1)}/${item.rst.shop_sign.image_hash.slice(1, 3)}/${item.rst.shop_sign.image_hash.slice(3)}.${(item.rst.shop_sign.image_hash.match(/(JPEG|jpeg|png|PNG)/g))}`;   
                    let path2 = `https://cube.elemecdn.com/${item.rst.image_path.slice(0,1)}/${item.rst.image_path.slice(1, 3)}/${item.rst.image_path.slice(3)}.${(item.rst.image_path.match(/(JPEG|jpeg|png|PNG)/g))}`;
                    let path3 = `https://cube.elemecdn.com/${item.rst.posters[0].image_hash.slice(0,1)}/${item.rst.posters[0].image_hash.slice(1, 3)}/${item.rst.posters[0].image_hash.slice(3)}.${(item.rst.posters[0].image_hash.match(/(JPEG|jpeg|png|PNG)/g))}`;
                    context.commit('setImg',{path1,path2,path3});
                    let foodImg = item.recommend.items.map(item=>`https://cube.elemecdn.com/${item.image_path.slice(0,1)}/${item.image_path.slice(1, 3)}/${item.image_path.slice(3)}.${(item.image_path.match(/(JPEG|jpeg|png|PNG)/g))}`)
                     let foodsData = {...item.recommend,foodImg} 
                     context.commit('setDataAction',foodsData);
                    
                }
            })

            // context.commit('setDataAction',result);
            
        }
    }
}
// {activities,address,albums,business_info:{recent_order_num_display},distance_text,id,image_path,name,opening_hours,rating,posters,shop_sign,promotion_info,delivery_mode}