// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Str11NgfelloMoonloopStr11NgfelloMoonloopMoonloop from './str11ngfello/moonloop/str11ngfello.moonloop.moonloop'


export default { 
  Str11NgfelloMoonloopStr11NgfelloMoonloopMoonloop: load(Str11NgfelloMoonloopStr11NgfelloMoonloopMoonloop, 'str11ngfello.moonloop.moonloop'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
