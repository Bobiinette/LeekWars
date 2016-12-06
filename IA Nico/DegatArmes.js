function diffPositive(a, b) {
	//Renvoie a-b si a-b>0, 0 sinon
	if(a-b>0) {
		return a-b;
	}
	return 0;
}

function getDamageWeapon(weapon, attackLeekStrenght, attackLeekTP, shield, defensiveLeekResitance, @degatsMin, @degatsMax) {
	/*weapon : l'arme de l'adversaire
	attackLeekStrenght : attack du leek attaquant
	attackLeekTP : le nombre de TP MAX du leek attaquant
	shield : valeur du shield du défenseur
	defensiveLeekResistance : résistance du leek défenseur
	degatsMin : dégats minimums reçus
	degatsMax : dégats max reçus*/
	//Ne prend pas en compte les dégats du poison du lance flamme
	//Ni du gazeur
	var multDamages=attackLeekStrenght;
	multDamages=multDamages/100;
	var multShield=defensiveLeekResitance;
	multShield=multShield/100;
	var pond=0;
	if(weapon==WEAPON_PISTOL) {
		pond=attackLeekTP/3;
		degatsMin=max(degatsMin,diffPositive(15*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(20*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_MACHINE_GUN) {
		pond=attackLeekTP/4;
		degatsMin=max(degatsMin,diffPositive(20*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(24*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_DOUBLE_GUN) {
		pond=attackLeekTP/4;
		degatsMin=max(degatsMin,diffPositive(15*multDamages,shield*multShield)*pond + diffPositive(5*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(20*multDamages,shield*multShield)*pond + diffPositive(8*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_SHOTGUN) {
		pond=attackLeekTP/5;
		degatsMin=max(degatsMin,diffPositive(33*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(43*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_MAGNUM) {
		pond=attackLeekTP/5;
		degatsMin=max(degatsMin,diffPositive(25*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(40*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_BROADSWORD) {
		pond=attackLeekTP/5;
		degatsMin=max(degatsMin,diffPositive(39*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(41*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_LASER) {
		pond=attackLeekTP/6;
		degatsMin=max(degatsMin,diffPositive(43*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(59*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_AXE) {
		pond=attackLeekTP/6;
		degatsMin=max(degatsMin,diffPositive(44*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(77*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_GRENADE_LAUNCHER) {
		pond=attackLeekTP/6;
		degatsMin=max(degatsMin,diffPositive(45*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(53*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_FLAME_THROWER) {
		pond=attackLeekTP/6;
		degatsMin=max(degatsMin,diffPositive(35*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(40*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_DESTROYER) {
		pond=attackLeekTP/6;
		degatsMin=max(degatsMin,diffPositive(40*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(60*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_B_LASER) {
		pond=attackLeekTP/5;
		degatsMin=max(degatsMin,diffPositive(50*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(60*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_KATANA) {
		pond=attackLeekTP/7;
		degatsMin=max(degatsMin,diffPositive(77*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(77*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_ELECTRISOR) {
		pond=attackLeekTP/7;
		degatsMin=max(degatsMin,diffPositive(70*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(80*multDamages,shield*multShield)*pond);
	}
	if(weapon==WEAPON_M_LASER) {
		pond=attackLeekTP/8;
		degatsMin=max(degatsMin,diffPositive(90*multDamages,shield*multShield)*pond);
		degatsMax=max(degatsMax,diffPositive(100*multDamages,shield*multShield)*pond);
	}
}

function getDamageChip(chip, attackLeekStrenght, shield, defensiveLeekResistance, @degatsMin, @degatsMax) {
	/*chip : la puce de l'adversaire
	attackLeekStrenght : attack du leek attaquant
	shield : valeur du shield du défenseur
	defensiveLeekResistance : résistance du leek défenseur
	degatsMin : dégats minimums reçus
	degatsMax : dégats max reçus*/
	//revoie 0 si la puce n'est pas une puce qui fait des dégats (ou empoisonne)
	var multDamages=attackLeekStrenght;
	multDamages=multDamages/100;
	var multShield=defensiveLeekResistance;
	multShield=multShield/100;
	if(chip==CHIP_SHOCK) {
		degatsMin=degatsMin+diffPositive(5*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(7*multDamages,shield*multShield);
	}
	else if(chip==CHIP_PEBBLE) {
		degatsMin=degatsMin+diffPositive(2*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(17*multDamages,shield*multShield);
	}
	else if(chip==CHIP_SPARK) {
		degatsMin=degatsMin+diffPositive(8*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(16*multDamages,shield*multShield);
	}
	else if(chip==CHIP_ICE) {
		degatsMin=degatsMin+diffPositive(17*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(19*multDamages,shield*multShield);
	}
	else if(chip==CHIP_ROCK) {
		degatsMin=degatsMin+diffPositive(30*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(31*multDamages,shield*multShield);
	}
	else if(chip==CHIP_FLASH) {
		degatsMin=degatsMin+diffPositive(19*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(24*multDamages,shield*multShield);
	}
	else if(chip==CHIP_FLAME) {
		degatsMin=degatsMin+diffPositive(25*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(27*multDamages,shield*multShield);
	}
	else if(chip==CHIP_STALACTITE) {
		degatsMin=degatsMin+diffPositive(64*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(67*multDamages,shield*multShield);
	}
	else if(chip==CHIP_LIGHTNING) {
		degatsMin=degatsMin+diffPositive(35*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(47*multDamages,shield*multShield);
	}
	else if(chip==CHIP_ROCKFALL) {
		degatsMin=degatsMin+diffPositive(48*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(56*multDamages,shield*multShield);
	}
	else if(chip==CHIP_ICEBERG) {
		degatsMin=degatsMin+diffPositive(72*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(80*multDamages,shield*multShield);
	}
	else if(chip==CHIP_METEORITE) {
		degatsMin=degatsMin+diffPositive(70*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(80*multDamages,shield*multShield);
	}
	else if(chip==CHIP_DEVIL_STRIKE) {
		degatsMin=degatsMin+5*diffPositive(25*multDamages,shield*multShield);
		degatsMax=degatsMax+5*diffPositive(25*multDamages,shield*multShield);
	}
	else if(chip==CHIP_BURNING) {
		degatsMin=degatsMin+diffPositive(78*multDamages,shield*multShield);
		degatsMax=degatsMax+diffPositive(87*multDamages,shield*multShield);
	}
}