/* Landmarks App Supporting JavaScript
** Last revised: 3/19/2021
*/

function filterList() {
	console.log('Set list favorites filter.');
	const lObj = {dialog.object}.getControl('Landmarks');
	lObj.setFilter( {	
		isFavorite: RegExp('true','i')
	});
}

function clearListFilter() {
	console.log('Clear list favorites filter.');
	const lObj = {dialog.object}.getControl('Landmarks');
	lObj.setFilter(false);
}

function commitData() {
	console.log('Commit data.');
	const lObj = {dialog.object}.getControl('Landmarks');
	if (lObj.selection[0] != 'undefined') { 
		lObj._selectedRow = lObj.selection[0];
	}
	lObj.updateListFromUXControls();
}	


/*
**  setBackButtonText()
** 	Computes the amount of space the Landmark name requires and adjusts the back button text label
**  to display either Back or Landmarks based on the size required. Similiar to the Apple SwiftUI example.
*/
function setBackButtonText() {
	
	const $ele = $('landmarkNameHeader');
	var btnText = 'Back';
	
	if ($ele) {
		const stringPixelSize = window.getComputedStyle($ele).width; 
		
		const screenInfo = {dialog.object}.getSize();
		const width = screenInfo.width;
		const screenCenter = width / 2;
		const nameMidPoint = parseInt(stringPixelSize) / 2;
		
		const btnTextLength = 125; //pixels required to display < Landmarks with 5px padding.
	
		if ((btnTextLength + nameMidPoint) <= screenCenter) {
			btnText = 'Landmarks';
		}
	}
	
	return btnText;
}

function showLandmarksPanelCard() {
	const titleText = $('{dialog.ComponentName}.V.R1.STATICTEXT_1');
	titleText.classList.remove('move');
	{dialog.object}.panelSetActive('LANDMARKS_PANELCARD',true);
}

function showDetailsPanelCard() {
	const titleText = {dialog.object}.getPointer('STATICTEXT_1')
	titleText.classList.add('move');
	setTimeout(function() {
		{dialog.object}.panelSetActive('DETAILS_PANELCARD',true);
	},125);
}







