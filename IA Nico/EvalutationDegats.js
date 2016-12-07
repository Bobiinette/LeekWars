//-----------------includes----------
include("FonctionSup");
include("DegatsArmes");
include("FonctionSupArray");

//-----------Fonctions-----------------

function cellulesAPortee(leek) {
	var Cell=getCell(leek);
	var X=getCellX(Cell);
	var Y=getCellY(Cell);
	var MP=getMP(leek);
	var tabCellules=[];
	tabCellules[0]=getCell();
	var k=1;
	var cellule;
	for(var i=-MP;i<=MP;i++) {
		for(var j=abs(i)-MP;j<=MP-abs(i);j++) {
			cellule=getCellFromXY(X+i, Y+j);
			if(cellule!=null and getCellContent(cellule)==CELL_EMPTY) {
				tabCellules[k]=cellule;
				k++;
			}
		}
	}
	return tabCellules;
}

function cellulesAccessibles(leek, tabCellules, @tabLenghtPath) {
	var k=0;
	var lenght=0;
	var Cell=getCell(leek);
	var MP=getMP(leek);
	for(var i in tabCellules) {
		lenght=getPathLength(Cell, i);
		if(lenght>MP) {
			remove(tabCellules,i);
		}
		else {
			tabLenghtPath[k]=lenght;
			k++;
		}
	}
	return tabCellules;
}

function evaluationDegatsCellules(enemy, tabCellulesEnemy, tabCellules, @tabDegatsMin, @tabDegatsMax) {
	var damages=0;
	var k=0;
	var myResistance=getResistance();
	var shield=getAbsoluteShield();
	var tabWeapons=getWeapons(enemy);
	var tabChips=getChips(enemy);
	var enemyStrenght=getStrength(enemy);
	var enemyTP=getTotalTP(enemy);
	for(var weapon in tabWeapons) {
		for(var cellule in tabCellules) {
			for(var celluleEnemy in tabCellulesEnemy) {
				if(canUseWeaponFromCellOnCell(celluleEnemy, weapon, cellule)) {
					getDamageWeapon(weapon, enemyStrenght, enemyTP, shield, tabDegatsMin[k], tabDegatsMax[k]);
				}
			}
			k++;
		}
		k=0;
	}
	for(var chip in tabChips) {
		for(var cellule in tabCellules) {
			for(var celluleEnemy in tabCellulesEnemy) {
				if(canUseChipFromCellOnCell(celluleEnemy, chip, cellule)) {
					getDamageChip(chip, enemyStrenght, shield, tabDegatsMin[k], tabDegatsMax[k]);
				}
			}
			k++;
		}
	}
	k=0;
}


function EvaluationDanger(leek) {
	var tabCellulesThis=[];
	var tabCellulesThisDistance=[];
	var tabDegatsMin=[];
	var tabDegatsMax=[];
	//Cellules accessibles par le poirreau
	tabCellulesThis=cellulesAPortee(leek);
	tabCellulesThis=cellulesAccessibles(leek, tabCellulesThis, tabCellulesThisDistance);
	//Cellules accessibles par les enemis
	var i=0;
	var tabCellulesEnemies=[];
	var tabCellulesEnemiesDistance=[];
	var tabEnemies=[];
	tabEnemies=getEnemies();
	//Pour le calcul des dégats
	initArray(count(tabCellulesThis), tabDegatsMin);
	initArray(count(tabCellulesThis), tabDegatsMax);
	for(var enemy in tabEnemies) {
		tabCellulesEnemies[i]=[];
		tabCellulesEnemiesDistance[i]=[];
		tabCellulesEnemies[i]=cellulesAPortee(enemy);
		tabCellulesEnemies[i]=cellulesAccessibles(enemy, tabCellulesEnemies[i], tabCellulesEnemiesDistance[i]);
		//calcul des dégats
		evaluationDegatsCellules(enemy, tabCellulesEnemies[i], tabCellulesThis, tabDegatsMin, tabDegatsMax);
		i++;
	}
	var test=[];
	var k=0;
	for(i=0;i<count(tabCellulesThis);i++){
		if(tabDegatsMin[i]>0){
			test[k]=tabCellulesThis[i];
			k++;
		}
	}
	mark(test);
}


EvaluationDanger(getLeek());