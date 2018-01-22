var debug = true        
var log = debug ? console.log.bind(console) : function() {}

// class
function NotificationCenter() {
    // event, target and handler pairs
    this.center = []
}

NotificationCenter.prototype = {
    // add event listener
    addBroadcast: function(eventName, target, handler) {
        
        var center = this.center
        var obj = {
            name: eventName,
            target: target,
            handler: handler
        }
        center.push(obj)
    },

    // fire event listener
    fireBrodcast: function(eventName, target) {
        var mapper = this.center
        handleWithEvent(mapper, eventName, target)
    }
}

function handleWithEvent(array, event, target) {    
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item['name'] === event && item['target'] === target) {
            item['handler']()    
        }
    }
}
