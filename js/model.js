export default (function data() {
    
    var notes = [
        { title: 'papipao', description: "", importance: "", until: "" },
        { title: 'kaka', description: "", importance: "", until: "" },
    ];

    function get(type) {
        return notes;
    }

    function add() {
        notes.push([])
    }

    return {
        get: get,
        add: add
    }

})();