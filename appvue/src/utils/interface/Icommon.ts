export interface ICommon{
    throttle(callback: Function,waitTime:number):Function;
    debounce(callback: Function,waitTime:number):Function;
}