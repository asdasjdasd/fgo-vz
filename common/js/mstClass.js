function findClassName(searchId)
{
	var i;
	for(i in mstClass)
		if(mstClass[i].id==searchId) return mstClass[i].name;
	for(i in master.mstClass)
		if(master.mstClass[i].id==searchId) return master.mstClass[i].name;
	return "不明";
}
function findClassImageId(searchId)
{
	var i;
	for(i in mstClass)
		if(mstClass[i].id==searchId) return mstClass[i].iconImageId;
	for(i in master.mstClass)
		if(master.mstClass[i].id==searchId) return master.mstClass[i].iconImageId;
	return 12;
}
var mstClass = JSON.parse('[{"id":1,"attri":1,"name":"Saber","attackRate":1000,"imageId":1,"iconImageId":1,"frameId":0,"priority":10000,"groupType":1},{"id":2,"attri":2,"name":"Archer","attackRate":950,"imageId":2,"iconImageId":2,"frameId":0,"priority":9000,"groupType":1},{"id":3,"attri":3,"name":"Lancer","attackRate":1050,"imageId":3,"iconImageId":3,"frameId":0,"priority":8000,"groupType":1},{"id":4,"attri":4,"name":"Rider","attackRate":1000,"imageId":4,"iconImageId":4,"frameId":0,"priority":7000,"groupType":1},{"id":5,"attri":5,"name":"Caster","attackRate":900,"imageId":5,"iconImageId":5,"frameId":0,"priority":6000,"groupType":1},{"id":6,"attri":6,"name":"Assassin","attackRate":900,"imageId":6,"iconImageId":6,"frameId":0,"priority":5000,"groupType":1},{"id":7,"attri":7,"name":"Berserker","attackRate":1100,"imageId":7,"iconImageId":7,"frameId":0,"priority":4000,"groupType":1},{"id":8,"attri":8,"name":"Shielder","attackRate":1000,"imageId":9999,"iconImageId":8,"frameId":0,"priority":900,"groupType":2},{"id":9,"attri":9,"name":"Ruler","attackRate":1100,"imageId":8,"iconImageId":9,"frameId":0,"priority":3000,"groupType":2},{"id":10,"attri":10,"name":"Alterego","attackRate":1000,"imageId":12,"iconImageId":10,"frameId":0,"priority":1000,"groupType":2},{"id":11,"attri":11,"name":"Avenger","attackRate":1100,"imageId":11,"iconImageId":11,"frameId":0,"priority":2000,"groupType":2},{"id":12,"attri":12,"name":"？","attackRate":1000,"imageId":9999,"iconImageId":12,"frameId":0,"priority":50,"groupType":2},{"id":13,"attri":1,"name":"？","attackRate":1000,"imageId":1,"iconImageId":13,"frameId":0,"priority":50,"groupType":2},{"id":14,"attri":2,"name":"？","attackRate":950,"imageId":2,"iconImageId":14,"frameId":0,"priority":50,"groupType":2},{"id":15,"attri":3,"name":"？","attackRate":1050,"imageId":3,"iconImageId":15,"frameId":0,"priority":50,"groupType":2},{"id":16,"attri":4,"name":"？","attackRate":1000,"imageId":4,"iconImageId":16,"frameId":0,"priority":50,"groupType":2},{"id":17,"attri":5,"name":"Grand Caster","attackRate":900,"imageId":5,"iconImageId":17,"frameId":0,"priority":50,"groupType":2},{"id":18,"attri":6,"name":"？","attackRate":900,"imageId":6,"iconImageId":18,"frameId":0,"priority":50,"groupType":2},{"id":19,"attri":7,"name":"？","attackRate":1100,"imageId":7,"iconImageId":19,"frameId":0,"priority":50,"groupType":2},{"id":20,"attri":20,"name":"BeastII","attackRate":1000,"imageId":9999,"iconImageId":20,"frameId":20,"priority":50,"groupType":2},{"id":21,"attri":20,"name":"？","attackRate":1000,"imageId":9999,"iconImageId":12,"frameId":0,"priority":50,"groupType":2},{"id":22,"attri":22,"name":"BeastI","attackRate":1000,"imageId":9999,"iconImageId":21,"frameId":20,"priority":50,"groupType":2},{"id":23,"attri":23,"name":"MoonCancer","attackRate":1000,"imageId":23,"iconImageId":23,"frameId":0,"priority":950,"groupType":2},{"id":24,"attri":24,"name":"BeastIII","attackRate":1000,"imageId":9999,"iconImageId":24,"frameId":20,"priority":50,"groupType":2},{"id":25,"attri":25,"name":"Foreigner","attackRate":1000,"imageId":25,"iconImageId":25,"frameId":0,"priority":925,"groupType":2,"relationId":25,"supportGroup":8},{"id":97,"attri":0,"name":"不明","attackRate":1000,"imageId":9999,"iconImageId":12,"frameId":0,"priority":50,"groupType":2},{"id":98,"attri":0,"name":"NPC(不使用)","attackRate":1000,"imageId":9999,"iconImageId":98,"frameId":0,"priority":50,"groupType":2},{"id":99,"attri":0,"name":"Enemy(不使用)","attackRate":1000,"imageId":9999,"iconImageId":99,"frameId":0,"priority":50,"groupType":2},{"id":100,"attri":0,"name":"Test(不使用)","attackRate":1000,"imageId":9999,"iconImageId":100,"frameId":0,"priority":50,"groupType":2},{"id":124,"attri":24,"name":"？","attackRate":1000,"imageId":9999,"iconImageId":124,"frameId":0,"priority":50,"groupType":2},{"id":1000,"attri":1000,"name":"OTHER","attackRate":1000,"imageId":9999,"iconImageId":1000,"frameId":0,"priority":50,"groupType":3},{"id":1001,"attri":1001,"name":"ALL","attackRate":1000,"imageId":9999,"iconImageId":1001,"frameId":0,"priority":50,"groupType":3}]');