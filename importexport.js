/* export keyword is used to export modules from this file
export can be of two types 
named export and default export */


// for named import below syntax is used
export const thisIsAnNamedExport = () =>
{
    return 'this is an named export'
}

// for default export below syntax is used
const thisIsAnDefaultExport = () =>
{
    return 'this is an default export'
}



export default thisIsAnDefaultExport;

/* 
    import keyword is used to import module from different files 
*/

// for  named named import
import { thisIsAnNamedExport } from "/somepath";

// for default import 


import thisIsAnDefaultExport from "/somepath"


