function canLeekUseWeaponOnCell(leek, weapon, cell) {
	/*Test savoir si le poireau leek peut utiliser l'arme weapon sur la cellule cell
	renvoie true si c'est le cas, false sinon*/
	var test=true;
	var celluleDepart=getCell(leek);
	var range=getWeaponMaxRange(weapon);
	var rangeMin=getWeaponMinRange(weapon);
	var distance=getDistance(celluleDepart, cell);
	if(range<distance or rangeMin>distance) {
		test=false;
	}
	else if(isInlineWeapon(weapon) and !isOnSameLine(celluleDepart, cell)) {
		test=false;
	}
	else if(lineOfSight(celluleDepart, cell) and weaponNeedLos(weapon)) {
		test=false;
	}
	return test;
}

function canUseWeaponFromCellOnCell(celluleDepart, weapon, cell) {
	/*Test savoir si l'on peut utiliser l'arme weapon de la cellule cell1 sur la cellule cell
	renvoie true si c'est le cas, false sinon*/
	var test=true;
	var range=getWeaponMaxRange(weapon);
	var rangeMin=getWeaponMinRange(weapon);
	var distance=getCellDistance(celluleDepart, cell);
	if(range<distance or rangeMin>distance) {
		test=false;
	}
	else if(isInlineWeapon(weapon) and !isOnSameLine(celluleDepart, cell)) {
		test=false;
	}
	else if(lineOfSight(celluleDepart, cell) and weaponNeedLos(weapon)) {
		test=false;
	}
	return test;
}

function canLeekUseChipOnCell(leek, chip, cell) {
	/*Test savoir si le poireau leek peut utiliser la puce chip sur la cellule cell
	renvoie true si c'est le cas, false sinon*/
	var test=true;
	var celluleDepart=getCell(leek);
	var range=getChipMaxRange(chip);
	var rangeMin=getChipMinRange(chip);
	var distance=getCellDistance(celluleDepart, cell);
	if(range<distance or rangeMin>distance) {
		test=false;
	}
	else if(isInlineChip(chip) and !isOnSameLine(celluleDepart, cell)) {
		test=false;
	}
	else if(lineOfSight(celluleDepart, cell) and chipNeedLos(chip)) {
		test=false;
	}
	return test;
}

function canUseChipFromCellOnCell(celluleDepart, chip, cell) {
	/*Test savoir si le poireau leek peut utiliser la puce chip sur la cellule cell à partir de la cellule celluleDepart
	renvoie true si c'est le cas, false sinon*/
	var test=true;
	var range=getChipMaxRange(chip);
	var rangeMin=getChipMinRange(chip);
	var distance=getDistance(celluleDepart, cell);
	if(range<distance or rangeMin>distance) {
		test=false;
	}
	else if(isInlineChip(chip) and !isOnSameLine(celluleDepart, cell)) {
		test=false;
	}
	else if(lineOfSight(celluleDepart, cell) and chipNeedLos(chip)) {
		test=false;
	}
	return test;
}