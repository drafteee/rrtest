import {OrderedMap, Map} from 'immutable'

export function arrToMap(arr, model = Map){
    return arr.reduce((acc,item)=>acc.set(item.id,new model(item)),new OrderedMap({}))
}

export function mapToArr(obj){
    return obj.valueSeq().toArray()
}