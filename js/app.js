const snoblasters = document.getElementById('snoblaster');
const trailblazer = document.getElementById('trailblazer');
const overlay = document.getElementsByClassName('overlay');
const popInfo = document.getElementsByClassName('pop-info');
const mq = window.matchMedia( "(min-width:780px)");

$('button').click(function() {
	$(overlay).removeClass('hide');
	$(popInfo).removeClass('hide');
	let group = (this).className;
	if(group === 'sno') {
		console.log('sno');
		$(snoblasters).css("left", "0%");
		$(snoblasters).css("top", "125%");
		$(snoblasters).css("transition", "left 1s ease-out");
		if(mq.matches) {
			$(snoblasters).css("left", "10%");
			$(snoblasters).css("top", "50%");
			$(snoblasters).css("transition", "left 1s ease-out");
		}

	} else if(group === 'trail') {
		console.log('trial');
		$(trailblazer).css("left", "0%");
		$(trailblazer).css("top", "125%");
		$(trailblazer).css("transition", "left 1s ease-out");
		if(mq.matches) {
			$(trailblazer).css("left", "10%");
			$(trailblazer).css("top", "50%");
			$(trailblazer).css("transition", "left 1s ease-out");
		}
	}
});

$('.close').click(function () {
	$(snoblasters).css("left", "-100%");
	$(snoblasters).css("transition", "left 1s ease-out");
	$(trailblazer).css("left", "-100%");
	$(trailblazer).css("transition", "left 1s ease-outt");
	$(overlay).addClass('hide');
	$(popInfo).addClass('hide');
});