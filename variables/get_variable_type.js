function get_variable_type (val){
    return Object.prototype.toString.call(val).replace(/^\[object (.+)\]$/,"$1").toLowerCase();
}
