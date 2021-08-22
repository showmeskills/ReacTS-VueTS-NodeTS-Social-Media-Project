import { ICommon } from "../interface/Icommon";

const Common = (): ICommon => {
    const throttle = (callback: Function, waitTime: number): Function => {
        let start = 0;
        return (e: EventListener) => {
            let now = Date.now();
            if (now - start >= waitTime) {
                callback.call(this, e);
                start = now;
            }
        }
    }
    const debounce = (callback: Function, waitTime: number): Function => {
        let time:any = null;
        return (e:EventListener)=>{
            //第一次触发的中间
            if (time !== null) {
                clearTimeout(time);
            }
            //启动定时器
            time = setTimeout(() => {
                callback.call(this, e);
                //当连续触发
                time = null;
            }, waitTime);
        }
    }

    return {
        throttle,
        debounce
    }
}

export default Common;