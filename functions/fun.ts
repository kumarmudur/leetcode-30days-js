// Approach 1: Object Factory
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean,
    notToBe: (val: any) => boolean
};

const expect = (val: any): ToBeOrNotToBe => {  
    return {
        toBe: (val2: any): boolean => {
            if(val !== val2) throw new Error("Not Equal");
            return true;
        }, 
        notToBe: (val2: any): boolean => {
            if(val === val2) throw new Error("Equal");
            return true;
        }  
    }
 }

 export {};
