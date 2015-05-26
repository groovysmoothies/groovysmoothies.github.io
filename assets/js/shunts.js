groovyShunt = new ShuntDiv(document.getElementById('main-container'), [
    new ShuntDiv.Transition('intro', 'game' , 'enterAnimateCss', 'click', {
        id: 'next-button',
        animation_name: 'fadeInUp',
        animation_time: 1000,
        animation_function: 'cubic-bezier(.1,1,.61,.96)',
    }),

    new ShuntDiv.Transition('game', 'result' , 'dualAnimateCss', 'event', {
        eventName: 'shunt',
        exit_animation_name: 'fadeOut',
        exit_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_animation_name: 'slideInDown',
        enter_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_above: true,
    }),

//    new ShuntDiv.Transition('transition', 'result' , 'dualAnimateCss', 'event', {
//        id: 'blendAnother',
//        exit_animation_name: 'fadeOut',
//        exit_animation_time: 3000,
//        exit_animation_function: 'cubic-bezier(.1,1,.61,.96)',
//        enter_animation_name: 'fadeIn',
//        enter_animation_time: 3000,
//        enter_animation_function: 'cubic-bezier(.1,1,.61,.96)',
//        enter_above: true,
//    }),

    new ShuntDiv.Transition('result', 'intro' , 'dualAnimateCss', 'click', {
        id: 'blendAnother',
        exit_animation_name: 'fadeOut',
        exit_animation_time: 3000,
        exit_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_animation_name: 'fadeIn',
        enter_animation_time: 3000,
        enter_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_above: true,
    }),

], {
    default: 'intro',
    saveWithHash: true,
});
