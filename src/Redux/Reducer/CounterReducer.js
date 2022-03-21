// all counter reducer will be here

function CounterReducer(state = 0, action){

    switch(action.type){
        case 'increment':{
           return state+=1;
        }
        case 'decrement':{
            return state>0?state-=1:0;
        }
        default:{
            return state;
        }
            
    }

}
export default CounterReducer;