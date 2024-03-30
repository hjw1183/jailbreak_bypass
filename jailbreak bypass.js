var checkApp=ObjC.classes.examplesolution["- checkApp"];

Interceptor.attach(checkApp.implementation, {
	onEnter:function(args){
		console.log('[*] checkApp called..');
		
	},onLeave:function(retval){
		console.log('[*] checkApp retval :'+retval+"\n");
		retval.replace(0);
		console.log('[*] jailbreak bypass!!! :'+retval+"\n");
	}
});