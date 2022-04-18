export function sliderHandle(slider, eventNode) {
	const itemsNode = slider.querySelector('.slider__items');
	const leftBtn = slider.querySelector('.slider__left-btn');
	const rightBtn = slider.querySelector('.slider__right-btn');
	let allItems;
	let firstItem;
	let lastItem;

	if(eventNode.classList.contains('slider__show-all-btn') && itemsNode.classList.contains('slider__items_showed-all')) {
		enablePagination();
		itemsNode.classList.remove('slider__items_showed-all');
		eventNode.textContent = 'Все лекции';
		return;
	}

	if(eventNode.classList.contains('slider__show-all-btn')) {
		disablePagination();
		itemsNode.classList.add('slider__items_showed-all');
		eventNode.textContent = 'Скрыть';
		return;
	}

	if(eventNode.classList.contains('slider__left-btn')) {
		checkEnvironment();
		itemsNode.appendChild(firstItem);
	}

	if(eventNode.classList.contains('slider__right-btn')) {
		checkEnvironment();
		itemsNode.insertBefore(lastItem, firstItem);
	}

	function checkEnvironment() {
		allItems = Array.from(slider.querySelectorAll('.item'));
		firstItem = allItems[0];
		lastItem = allItems[allItems.length - 1]; 
	}

	function disablePagination() {
		leftBtn.setAttribute('disabled', 'disabled');
		rightBtn.setAttribute('disabled', 'disabled');
		rightBtn.classList.add('button_disabled');
		leftBtn.classList.add('button_disabled');
	}

	function enablePagination() {
		leftBtn.removeAttribute('disabled');
		rightBtn.removeAttribute('disabled');
		rightBtn.classList.remove('button_disabled');
		leftBtn.classList.remove('button_disabled');
	}
}
