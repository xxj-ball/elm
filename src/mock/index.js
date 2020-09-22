import {mock} from 'mockjs'

mock('http://localhost:8080/api/entries',()=>{
    
    return require('./json/home/entries.json');
});

mock('http://localhost:8080/api/filter',()=>{
    
    return require('./json/home/filter.json');
});

mock('http://localhost:8080/api/goods',()=>{
    
    return require('./json/home/goods.json');
});

mock('http://localhost:8080/api/details',()=>{
    
    return require('./json/home/details.json');
});