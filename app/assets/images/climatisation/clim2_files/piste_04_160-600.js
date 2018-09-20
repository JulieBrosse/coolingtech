(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"piste_04_160_600_atlas_", frames: [[0,557,169,107],[0,666,160,44],[162,666,60,62],[0,0,300,555]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.carte = function() {
	this.spriteSheet = ss["piste_04_160_600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.haut11111111111111 = function() {
	this.spriteSheet = ss["piste_04_160_600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Ticket = function() {
	this.spriteSheet = ss["piste_04_160_600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.visuel2 = function() {
	this.spriteSheet = ss["piste_04_160_600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.texte_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#091745").s().p("AgjAjQgKgOAAgUQAAgYANgOQAMgOAUAAQAVAAANAPQAMAPAAAdIhBAAQABALAGAHQAGAGAIAAQAGAAAEgDQAEgEACgHIAaAFQgFAOgKAHQgLAIgQAAQgZAAgMgRgAgNgYQgFAGAAALIAmAAQAAgLgGgHQgFgFgIAAQgIgBgGAHg");
	this.shape.setTransform(195.8,113.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#091745").s().p("AgdAuQgIgEgDgIQgEgIAAgOIAAg9IAaAAIAAAtQAAAUACAFQABAEAEADQAEADAGAAQAFAAAGgEQAFgEACgFQACgGAAgUIAAgpIAaAAIAABhIgYAAIAAgPQgGAIgIAFQgIAEgKAAQgKAAgIgEg");
	this.shape_1.setTransform(184.8,113.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#091745").s().p("AATAzIAAgzQAAgPgCgEQgBgFgEgDQgEgCgFAAQgGAAgGADQgFAEgCAGQgCAGAAAQIAAAtIgaAAIAAhiIAYAAIAAAOQANgRATAAQAIAAAIAEQAGADAFAFQADAFABAGQACAGAAAMIAAA8g");
	this.shape_2.setTransform(173.3,113.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#091745").s().p("AgjAjQgKgOAAgUQAAgYANgOQAMgOAUAAQAVAAANAPQAMAPAAAdIhBAAQABALAGAHQAGAGAIAAQAGAAAEgDQAEgEACgHIAaAFQgFAOgKAHQgLAIgQAAQgZAAgMgRgAgNgYQgFAGAAALIAmAAQAAgLgGgHQgFgFgIAAQgIgBgGAHg");
	this.shape_3.setTransform(162.1,113.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#091745").s().p("AgLAxIgnhhIAbAAIATAxIAEARIADgJIADgIIASgxIAbAAIgnBhg");
	this.shape_4.setTransform(151.5,113.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#091745").s().p("AASAzIAAgzQABgPgCgEQgCgFgEgDQgDgCgGAAQgFAAgGADQgFAEgCAGQgCAGAAAQIAAAtIgaAAIAAhiIAYAAIAAAOQANgRASAAQAKAAAGAEQAIADADAFQAEAFABAGQACAGAAAMIAAA8g");
	this.shape_5.setTransform(140.6,113.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#091745").s().p("AgjAjQgKgOAAgUQAAgYANgOQAMgOAUAAQAVAAANAPQAMAPAAAdIhBAAQABALAGAHQAGAGAIAAQAGAAAEgDQAEgEACgHIAaAFQgFAOgKAHQgLAIgQAAQgZAAgMgRgAgNgYQgFAGAAALIAmAAQAAgLgGgHQgFgFgIAAQgIgBgGAHg");
	this.shape_6.setTransform(129.4,113.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#091745").s().p("AgMBEIAAhiIAZAAIAABigAgMgrIAAgYIAZAAIAAAYg");
	this.shape_7.setTransform(121.5,111.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#091745").s().p("AgJBBQgIgEgGgIIAAAOIgYAAIAAiHIAaAAIAAAxQAMgOAPAAQATAAALANQAMANAAAYQAAAZgMAOQgMANgRAAQgHAAgJgEgAgPgFQgGAGAAAOQAAAQAEAHQAIAKAJAAQAKABAFgIQAHgHAAgQQAAgRgHgGQgFgIgKAAQgIAAgHAIg");
	this.shape_8.setTransform(113.3,111.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#091745").s().p("AgjAjQgKgOAAgUQAAgYANgOQAMgOAUAAQAVAAANAPQAMAPAAAdIhBAAQABALAGAHQAGAGAIAAQAGAAAEgDQAEgEACgHIAaAFQgFAOgKAHQgLAIgQAAQgZAAgMgRgAgNgYQgFAGAAALIAmAAQAAgLgGgHQgFgFgIAAQgIgBgGAHg");
	this.shape_9.setTransform(96.6,113.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#091745").s().p("AgjA4QgMgOAAgYQAAgZALgNQAMgNATAAQAPAAAMAOIAAgxIAaAAIAACHIgYAAIAAgOQgGAIgJAEQgHAEgIAAQgRAAgMgNgAgOgFQgHAGAAAOQABARAEAHQAGAKAKgBQAKAAAFgHQAHgIAAgPQAAgRgGgGQgGgIgKAAQgIAAgGAIg");
	this.shape_10.setTransform(85.4,111.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#091745").s().p("AgeAsQgMgJgDgOIAagDQACAHAFAEQAFAEAIAAQAKAAAGgEQADgDAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgHgCQgegHgJgGQgMgHAAgOQAAgNAKgJQALgJAVAAQAUAAAJAIQAKAGADANIgYAFQgCgHgEgCQgFgEgHAAQgKAAgEAEQgDACAAACQAAAEACACQAEACAUAEQAVAFAIAHQAIAGAAANQAAANgLAKQgLAKgXAAQgTgBgMgHg");
	this.shape_11.setTransform(185.2,90.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#091745").s().p("AgjAjQgKgNAAgVQAAgXANgOQAMgOAUgBQAVABANAPQAMAOAAAdIhBAAQABAMAGAGQAGAGAIAAQAGAAAEgDQAEgEACgHIAaAEQgFAPgKAIQgLAGgQABQgZgBgMgQgAgNgYQgFAGAAALIAmAAQAAgLgGgHQgFgFgIgBQgIAAgGAHg");
	this.shape_12.setTransform(174.8,90.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#091745").s().p("AgMBEIAAiHIAZAAIAACHg");
	this.shape_13.setTransform(166.9,88.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#091745").s().p("AgMBEIAAhhIAZAAIAABhgAgMgrIAAgYIAZAAIAAAYg");
	this.shape_14.setTransform(161.6,88.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#091745").s().p("AAoBEIAAhqIgbBqIgZAAIgbhqIAABqIgaAAIAAiHIApAAIAYBcIAYhcIAqAAIAACHg");
	this.shape_15.setTransform(151,88.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#091745").s().p("AgfA2QgMgPAAgnQAAgmANgRQALgNATAAQAUAAALANQANARAAAmQAAAmgNASQgLAOgUgBQgTAAgMgPgAgIgsQgDADgCAIQgDAKAAAXQAAAYACAJQADAJAEACQADAEAEAAQAFAAADgEQAEgDACgHQADgKAAgYQAAgXgDgJQgCgJgEgDQgDgDgFAAQgEAAgEADg");
	this.shape_16.setTransform(132.5,88.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#091745").s().p("AgfA2QgMgPAAgnQAAgmANgRQALgNATAAQAUAAALANQANARAAAmQAAAmgNASQgLAOgUgBQgTAAgMgPgAgIgsQgDADgCAIQgDAKAAAXQAAAYACAJQADAJAEACQADAEAEAAQAFAAADgEQAEgDACgHQADgKAAgYQAAgXgDgJQgCgJgEgDQgDgDgFAAQgEAAgEADg");
	this.shape_17.setTransform(121.9,88.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#091745").s().p("AgfA2QgMgPAAgnQAAgmANgRQALgNATAAQAUAAALANQANARAAAmQAAAmgNASQgLAOgUgBQgTAAgMgPgAgIgsQgDADgCAIQgDAKAAAXQAAAYACAJQADAJAEACQADAEAEAAQAFAAADgEQAEgDACgHQADgKAAgYQAAgXgDgJQgCgJgEgDQgDgDgFAAQgEAAgEADg");
	this.shape_18.setTransform(111.4,88.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#091745").s().p("AgfA1QgOgPAAglQABglAOgQQANgQAWAAQAPgBAKAJQAKAJADAQIgaADQgBgHgDgFQgEgDgGAAQgIAAgFAIQgGAGgCAYQAKgLAOAAQAQgBAMANQALAMAAATQAAAVgMANQgMANgUgBQgTABgNgRgAgKAEQgFAGAAALQAAANAFAHQAHAHAGAAQAHAAAFgGQAFgGAAgMQAAgOgFgGQgFgFgJAAQgGAAgFAFg");
	this.shape_19.setTransform(95.7,88.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AACA1QgNABgLgGQgMgFgGgMQgHgMAAgUIAAgKIAEgNQADgHAFgGQAFgHAJgEQAJgEANAAQAHAAAIACQAIACAHAHQAHAFAFALQAEALABARIAAAEIhFAAIABAHQABAFADAEQACAEAEACQAGADAGAAQAGAAAFgDQAFgCACgGIAbAAQgEAMgHAHQgIAHgIADQgIADgIAAIgCAAgAAVgJQgBgIgEgFQgDgEgFgCQgEgCgEAAQgJAAgEAFQgFAGgCAKIApAAIAAAAg");
	this.shape_20.setTransform(190.4,44.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AACBIQgNABgLgGQgMgFgGgMQgHgMAAgVIABgKIADgMQADgHAFgGQAFgHAKgEQAIgEAMAAQAIAAAIACQAIACAIAHQAGAFAFALQAEAKABASIAAAEIhEAAIAAAHQABAFACAEQADAEAEACQAFADAHAAQAGAAAFgDQAEgCACgGIAbAAQgDAMgHAHQgHAHgJADQgIAEgIAAIgCgBgAAVAJQgCgIgDgEQgDgEgFgCQgEgCgEAAQgJAAgEAFQgFAGgCAJIApAAIAAAAgAgKgsIARgcIAdAAIgcAcg");
	this.shape_21.setTransform(179.8,42.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATA0IAAg8IAAgJQgCgEgDgEQgEgDgIAAQgIAAgGAFQgGAHAAALIAAA5IgbAAIAAhkIAaAAIAAAPIAGgIQADgDAGgEQAFgCAKgBQAJAAAJAEQAHAEAFAIQAFAHAAALIAABFg");
	this.shape_22.setTransform(168.8,44.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AATA0IAAg8IAAgJQgBgEgEgEQgEgDgIAAQgIAAgGAFQgGAHAAALIAAA5IgaAAIAAhkIAZAAIAAAPIAFgIQAEgDAGgEQAFgCAKgBQAKAAAIAEQAHAEAFAIQAFAHAAALIAABFg");
	this.shape_23.setTransform(157.2,44.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAyQgHgDgFgGQgEgHAAgKQAAgKAEgHQADgGAHgDQAHgEAIgBIAXgEQAEAAACgCQADgCAAgEQAAgGgDgCQgCgDgEAAIgHgBQgHAAgDADQgDACgCADIgBAGIgaAAQACgPAGgIQAHgHAKgDQAKgCAJAAIAMABQAHABAHADQAGADAEAGQAEAGABAJIAAA2IAAAJIACAFIADACIAAAEIgcAAIgCgGIgBgGIgHAGQgEAEgFACQgGACgJAAQgIAAgHgDgAAKAEIgMADIgJACQgEACgCADQgDADAAAFQAAAFACADQACACADABIAGABQAGAAAEgCQAFgCAEgFQADgEAAgHIAAgNQgBACgEABg");
	this.shape_24.setTransform(146.1,44.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AACAiQgJABgHgEQgHgDgFgIQgEgIAAgMIAAgHIADgJQABgEAEgEQADgEAGgDQAFgDAJAAIAKACQAFABAEAEQAFAEADAHQADAHAAALIAAADIgsAAIABAEIACAFQACADACACQAEACAEAAQADAAAEgCQACgCABgDIASAAQgCAHgFAFQgEAFgGACQgFACgEAAIgCgBgAANgGQAAgFgCgDQgCgDgDgBQgDgCgDABQgFAAgDADQgEAEgBAGIAaAAIAAAAg");
	this.shape_25.setTransform(132.1,39.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSAiIAAhBIAQAAIAAALIAEgGIAFgFQADgCAGAAIACAAIABABIAAARIgDAAIgCAAQgHAAgDACQgEADAAADIgBAHIAAAig");
	this.shape_26.setTransform(126.6,39.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AABAvQgIAAgHgDQgHgEgFgIQgEgHAAgOIABgGIABgIQACgFAEgEQADgEAGgDQAGgCAHAAIAKABQAGACAFAEQAFAEACAHQADAGAAALIAAADIgsAAIABAFIACAFQABADAEABQADACADAAQAFAAACgCQADgBACgEIASAAQgDAIgEAEQgFAFgGACQgFACgEAAIgDAAgAAOAGQgBgFgDgCQgBgEgDgBQgDgBgDAAQgFAAgEAEQgCADgBAGIAaAAIAAAAgAgEgcIgSgSIATAAIAKASg");
	this.shape_27.setTransform(120.4,38.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AADBDIAAhbIggAAIAAgTIAFAAQAMAAAHgEQAHgDADgGQACgGAAgFIAXAAIAACGg");
	this.shape_28.setTransform(110.7,42.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAyQgHgDgFgGQgEgHAAgKQAAgKAEgHQADgGAHgDQAHgEAIgBIAXgEQAEAAACgCQADgCAAgEQAAgGgDgCQgCgDgEAAIgHgBQgHAAgDADQgDACgCADIgBAGIgaAAQACgPAGgIQAHgHAKgDQAKgCAJAAIAMABQAHABAHADQAGADAEAGQAEAGABAJIAAA2IAAAJIACAFIADACIAAAEIgcAAIgCgGIgBgGIgHAGQgEAEgFACQgGACgJAAQgIAAgHgDgAAKAEIgMADIgJACQgEACgCADQgDADAAAFQAAAFACADQACACADABIAGABQAGAAAEgCQAFgCAEgFQADgEAAgHIAAgNQgBACgEABg");
	this.shape_29.setTransform(95.9,44.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMBEIAAiHIAZAAIAACHg");
	this.shape_30.setTransform(87.9,42.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAzQgNgGgGgNQgHgMgBgVIABgLIAEgOQADgHAGgHQAFgGAJgFQAKgEANAAQAHAAAKACQAIADAHAGQAIAGAFAMQAEAMAAARIAAAFIhIAAIABAHIAEAJQACAEAFADQAFADAHAAQAGAAAFgDQAGgDACgGIAcAAQgDANgIAHQgIAIgJADQgJADgKAAQgNAAgMgFgAAWgKQgBgIgDgFQgEgFgEgCQgFgCgFAAQgIAAgGAGQgGAGgBAKIArAAIAAAAg");
	this.shape_31.setTransform(196,18.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAXBEIgHAAIgDAAQgMAAgFgDQgGgCgCgGQgCgFAAgHIAAg/IgPAAIAAgUIAPAAIAAgdIAbAAIAAAdIARAAIAAAUIgRAAIAAA5IAAAFQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAIABIADAAIADAAIAAAVIgHAAg");
	this.shape_32.setTransform(187,17.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgeA3IAAhqIAbAAIAAATIAAAAIAGgLQADgEAGgDQAFgDAIgBIADABIADAAIAAAcIgEAAIgEAAQgLAAgGAEQgFAEgBAFQgCAGAAAGIAAA3g");
	this.shape_33.setTransform(180.4,18.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAzQgLgGgHgNQgHgMgBgVIABgLIAEgOQADgHAGgHQAFgGAJgFQAKgEANAAQAHAAAKACQAIADAIAGQAHAGAFAMQAEAMAAARIAAAFIhIAAIABAHIAEAJQADAEAEADQAFADAHAAQAHAAAEgDQAGgDABgGIAdAAQgEANgHAHQgIAIgJADQgJADgKAAQgNAAgNgFgAAWgKQgBgIgDgFQgEgFgEgCQgFgCgFAAQgIAAgGAGQgFAGgCAKIArAAIAAAAg");
	this.shape_34.setTransform(170.4,18.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOBJIAAhWIgQAAIAAgUIAQAAIAAgIQAAgRAIgHQAHgHAPAAIAJAAIAFABIAAAWIgIAAIgGABQgBABAAAAQgBABAAAAQAAAAAAABQgBABAAAAIAAAHIAAAEIASAAIAAAUIgSAAIAABWg");
	this.shape_35.setTransform(161.5,16.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgOBJIAAhWIgQAAIAAgUIAQAAIAAgIQAAgRAIgHQAHgHAPAAIAJAAIAFABIAAAWIgIAAIgGABQgBABAAAAQgBABAAAAQAAAAAAABQgBABAAAAIAAAHIAAAEIASAAIAAAUIgSAAIAABWg");
	this.shape_36.setTransform(154.9,16.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOBKQgIgBgKgFQgJgEgJgIQgHgJgGgNQgFgOAAgUQAAgTAFgOQAGgNAHgJQAJgIAJgEQAKgFAIgBIAOgCIAOACQAJABAJAFQAJAEAJAIQAIAJAGANQAEAOABATQgBAUgEAOQgGANgIAJQgJAIgJAEQgJAFgJABIgOACIgOgCgAgMgvQgHACgGAGQgGAFgDAKQgEAKAAAOQAAAPAEAKQADAKAGAFQAGAGAHACQAGACAGAAQAGAAAGgCQAHgCAHgGQAFgFAEgKQADgKABgPQgBgOgDgKQgEgKgFgFQgHgGgHgCQgGgCgGAAQgGAAgGACg");
	this.shape_37.setTransform(143.9,16.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXAzQgMgGgIgNQgGgMAAgVIABgLIADgOQADgHAFgHQAGgGAKgFQAIgEANAAQAJAAAIACQAJADAIAGQAHAGAEAMQAGAMAAARIAAAFIhIAAIABAHIADAJQACAEAFADQAFADAIAAQAFAAAGgDQAEgDADgGIAdAAQgFANgHAHQgIAIgJADQgJADgJAAQgPAAgLgFgAAWgKQgBgIgEgFQgDgFgFgCQgEgCgFAAQgIAAgGAGQgFAGgBAKIAqAAIAAAAg");
	this.shape_38.setTransform(124.9,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAXBEIgGAAIgEAAQgMAAgFgDQgHgCgCgGQgCgFAAgHIAAg/IgOAAIAAgUIAOAAIAAgdIAbAAIAAAdIASAAIAAAUIgSAAIAAA5IABAFQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAIABIADAAIADAAIAAAVIgHAAg");
	this.shape_39.setTransform(116,17.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgeA3IAAhqIAbAAIAAATIAAAAIAGgLQADgEAGgDQAFgDAIgBIADABIADAAIAAAcIgEAAIgEAAQgLAAgGAEQgFAEgBAFQgCAGAAAGIAAA3g");
	this.shape_40.setTransform(109.3,18.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AggA1QgHgDgFgHQgFgHAAgLQAAgKAEgHQAEgIAHgDQAHgEAJgBIAYgEQAEAAADgCQADgCAAgEQAAgGgDgDQgDgCgEgBIgHgBQgHAAgEADQgDACgCAEIgCAGIgbAAQACgQAHgIQAHgIALgDQAKgCAKAAIANABQAHABAHAEQAHADAEAGQAEAGAAAKIAAA4IABAKIACAFIAEACIAAAEIgfAAIgBgGIgBgGIgIAHQgEADgGADQgGACgKAAQgIAAgHgDgAAKAEIgMADIgJADQgFABgCADQgDAEAAAFQAAAFACADQACADADABIAGABQAGAAAFgCQAGgDADgFQAEgEAAgHIAAgOQgCACgEABg");
	this.shape_41.setTransform(99.4,18.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgfBDQgPgIgIgRQgJgRAAgZQAAgYAJgRQAJgRAOgIQAPgJASAAQAQABAMAEQALAFAIAIQAHAHAEAJQADAJABAIIgeAAQgBgEgDgGQgDgGgGgEQgHgEgMgBQgEAAgGADQgHACgFAFQgFAGgEAKQgDAJAAAPQAAANADALQAEALAIAHQAIAGALABQANAAAIgHQAIgHADgNIAeAAQgDAPgIAMQgIAMgNAHQgMAGgSABQgTAAgOgJg");
	this.shape_42.setTransform(86.7,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.texte_05, new cjs.Rectangle(1,0,279,124.6), null);


(lib.texte_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#091745").s().p("AAhA6IAAhfIAAAAIgVBfIgXAAIgVhfIAAAAIAABfIgXAAIAAhyIAjAAIAUBZIAVhZIAjAAIAAByg");
	this.shape.setTransform(151.2,-75.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#091745").s().p("AgoA6IAAhyIAYAAIAABcIA5AAIAAAWg");
	this.shape_1.setTransform(140,-75.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#091745").s().p("AAUA6IgjgzIgLALIAAAoIgYAAIAAhyIAYAAIAAAuIArguIAfAAIgvAuIAyBEg");
	this.shape_2.setTransform(129.6,-75.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#091745").s().p("AgrA6IAAhyIBUAAIAAAUIg8AAIAAAYIA3AAIAAATIg3AAIAAAeIA/AAIAAAVg");
	this.shape_3.setTransform(184.7,-96.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#091745").s().p("AgZA2QgMgHgGgOQgHgNAAgUQAAgTAHgNQAHgOAMgHQAMgGAOAAQAMAAAKADQAJAFAGAFQAGAHADAHQADAHAAAGIgYAAIgDgIQgCgFgFgDQgFgDgKAAIgJABQgEACgFAFQgEAEgDAHQgDAIAAALQAAALADAJQADAJAGAFQAHAFAJABQAKAAAGgGQAHgFACgLIAYAAQgCANgHAJQgGAKgKAFQgKAFgPAAQgOAAgMgGg");
	this.shape_4.setTransform(173.4,-96.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#091745").s().p("AAXA6IguhRIAAAAIAABRIgXAAIAAhyIAaAAIAsBPIABAAIAAhPIAWAAIAAByg");
	this.shape_5.setTransform(161.8,-96.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#091745").s().p("AAdA6IgIgYIgpAAIgIAYIgaAAIAphyIAbAAIApBygAAOAOIgOgsIAAAAIgOAsIAcAAg");
	this.shape_6.setTransform(150.3,-96.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#091745").s().p("AAWA6IgCgJIgBgPQAAgHgBgFQgBgFgEgCQgEgCgJAAIgYAAIAAAtIgXAAIAAhyIA5AAQALAAAIADQAHAEAEAFQADAGACAFIABAJQAAAJgEAIQgFAHgJADIAIAEQAEADABAFQACAGAAALIAAAMIABAHIAEADIAAAEgAgYgGIAcAAQAJAAAFgEQAEgDAAgIIgBgHQgBgEgEgCQgEgCgHgBIgdAAg");
	this.shape_7.setTransform(139,-96.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#091745").s().p("AgoA6IAAhyIBRAAIAAAUIg5AAIAAAaIAxAAIAAATIgxAAIAAAxg");
	this.shape_8.setTransform(128.5,-96.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#091745").s().p("AAWA6IgCgJIgBgPQAAgHgBgFQgBgFgEgCQgEgCgJAAIgYAAIAAAtIgXAAIAAhyIA5AAQALAAAIADQAHAEAEAFQADAGACAFIABAJQAAAJgEAIQgFAHgJADIAIAEQAEADABAFQACAGAAALIAAAMIABAHIAEADIAAAEgAgYgGIAcAAQAJAAAFgEQAEgDAAgIIgBgHQgBgEgEgCQgEgCgHgBIgdAAg");
	this.shape_9.setTransform(113.2,-96.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#091745").s().p("AgLA6IAAhyIAXAAIAAByg");
	this.shape_10.setTransform(104.9,-96.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#091745").s().p("AAdA6IgIgYIgpAAIgIAYIgaAAIAphyIAbAAIApBygAAOAOIgOgsIAAAAIgOAsIAcAAg");
	this.shape_11.setTransform(96.9,-96.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#091745").s().p("AgfAlIAAgPIAlgrIgiAAIAAgPIA7AAIAAAQIglApIAmAAIAAAQg");
	this.shape_12.setTransform(188.6,-115.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#091745").s().p("AgQAjQgJgDgEgJQgFgJgBgPIABgHIADgKIAFgKQAFgEAGgDQAHgDAIAAIAMABQAGACAGAFQAEAEAEAIQAEAIgBAMIAAADIgxAAIAAAGIADAGQABADADACQAEACAFAAQAEAAADgCQAEgDACgEIATAAQgCAJgGAGQgEAFgHACQgHACgGAAQgKAAgIgEgAAPgGQgBgGgCgEQgCgDgDgCQgDgBgEAAQgGAAgEAEQgDAEgBAIIAdAAIAAAAg");
	this.shape_13.setTransform(181.2,-115.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#091745").s().p("AAOAyIAAgtIAAgFQgBgEgDgCQgDgDgGAAQgFAAgFAFQgEAEAAAIIAAAqIgUAAIAAhjIAUAAIAAAjIAAAAQACgEAGgEQAFgDAIAAQAHAAAGADQAGACADAGQAEAGAAAIIAAAyg");
	this.shape_14.setTransform(173.1,-116.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#091745").s().p("AgQAkQgHgEgEgFQgEgGgBgHQgCgGABgGQgBgLAEgJQAEgKAIgFQAIgFALAAIAKABIAKAEQAFADAEAGQADAGABAIIgUAAIgBgFIgEgFQgDgCgEAAIgBAAQgFAAgDAEQgEADgBAFIgBAKIAAAGIACAIQABAEADACQADADAFAAQAFAAADgCQADgDABgDIABgFIAUAAIgCAIQgBAFgEAFQgEAEgGAEQgHADgKAAQgJAAgHgDg");
	this.shape_15.setTransform(164.9,-115.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#091745").s().p("AAOAmIAAgsIAAgGQgBgEgDgCQgDgDgGAAQgFAAgFAFQgEAEAAAJIAAApIgUAAIAAhJIATAAIAAALIAEgGQADgDAEgCQAEgCAHAAQAHAAAGADQAGACADAGQAEAGAAAIIAAAyg");
	this.shape_16.setTransform(152.9,-115.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#091745").s().p("AgSAjQgIgEgGgJQgFgJAAgNQAAgMAFgJQAGgJAIgEQAJgEAJAAQAKAAAJAEQAIAEAGAJQAFAJAAAMQAAANgFAJQgGAJgIAEQgJAEgKAAQgJAAgJgEgAgKgSQgFAEgBAFIgBAJIABAKQABAFAFAEQAEAEAGAAQAHAAAEgEQAEgEACgFIABgKIgBgJQgCgFgEgEQgEgEgHAAQgGAAgEAEg");
	this.shape_17.setTransform(144.4,-115.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#091745").s().p("AgJAzIAAhKIATAAIAABKgAgJggIAAgSIATAAIAAASg");
	this.shape_18.setTransform(138.2,-116.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#091745").s().p("AALAwIgCAAQgJAAgCgCQgFgCgCgEQgBgEAAgEIAAgtIgKAAIAAgOIAKAAIAAgUIASAAIAAAUIANAAIAAAOIgNAAIAAAoIABADIACACIAFABIACAAIADgBIAAAPIgFABIgFAAg");
	this.shape_19.setTransform(133.8,-116.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#091745").s().p("AgQAkQgHgEgEgFQgEgGgBgHQgCgGABgGQgBgLAEgJQAEgKAIgFQAIgFALAAIAKABIAKAEQAFADAEAGQADAGABAIIgUAAIgBgFIgEgFQgDgCgEAAIgBAAQgFAAgDAEQgEADgBAFIgBAKIAAAGIACAIQABAEADACQADADAFAAQAFAAADgCQADgDABgDIABgFIAUAAIgCAIQgBAFgEAFQgEAEgGAEQgHADgKAAQgJAAgHgDg");
	this.shape_20.setTransform(127.7,-115.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#091745").s().p("AgUAjQgGgDgDgGQgDgGgBgJIAAgwIAUAAIAAAtQAAAGACADQACADADABIAGABIAGgCQADgBACgEQADgEAAgGIAAgqIAUAAIAABJIgTAAIAAgKIgBAAQgDAGgGADQgFADgHAAQgIAAgFgDg");
	this.shape_21.setTransform(119.5,-115.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#091745").s().p("AgSAwQgGgDgEgGQgEgGgCgHIgBgPQAAgMAEgIQAEgJAIgEQAGgEAJAAQAFAAAEACQAFACACACIAFAFIAAgjIATAAIAABjIgTAAIAAgJIAAAAQgEAGgGADQgFACgGAAQgIAAgGgDgAgJgGQgDADgBAEQgCAGAAAGIAAAHIAEAHQABAEADACQADACAEAAQAGAAAEgDQAEgDACgFQABgFAAgFQABgGgCgGQgCgEgDgEQgDgDgIAAQgFAAgEADg");
	this.shape_22.setTransform(110.9,-116.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#091745").s().p("AgQAyQgIgEgGgJQgEgJAAgQIABgGIACgJIAGgLQAEgEAGgDQAHgDAJAAIALABQAGADAFAEQAGAEADAJQAEAGAAANIAAADIgyAAIAAAGIACAGQACADAEACQADACAFAAQAEAAAEgCQADgDABgEIAVAAQgDAKgFAFQgGAFgGADQgHABgGAAQgKAAgIgDgAAPAHQAAgGgDgCQgCgEgEgCQgDgBgDAAQgGAAgDAFQgFADAAAHIAdAAIAAAAgAgGggIALgVIAWAAIgVAVg");
	this.shape_23.setTransform(102.8,-116.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#091745").s().p("AATAyIgCgIIAAgMIgBgLQgBgEgEgCQgDgCgIAAIgUAAIAAAnIgVAAIAAhjIAyAAQAKAAAGADQAHADADAFQADAEABAFIACAIQgBAJgEAGQgDAGgIACIAHAEQADACABAFQACAFAAAKIAAALIABAGIADADIAAACgAgUgFIAXAAQAIAAAFgDQADgDAAgIIgBgFQgBgDgDgDQgDgCgGAAIgZAAg");
	this.shape_24.setTransform(94.1,-116.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#091745").s().p("AgRAmQgJgEgGgKQgFgJAAgQIABgIIADgKQACgGAEgFQAEgEAHgEQAHgDAJAAQAGAAAHACQAGACAGAFQAGAEADAJQAEAIAAANIAAAEIg2AAIABAGIACAGQACADAEACQAEADAFgBQAEABAEgDQAEgCABgFIAWAAQgDAKgGAGQgFAGgHACQgHACgHAAQgKAAgJgEgAAQgHQAAgGgDgEQgCgEgEgBIgHgBQgGgBgEAFQgEAEgBAIIAfAAIAAAAg");
	this.shape_25.setTransform(187.1,-134.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#091745").s().p("AgTAzQgHgDgEgGQgEgGgCgIQgCgIAAgIQABgNAEgJQAFgJAHgFQAIgEAJAAQAFAAAFACQAEACADADIAFAFIAAgmIAVAAIAABrIgVAAIAAgKQgEAGgGADQgGADgGAAQgJAAgGgEgAgJgHQgEAEgBAEQgCAGAAAGIABAIIADAIQABAEAEACQADADAEAAQAHAAAEgEQAEgDACgFQACgFAAgGQAAgHgCgGQgBgEgEgEQgEgEgHAAQgGAAgEADg");
	this.shape_26.setTransform(178.2,-135.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#091745").s().p("AAPApIAAgwIAAgGQgBgEgDgDQgDgCgHAAQgGAAgEAEQgFAFAAAJIAAAtIgVAAIAAhPIAUAAIAAAMIAFgGQACgDAFgDQAEgCAHAAQAIAAAHADQAGADADAGQAEAGAAAJIAAA2g");
	this.shape_27.setTransform(165.1,-134.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#091745").s().p("AgTAmQgJgFgGgJQgFgKgBgOQABgOAFgIQAGgKAJgFQAJgEAKAAQALAAAJAEQAJAFAGAKQAGAIAAAOQAAAOgGAKQgGAJgJAFQgJAEgLAAQgKAAgJgEgAgLgTQgEADgCAGIgBAKIABALQACAGAEAEQAEADAHAAQAIAAAEgDQAFgEABgGIABgLIgBgKQgBgGgFgDQgEgEgIAAQgHAAgEAEg");
	this.shape_28.setTransform(155.9,-134.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#091745").s().p("AgrA2IAAhrIAzAAQAJAAAHADQAGADAEAEQAEAEABAFIACAJQAAAHgDAFQgCAEgDACIgFAEQAGACAEADQAEAEABAFQABAFABAGQgBAGgCAGQgCAGgFAEIgHAFIgJAEIgSABgAgWAjIAaAAQAJAAAFgEQAEgDAAgJQAAgEgCgDQgDgDgEgBQgDgCgFAAIgbAAgAgWgLIAZAAQAHAAAEgDQAFgCABgHQgBgGgEgDQgFgCgHAAIgZAAg");
	this.shape_29.setTransform(146.1,-136);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#091745").s().p("AgRAmQgJgEgGgKQgFgJAAgQIABgIIADgKQACgGAEgFQAEgEAHgEQAHgDAJAAQAGAAAHACQAGACAGAFQAGAEADAJQAEAIAAANIAAAEIg2AAIABAGIACAGQACADAEACQAEADAFgBQAEABAEgDQAEgCABgFIAWAAQgDAKgGAGQgFAGgHACQgHACgHAAQgKAAgJgEgAAQgHQAAgGgDgEQgCgEgEgBIgHgBQgGgBgEAFQgEAEgBAIIAfAAIAAAAg");
	this.shape_30.setTransform(132.1,-134.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#091745").s().p("AgTAzQgHgDgEgGQgEgGgCgIQgCgIAAgIQABgNAEgJQAFgJAHgFQAIgEAJAAQAFAAAFACQAEACADADIAFAFIAAgmIAVAAIAABrIgVAAIAAgKQgEAGgGADQgGADgGAAQgJAAgGgEgAgJgHQgEAEgBAEQgCAGAAAGIABAIIADAIQABAEAEACQADADAEAAQAHAAAEgEQAEgDACgFQACgFAAgGQAAgHgCgGQgBgEgEgEQgEgEgHAAQgGAAgEADg");
	this.shape_31.setTransform(123.2,-135.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#091745").s().p("AgNAuQgLgJgDgTIgNAAIAGgOIAGAAIAAgCIAAgCIAAgCIgMAAIAFgPIAIAAQADgRAKgKQAKgKAPAAQAIAAAGACIAKAGQAEADACADIgHAQIgBgCIgDgDQgDgDgEgCQgFgDgHAAQgHAAgEAFQgEAFgCAKIAlAAIgGAPIggAAIAAAGIAdAAIgGAOIgVAAIACAJQACAFADADQADADAGAAQAHAAAGgCQAGgDAEgDIAAATQgFADgGACIgMABQgOAAgKgJg");
	this.shape_32.setTransform(110.7,-135.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#091745").s().p("AgbApQgJgNAAgcQAAgbAJgOQAJgNASAAQATAAAJANQAJAOAAAbQAAAcgJANQgJAOgTAAQgSAAgJgOgAgIghQgEADgBAJIgBAVIABAWQABAIAEAEQADAEAFAAQAGAAADgEQAEgEABgIQABgIAAgOQAAgNgBgIQgBgJgEgDQgDgEgGAAQgFAAgDAEg");
	this.shape_33.setTransform(102.2,-135.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#091745").s().p("AgRAyQgIgDgFgHQgFgHgBgLIAVAAQABAHAEAEQADAEAHAAQAHAAAEgGQAEgFAAgJIgBgJQgCgFgEgCQgDgCgFAAIgEAAIgFABQgDACgCADIgSAAIAHg6IA5AAIAAASIgqAAIgEAXIAIgEQAEgCAGAAIAMACQAFACAFAEQAFAEADAGQADAGAAAJIgCAMQgCAHgEAGQgEAGgIAEQgHADgLABQgJAAgHgEg");
	this.shape_34.setTransform(93.7,-135.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AACA1QgNABgLgGQgMgFgGgMQgHgMAAgUIAAgKIAEgNQADgHAFgGQAFgHAJgEQAJgEANAAQAHAAAIACQAIACAHAHQAHAFAFALQAEALABARIAAAEIhFAAIABAHQABAFADAEQACAEAEACQAGADAGAAQAGAAAFgDQAFgCACgGIAbAAQgEAMgHAHQgIAHgIADQgIADgIAAIgCAAgAAVgJQgBgIgEgFQgDgEgFgCQgEgCgEAAQgJAAgEAFQgFAGgCAKIApAAIAAAAg");
	this.shape_35.setTransform(190.4,-179.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AACBIQgNABgLgGQgMgFgGgMQgHgMAAgVIABgKIADgMQADgHAFgGQAFgHAKgEQAIgEAMAAQAIAAAIACQAIACAIAHQAGAFAFALQAEAKABASIAAAEIhEAAIAAAHQABAFACAEQADAEAEACQAFADAHAAQAGAAAFgDQAEgCACgGIAbAAQgDAMgHAHQgHAHgJADQgIAEgIAAIgCgBgAAVAJQgCgIgDgEQgDgEgFgCQgEgCgEAAQgJAAgEAFQgFAGgCAJIApAAIAAAAgAgKgsIARgcIAdAAIgcAcg");
	this.shape_36.setTransform(179.8,-181.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AATA0IAAg8IAAgJQgCgEgDgEQgEgDgIAAQgIAAgGAFQgGAHAAALIAAA5IgbAAIAAhkIAaAAIAAAOIAGgHQADgDAGgDQAFgEAKAAQAJAAAJAEQAHAEAFAIQAFAHAAALIAABFg");
	this.shape_37.setTransform(168.8,-180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AATA0IAAg8IAAgJQgBgEgEgEQgEgDgIAAQgIAAgGAFQgGAHAAALIAAA5IgaAAIAAhkIAZAAIAAAOIAFgHQAEgDAGgDQAFgEAKAAQAKAAAIAEQAHAEAFAIQAFAHAAALIAABFg");
	this.shape_38.setTransform(157.2,-180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeAyQgHgDgFgGQgEgHAAgKQAAgKAEgHQADgGAHgDQAHgEAIgBIAXgEQAEAAACgCQADgCAAgEQAAgGgDgCQgCgDgEAAIgHgBQgHAAgDADQgDACgCADIgBAGIgaAAQACgPAGgIQAHgHAKgDQAKgCAJAAIAMABQAHABAHADQAGADAEAGQAEAGABAJIAAA2IAAAJIACAFIADACIAAAEIgcAAIgCgGIgBgGIgHAGQgEAEgFACQgGACgJAAQgIAAgHgDgAAKAEIgMADIgJACQgEACgCADQgDADAAAFQAAAFACADQACACADABIAGABQAGAAAEgCQAFgCAEgFQADgEAAgHIAAgNQgBACgEABg");
	this.shape_39.setTransform(146.1,-179.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AACAiQgJABgHgEQgHgDgFgIQgEgIAAgMIAAgHIADgJQABgEAEgEQADgEAGgDQAFgDAJAAIAKACQAFABAEAEQAFAEADAHQADAHAAALIAAADIgsAAIABAEIACAFQACADACACQAEACAEAAQADAAAEgCQACgCABgDIASAAQgCAHgFAFQgEAFgGACQgFACgEAAIgCgBgAANgGQAAgFgCgDQgCgDgDgBQgDgCgDABQgFAAgDADQgEAEgBAGIAaAAIAAAAg");
	this.shape_40.setTransform(132.1,-184.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAiIAAhBIAQAAIAAALIAEgGIAFgFQADgCAGAAIACAAIABABIAAARIgDAAIgCAAQgHAAgDACQgEADAAADIgBAHIAAAig");
	this.shape_41.setTransform(126.6,-184.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABAvQgIAAgHgDQgHgEgFgIQgEgHAAgOIABgGIABgIQACgFAEgEQADgEAGgDQAGgCAHAAIAKABQAGACAFAEQAFAEACAHQADAGAAALIAAADIgsAAIABAFIACAFQABADAEABQADACADAAQAFAAACgCQADgBACgEIASAAQgDAIgEAEQgFAFgGACQgFACgEAAIgDAAgAAOAGQgBgFgDgCQgBgEgDgBQgDgBgDAAQgFAAgEAEQgCADgBAGIAaAAIAAAAgAgEgcIgSgSIATAAIAKASg");
	this.shape_42.setTransform(120.4,-185.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AADBDIAAhbIggAAIAAgTIAFAAQAMAAAHgEQAHgEADgFQACgGAAgFIAXAAIAACGg");
	this.shape_43.setTransform(110.7,-181.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeAyQgHgDgFgGQgEgHAAgKQAAgKAEgHQADgGAHgDQAHgEAIgBIAXgEQAEAAACgCQADgCAAgEQAAgGgDgCQgCgDgEAAIgHgBQgHAAgDADQgDACgCADIgBAGIgaAAQACgPAGgIQAHgHAKgDQAKgCAJAAIAMABQAHABAHADQAGADAEAGQAEAGABAJIAAA2IAAAJIACAFIADACIAAAEIgcAAIgCgGIgBgGIgHAGQgEAEgFACQgGACgJAAQgIAAgHgDgAAKAEIgMADIgJACQgEACgCADQgDADAAAFQAAAFACADQACACADABIAGABQAGAAAEgCQAFgCAEgFQADgEAAgHIAAgNQgBACgEABg");
	this.shape_44.setTransform(95.9,-179.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMBEIAAiHIAZAAIAACHg");
	this.shape_45.setTransform(87.9,-181.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXAzQgNgGgGgNQgHgMgBgVIABgLIAEgOQADgHAGgHQAFgGAJgFQAKgEANAAQAHAAAKACQAIADAHAGQAIAGAFAMQAEAMAAARIAAAFIhIAAIABAHIAEAJQACAEAFADQAFADAHAAQAGAAAFgDQAGgDACgGIAcAAQgDANgIAHQgIAIgJADQgJADgKAAQgNAAgMgFgAAWgKQgBgIgDgFQgEgFgEgCQgFgCgFAAQgIAAgGAGQgGAGgBAKIArAAIAAAAg");
	this.shape_46.setTransform(196,-205.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAXBEIgHAAIgDAAQgMAAgFgDQgGgCgCgGQgCgFAAgHIAAg/IgPAAIAAgUIAPAAIAAgdIAbAAIAAAdIARAAIAAAUIgRAAIAAA5IAAAFQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAIABIADAAIADAAIAAAVIgHAAg");
	this.shape_47.setTransform(187,-207.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgeA3IAAhqIAbAAIAAATIAAAAIAGgLQADgEAGgDQAFgDAIgBIADABIADAAIAAAcIgEAAIgEAAQgLAAgGAEQgFAEgBAFQgCAGAAAGIAAA3g");
	this.shape_48.setTransform(180.4,-205.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYAzQgLgGgHgNQgHgMgBgVIABgLIAEgOQADgHAGgHQAFgGAJgFQAKgEANAAQAHAAAKACQAIADAIAGQAHAGAFAMQAEAMAAARIAAAFIhIAAIABAHIAEAJQADAEAEADQAFADAHAAQAHAAAEgDQAGgDABgGIAdAAQgEANgHAHQgIAIgJADQgJADgKAAQgNAAgNgFgAAWgKQgBgIgDgFQgEgFgEgCQgFgCgFAAQgIAAgGAGQgFAGgCAKIArAAIAAAAg");
	this.shape_49.setTransform(170.4,-205.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOBJIAAhWIgQAAIAAgUIAQAAIAAgIQAAgRAIgHQAHgHAPAAIAJAAIAFABIAAAWIgIAAIgGABQgBABAAAAQgBAAAAABQAAAAAAABQgBABAAAAIAAAHIAAAEIASAAIAAAUIgSAAIAABWg");
	this.shape_50.setTransform(161.5,-207.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOBJIAAhWIgQAAIAAgUIAQAAIAAgIQAAgRAIgHQAHgHAPAAIAJAAIAFABIAAAWIgIAAIgGABQgBABAAAAQgBAAAAABQAAAAAAABQgBABAAAAIAAAHIAAAEIASAAIAAAUIgSAAIAABWg");
	this.shape_51.setTransform(154.9,-207.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOBKQgIgBgKgFQgJgEgJgIQgHgJgGgNQgFgOAAgUQAAgTAFgOQAGgNAHgJQAJgIAJgEQAKgFAIgBIAOgCIAOACQAJABAJAFQAJAEAJAIQAIAJAGANQAEAOABATQgBAUgEAOQgGANgIAJQgJAIgJAEQgJAFgJABIgOACIgOgCgAgMgvQgHACgGAGQgGAFgDAKQgEAKAAAOQAAAPAEAKQADAKAGAFQAGAGAHACQAGACAGAAQAGAAAGgCQAHgCAHgGQAFgFAEgKQADgKABgPQgBgOgDgKQgEgKgFgFQgHgGgHgCQgGgCgGAAQgGAAgGACg");
	this.shape_52.setTransform(143.9,-207.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgXAzQgMgGgIgNQgGgMAAgVIABgLIADgOQADgHAFgHQAGgGAKgFQAIgEANAAQAJAAAIACQAJADAIAGQAHAGAEAMQAGAMAAARIAAAFIhIAAIABAHIADAJQACAEAFADQAFADAIAAQAFAAAGgDQAEgDADgGIAdAAQgFANgHAHQgIAIgJADQgJADgJAAQgPAAgLgFgAAWgKQgBgIgEgFQgDgFgFgCQgEgCgFAAQgIAAgGAGQgFAGgBAKIAqAAIAAAAg");
	this.shape_53.setTransform(124.9,-205.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAXBEIgGAAIgEAAQgMAAgFgDQgHgCgCgGQgCgFAAgHIAAg/IgOAAIAAgUIAOAAIAAgdIAbAAIAAAdIASAAIAAAUIgSAAIAAA5IABAFQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAIABIADAAIADAAIAAAVIgHAAg");
	this.shape_54.setTransform(116,-207.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeA3IAAhqIAbAAIAAATIAAAAIAGgLQADgEAGgDQAFgDAIgBIADABIADAAIAAAcIgEAAIgEAAQgLAAgGAEQgFAEgBAFQgCAGAAAGIAAA3g");
	this.shape_55.setTransform(109.3,-205.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AggA1QgHgDgFgHQgFgHAAgLQAAgKAEgHQAEgIAHgDQAHgEAJgBIAYgEQAEAAADgCQADgCAAgEQAAgGgDgDQgDgCgEgBIgHgBQgHAAgEADQgDACgCAEIgCAGIgbAAQACgQAHgIQAHgIALgDQAKgCAKAAIANABQAHABAHAEQAHADAEAGQAEAGAAAKIAAA4IABAKIACAFIAEACIAAAEIgfAAIgBgGIgBgGIgIAHQgEADgGADQgGACgKAAQgIAAgHgDgAAKAEIgMADIgJADQgFABgCADQgDAEAAAFQAAAFACADQACADADABIAGABQAGAAAFgCQAGgDADgFQAEgEAAgHIAAgOQgCACgEABg");
	this.shape_56.setTransform(99.4,-205.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgfBDQgPgIgIgRQgJgRAAgZQAAgYAJgRQAJgRAOgIQAPgJASAAQAQABAMAEQALAFAIAIQAHAHAEAJQADAJABAIIgeAAQgBgEgDgGQgDgGgGgEQgHgEgMgBQgEAAgGADQgHACgFAFQgFAGgEAKQgDAJAAAPQAAANADALQAEALAIAHQAIAGALABQANAAAIgHQAIgHADgNIAeAAQgDAPgIAMQgIAMgNAHQgMAGgSABQgTAAgOgJg");
	this.shape_57.setTransform(86.7,-207.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.texte_04, new cjs.Rectangle(1,-224.4,279,160), null);


(lib.text_mention_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAGAAAFACQAFADADAEQAEAEABAGQABAFAAAFIglAAQAAAEABADQACAEADACQADACAEAAQAFAAADgCQADgCABgEIALAAQgBAFgEAEQgDAEgFACQgFACgFAAQgIAAgFgDgAANgEIgCgGQgBgEgDgBQgDgCgEAAQgDAAgDABQgDACgBADQgCADAAAEIAZAAIAAAAg");
	this.shape.setTransform(124.1,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAiQgGAAgCgCQgEgBgBgDIgBgHIAAgeIgIAAIAAgIIAIAAIAAgQIALAAIAAAQIAKAAIAAAIIgKAAIAAAbIAAAEIACACIADABIACAAIADgBIAAAJIgEABIgDAAg");
	this.shape_1.setTransform(119.6,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAkIAAgzIAKAAIAAAzgAgFgYIAAgLIAKAAIAAALg");
	this.shape_2.setTransform(116.8,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAZQgEgCgEgEQgDgEAAgGIALAAQABAFAEACQACACAFAAIAEAAIAFgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBgDgCgBIgGgCIgHgCIgIgDQgEAAgDgDQgCgDAAgGQAAgEACgDIAGgEIAHgDIAGAAQAFAAAFABQAEACADADQAEAEABAGIgMAAQgCgFgCgBQgDgBgDAAIgEAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABIgDADQABADACABIAGADIAHABIAIADQAEABADACQACADAAAFQAAAFgCADQgCADgEACQgDACgEABIgIABQgFAAgGgCg");
	this.shape_3.setTransform(113,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAGAAAFACQAFADADAEQAEAEABAGQABAFAAAFIglAAQAAAEABADQACAEADACQADACAEAAQAFAAADgCQADgCABgEIALAAQgBAFgEAEQgDAEgFACQgFACgFAAQgIAAgFgDgAANgEIgCgGQgBgEgDgBQgDgCgEAAQgDAAgDABQgDACgBADQgCADAAAEIAZAAIAAAAg");
	this.shape_4.setTransform(104.8,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_5.setTransform(100.8,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAaIAAgyIAKAAIAAAKIABAAQAAgDADgDIAEgEQADgCAEAAIACAAIACAAIAAAMIgCAAIgDgBQgEAAgDACQgDACgBAEQgCAEAAAFIAAAYg");
	this.shape_6.setTransform(95.4,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAVQgFgEAAgLIAAggIAMAAIAAAfQAAAHACADQADADAFAAQADAAADgCIAEgGIABgHIAAgdIAMAAIAAAzIgMAAIAAgHQgCAEgEACQgEACgDABQgLAAgEgGg");
	this.shape_7.setTransform(90.4,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAZQgFgCgDgEQgDgEAAgGIALAAQABAFAEACQADACADAAIAFAAIAFgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBgDgCgBIgGgCIgHgCIgIgDQgEAAgDgDQgCgDAAgGQAAgEACgDIAGgEIAHgDIAGAAQAFAAAFABQAEACADADQAEAEABAGIgNAAQgBgFgCgBQgDgBgDAAIgEAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgCADQABADACABIAGADIAHABIAJADQAEABACACQACADAAAFQAAAFgCADQgCADgEACQgDACgEABIgIABQgGAAgFgCg");
	this.shape_8.setTransform(85,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAZQgEgCgEgEQgDgEAAgGIALAAQABAFAEACQACACAFAAIAEAAIAFgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBgDgCgBIgGgCIgHgCIgIgDQgEAAgDgDQgCgDAAgGQAAgEACgDIAGgEIAHgDIAGAAQAFAAAFABQAEACADADQAEAEABAGIgMAAQgCgFgCgBQgDgBgDAAIgEAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABIgDADQABADACABIAGADIAHABIAIADQAEABADACQACADAAAFQAAAFgCADQgCADgEACQgDACgEABIgIABQgFAAgGgCg");
	this.shape_9.setTransform(77,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAaIAAgfQAAgGgCgDQgDgDgFAAQgDAAgDACIgEAFQgBADAAAEIAAAdIgMAAIAAgyIALAAIAAAHQADgEAEgCQAEgDAEAAQAJAAAFAFQAFAEAAAJIAAAig");
	this.shape_10.setTransform(71.5,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAHAAQAIAAAGADQAGAEADAGQADAGAAAHQAAAIgDAGQgDAGgGAEQgGADgIAAQgHAAgGgDgAgHgPQgEADgBAEQgCAEAAAEIACAJQABAEAEACQADADAEAAQAFAAADgDQAEgCABgEIACgJQAAgEgCgEQgBgEgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_11.setTransform(65.6,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAkIAAgzIAKAAIAAAzgAgEgYIAAgLIAKAAIAAALg");
	this.shape_12.setTransform(61.5,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAHAiQgFAAgDgCQgDgBAAgDIgBgHIAAgeIgJAAIAAgIIAJAAIAAgQIAKAAIAAAQIAKAAIAAAIIgKAAIAAAbIAAAEIABACIAFABIACAAIACgBIAAAJIgDABIgFAAg");
	this.shape_13.setTransform(58.5,-1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAkIAAgzIAJAAIAAAzgAgEgYIAAgLIAJAAIAAALg");
	this.shape_14.setTransform(55.7,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAgQgFgDgDgGQgCgHAAgHQgBgJAEgGQADgFAFgEQAFgCAGAAIAGABIAGACQACACACADIAAAAIAAgaIALAAIAABGIgKAAIAAgHIgBAAQgCAFgEACQgEACgFAAQgHAAgGgFgAgHgGQgDAEgCADIgBAJIABAJQACADADADQADACAEABQAFAAADgDQAEgDABgEQACgEgBgFQAAgIgDgFQgEgEgGAAQgFAAgDACg");
	this.shape_15.setTransform(51.3,-1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAaIAAgfQAAgGgCgDQgDgDgFAAQgDAAgDACIgEAFQgBADAAAEIAAAdIgMAAIAAgyIALAAIAAAHQADgEAEgCQAEgDAEAAQAJAAAFAFQAFAEAAAJIAAAig");
	this.shape_16.setTransform(45.5,-1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAHAAQAIAAAGADQAGAEADAGQADAGAAAHQAAAIgDAGQgDAGgGAEQgGADgIAAQgHAAgGgDgAgHgPQgEADgBAEQgCAEAAAEIACAJQABAEAEACQADADAEAAQAFAAADgDQAEgCABgEIACgJQAAgEgCgEQgBgEgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_17.setTransform(39.7,-1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAYQgFgEgEgGQgDgGAAgIQAAgGADgHQADgGAGgEQAGgDAHAAQAGAAAFACQAFACADAEQADAEABAGIgLAAQgBgEgDgDQgDgCgFAAIgFABQgEABgCAFQgCAEAAAGQAAAFABAEQACAEADACQACADAFAAQAEAAAEgDQADgDABgGIALAAQgCALgFAFQgGAFgKAAQgIAAgFgDg");
	this.shape_18.setTransform(34,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAaIAAgyIAKAAIAAAKIABAAQAAgDADgDIAEgEQADgCAEAAIACAAIACAAIAAAMIgCAAIgDgBQgEAAgDACQgDACgBAEQgCAEAAAFIAAAYg");
	this.shape_19.setTransform(27,-1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAkIAAgzIAKAAIAAAzgAgEgYIAAgLIAKAAIAAALg");
	this.shape_20.setTransform(23.7,-2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAHAAQAIAAAGADQAGAEADAGQADAGAAAHQAAAIgDAGQgDAGgGAEQgGADgIAAQgHAAgGgDgAgHgPQgEADgBAEQgCAEAAAEIACAJQABAEAEACQADADAEAAQAFAAADgDQAEgCABgEIACgJQAAgEgCgEQgBgEgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_21.setTransform(19.5,-1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAkIgYhHIANAAIARA4IATg4IAMAAIgYBHg");
	this.shape_22.setTransform(13.5,-2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAGIgGAKIgGgEIAIgKIgLgCIACgHIAKAEIAAgMIAHAAIAAAMIAKgEIACAHIgLACIAIAKIgGAEg");
	this.shape_23.setTransform(8.6,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_mention_02, new cjs.Rectangle(4.7,-10,124.3,15.8), null);


(lib.text_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#091745").s().p("AgRApQgIgDgGgGQgFgHgBgLIAVAAQAAAFADADQACADAEACQAEABADAAIAHgBQAEgBACgCQACgCAAgEQAAgFgGgDQgHgDgLgCQgHgBgGgDQgGgBgDgFQgFgEAAgHQABgLAFgFQAFgGAIgDQAJgCAIAAQAJAAAHADQAJACAFAGQAFAGABAKIgVAAQgBgHgFgCQgEgDgFAAIgFABIgGACQgBACAAADQgBAEAEACIAJAEIAMACIAMAEQAGADAEAEQAEAEABAIQgBAKgFAHQgGAGgJADQgIADgKAAQgIAAgJgDg");
	this.shape.setTransform(172.2,213.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#091745").s().p("AgUA1QgKgFgFgKQgFgKAAgNQAAgNAFgIQAFgKAKgGQAJgFAMAAQALAAAHADQAIAFAFAGQAFAIADAHQACAJgBAJIg6AAQAAALAFAGQAFAEAJAAQAHABAFgEQAFgDABgEIAUAAQgFAPgKAGQgKAHgOAAQgMAAgJgGgAATAGQgCgHgEgFQgEgFgIAAQgHABgEADQgEADgCAEIgBAGIAkAAIAAAAgAgLgjIAOgXIAaAAIgZAXg");
	this.shape_1.setTransform(163.2,212.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#091745").s().p("AgRApQgJgDgFgGQgGgHgBgLIAXAAQAAAFACADQADADADACQAEABAEAAIAGgBQAEgBACgCQADgCgBgEQAAgFgGgDQgHgDgLgCQgHgBgGgDQgGgBgDgFQgEgEgBgHQAAgLAGgFQAFgGAJgDQAIgCAIAAQAJAAAHADQAJACAFAGQAFAGABAKIgWAAQAAgHgEgCQgFgDgFAAIgFABIgGACQgCACABADQAAAEADACIAJAEIAMACIAMAEQAHADADAEQAEAEABAIQgBAKgGAHQgFAGgIADQgJADgJAAQgJAAgJgDg");
	this.shape_2.setTransform(154.4,213.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#091745").s().p("AAQArIAAguQAAgLgEgFQgCgEgJAAQgIgBgEAGQgEAFAAANIAAArIgXAAIAAhSIAWAAIAAALIAAAAQAEgGAHgEQAGgDAIAAQAMgBAGAFQAHAEACAHQADAJAAAJIAAAzg");
	this.shape_3.setTransform(145.3,213.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#091745").s().p("AgUAmQgKgGgFgJQgFgKAAgNQAAgMAFgJQAFgKAKgGQAJgGAMAAQALAAAHAEQAIAEAFAHQAFAHADAJQACAJgBAIIg6AAQAAALAFAFQAFAFAJAAQAHAAAFgDQAFgDABgEIAUAAQgFAOgKAHQgKAHgOAAQgMgBgJgFgAATgIQgCgJgEgEQgEgFgIAAQgHABgEACQgEAEgCAEIgBAHIAkAAIAAAAg");
	this.shape_4.setTransform(135.9,213.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#091745").s().p("AgpA5IAAhvIAWAAIAAALQAEgGAGgEQAHgDAGAAQANAAAJAHQAIAFAEALQAEAJAAAMQAAAMgEAIQgEAKgIAGQgIAGgMABQgHgBgGgDQgHgDgEgGIAAAngAgLgjQgFAEgBAGQgCAGAAAHQAAAHACAFQACAGAEADQAEAEAHAAQAHAAAEgEQAFgDACgGQABgFAAgHQAAgHgCgGQgBgGgFgEQgEgEgHAAQgHAAgEAEg");
	this.shape_5.setTransform(126.6,215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#091745").s().p("AgUA1QgKgFgFgKQgFgKAAgNQAAgNAFgIQAFgKAKgGQAJgFAMAAQALAAAHADQAIAFAFAGQAFAIADAHQACAJgBAJIg6AAQAAALAFAGQAFAEAJAAQAHABAFgEQAFgDABgEIAUAAQgFAPgKAGQgKAHgOAAQgMAAgJgGgAATAGQgCgHgEgFQgEgFgIAAQgHABgEADQgEADgCAEIgBAGIAkAAIAAAAgAgLgjIAOgXIAaAAIgZAXg");
	this.shape_6.setTransform(116.9,212.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#091745").s().p("AgZA0QgIgHgEgKQgEgKAAgLQAAgMAEgIQAEgKAIgGQAIgGAMAAQAHAAAGADQAHADAEAGIAAgpIAXAAIAABxIgWAAIAAgLQgEAHgGADQgHADgHAAQgMAAgJgGgAgKgHQgFADgCAFQgCAGABAHQAAAHACAGQACAGAEAEQAFAEAGAAQAHAAAEgEQAFgEABgGQACgGAAgHQAAgHgCgGQgBgFgFgDQgEgEgHAAQgHAAgEAEg");
	this.shape_7.setTransform(107.3,212.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#091745").s().p("AgDA4QgIgDgGgHQgFgGgEgIQgEgIgBgKIgNAAIAFgMIAHAAIAAgDIAAgDIgMAAIAFgMIAIAAQACgJAEgHQAEgIAGgGQAGgGAIgDQAHgDAKAAQAHAAAHACQAHACAIAEIgKAUIgLgGQgFgBgFgBQgIABgGAFQgEAGgDAKIAmAAIgFAMIgjAAIAAAGIAhAAIgFAMIgbAAQADAMAFAHQAFAGAKAAQAGAAAGgDQAGgCAGgGIAAAZQgFADgGACQgGABgHAAQgKAAgIgDg");
	this.shape_8.setTransform(170.8,191.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#091745").s().p("AgUA1QgJgGgFgNQgGgNAAgVQAAgVAGgNQAFgNAJgFQAJgGALABQALgBAKAGQAJAFAGANQAFANAAAVQAAAVgFANQgGANgJAGQgKAFgLAAQgLAAgJgFgAgKgiQgEAEgBAGQgCAHAAAGIAAALIAAALQAAAHACAGQABAHAEAEQAEAEAGAAQAHAAAEgEQAEgEABgHQACgGAAgHIABgLIgBgLQAAgGgCgHQgBgGgEgEQgEgFgHAAQgGAAgEAFg");
	this.shape_9.setTransform(157.2,191.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#091745").s().p("AADA4IAAhIIgbAAIAAgRQAIABAHgCQAHgDADgFQAFgEABgJIASAAIAABvg");
	this.shape_10.setTransform(147.5,191.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#091745").s().p("AgaArIAAhSIAWAAIAAAPQACgFAEgEQAEgEAFgCQAFgCAGgBIACAAIADABIAAAWIgEgBIgEgBQgJABgFAEQgFADgBAGQgCAGAAAGIAAAmg");
	this.shape_11.setTransform(136.7,192.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#091745").s().p("AgaAmQgHgEgDgIQgCgIAAgKIAAgxIAXAAIAAAtQAAAKADAGQADAEAIAAQAJABAEgGQAEgGAAgMIAAgqIAXAAIAABRIgWAAIAAgLIAAAAQgFAGgGAEQgGAEgIgBQgMAAgGgEg");
	this.shape_12.setTransform(128.4,192.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#091745").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgMAGgKQAFgKAKgFQAJgGAMAAQANAAAKAGQAJAFAGAKQAFAKAAAMQAAANgFAKQgGAKgJAFQgKAFgNABQgMgBgJgFgAgLgWQgEAEgCAGQgCAGAAAGQAAAHACAGQACAGAEAEQAEADAHAAQAIAAAEgDQAFgEABgGQACgGAAgHQAAgGgCgGQgBgGgFgEQgEgDgIgBQgHABgEADg");
	this.shape_13.setTransform(118.7,192.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#091745").s().p("AgpA5IAAhuIAWAAIAAAKQAEgGAGgEQAHgDAGAAQANAAAJAGQAIAGAEAKQAEALAAAMQAAALgEAJQgEAJgIAGQgIAGgMAAQgHABgGgEQgHgDgEgGIAAAngAgLgjQgFAEgBAGQgCAGAAAHQAAAGACAGQACAFAEAEQAEAEAHAAQAHAAAEgEQAFgEACgFQABgGAAgGQAAgHgCgGQgBgGgFgEQgEgEgHAAQgHAAgEAEg");
	this.shape_14.setTransform(109.1,193.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#091745").s().p("AAAALIgLARIgKgIIALgQIgSgGIAFgLIASAHIAAgVIALAAIAAAVIATgHIAEALIgTAGIAMAQIgKAIg");
	this.shape_15.setTransform(170.9,167);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#091745").s().p("AgRApQgJgDgFgGQgGgHgBgLIAXAAQAAAFACADQADADADACQAEABAEAAIAGgBQAEgBACgCQADgCgBgEQAAgFgGgDQgHgDgLgCQgHgBgGgDQgGgBgDgFQgEgEgBgHQAAgLAGgFQAFgGAJgDQAIgCAIAAQAJAAAHADQAJACAFAGQAFAGABAKIgWAAQAAgHgEgCQgFgDgFAAIgFABIgGACQgCACABADQAAAEADACIAJAEIAMACIAMAEQAHADADAEQAEAEABAIQgBAKgGAHQgFAGgIADQgJADgJAAQgJAAgJgDg");
	this.shape_16.setTransform(163.4,171.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#091745").s().p("AgUAmQgKgGgFgJQgFgKAAgNQAAgMAFgJQAFgKAKgGQAJgGAMAAQALAAAHAEQAIAEAFAHQAFAHADAJQACAJgBAIIg6AAQAAALAFAFQAFAFAJAAQAHAAAFgDQAFgDABgEIAUAAQgFAOgKAHQgKAHgOAAQgMgBgJgFgAATgIQgCgJgEgEQgEgFgIAAQgHABgEACQgEAEgCAEIgBAHIAkAAIAAAAg");
	this.shape_17.setTransform(154.4,171.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#091745").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_18.setTransform(147.8,169.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#091745").s().p("AgKA5IAAhSIAVAAIAABSgAgKglIAAgTIAVAAIAAATg");
	this.shape_19.setTransform(143.6,169.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#091745").s().p("AAmA5IAAhQIAAAAIgcBQIgSAAIgchPIgBAAIAABPIgXAAIAAhxIAjAAIAaBOIAAAAIAZhOIAkAAIAABxg");
	this.shape_20.setTransform(134.3,169.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#091745").s().p("AgUA1QgIgEgHgIQgFgIAAgMIAWAAQABAIAFAFQAFAEAHAAQAGAAAEgDQAEgDACgFQADgFAAgFQAAgGgDgFQgCgFgEgBQgEgDgGAAQgGAAgEACQgDABgEAFIgUAAIALg9IA9AAIAAASIgtAAIgEAaIAAAAQAEgEAGgCQAFgCAGAAQALAAAIAFQAHAFAEAIQAFAIAAALQgBALgFAJQgGAKgJAFQgKAFgLAAQgKAAgKgEg");
	this.shape_21.setTransform(118.2,170.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#091745").s().p("AADA4IAAhHIgbAAIAAgSQAIABAHgDQAHgCADgEQAFgGABgIIASAAIAABvg");
	this.shape_22.setTransform(108.5,170);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#091745").s().p("AgZA4QgHgCgDgGQgFgGAAgIQAAgKAFgEQAEgGAGgCQAHgCAHgBIAMgCQAGAAAEgCQAEgCgBgEQAAgFgBgDQgCgCgEgBIgHAAQgFAAgFACQgEADAAAHIgXAAQABgKAFgHQAHgGAIgCQAJgCAIgBIAMABQAHABAFADQAGADADAEQADAEABAIIAAAqIAAALQAAAFACADIgXAAIgBgFIgBgDQgFAFgHADQgHACgHAAQgIAAgGgDgAAGATIgJACQgGAAgEADQgDADAAAGQAAAGADADQAEABAGAAQAGAAADgBQAFgDABgDIACgGIAAgGIAAgIQgCADgGAAgAgDgkIgYgWIAZAAIAPAWg");
	this.shape_23.setTransform(164.8,148.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#091745").s().p("AgKAPQAGgCACgEQACgEAAgFIgKAAIAAgZIAVAAIAAAZQABAGgDAFQgDAGgGAEQgEAEgGABg");
	this.shape_24.setTransform(158,145.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#091745").s().p("AgaAmQgGgEgDgIQgDgHAAgLIAAgyIAXAAIAAAuQAAAKADAGQADAEAJAAQAHABAFgGQAEgGAAgMIAAgrIAXAAIAABSIgWAAIAAgLIAAAAQgFAGgHAEQgFADgHAAQgMAAgHgEg");
	this.shape_25.setTransform(151.1,150.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#091745").s().p("AATA5IAAgoQgDAFgEADIgJAEIgJABQgGAAgGgCQgGgCgFgGQgGgFgDgHQgDgIAAgMQAAgMAEgKQAEgKAIgGQAIgGANAAQAHAAAGADQAHADAEAHIAAgKIAWAAIAABugAgKgjQgFAEgBAGQgDAGABAHQgBAHACAFQACAFAFAEQAEAEAGAAQAIAAAEgEQAEgDACgGQACgFAAgHQAAgGgCgHQgCgGgEgEQgEgEgHAAQgHAAgEAEg");
	this.shape_26.setTransform(141.2,151.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#091745").s().p("AgRApQgIgDgGgGQgFgHgCgLIAXAAQAAAFACADQADADADACQAEABADAAIAHgBQAEgBACgCQADgCgBgEQAAgFgGgDQgHgDgLgCQgHgBgGgDQgGgBgDgFQgFgEAAgHQAAgLAGgFQAFgGAIgDQAJgCAIAAQAJAAAHADQAJACAFAGQAFAGABAKIgWAAQAAgHgFgCQgEgDgFAAIgFABIgGACQgBACAAADQAAAEADACIAJAEIAMACIAMAEQAHADADAEQAEAEABAIQgBAKgGAHQgFAGgJADQgIADgKAAQgIAAgJgDg");
	this.shape_27.setTransform(132.2,150.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#091745").s().p("AgaAmQgGgEgDgIQgDgHAAgLIAAgyIAXAAIAAAuQAAAKADAGQADAEAJAAQAHABAFgGQAEgGAAgMIAAgrIAXAAIAABSIgWAAIAAgLIAAAAQgFAGgHAEQgFADgHAAQgMAAgHgEg");
	this.shape_28.setTransform(123.2,150.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#091745").s().p("AgSA3QgIgEgFgIQgGgHAAgNIAAgKIAXAAIAAAFIABAKQABAEADADQADACAGAAQAGAAADgDQACgDABgEIABgIIAAhMIAZAAIAABNIgBAMQgCAHgEAGQgDAGgIAEQgIADgMAAQgJAAgJgDg");
	this.shape_29.setTransform(113.5,148.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#091745").s().p("AAABMQgHgDgFgFQgGgHAAgLIAAhGIgTAAIAAgVIATAAIAAgkIAgAAIAAAkIAYAAIAAAVIgYAAIAAA7QAAAIADADQADADAIgBIAFAAIAFgBIAAAaIgJABIgKAAQgKAAgJgCg");
	this.shape_30.setTransform(167.3,-11);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#091745").s().p("AglA7QgKgEgEgIQgGgIAAgMQAAgNAGgIQAGgGAJgEQAJgDALgBIARgDQAJgBAFgDQAGgCAAgHQAAgHgDgDQgDgEgEgBIgLgBQgJAAgFAEQgGAEgBAKIggAAQAAgPAJgJQAIgJANgDQAMgEANAAIASABQAIACAJADQAHAEAFAHQAFAGAAALIAAA9IABAPQAAAHADAEIgiAAIgBgFIgBgGQgHAIgLADQgKAEgKAAQgMAAgJgEgAAJAGIgOACQgIABgGAEQgFAEAAAIQAAAJAFAEQAGADAIAAQAJgBAGgDQAFgDADgEQACgFABgEIAAgIIAAgMQgEADgIACg");
	this.shape_31.setTransform(156.7,-9.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#091745").s().p("AAXBSIAAhDQAAgPgFgGQgFgIgLABQgMAAgGAHQgGAIAAARIAAA/IghAAIAAijIAhAAIAAA+IABAAQAGgKAJgGQAJgEAJAAQARAAAKAGQAJAGAEALQAEALAAAOIAABJg");
	this.shape_32.setTransform(143.3,-11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#091745").s().p("AgdA3QgNgIgIgOQgHgOgBgRQAAgSAIgPQAGgOAOgJQAOgIASAAQAOAAANAFQAMAFAIAKQAHAKACAPIggAAQgCgKgGgFQgGgFgKAAQgKAAgFAGQgHAGgCAJQgDAIAAAIQAAAJADAJQACAIAGAGQAGAGAJAAQAMAAAGgHQAHgGABgLIAfAAQgDAXgPANQgPAMgXABQgSgBgNgHg");
	this.shape_33.setTransform(130.1,-9.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#091745").s().p("AArBSIgNglIg8AAIgNAlIgkAAIA+ijIAkAAIA9CjgAAVASIgVg6IAAAAIgVA6IAqAAg");
	this.shape_34.setTransform(115.4,-11.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#091745").s().p("AgeA2QgNgHgIgOQgHgPAAgSQAAgRAIgOQAHgOAOgJQANgIASAAQAPAAALAGQALAGAIAKQAHAKADAMQADANgBANIhUAAQAAAPAIAIQAHAHANAAQAKAAAHgFQAHgFABgGIAdAAQgHAVgOAKQgOAKgUAAQgSgBgOgIgAAbgMQgCgMgHgHQgGgGgLAAQgKAAgFAEQgGAFgDAFQgCAGAAAFIA0AAIAAAAg");
	this.shape_35.setTransform(183.1,-38.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#091745").s().p("AgmA3QgJgGgEgLQgEgLAAgPIAAhIIAhAAIAABCQAAAPAFAHQAFAHALAAQAMAAAGgIQAGgIAAgSIAAg9IAhAAIAAB2IgfAAIAAgRIgBAAQgGAKgKAFQgJAFgKAAQgSAAgJgGg");
	this.shape_36.setTransform(169.7,-38.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#091745").s().p("AAbBSIAAg5IAAAAQgEAHgFAEQgHAEgHACQgGACgHAAQgIAAgJgEQgJgDgIgHQgHgHgFgMQgEgLgBgRQABgRAFgOQAGgPAMgJQAMgJARAAQALAAAJAEQAKAFAGAJIAAAAIAAgPIAgAAIAACggAgPgzQgHAGgCAIQgDAJAAAKQAAAKACAIQAEAIAFAFQAHAGAJAAQALAAAGgFQAHgGACgIQADgIAAgKQAAgJgDgJQgDgJgFgGQgHgFgKAAQgKAAgGAFg");
	this.shape_37.setTransform(155.7,-36.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#091745").s().p("AglA7QgKgEgEgIQgGgIAAgMQAAgNAGgIQAGgGAJgEQAJgDALgBIARgDQAJgBAFgDQAGgCAAgHQAAgHgDgDQgDgEgEgBIgLgBQgIAAgGAEQgGAEgBAKIghAAQACgPAIgJQAIgJANgDQAMgEANAAIASABQAIACAJADQAHAEAFAHQAFAGgBALIAAA9IACAPQABAHACAEIgiAAIgBgFIgBgGQgIAIgKADQgKAEgKAAQgMAAgJgEgAAJAGIgOACQgIABgGAEQgFAEAAAIQAAAJAFAEQAGADAJAAQAIgBAGgDQAFgDACgEQADgFABgEIAAgIIAAgMQgEADgIACg");
	this.shape_38.setTransform(142.2,-38.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#091745").s().p("AAXBSIAAhDQAAgPgFgGQgFgIgLAAQgMABgGAHQgGAIAAARIAAA/IghAAIAAijIAhAAIAAA+IABAAQAGgLAJgFQAJgEAJAAQARAAAKAGQAJAGAEALQAEALAAAOIAABJg");
	this.shape_39.setTransform(128.8,-41);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#091745").s().p("AgdA3QgNgIgIgOQgHgOAAgRQgBgSAIgPQAGgOAOgJQAOgIASAAQAOAAANAFQAMAFAIAKQAHAKACAPIggAAQgCgKgGgFQgGgFgKAAQgKAAgFAGQgHAGgCAJQgDAIAAAIQAAAJADAJQACAIAGAGQAGAGAJAAQAMAAAGgHQAGgGACgLIAgAAQgEAXgPANQgPAMgXABQgSgBgNgHg");
	this.shape_40.setTransform(115.6,-38.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#091745").s().p("AglBRQgJgEgGgIQgFgIAAgMQAAgNAGgHQAGgIAJgEQAJgDAKgBIASgCQAJgCAGgDQAFgCAAgGQAAgGgDgEQgDgEgFgBIgKgBQgIAAgHAFQgFADgBAKIggAAQABgPAIgIQAIgKAMgDQANgEAMAAIASABQAJACAIAEQAIADAFAHQAEAGABALIAAA9IABAPQABAHACAFIghAAIgCgGIgBgGQgHAIgLAEQgJADgMAAQgLAAgJgEgAAJAcIgOACQgIABgFAEQgHAEAAAJQAAAIAHAEQAGADAHAAQAJgBAGgDQAFgDADgEQACgFAAgEIABgIIAAgMQgFADgHACgAgEgzIgjghIAkAAIAVAhg");
	this.shape_41.setTransform(95.8,-40.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#091745").s().p("AgZA7QgMgEgIgKQgIgJgBgPIAfAAQAAAHAEAEQADAFAGACQAGACAFAAIAKgCQAFgBADgDQADgEAAgGQAAgHgJgEQgKgDgRgEQgJgCgJgDQgIgDgGgGQgFgGAAgLQAAgPAHgIQAIgIAMgEQALgDANAAQANAAALADQALAEAIAIQAHAJACAOIgfAAQgBgJgGgEQgGgDgJAAIgIABQgEAAgDADQgDACAAAFQAAAGAGADQAFADAIACIARAEQAKACAJADQAIAEAGAGQAFAGAAALQAAAQgIAJQgIAJgMAEQgMAEgOAAQgNAAgNgEg");
	this.shape_42.setTransform(185.4,-68.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#091745").s().p("AgeA2QgNgHgIgOQgHgPAAgSQAAgRAIgOQAHgOAOgJQANgIASAAQAPAAALAGQALAGAIAKQAHAKADAMQADANgBANIhUAAQAAAPAIAIQAHAHANAAQAKAAAHgFQAHgFABgGIAdAAQgHAVgOAKQgOAKgUAAQgSgBgOgIgAAbgMQgCgMgHgHQgGgGgLAAQgKAAgFAEQgGAFgDAFQgCAGAAAFIA0AAIAAAAg");
	this.shape_43.setTransform(172.6,-68.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#091745").s().p("AgPBSIAAijIAfAAIAACjg");
	this.shape_44.setTransform(163.1,-70.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#091745").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_45.setTransform(157.1,-70.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#091745").s().p("AA3BSIAAhzIgBAAIgoBzIgbAAIgohyIgBAAIAAByIghAAIAAijIAyAAIAmBvIAAAAIAlhvIAyAAIAACjg");
	this.shape_46.setTransform(143.7,-70.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#091745").s().p("AgZA7QgMgEgIgKQgIgJgBgPIAfAAQAAAHAEAEQADAFAGACQAGACAFAAIAKgCQAFgBADgDQADgEAAgGQAAgHgJgEQgKgDgRgEQgJgCgJgDQgIgDgGgGQgFgGAAgLQAAgPAHgIQAIgIAMgEQALgDANAAQANAAALADQALAEAIAIQAHAJACAOIgfAAQgBgJgGgEQgGgDgJAAIgIABQgEAAgDADQgDACAAAFQAAAGAGADQAFADAIACIARAEQAKACAJADQAIAEAGAGQAFAGAAALQAAAQgIAJQgIAJgMAEQgMAEgOAAQgNAAgNgEg");
	this.shape_47.setTransform(120.8,-68.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#091745").s().p("AgeA2QgNgHgIgOQgHgPAAgSQAAgRAIgOQAHgOAOgJQANgIASAAQAPAAALAGQALAGAIAKQAHAKADAMQADANgBANIhUAAQAAAPAIAIQAHAHANAAQAKAAAHgFQAHgFABgGIAdAAQgHAVgOAKQgOAKgUAAQgSgBgOgIgAAbgMQgCgMgHgHQgGgGgLAAQgKAAgFAEQgGAFgDAFQgCAGAAAFIA0AAIAAAAg");
	this.shape_48.setTransform(108,-68.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#091745").s().p("AgkBKQgMgJgGgOQgFgPAAgQQgBgRAHgMQAFgOAMgJQAMgJARAAQAKAAAJAFQAKAEAFAJIABAAIAAg8IAgAAIAACjIgeAAIAAgPIgBAAQgGAKgKAEQgJAFgKAAQgSgBgMgJgAgPgLQgGAGgDAHQgDAJAAAKQAAAJADAJQADAJAHAFQAFAGAKAAQAKAAAHgGQAGgFADgJQACgJAAgKQAAgJgDgJQgCgIgGgFQgHgFgKAAQgKAAgGAFg");
	this.shape_49.setTransform(94.2,-70.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#091745").s().p("Ag2A7IAAgYIA9hFIg4AAIAAgYIBjAAIAAAYIg9BFIBCAAIAAAYg");
	this.shape_50.setTransform(175.3,-97.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#091745").s().p("AgeA2QgNgHgIgOQgHgPAAgSQAAgRAIgOQAHgOAOgJQANgIASAAQAPAAALAGQALAGAIAKQAHAKADAMQADANgBANIhUAAQAAAPAIAIQAHAHANAAQAKAAAHgFQAHgFABgGIAdAAQgHAVgOAKQgOAKgUAAQgSgBgOgIgAAbgMQgCgMgHgHQgGgGgLAAQgKAAgFAEQgGAFgDAFQgCAGAAAFIA0AAIAAAAg");
	this.shape_51.setTransform(162.7,-97.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#091745").s().p("AAXA9IAAhDQAAgOgFgHQgFgHgLAAQgMgBgGAJQgGAHAAATIAAA9IghAAIAAh2IAfAAIAAAQIABAAQAGgKAKgEQAJgFAKAAQARAAAKAGQAJAGAEALQAEALAAAPIAABIg");
	this.shape_52.setTransform(149.3,-97.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#091745").s().p("AgZBQQgMgEgIgIQgIgJgBgNIAgAAQADAJAGADQAHAEAIAAQANAAAHgIQAGgJAAgNIAAgPIgBAAQgFAJgKAFQgJAEgKAAQgSAAgLgIQgLgIgGgNQgFgNAAgRQAAgPAGgOQAGgNALgIQALgIARAAQALgBAJAFQAJAEAFALIABAAIAAgQIAfAAIAABuQAAAIgCAJQgCAJgGAIQgHAIgMAFQgMAGgUAAQgMAAgLgEgAgOg1QgGAFgDAHQgCAIAAAJQAAAJACAIQADAHAFAFQAGAFAJABQAJAAAHgFQAGgFADgGQADgIAAgIQAAgKgDgIQgCgJgGgFQgGgFgLAAQgIAAgGAFg");
	this.shape_53.setTransform(135.2,-95.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#091745").s().p("AglA7QgJgEgGgIQgFgIAAgMQAAgNAGgIQAFgGAKgEQAJgDAKgBIASgDQAJgBAFgDQAGgCAAgHQAAgHgDgDQgDgEgFgBIgKgBQgIAAgGAEQgGAEgBAKIghAAQABgPAJgJQAIgJANgDQAMgEAMAAIASABQAKACAHADQAIAEAFAHQAFAGgBALIAAA9IABAPQABAHADAEIgiAAIgBgFIAAgGQgJAIgKADQgKAEgLAAQgLAAgJgEgAAJAGIgOACQgIABgGAEQgFAEgBAIQABAJAFAEQAHADAIAAQAIgBAFgDQAGgDACgEQADgFABgEIAAgIIAAgMQgFADgHACg");
	this.shape_54.setTransform(121.8,-97.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#091745").s().p("AgmBLQgSgMgKgTQgJgUAAgXQAAgYAJgTQAKgUASgMQASgLAYAAQARAAAPAHQAPAGAKAOQAKAMACATIgiAAQgDgOgKgHQgJgHgNAAQgPABgKAHQgKAJgEAMQgEANAAAOQAAAOAEAMQAEAMAKAJQAKAHAPABQASgBAKgIQAKgJABgSIgkAAIAAgaIBFAAIAABYIgXAAIgEgSQgJALgMAGQgMAFgMAAQgYAAgSgLg");
	this.shape_55.setTransform(106.3,-99.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_03, new cjs.Rectangle(0,-116.1,279,339.5), null);


(lib.text_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C233E").s().p("AgnAvIAAhdIApAAQAMABAHAEQAIAEADAHQAFAHABAHIABAPIgBAPQgCAIgEAIQgFAHgHAFQgHAFgMAAgAgUAfIATAAQAIAAAEgFQAEgFADgHQACgHAAgHQAAgKgCgGQgDgGgDgDQgDgDgEgBIgGAAIgTAAg");
	this.shape.setTransform(100.9,-81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C233E").s().p("AggAvIAAhdIAUAAIAABMIAtAAIAAARg");
	this.shape_1.setTransform(92.3,-81.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C233E").s().p("AgJAwIgLgDQgGgDgFgGQgGgFgDgJQgEgJAAgNQAAgMAEgJQADgJAGgFQAFgGAGgCQAGgDAFgBIAJgBIAJABQAGABAGADQAGACAGAGQAFAFAEAJQADAJAAAMQAAANgDAJQgEAJgFAFQgGAGgGADIgMADIgJABIgJgBgAgIgeQgDABgFAEQgEAEgCAGQgCAGgBAJQABAKACAGQACAHAEADQAFAEADABIAIACIAIgCQAFgBADgEQAEgDADgHQACgGAAgKQAAgJgCgGQgDgGgEgEQgDgEgFgBIgIgCIgIACg");
	this.shape_2.setTransform(83,-81.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C233E").s().p("AgQAuQgHgDgGgGQgHgGgCgJQgEgJgBgNQABgIADgJQACgJAGgHQAFgHAJgEQAIgEALAAIABAAQAKAAAIADQAHADAFAFQAFAFADAFQACAFAAAFIgTAAIgBgEIgEgFIgGgEQgFgCgEAAQgHAAgGADQgGAEgEAHQgDAIAAALQAAAMADAHQAEAHAHADQAGADAGAAIAEgBIAHgCQAEgCADgFQADgEABgHIgVAAIAAgPIAmAAIAAAyIgMAAIgDgMIgFAGQgEAEgFACQgGACgIAAQgIAAgIgDg");
	this.shape_3.setTransform(72.7,-81.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C233E").s().p("AgSAuQgIgDgEgFQgFgFgBgFIgBgKIATAAQgBADACADQABAEAFACQAEADAHAAIAJgBQAFgBADgCQACgDAAgFQAAgEgBgCIgHgDIgJgDIgJgCIgKgDQgFgBgFgDQgEgCgDgFQgCgFAAgHIABgJQACgFAEgFQADgEAIgDQAGgDAMAAQAJAAAIADQAGADAFAFQAEAEACAGQACAFAAAEIgTAAIgCgFQgBgEgEgCQgEgDgHAAIgIABQgEABgDADQgCACAAAEIACAGIAEADIAEABIAWAGIAMAEQAGABADAFQADAFAAAJQAAAIgDAGQgDAFgEAEIgKAFIgJACIgIAAQgLAAgIgDg");
	this.shape_4.setTransform(149.8,-98.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C233E").s().p("AgSAuQgIgDgEgFQgEgFgCgFIgBgKIATAAQgBADACADQABAEAEACQAFADAHAAIAJgBQAEgBAEgCQACgDAAgFQAAgEgBgCIgHgDIgJgDIgJgCIgKgDQgFgBgFgDQgEgCgDgFQgCgFAAgHIACgJQABgFADgFQAFgEAHgDQAGgDAMAAQAJAAAIADQAHADAEAFQAEAEACAGQACAFAAAEIgTAAIgCgFQgBgEgEgCQgEgDgHAAIgIABQgEABgDADQgCACAAAEIACAGIAEADIAEABIAWAGIAMAEQAGABADAFQADAFAAAJQAAAIgDAGQgDAFgEAEIgKAFIgJACIgHAAQgMAAgIgDg");
	this.shape_5.setTransform(141.2,-98.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C233E").s().p("AgiAvIAAhdIBDAAIAAARIgwAAIAAAUIAsAAIAAAPIgsAAIAAAYIAyAAIAAARg");
	this.shape_6.setTransform(132.7,-98.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C233E").s().p("AARAvIgBgIIgBgLIgBgKQAAgEgDgCQgEgCgHAAIgTAAIAAAlIgTAAIAAhdIAuAAQAJABAGACQAGADADAFQADAEABAEIACAIQgBAIgEAGQgDAFgHACIAHAEQACACABAFQACAEAAAJIAAAKIABAGQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIAAADgAgTgFIAWAAQAIABADgDQAEgDAAgHIgBgGQgBgCgDgCQgDgCgFAAIgYAAg");
	this.shape_7.setTransform(123.7,-98.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C233E").s().p("AgjAvIAAhdIAqAAQANABAIAIQAIAHAAAOIgBAJIgFAIQgDAFgGAEQgGADgJAAIgVAAIAAAigAgPgCIARAAQAHAAADgDQADgDABgDIAAgGQAAgGgEgDQgEgEgIABIgPAAg");
	this.shape_8.setTransform(114.7,-98.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C233E").s().p("AARAvIgRggIgSAgIgXAAIAfgvIgdguIAXAAIAQAfIARgfIAWAAIgcAtIAfAwg");
	this.shape_9.setTransform(105.8,-98.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C233E").s().p("AgiAvIAAhdIBDAAIAAARIgwAAIAAAUIAsAAIAAAPIgsAAIAAAYIAyAAIAAARg");
	this.shape_10.setTransform(97.3,-98.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C233E").s().p("AASAvIglhCIAAAAIAABCIgSAAIAAhdIAUAAIAlBAIAAAAIAAhAIASAAIAABdg");
	this.shape_11.setTransform(84.5,-98.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C233E").s().p("AAXAvIgGgTIgiAAIgGATIgUAAIAhhdIAVAAIAiBdgAALALIgLgjIgLAjIAWAAg");
	this.shape_12.setTransform(75.1,-98.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C233E").s().p("AgUAsQgKgGgFgLQgFgLgBgQQABgPAFgLQAGgLAKgGQAJgFALAAQALAAAHADQAIADAFAFQAEAFADAGQACAGABAFIgUAAIgCgHQgCgDgEgDQgFgDgIAAIgGABQgEACgEADQgDAEgCAGQgDAHAAAIQAAAJADAHQACAHAFAFQAFAEAHAAQAJAAAFgEQAFgFACgIIAUAAQgCAKgFAIQgGAHgIAFQgIAEgMAAQgLAAgKgFg");
	this.shape_13.setTransform(65.7,-98.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C233E").s().p("AgJAvIAAhdIATAAIAABdg");
	this.shape_14.setTransform(59.2,-98.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C233E").s().p("AARAvIgBgIIAAgLIgBgKQgBgEgEgCQgDgCgHAAIgTAAIAAAlIgTAAIAAhdIAuAAQAJABAGACQAGADADAFQADAEABAEIABAIQAAAIgDAGQgEAFgHACIAHAEQACACACAFQABAEAAAJIAAAKIABAGQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIAAADgAgTgFIAWAAQAIABADgDQAEgDAAgHIgBgGQgBgCgDgCQgDgCgFAAIgYAAg");
	this.shape_15.setTransform(52.9,-98.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C233E").s().p("AgiAvIAAhdIBDAAIAAARIgwAAIAAAUIAsAAIAAAPIgsAAIAAAYIAyAAIAAARg");
	this.shape_16.setTransform(43.9,-98.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C233E").s().p("AAbAvIAAhNIAAAAIgSBNIgSAAIgRhNIAAAAIAABNIgSAAIAAhdIAcAAIAQBJIARhJIAcAAIAABdg");
	this.shape_17.setTransform(33.9,-98.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C233E").s().p("AAXAvIgGgTIgiAAIgGATIgUAAIAhhdIAVAAIAiBdgAALALIgLgjIgLAjIAWAAg");
	this.shape_18.setTransform(23.8,-98.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C233E").s().p("AAbAvIAAhNIAAAAIgSBNIgSAAIgRhNIAAAAIAABNIgSAAIAAhdIAcAAIAQBJIARhJIAcAAIAABdg");
	this.shape_19.setTransform(137.2,-116);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0C233E").s().p("AggAvIAAhdIATAAIAABMIAuAAIAAARg");
	this.shape_20.setTransform(128.1,-116);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0C233E").s().p("AAQAvIgcgpIgJAJIAAAgIgTAAIAAhdIATAAIAAAmIAjgmIAZAAIgmAnIAoA2g");
	this.shape_21.setTransform(119.7,-116);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0C233E").s().p("AgiAvIAAhdIBDAAIAAARIgwAAIAAAUIAsAAIAAAPIgsAAIAAAYIAyAAIAAARg");
	this.shape_22.setTransform(106.7,-116);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0C233E").s().p("AgUAsQgKgGgFgLQgFgLgBgQQABgPAFgLQAGgLAKgGQAJgFALAAQALAAAHADQAIADAFAFQAEAFADAGQACAGABAFIgUAAIgCgHQgCgDgEgDQgFgDgIAAIgGABQgEACgEADQgDAEgCAGQgDAHAAAIQAAAJADAHQACAHAFAFQAFAEAHAAQAJAAAFgEQAFgFACgIIAUAAQgCAKgFAIQgGAHgIAFQgIAEgMAAQgLAAgKgFg");
	this.shape_23.setTransform(97.5,-116);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0C233E").s().p("AATAvIglhCIgBAAIAABCIgSAAIAAhdIAVAAIAkBAIAAAAIAAhAIASAAIAABdg");
	this.shape_24.setTransform(88.1,-116);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0C233E").s().p("AAXAvIgGgTIgiAAIgGATIgVAAIAihdIAWAAIAgBdgAAMALIgMgjIgLAjIAXAAg");
	this.shape_25.setTransform(78.7,-116);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0C233E").s().p("AARAvIgBgIIAAgLIgBgKQgBgEgEgCQgDgCgHAAIgTAAIAAAlIgTAAIAAhdIAuAAQAJABAGACQAGADADAFQADAEABAEIABAIQAAAIgDAGQgEAFgHACIAGAEQADACACAFQABAEAAAJIAAAKIABAGQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAAADgAgTgFIAWAAQAIABADgDQAEgDAAgHIgBgGQgBgCgDgCQgDgCgFAAIgYAAg");
	this.shape_26.setTransform(69.5,-116);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0C233E").s().p("AggAvIAAhdIBBAAIAAARIguAAIAAAVIAoAAIAAAPIgoAAIAAAog");
	this.shape_27.setTransform(60.9,-116);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0C233E").s().p("AARAvIgBgIIgBgLIAAgKQgBgEgDgCQgEgCgHAAIgTAAIAAAlIgTAAIAAhdIAuAAQAJABAGACQAGADADAFQADAEABAEIACAIQgBAIgEAGQgDAFgHACIAHAEQACACABAFQACAEAAAJIAAAKIABAGQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIAAADgAgTgFIAWAAQAIABADgDQAEgDAAgHIgBgGQgBgCgDgCQgDgCgFAAIgYAAg");
	this.shape_28.setTransform(48.5,-116);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0C233E").s().p("AgJAvIAAhdIATAAIAABdg");
	this.shape_29.setTransform(41.8,-116);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0C233E").s().p("AAXAvIgGgTIghAAIgHATIgUAAIAhhdIAWAAIAhBdgAAMALIgMgjIgLAjIAXAAg");
	this.shape_30.setTransform(35.3,-116);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0C233E").s().p("AgPAhQgIgDgEgJQgFgJAAgNIABgGIACgJQACgFAEgEQADgFAGgCQAGgDAIAAIALABQAGABAFAEQAFAFADAIQADAHAAALIAAADIgvAAIABAFIACAFQACADADACQADABAFABQAEAAADgCQADgCABgEIATAAQgCAIgFAGQgFAEgGACQgGADgGAAQgJAAgIgEgAAOgGQAAgFgDgDQgCgEgDgCIgGgBQgFAAgEAFQgDADgBAHIAbAAIAAAAg");
	this.shape_31.setTransform(134.7,-132.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0C233E").s().p("AAJAtQgIgBgDgCQgEgCgCgDQgBgDAAgEIAAgqIgJAAIAAgMIAJAAIAAgTIARAAIAAATIALAAIAAAMIgLAAIAAAlIAAADIACACIAGAAIACAAIABAAIAAAOIgEAAIgEABg");
	this.shape_32.setTransform(128.8,-133.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0C233E").s().p("AgTAjIAAhDIARAAIAAALIAEgHIAFgEQAEgCAFAAIACAAIACAAIAAASIgDAAIgCAAQgHAAgEADQgDACgBAEIgBAHIAAAjg");
	this.shape_33.setTransform(124.6,-132.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0C233E").s().p("AgUAiQgFgCgDgEQgDgFAAgHQAAgHADgEQACgFAFgCQAEgCAGgBIAQgCIADgCQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAgDgCgDIgEgCIgEAAQgFAAgCABQgCACgBADIgBADIgSAAQABgKAEgFQAGgFAGgCQAHgBAGAAIAIAAIAJADQAFACACAEQADAEAAAHIAAAkIABAHIACACIACACIAAACIgUAAIgBgEIgBgDIgEAEIgHADQgEADgGAAQgGAAgEgDgAAHADIgHABIgHACIgEADQgCADAAADQAAADACACQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAAAIAFABQAEAAACgCQAEgBACgDQACgDAAgEIAAgJIgDACg");
	this.shape_34.setTransform(118.1,-132.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0C233E").s().p("AgUAsQgKgGgFgLQgFgLgBgQQABgPAFgLQAGgLAKgGQAJgFALAAQALAAAHADQAIADAFAFQAEAFADAGQACAGABAFIgUAAIgCgHQgCgDgEgDQgFgDgIAAIgGABQgEACgEADQgDAEgCAGQgDAHAAAIQAAAJADAHQACAHAFAFQAFAEAHAAQAJAAAFgEQAFgFACgIIAUAAQgCAKgFAIQgGAHgIAFQgIAEgMAAQgLAAgKgFg");
	this.shape_35.setTransform(109.8,-133.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0C233E").s().p("AgPAhQgIgDgEgJQgFgJAAgNIABgGIACgJQACgFAEgEQADgFAGgCQAGgDAIAAIALABQAGABAFAEQAFAFADAIQADAHAAALIAAADIgvAAIABAFIACAFQACADADACQADABAFABQAEAAADgCQADgCABgEIATAAQgCAIgFAGQgFAEgGACQgGADgGAAQgJAAgIgEgAAOgGQAAgFgDgDQgCgEgDgCIgGgBQgFAAgEAFQgDADgBAHIAbAAIAAAAg");
	this.shape_36.setTransform(97.8,-132.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0C233E").s().p("AgTAjIAAhDIARAAIAAALIAEgHIAGgEQADgCAGAAIABAAIACAAIAAASIgCAAIgDAAQgHAAgEADQgEACAAAEIgBAHIAAAjg");
	this.shape_37.setTransform(92,-132.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0C233E").s().p("AAJAtQgIgBgDgCQgEgCgCgDQgBgDAAgEIAAgqIgJAAIAAgMIAJAAIAAgTIARAAIAAATIALAAIAAAMIgLAAIAAAlIAAADIACACIAGAAIACAAIABAAIAAAOIgEAAIgEABg");
	this.shape_38.setTransform(86.9,-133.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0C233E").s().p("AgQAgQgIgEgFgHQgFgJAAgMQAAgLAFgJQAFgHAIgFQAIgDAIAAQAKAAAIADQAHAFAFAHQAFAJAAALQAAAMgFAJQgFAHgHAEQgIAFgKAAQgIAAgIgFgAgJgQQgEACgBAGIgCAIIACAKQABAEAEAEQADADAGAAQAHAAAEgDQADgEABgEIACgKIgCgIQgBgGgDgCQgEgEgHAAQgGAAgDAEg");
	this.shape_39.setTransform(80.8,-132.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0C233E").s().p("AgIAiIgahDIAVAAIAOAxIAOgxIAUAAIgZBDg");
	this.shape_40.setTransform(73.2,-132.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0C233E").s().p("AgPAhQgGgDgEgGQgDgEgBgHIgCgLQAAgLAEgIQADgJAHgFQAIgEAKAAIAJABIAKADQAFAEADAEQADAGABAIIgTAAIgBgFIgEgFQgCgBgEAAIgBAAQgEAAgDADQgEADgBAFIgBAJIAAAFQAAAFACADIAEAGQADACAEAAQAFAAACgCIAEgFIABgEIATAAIgCAGQgBAFgEAEQgDAFgGADQgGADgKABQgJgBgGgDg");
	this.shape_41.setTransform(62.4,-132.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0C233E").s().p("AgPAhQgIgDgEgJQgFgJAAgNIABgGIACgJQACgFAEgEQADgFAGgCQAGgDAIAAIALABQAGABAFAEQAFAFADAIQADAHAAALIAAADIgvAAIABAFIACAFQACADADACQADABAFABQAEAAADgCQADgCABgEIATAAQgCAIgFAGQgFAEgGACQgGADgGAAQgJAAgIgEgAAOgGQAAgFgDgDQgCgEgDgCIgGgBQgFAAgEAFQgDADgBAHIAbAAIAAAAg");
	this.shape_42.setTransform(55.1,-132.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0C233E").s().p("AgJAiIgZhDIAVAAIANAxIAPgxIATAAIgZBDg");
	this.shape_43.setTransform(47.9,-132.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0C233E").s().p("AAXAvIgGgTIgiAAIgGATIgVAAIAihdIAVAAIAiBdgAALALIgLgjIgLAjIAWAAg");
	this.shape_44.setTransform(39.6,-133.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#08A2E2").s().p("AgLA9IAAhkIglAAIAAgVIBiAAIAAAVIglAAIAABkg");
	this.shape_45.setTransform(134.3,-153.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#08A2E2").s().p("AAYA9IgwhWIgBAAIAABWIgYAAIAAh5IAbAAIAwBUIAAAAIAAhUIAYAAIAAB5g");
	this.shape_46.setTransform(123,-153.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#08A2E2").s().p("AgtA9IAAh5IBYAAIAAAVIg/AAIAAAaIA6AAIAAAVIg6AAIAAAfIBCAAIAAAWg");
	this.shape_47.setTransform(111.4,-153.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#08A2E2").s().p("AAkA9IAAhlIgBAAIgXBlIgYAAIgWhlIAAAAIAABlIgYAAIAAh5IAlAAIAVBfIABAAIAVhfIAlAAIAAB5g");
	this.shape_48.setTransform(98.4,-153.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#08A2E2").s().p("AgtA9IAAh5IBYAAIAAAVIg/AAIAAAaIA6AAIAAAVIg6AAIAAAfIBCAAIAAAWg");
	this.shape_49.setTransform(85.9,-153.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#08A2E2").s().p("AAYA9IgwhWIgBAAIAABWIgYAAIAAh5IAbAAIAwBUIAAAAIAAhUIAYAAIAAB5g");
	this.shape_50.setTransform(73.9,-153.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#08A2E2").s().p("AgtBPIAAh5IBYAAIAAAWIg/AAIAAAZIA6AAIAAAVIg6AAIAAAgIBCAAIAAAVgAgMg2IAQgZIAaAAIgZAZg");
	this.shape_51.setTransform(62.4,-155.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#08A2E2").s().p("AgLA9Igqh5IAcAAIAZBbIAbhbIAaAAIgpB5g");
	this.shape_52.setTransform(50.8,-153.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#08A2E2").s().p("AgtBPIAAh5IBYAAIAAAWIg/AAIAAAZIA6AAIAAAVIg6AAIAAAgIBCAAIAAAVgAgMg2IAQgZIAaAAIgZAZg");
	this.shape_53.setTransform(39.7,-155.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#08A2E2").s().p("AAYA9IgwhWIgBAAIAABWIgYAAIAAh5IAbAAIAwBUIAAAAIAAhUIAYAAIAAB5g");
	this.shape_54.setTransform(136,-175.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#08A2E2").s().p("AgNA9QgGgBgHgDQgHgDgGgGQgEgGgDgHQgCgIAAgJIAAhQIAaAAIAABOQAAAJADAFQADAGAEACQAGADAFAAQAMAAAHgGQAGgGgBgLIAAhQIAaAAIAABPQAAAQgGAKQgGAKgMAFQgKAEgPAAIgDABIgKgCg");
	this.shape_55.setTransform(123.9,-175.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#08A2E2").s().p("AgaA5QgNgHgHgOQgHgPAAgVQAAgUAHgOQAIgPAMgHQANgHAPAAQANAAAKAEQAKAEAGAHQAHAGADAIQADAHAAAHIgZAAQgBgEgCgFQgDgEgFgEQgGgEgKAAQgEAAgFACQgFACgFAEQgEAFgDAIQgDAJAAAMQAAALADAJQADAKAGAGQAHAFAKAAQALAAAHgFQAHgGACgMIAZAAQgCAOgHAKQgGAKgLAGQgLAFgQAAQgPAAgMgHg");
	this.shape_56.setTransform(111.7,-175.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#08A2E2").s().p("AgNA9QgHgBgHgDQgGgDgGgGQgEgGgDgHQgCgIAAgJIAAhQIAaAAIAABOQAAAJADAFQADAGAEACQAFADAGAAQAMAAAGgGQAHgGgBgLIAAhQIAaAAIAABPQAAAQgGAKQgGAKgMAFQgKAEgPAAIgDABIgKgCg");
	this.shape_57.setTransform(99.5,-175.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#08A2E2").s().p("AAeA9IgIgZIgsAAIgIAZIgbAAIArh5IAdAAIArB5gAAPAPIgPgvIAAAAIgPAvIAeAAg");
	this.shape_58.setTransform(87.3,-175.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#08A2E2").s().p("AACBAQgPAAgLgEQgKgEgGgGQgFgHgCgHQgCgGAAgGIAYAAQAAADACAFQACAEAGAEQAFADAKAAIAMgBQAGgBAEgEQAEgDAAgGQAAgFgDgDQgDgDgFgBIgLgEIgNgDIgOgDQgHgCgFgEQgGgDgDgGQgDgGAAgKIABgMQACgGAFgGQAFgGAKgEQAJgEAPAAQANAAAJAEQAJAEAFAGQAGAGACAHQACAHAAAFIgYAAIgCgHQgCgEgFgDQgFgEgKAAQgFAAgFABQgFACgDADQgDADAAAGQAAAEACADQACADADABIAFABIAdAIQAJACAHADQAHADAFAGQAEAHAAALQAAALgEAHQgEAHgGAEQgGAFgGACIgNADIgGAAIgDAAg");
	this.shape_59.setTransform(70.7,-175.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#08A2E2").s().p("AgNA9QgHgBgHgDQgGgDgGgGQgEgGgDgHQgCgIAAgJIAAhQIAaAAIAABOQAAAJADAFQADAGAEACQAFADAGAAQAMAAAGgGQAHgGgBgLIAAhQIAaAAIAABPQAAAQgGAKQgGAKgMAFQgKAEgPAAIgDABIgKgCg");
	this.shape_60.setTransform(59,-175.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#08A2E2").s().p("AgqA9IAAh5IAaAAIAABjIA7AAIAAAWg");
	this.shape_61.setTransform(48,-175.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#08A2E2").s().p("AguA9IAAh5IA3AAQASAAAKALQAKAKAAASIgCALQgBAGgEAGQgEAGgIAFQgIAEgMAAIgcAAIAAAsgAgUgDIAWAAQAKAAAEgEQAEgDABgFIAAgHQAAgJgFgEQgFgEgLAAIgUAAg");
	this.shape_62.setTransform(37,-175.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#08A2E2").s().p("AgvA9IAAgVIA/hOIg9AAIAAgWIBdAAIAAAUIg/BQIA/AAIAAAVg");
	this.shape_63.setTransform(138.4,-197.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#08A2E2").s().p("AgtA9IAAh5IBYAAIAAAWIg/AAIAAAZIA6AAIAAAVIg6AAIAAAgIBCAAIAAAVg");
	this.shape_64.setTransform(127.8,-197.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#08A2E2").s().p("AgMA9QgHgBgIgDQgGgDgFgGQgFgGgDgHQgCgIAAgJIAAhQIAaAAIAABOQAAAJADAFQADAGAFACQAFADAGAAQAMAAAFgGQAHgGgBgLIAAhQIAaAAIAABPQAAAQgGAKQgGAKgMAFQgLAEgOAAIgDABIgJgCg");
	this.shape_65.setTransform(115.8,-197.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#08A2E2").s().p("AAfA1QgJAFgIACQgJACgFgBQgEABgIgCQgHgBgIgEQgIgDgHgHQgHgIgFgLQgEgMAAgQQAAgRAEgLQAFgMAHgHQAHgHAIgEQAIgEAHgBIAMgBIAMABQAHABAIAEQAJAEAGAHQAHAHAEAMQAFALABARQgBAOgDALQgEALgFAHIANAMIgNAOgAgLgrQgFACgFAFQgFAFgEAIQgCAIAAANQAAAMACAIQAEAJAFAEQAFAFAFACIALACIAGgBIAIgCIgNgMIANgOIANAMQADgEABgHQACgGAAgIQAAgNgDgIQgDgIgFgFQgFgFgGgCQgGgCgFABIgCAAIgJABg");
	this.shape_66.setTransform(103.1,-197.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#08A2E2").s().p("AAYA9IgwhWIgBAAIAABWIgYAAIAAh5IAbAAIAwBUIAAAAIAAhUIAYAAIAAB5g");
	this.shape_67.setTransform(90.3,-197.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#08A2E2").s().p("AAeA9IgIgZIgsAAIgIAZIgbAAIArh5IAdAAIArB5gAAPAPIgPgvIAAAAIgPAvIAeAAg");
	this.shape_68.setTransform(78.2,-197.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#08A2E2").s().p("AAkA9IAAhlIgBAAIgXBlIgYAAIgWhlIAAAAIAABlIgYAAIAAh5IAlAAIAVBfIABAAIAVhfIAlAAIAAB5g");
	this.shape_69.setTransform(64.9,-197.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#08A2E2").s().p("AgtA9IAAh5IBYAAIAAAWIg/AAIAAAZIA6AAIAAAVIg6AAIAAAgIBCAAIAAAVg");
	this.shape_70.setTransform(47.7,-197.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#08A2E2").s().p("AAYA9IgwhWIgBAAIAABWIgYAAIAAh5IAbAAIAwBUIAAAAIAAhUIAYAAIAAB5g");
	this.shape_71.setTransform(35.7,-197.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_01, new cjs.Rectangle(17,-210,139.2,138.6), null);


(lib.Interpoler12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B2241").s().p("AgiArIAAhVIAdAAQATAAALAKQAKAKAAAVQAAAUgKAMQgKAMgUAAgAgXAhIATAAIAHgBQAFgBAEgDQAFgDADgHQAEgHAAgLQAAgKgDgHQgDgHgGgEQgGgEgKAAIgTAAg");
	this.shape.setTransform(11.7,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B2241").s().p("AgbArIAAhVIALAAIAABLIAsAAIAAAKg");
	this.shape_1.setTransform(4.3,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B2241").s().p("AgRApQgIgEgEgGQgGgGgCgIQgDgIAAgJQAAgIADgIQACgIAGgGQAEgHAIgDQAIgEAJAAQAKAAAIAEQAIADAFAHQAFAGACAIQADAIAAAIQAAAJgDAIQgCAIgFAGQgFAGgIAEQgIAEgKAAQgJAAgIgEgAgMgfQgGADgDAFQgEAFgCAGQgCAGABAGIABANQACAGAEAFQADAFAGADQAFADAHAAQAIAAAGgDQAFgDAEgFQADgFACgGIABgNQAAgGgBgGQgCgGgDgFQgEgFgFgDQgGgDgIAAQgHAAgFADg");
	this.shape_2.setTransform(-4,41);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B2241").s().p("AgOApQgIgDgFgGQgGgHgCgHQgDgIAAgIQAAgJACgIQADgJAFgGQAFgHAIgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGACAKIgMAAQgBgGgEgEQgDgEgGgCQgFgCgGAAQgHAAgGADQgFADgEAFQgDAFgCAHIgCAMQAAAJAEAIQADAIAHAEQAGAFAJAAQAJAAAGgEQAGgDADgHQAEgGgBgIIgbAAIAAgIIAlAAIAAAsIgHAAIgDgLQgDAFgFACQgEADgFACIgKABQgJAAgHgEg");
	this.shape_3.setTransform(-13.2,41);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B2241").s().p("AgQAqQgIgEgEgGQgFgHgBgKIALAAQAAAHAEAEQAEAFAFACQAFACAGAAQAFAAAFgBQAGgBACgEQAEgDAAgGQAAgGgEgDQgEgDgGgCIgMgDIgOgDQgGgCgEgFQgEgEAAgIQABgJADgFQAFgGAHgCQAHgDAIAAQAIAAAHADQAHADAEAGQAFAGAAAJIgLAAQgBgJgFgEQgGgEgIAAIgKABQgEABgDAEQgCADAAAFQAAAFADADQAFADAGACIAMADQAHABAGADQAGABAFAFQADAFAAAIQAAAHgCAFQgEAFgEADQgGADgFABQgGACgGAAQgJAAgIgDg");
	this.shape_4.setTransform(54.6,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0B2241").s().p("AgQAqQgIgEgFgGQgEgHAAgKIAKAAQABAHADAEQADAFAGACQAGACAFAAQAGAAAFgBQAEgBAEgEQADgDAAgGQAAgGgEgDQgEgDgGgCIgNgDIgMgDQgHgCgEgFQgEgEAAgIQAAgJAEgFQAFgGAHgCQAHgDAIAAQAIAAAHADQAHADAEAGQAEAGABAJIgLAAQgBgJgGgEQgFgEgJAAIgJABQgEABgCAEQgEADAAAFQAAAFAFADQAEADAGACIAMADQAHABAGADQAHABAEAFQADAFAAAIQAAAHgCAFQgEAFgFADQgFADgFABQgGACgGAAQgJAAgIgDg");
	this.shape_5.setTransform(46.8,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B2241").s().p("AgdArIAAhVIA6AAIAAAKIguAAIAAAbIArAAIAAAIIgrAAIAAAeIAvAAIAAAKg");
	this.shape_6.setTransform(39.5,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B2241").s().p("AAWArIgCgFIAAgIIgBgIIgCgIQgBgEgDgCQgDgCgGAAIgaAAIAAAlIgMAAIAAhVIAnAAQANAAAGAGQAHAGABALQAAAHgEAGQgEAGgHABQAFABACADQADADABADQABAEAAAEIABAJIABAIQABAEADADgAgWgCIAWAAQAGAAAEgCQAFgBACgDQADgEAAgGQAAgGgEgEQgDgEgIAAIgbAAg");
	this.shape_7.setTransform(31.8,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B2241").s().p("AgfArIAAhVIAlAAQANAAAGAHQAHAGAAAMQAAAMgHAGQgGAHgNAAIgZAAIAAAjgAgTgBIAVAAQAJAAAFgEQAFgEAAgIQAAgHgFgEQgFgEgJAAIgVAAg");
	this.shape_8.setTransform(23.7,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0B2241").s().p("AAXArIgXgkIgXAkIgNAAIAegrIgcgqIANAAIAVAiIAWgiIANAAIgcAqIAeArg");
	this.shape_9.setTransform(15.9,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0B2241").s().p("AgdArIAAhVIA6AAIAAAKIguAAIAAAbIArAAIAAAIIgrAAIAAAeIAvAAIAAAKg");
	this.shape_10.setTransform(8.8,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0B2241").s().p("AAWArIgshEIAAAAIAABEIgLAAIAAhVIAMAAIAsBFIAAhFIALAAIAABVg");
	this.shape_11.setTransform(-2.8,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0B2241").s().p("AAbArIgJgaIgjAAIgKAaIgMAAIAhhVIAMAAIAiBVgAAOAHIgOgnIAAAAIgOAnIAcAAg");
	this.shape_12.setTransform(-11,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0B2241").s().p("AgUAnQgIgGgFgKQgFgKAAgNQABgLAFgLQAEgKAJgGQAJgGAMAAQAJAAAIADQAHADAFAHQAFAGACAJIgMAAQgBgGgEgEQgDgEgFgCQgFgCgGAAQgJAAgHAFQgGAFgDAHQgDAIAAAJQAAAJADAIQADAIAGAFQAHAFAJAAQAIAAAFgDQAFgDADgGQADgFABgIIAMAAQgCARgKAJQgKAJgPAAQgNAAgJgGg");
	this.shape_13.setTransform(-19.2,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B2241").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_14.setTransform(-25.1,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0B2241").s().p("AAWArIgCgFIAAgIIgBgIIgCgIQgBgEgDgCQgDgCgGAAIgaAAIAAAlIgMAAIAAhVIAnAAQANAAAGAGQAHAGABALQAAAHgEAGQgEAGgHABQAFABACADQADADABADQABAEAAAEIABAJIABAIQABAEADADgAgWgCIAWAAQAGAAAEgCQAFgBACgDQADgEAAgGQAAgGgEgEQgDgEgIAAIgbAAg");
	this.shape_15.setTransform(-30.5,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0B2241").s().p("AgdArIAAhVIA6AAIAAAKIguAAIAAAbIArAAIAAAIIgrAAIAAAeIAvAAIAAAKg");
	this.shape_16.setTransform(-38.3,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0B2241").s().p("AAgArIAAhGIgbBGIgJAAIgbhGIAABGIgLAAIAAhVIAQAAIAaBHIAbhHIAQAAIAABVg");
	this.shape_17.setTransform(-47.5,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0B2241").s().p("AAbArIgJgaIgjAAIgKAaIgMAAIAihVIALAAIAiBVgAAOAHIgOgnIAAAAIgOAnIAcAAg");
	this.shape_18.setTransform(-56.6,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0B2241").s().p("AAgArIAAhGIgbBGIgJAAIgbhGIAABGIgLAAIAAhVIAQAAIAaBHIAbhHIAQAAIAABVg");
	this.shape_19.setTransform(43,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0B2241").s().p("AgbArIAAhVIALAAIAABLIAsAAIAAAKg");
	this.shape_20.setTransform(34.9,9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0B2241").s().p("AAVArIgegrIgOANIAAAeIgMAAIAAhVIAMAAIAAAqIAqgqIAPAAIgjAjIAkAyg");
	this.shape_21.setTransform(27.6,9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0B2241").s().p("AgdArIAAhVIA6AAIAAAKIguAAIAAAbIArAAIAAAIIgrAAIAAAeIAvAAIAAAKg");
	this.shape_22.setTransform(16.3,9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0B2241").s().p("AgUAnQgIgGgFgKQgEgKgBgNQAAgLAGgLQAEgKAJgGQAJgGAMAAQAJAAAIADQAHADAFAHQAFAGACAJIgMAAQgBgGgDgEQgEgEgFgCQgFgCgGAAQgJAAgGAFQgHAFgDAHQgDAIAAAJQAAAJADAIQADAIAHAFQAGAFAJAAQAIAAAFgDQAFgDADgGQADgFABgIIAMAAQgCARgKAJQgKAJgPAAQgNAAgJgGg");
	this.shape_23.setTransform(8.1,9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0B2241").s().p("AAWArIgshEIAAAAIAABEIgLAAIAAhVIAMAAIAsBFIAAhFIALAAIAABVg");
	this.shape_24.setTransform(-0.5,9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0B2241").s().p("AAbArIgJgaIgjAAIgKAaIgMAAIAhhVIAMAAIAiBVgAAOAHIgOgnIAAAAIgOAnIAcAAg");
	this.shape_25.setTransform(-8.8,9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0B2241").s().p("AAWArIgCgFIAAgIIgBgIIgCgIQgBgEgDgCQgDgCgGAAIgaAAIAAAlIgMAAIAAhVIAnAAQANAAAGAGQAHAGABALQAAAHgEAGQgEAGgHABQAFABACADQADADABADQABAEAAAEIABAJIABAIQABAEADADgAgWgCIAWAAQAGAAAEgCQAFgBACgDQADgEAAgGQAAgGgEgEQgDgEgIAAIgbAAg");
	this.shape_26.setTransform(-16.5,9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0B2241").s().p("AgbArIAAhVIA3AAIAAAKIgsAAIAAAbIAnAAIAAAIIgnAAIAAAog");
	this.shape_27.setTransform(-24,9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0B2241").s().p("AAWArIgCgFIAAgIIgBgIIgCgIQgBgEgDgCQgDgCgGAAIgaAAIAAAlIgMAAIAAhVIAnAAQANAAAGAGQAHAGABALQAAAHgEAGQgEAGgHABQAFABACADQADADABADQABAEAAAEIABAJIABAIQABAEADADgAgWgCIAWAAQAGAAAEgCQAFgBACgDQADgEAAgGQAAgGgEgEQgDgEgIAAIgbAAg");
	this.shape_28.setTransform(-34.9,9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0B2241").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_29.setTransform(-40.9,9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0B2241").s().p("AAbArIgJgaIgkAAIgJAaIgMAAIAihVIALAAIAiBVgAAOAHIgOgnIAAAAIgOAnIAcAAg");
	this.shape_30.setTransform(-46.3,9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0B2241").s().p("AgRAfQgHgFgEgHQgEgIgBgLQABgJAEgIQAEgIAIgFQAIgFAJABQAIAAAHADQAGADAEAGQAEAFACAHQACAHgBAHIgvAAQAAAJAFAEQAEAFAGAAQAGAAAEgDQAEgDABgDIAQAAQgEAMgIAFQgIAGgLgBQgKABgIgFgAAPgGQgBgIgEgDQgDgDgHgBQgFABgDACQgDADgCACIgBAHIAdAAIAAAAg");
	this.shape_31.setTransform(65,-6.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0B2241").s().p("AAAArQgEgBgDgEQgCgDAAgHIAAgnIgLAAIAAgMIALAAIAAgUIARAAIAAAUIANAAIAAAMIgNAAIAAAhQAAAEABACQACACAFgBIADAAIACAAIAAAOIgFABIgGAAQgFAAgFgBg");
	this.shape_32.setTransform(58.9,-7.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0B2241").s().p("AgVAiIAAhBIASAAIAAALIAAAAQACgDACgEQAEgDAEgBQAEgCAFAAIACAAIACAAIAAARIgEAAIgDgBQgHABgEADQgEACgBAGQgBAEAAAFIAAAeg");
	this.shape_33.setTransform(54.5,-6.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0B2241").s().p("AgUAhQgFgCgEgFQgDgEAAgHQABgIADgDQADgEAFgCQAFgCAGAAIAKgBIAIgDQADgBAAgEQAAgEgCgCQAAAAgBgBQAAAAAAgBQgBAAgBAAQAAAAgBgBIgGAAQgEAAgDACQgEACAAAGIgTAAQABgJAFgEQAEgGAHgBQAHgCAHAAIAKAAIAKADQAEACADAEQADADAAAHIAAAiIAAAJIACAFIgTAAIgBgCIAAgEQgFAEgGACQgEACgHAAQgGAAgFgCgAAFADIgHABIgIADQgDACAAAFQAAAFADACQAEACAEAAQAFAAADgCQADgBABgEIACgEIAAgFIAAgGQgCABgFABg");
	this.shape_34.setTransform(47.8,-6.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0B2241").s().p("AgVAqQgKgGgGgLQgFgLAAgOQAAgNAFgLQAGgKAKgHQAKgHANABQALAAAIADQAJAEAFAHQAGAIABALIgTAAQgBgFgDgEQgDgDgEgCQgFgCgFAAQgIgBgFAFQgGAFgCAHQgDAHAAAHQAAAIADAIQACAGAGAFQAFAFAIAAQAKgBAFgFQAFgGABgJIAUAAQgBALgFAJQgGAJgIAEQgJAFgMgBQgNABgKgHg");
	this.shape_35.setTransform(39.3,-8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0B2241").s().p("AgRAfQgHgFgEgHQgEgIgBgLQABgJAEgIQAEgIAIgFQAIgFAJABQAIAAAHADQAGADAEAGQAEAFACAHQACAHgBAHIgvAAQAAAJAFAEQAEAFAGAAQAGAAAEgDQAEgDABgDIAQAAQgEAMgIAFQgIAGgLgBQgKABgIgFgAAPgGQgBgIgEgDQgDgDgHgBQgFABgDACQgDADgCACIgBAHIAdAAIAAAAg");
	this.shape_36.setTransform(27.2,-6.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0B2241").s().p("AgVAiIAAhBIASAAIAAALIAAAAQACgDACgEQAEgDAEgBQAEgCAFAAIACAAIACAAIAAARIgEAAIgDgBQgHABgEADQgEACgBAGQgBAEAAAFIAAAeg");
	this.shape_37.setTransform(21.3,-6.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0B2241").s().p("AAAArQgEgBgCgEQgDgDAAgHIAAgnIgMAAIAAgMIAMAAIAAgUIARAAIAAAUIANAAIAAAMIgNAAIAAAhQAAAEACACQABACAFgBIADAAIACAAIAAAOIgFABIgFAAQgGAAgFgBg");
	this.shape_38.setTransform(16.1,-7.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0B2241").s().p("AgRAfQgIgFgEgHQgFgIAAgLQAAgKAFgIQAEgIAIgEQAHgFAKABQALgBAHAFQAIAEAEAIQAFAIAAAKQAAALgFAIQgEAHgIAFQgHAFgLgBQgKABgHgFgAgJgSQgDAEgCAEQgBAGAAAEQAAAFABAGQACAEADAEQAEADAFAAQAGAAAEgDQADgEACgEQABgGAAgFQAAgEgBgGQgCgEgDgEQgEgDgGAAQgFAAgEADg");
	this.shape_39.setTransform(9.8,-6.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0B2241").s().p("AgJAhIgXhBIATAAIANAsIABAAIAOgsIASAAIgXBBg");
	this.shape_40.setTransform(2.5,-6.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0B2241").s().p("AgeAhIAAgNIAignIgfAAIAAgNIA3AAIAAANIgiAnIAlAAIAAANg");
	this.shape_41.setTransform(-7.9,-6.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0B2241").s().p("AgRAfQgHgFgEgHQgEgIgBgLQABgJAEgIQAEgIAIgFQAIgFAJABQAIAAAHADQAGADAEAGQAEAFACAHQACAHgBAHIgvAAQAAAJAFAEQAEAFAGAAQAGAAAEgDQAEgDABgDIAQAAQgEAMgIAFQgIAGgLgBQgKABgIgFgAAPgGQgBgIgEgDQgDgDgHgBQgFABgDACQgDADgCACIgBAHIAdAAIAAAAg");
	this.shape_42.setTransform(-15,-6.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0B2241").s().p("AgUAqQgGgFgEgIQgDgJAAgJQAAgJADgHQAEgIAGgFQAHgEAKAAQAFAAAFACQAFADAEAFIAAgiIASAAIAABbIgRAAIAAgIIgBAAQgDAFgFADQgFACgGAAQgKAAgHgFgAgIgGQgEAEgBADQgCAFAAAGQAAAFACAFQACAFADADQAEADAFABQAGAAADgDQAEgEABgEQACgGgBgGQABgFgCgFQgBgDgEgEQgDgDgGAAQgFAAgEADg");
	this.shape_43.setTransform(-22.8,-7.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0B2241").s().p("AANAiIAAglQAAgIgCgEQgDgEgGAAQgHAAgDAFQgEAEAAAKIAAAiIgTAAIAAhBIASAAIAAAJIAAAAQAEgGAFgDQAFgCAGAAQAKAAAFADQAGAEACAFQABAGAAAJIAAAog");
	this.shape_44.setTransform(-30.5,-6.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0B2241").s().p("AgUAhQgFgCgEgFQgDgEAAgHQABgIADgDQADgEAFgCQAFgCAGAAIAKgBIAIgDQADgBAAgEQAAgEgCgCQAAAAgBgBQAAAAAAgBQgBAAgBAAQAAAAgBgBIgGAAQgEAAgDACQgEACAAAGIgTAAQABgJAFgEQAEgGAHgBQAHgCAHAAIAKAAIAKADQAEACADAEQADADAAAHIAAAiIAAAJIACAFIgTAAIgBgCIAAgEQgFAEgGACQgEACgHAAQgGAAgFgCgAAFADIgHABIgIADQgDACAAAFQAAAFADACQAEACAEAAQAFAAADgCQADgBABgEIACgEIAAgFIAAgGQgCABgFABg");
	this.shape_45.setTransform(-38.1,-6.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0B2241").s().p("AAhAiIAAglIgBgIQgBgEgCgCQgDgCgEAAQgFAAgEACQgCADgBAEIgBAIIAAAkIgSAAIAAglIAAgHQAAgEgDgDQgCgCgGAAIgEABQgEACgCADQgCADAAAHIAAAlIgSAAIAAhBIARAAIAAAJIABAAQADgGAFgCQAFgDAHAAQAGAAAFACQAFADACAGQADgFAFgDQAFgDAIAAQAHAAAGACQAFACADAGQAEAFgBAIIAAAsg");
	this.shape_46.setTransform(-47.7,-6.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0B2241").s().p("AgRAfQgHgFgEgHQgEgIgBgLQABgJAEgIQAEgIAIgFQAIgFAJABQAIAAAHADQAGADAEAGQAEAFACAHQACAHgBAHIgvAAQAAAJAFAEQAEAFAGAAQAGAAAEgDQAEgDABgDIAQAAQgEAMgIAFQgIAGgLgBQgKABgIgFgAAPgGQgBgIgEgDQgDgDgHgBQgFABgDACQgDADgCACIgBAHIAdAAIAAAAg");
	this.shape_47.setTransform(-57.3,-6.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0B2241").s().p("AgoAuIAAhbIAoAAQALAAAKAFQAJAFAFAKQAGAKAAAPQAAANgEALQgFAKgKAHQgJAFgNAAgAgUAdIASAAQAGAAAFgDQAFgCADgGQAEgGAAgLQAAgIgCgHQgDgGgGgFQgGgDgJAAIgPAAg");
	this.shape_48.setTransform(-65.7,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-20,282,69.9);


(lib.Interpoler10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAHgHAKAAQAKAAAGAHQAHAHAAAMIAAADIgmAAQABAIAEAEQAFAFAFAAQAFAAADgDQADgCACgFIAJABQgBAHgHAFQgFAEgJAAQgKAAgHgHgAgJgOQgEAEAAAGIAbAAQAAgGgCgDQgFgGgGAAQgFAAgFAFg");
	this.shape.setTransform(16.7,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAiQgDgCgBgCQgBgDgBgHIAAgdIgFAAIAAgHIAFAAIAAgNIAIgFIAAASIAJAAIAAAHIgJAAIAAAdIABAFIABACIAEAAIADAAIABAIIgGAAQgFAAgBgBg");
	this.shape_1.setTransform(12.6,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAbIAAgfIgBgIIgDgFQgDgBgDAAQgFAAgEADQgEAEAAAKIAAAcIgJAAIAAg0IAIAAIAAAIQAFgIAKgBQAFABAEABQAEACACADQACADAAADIABAIIAAAgg");
	this.shape_2.setTransform(8.3,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAGgHAKAAQALAAAHAHQAGAHAAAMIAAADIgmAAQABAIAEAEQAFAFAFAAQAFAAADgDQAEgCACgFIAJABQgCAHgGAFQgGAEgJAAQgLAAgGgHgAgJgOQgEAEgBAGIAdAAQgBgGgDgDQgEgGgHAAQgEAAgFAFg");
	this.shape_3.setTransform(2.8,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgBgIIAJgCQAAAFADADQADADAFAAQAHAAACgDQADgCABgDQAAgDgDgCIgJgDIgMgEQgEgBgCgDQgCgEAAgDQAAgEABgDQACgDADgBIAFgDIAIgBQAFAAAFACQAEACACACQADADAAAFIgIABQgBgDgDgCQgCgDgFAAQgGAAgCACQgDACABADIAAADIAEADIAGACIAOADQADABACADQACAEABAEQAAAEgDAEQgCAEgGACQgEACgHAAQgJAAgEgEg");
	this.shape_4.setTransform(-2.5,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAdQgHgHAAgMQAAgMAHgHQAHgIAKAAQAKAAAHAIQAGAGAAAMIAAADIgmAAQABAIAEAFQAFAFAFgBQAFABADgDQAEgDABgFIAJABQgCAIgFAFQgGAEgJgBQgKABgHgIgAgIgFQgFAEgBAFIAcAAQAAgFgDgDQgEgGgGABQgGgBgDAFgAgEgWIAFgNIAMAAIgLANg");
	this.shape_5.setTransform(-7.8,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAbIAAg0IAIAAIAAAIQADgFACgCQACgBADgBQAFABAEACIgDAIQgDgCgEAAQgCAAgCACQgCACgBADIgBAKIAAAbg");
	this.shape_6.setTransform(-11.8,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAkIAAhHIAIAAIAAAIQADgEAEgDQADgCAFAAQAHABAEADQAFADADAGQADAHgBAHQABAIgDAGQgDAGgFAEQgGADgGgBQgEAAgDgBQgEgCgCgDIAAAZgAgJgYQgEAGgBAKQAAAJAEAFQAFAEAFAAQAFAAAFgEQADgGAAgJQAAgKgDgFQgEgEgGAAQgFAAgEAEg");
	this.shape_7.setTransform(-16.5,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAXQgGgEgCgIIAJgCQABAFADADQAEADAEAAQAHAAACgDQAEgCAAgDQgBgEgCgBIgJgDIgNgEQgDgBgCgDQgCgDAAgEQAAgDABgEQACgDADgBIAFgDIAIgBQAFAAAFACQAEACACACQADAEABAEIgJABQgBgDgDgDQgCgCgFAAQgGAAgCACQgCACgBADIABADIAEADIAGACIAOADQADABADADQACADAAAFQgBAEgCAEQgCAEgFACQgFACgHAAQgIAAgFgEg");
	this.shape_8.setTransform(41.3,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAXQgFgEgCgIIAJgCQABAFAEADQACADAGAAQAGAAADgDQACgCAAgDQABgEgDgBIgJgDIgNgEQgDgBgCgDQgCgDAAgEQAAgDACgEQABgDADgBIAGgDIAHgBQAFAAAFACQAFACACACQACAEABAEIgJABQAAgDgDgDQgDgCgFAAQgFAAgDACQgCACAAADIABADIADADIAHACIANADQADABADADQABADAAAFQABAEgDAEQgDAEgFACQgEACgGAAQgJAAgGgEg");
	this.shape_9.setTransform(36.3,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgMAHgHQAHgHAKAAQAKAAAGAHQAHAHAAAMIAAADIgmAAQABAIAEAEQAFAFAFAAQAFAAADgDQADgCACgGIAJACQgBAHgHAFQgFAEgJAAQgKAAgHgHgAgJgOQgEAEAAAGIAbAAQAAgGgCgDQgFgGgGAAQgFAAgFAFg");
	this.shape_10.setTransform(31.1,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAbIAAg0IAIAAIAAAJQADgGACgCQACgCADABQAEAAAFACIgDAIQgDgBgEAAQgCAAgCABQgCACgBADIgBAKIAAAbg");
	this.shape_11.setTransform(27,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAIAAIAAAIQADgFADgCQADgBAEAAQAHAAAGADQAFAEACAFQACAHABAHQgBAIgCAFQgDAHgFAEQgGADgGAAQgEgBgDgBQgDgCgCgDIAAAagAgJgYQgFAGABAKQAAAJADAFQAEAEAGAAQAGAAADgEQAFgGAAgJQAAgKgFgFQgEgEgFAAQgFAAgEAEg");
	this.shape_12.setTransform(22.3,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAaIgKgQIgDgEIgNAUIgLAAIATgaIgRgZIALAAIAIANIADAFIADgFIAJgNIALAAIgSAYIAUAbg");
	this.shape_13.setTransform(17,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIAzAAIAAAJIgpAAIAAAWIAmAAIAAAHIgmAAIAAAYIArAAIAAAJg");
	this.shape_14.setTransform(11.3,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAbIAAgfIgBgIQAAgCgDgCQgDgCgEAAQgEAAgEADQgEAEAAAKIAAAcIgJAAIAAg0IAIAAIAAAIQAGgIAJAAQAFgBAEACQAEACACADQACADAAADIABAIIAAAgg");
	this.shape_15.setTransform(2.2,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAXQgEgEAAgGQAAgFACgCQABgEADgCIAGgCIAJgBQAJgBAFgCIAAgCQAAgGgCgCQgDgDgHAAQgGAAgDACQgDADgBAFIgIgBQABgGACgDQADgEAFgBQAFgCAGAAQAGAAAFACQAEABACACQACADABAEIAAAIIAAALIABAPIACAGIgJAAIgCgGQgFAEgEABQgEACgFAAQgJAAgFgEgAgBAEIgIABIgDADIgBAEQAAADACADQADADAFAAQAEAAAEgDQAEgCACgEIABgJIAAgDQgFACgIACg");
	this.shape_16.setTransform(-3.3,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgOQABgHACgGQADgHAFgDQAHgDAFAAQAIAAAGAFQAFAEABAHIgIABQgBgFgDgCQgDgDgEAAQgHAAgDAFQgFAFAAAJQAAAKAFAFQAEAFAFAAQAFAAAEgDQADgDABgHIAIABQgBAJgGAFQgFAFgJAAQgKAAgGgHg");
	this.shape_17.setTransform(-8.4,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAkIAAgzIAIAAIAAAzgAgEgZIAAgKIAIAAIAAAKg");
	this.shape_18.setTransform(-12.2,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAbIAAg0IAIAAIAAAJQADgGACgCQACgCADABQAFAAAEACIgDAIQgDgBgDAAQgDAAgCABQgCACgBADIgBAKIAAAbg");
	this.shape_19.setTransform(-14.6,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgMAHgHQAHgHAJAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAFAFAFAAQAFAAADgDQADgCACgGIAJACQgBAHgHAFQgFAEgJAAQgLAAgGgHgAgJgOQgEAEAAAGIAbAAQAAgGgCgDQgFgGgHAAQgEAAgFAFg");
	this.shape_20.setTransform(-19.4,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAbIAAggIAAgIQgBgCgDgBQgCgCgDAAQgFAAgEAEQgEAEAAAHIAAAeIgHAAIAAghQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBADAAAHIAAAbIgJAAIAAg0IAIAAIAAAIQACgEAEgCQAEgDAFABQAGgBAEADQADADABAEQAGgKAKABQAIAAAEAEQAEAEAAAJIAAAjg");
	this.shape_21.setTransform(-26.4,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXAkIgJgWIgcAAIgIAWIgKAAIAbhHIAJAAIAdBHgAgEgOIgIAUIAYAAIgIgSIgFgPQAAAHgDAGg");
	this.shape_22.setTransform(-33.8,-0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAFIgGAKIgFgEIAIgJIgMgCIACgHIALAFIgBgMIAHAAIgCAMIAMgFIACAHIgMACIAIAJIgFAEIgHgKg");
	this.shape_23.setTransform(-42,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-7.5,91.9,28.3);


(lib.Interpoler9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAGAAAFACQAFADADAEQAEAEABAGQABAFAAAFIglAAQAAAEABADQACAEADACQADACAEAAQAFAAADgCQADgCABgEIALAAQgBAFgEAEQgDAEgFACQgFACgFAAQgIAAgFgDgAANgEIgCgGQgBgEgDgBQgDgCgEAAQgDAAgDABQgDACgBADQgCADAAAEIAZAAIAAAAg");
	this.shape.setTransform(61,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAiQgGAAgCgCQgEgBgBgDIgBgHIAAgeIgIAAIAAgIIAIAAIAAgQIALAAIAAAQIAKAAIAAAIIgKAAIAAAbIAAAEIABACIAFABIABAAIADgBIAAAJIgEABIgDAAg");
	this.shape_1.setTransform(56.5,-16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAbIAAggQAAgGgCgDQgDgCgFAAQgDAAgDABIgEAFQgBADAAAEIAAAeIgMAAIAAgzIALAAIAAAIQADgEAEgDQAEgCAEAAQAJgBAFAFQAFAEAAAJIAAAjg");
	this.shape_2.setTransform(52,-15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAGAAAFACQAFADADAEQAEAEABAGQABAFAAAFIglAAQAAAEABADQACAEADACQADACAEAAQAFAAADgCQADgCABgEIALAAQgBAFgEAEQgDAEgFACQgFACgFAAQgIAAgFgDgAANgEIgCgGQgBgEgDgBQgDgCgEAAQgDAAgDABQgDACgBADQgCADAAAEIAZAAIAAAAg");
	this.shape_3.setTransform(46.4,-15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAZQgEgCgEgEQgDgEAAgGIALAAQABAFAEACQACACAFAAIAEAAIAFgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBgDgCgBIgGgCIgHgCIgIgDQgEAAgDgDQgCgDAAgGQAAgEACgDIAGgEIAHgDIAGAAQAFAAAFABQAEACADADQAEAEABAGIgMAAQgCgFgCgBQgDgBgDAAIgEAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABIgDADQABADACABIAGADIAHABIAIADQAEABADACQACADAAAFQAAAFgCADQgCADgEACIgHADIgIABQgFAAgGgCg");
	this.shape_4.setTransform(41,-15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAiQgGgEgDgGQgDgGAAgIQAAgIADgFQADgGAGgEQAGgDAGAAQAGAAAFACQAFADADAEQAEAEABAFQABAFAAAGIglAAQAAAEABADQACAEADACQADACAEAAQAFAAADgCQADgCABgEIALAAQgBAFgEAEQgDAEgFACQgFACgFAAQgIAAgFgDgAANAFIgCgFQgBgEgDgBQgDgCgEAAQgDAAgDABQgDACgBADQgCACAAAEIAZAAIAAAAgAgDgWIAIgOIANAAIgOAOg");
	this.shape_5.setTransform(35.6,-16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAbIAAgzIAKAAIAAAKIABAAQAAgDADgDIAEgEQADgBAEAAIACAAIACAAIAAALIgCAAIgDgBQgEAAgDACQgDACgBAEQgCAEAAAFIAAAZg");
	this.shape_6.setTransform(31.4,-15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAKAAIAAAHIAAAAQADgEAEgCQAEgCAEAAQAJAAAFAEQAFADADAHQADAGAAAHQAAAHgDAGQgCAGgFAEQgFADgIAAIgGgBQgDAAgCgCIgFgFIgBAAIAAAagAgKgVQgDAFgBAIQABAFABADQABAFAEACQADADAEgBQAFAAADgCQADgDABgEQACgDAAgFQAAgEgCgFQgBgEgDgDQgEgCgEAAQgHAAgDAFg");
	this.shape_7.setTransform(26.4,-14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAZQgEgCgEgEQgDgEAAgGIALAAQABAFADACQAEACADAAIAGAAIAEgCQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBgDgCgBIgGgCIgHgCIgIgDQgEAAgDgDQgBgDAAgGQAAgEABgDIAGgEIAGgDIAHAAQAGAAAEABQAEACADADQAEAEABAGIgNAAQAAgFgDgBQgDgBgDAAIgEAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgCADQABADACABIAGADIAHABIAJADQADABADACQACADAAAFQAAAFgCADQgCADgDACIgIADIgIABQgGAAgFgCg");
	this.shape_8.setTransform(17.8,-15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAZQgEgCgEgEQgDgEAAgGIALAAQABAFAEACQACACAFAAIAEAAIAFgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBgDgCgBIgGgCIgHgCIgIgDQgEAAgDgDQgCgDAAgGQAAgEACgDIAGgEIAHgDIAGAAQAFAAAFABQAEACADADQAEAEABAGIgMAAQgCgFgCgBQgDgBgDAAIgEAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABIgDADQABADACABIAGADIAHABIAIADQAEABADACQACADAAAFQAAAFgCADQgCADgEACIgHADIgIABQgFAAgGgCg");
	this.shape_9.setTransform(12.6,-15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAGAAAFACQAFADADAEQAEAEABAGQABAFAAAFIglAAQAAAEABADQACAEADACQADACAEAAQAFAAADgCQADgCABgEIALAAQgBAFgEAEQgDAEgFACQgFACgFAAQgIAAgFgDgAANgEIgCgGQgBgEgDgBQgDgCgEAAQgDAAgDABQgDACgBADQgCADAAAEIAZAAIAAAAg");
	this.shape_10.setTransform(7.3,-15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAbIAAgzIAKAAIAAAKIABAAQAAgDADgDIAEgEQADgBAEAAIACAAIACAAIAAALIgCAAIgDgBQgEAAgDACQgDACgBAEQgCAEAAAFIAAAZg");
	this.shape_11.setTransform(3.1,-15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAkIAAhGIALAAIAAAHIAAAAQADgEAEgCQAEgCAEAAQAJAAAFAEQAFADADAHQADAGAAAHQAAAHgDAGQgCAGgFAEQgFADgIAAIgGgBQgDAAgCgCIgFgFIgBAAIAAAagAgKgVQgDAFgBAIQABAFABADQABAFAEACQADADAEgBQAFAAADgCQADgDABgEQACgDAAgFQAAgEgCgFQgBgEgDgDQgEgCgEAAQgHAAgDAFg");
	this.shape_12.setTransform(-1.9,-14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAaIgMgTIgMATIgNAAIATgaIgSgZIAOAAIAKAQIALgQIANAAIgRAYIAUAbg");
	this.shape_13.setTransform(-7.8,-15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAkIAAhHIAzAAIAAALIgmAAIAAATIAjAAIAAAJIgjAAIAAAVIAmAAIAAALg");
	this.shape_14.setTransform(-13.4,-16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAbIAAggQAAgGgCgDQgDgCgFAAQgDAAgDABIgEAFQgBADAAAEIAAAeIgMAAIAAgzIALAAIAAAIQADgEAEgDQAEgCAEAAQAJgBAFAFQAFAEAAAJIAAAjg");
	this.shape_15.setTransform(-22.5,-15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANAaQgDgCAAgDQgCACgDABIgGADIgGAAQgFAAgEgBQgEgCgCgEQgDgDAAgFQABgGADgEQACgCAFgBIAJgCIAHgBIAFgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgEgCIgEAAQgFAAgDACQgDACgBAEIgLAAQAAgHAEgEQAEgDAEgCIALgBQAFAAAEABQAFACADADQADADABAGIAAAZIAAADIACABIABAAIABAAIABAAIAAAIIgDABIgFAAQgDAAgCgBgAADACIgHABQgEAAgDACQgCACAAAFQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAFAAIAFgBIAEgDQADgCAAgEIAAgIIgGACg");
	this.shape_16.setTransform(-28,-15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAYQgGgEgDgGQgCgGAAgIQAAgGACgHQADgGAGgEQAGgDAHAAQAGAAAFACQAFACAEAEQACAEABAGIgLAAQgBgEgDgDQgDgCgFAAIgFABQgEABgCAFQgCAEAAAGQAAAFABAEQACAEADACQACADAFAAQAFAAADgDQADgDABgGIALAAQgBALgHAFQgGAFgJAAQgIAAgFgDg");
	this.shape_17.setTransform(-33.6,-15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAkIAAgzIAKAAIAAAzgAgEgYIAAgLIAKAAIAAALg");
	this.shape_18.setTransform(-37.6,-16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAbIAAgzIAKAAIAAAKIABAAQAAgDADgDIAEgEQADgBAEAAIACAAIACAAIAAALIgCAAIgDgBQgEAAgDACQgDACgBAEQgCAEAAAFIAAAZg");
	this.shape_19.setTransform(-40.2,-15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAGAAAFACQAFADADAEQAEAEABAGQABAFAAAFIglAAQAAAEABADQACAEADACQADACAEAAQAFAAADgCQADgCABgEIALAAQgBAFgEAEQgDAEgFACQgFACgFAAQgIAAgFgDgAANgEIgCgGQgBgEgDgBQgDgCgEAAQgDAAgDABQgDACgBADQgCADAAAEIAZAAIAAAAg");
	this.shape_20.setTransform(-45.1,-15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAbIAAgeIAAgHQgBgDgCgCQgCgBgEAAQgGgBgCAEQgDADAAAHIAAAeIgLAAIAAghQAAgFgCgDQgCgCgFAAQgDAAgCABQgDABgCADQgBAEAAAEIAAAeIgLAAIAAgzIAKAAIAAAHQADgEAEgCQADgCAHAAQAEAAAEACQADACACAEIAGgGQAEgCAGAAQAIAAAFADQAEAEAAAKIAAAjg");
	this.shape_21.setTransform(-52.2,-15.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUAkIgGgTIgcAAIgGATIgNAAIAbhHIANAAIAbBHgAAKAHIgKgdIAAAAIgKAdIAUAAg");
	this.shape_22.setTransform(-59.9,-16.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAGIgGAKIgFgEIAGgKIgLgCIACgHIAMAEIAAgMIAFAAIAAAMIAMgEIACAHIgLACIAGAKIgFAEg");
	this.shape_23.setTransform(-67.9,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.8,-24.5,137.7,15.8);


(lib.Interpoler8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Ticket();
	this.instance.parent = this;
	this.instance.setTransform(-30,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-51,60,62);


(lib.Interpoler6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Ticket();
	this.instance.parent = this;
	this.instance.setTransform(-30,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-41,60,62);


(lib.Interpoler4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#091745").s().p("AgQAjQgHgCgEgGQgEgFAAgJIAQAAQAAAHAFADQAEADAGAAIAHgBIAGgDQADgCAAgEQAAgEgEgCIgIgDIgKgDIgMgDQgFgCgDgEQgEgEAAgHQAAgGADgEQADgEAEgDQAFgCAFgBIAKgBQAHAAAGACQAHACAEAFQAFAFABAIIgRAAQgBgFgEgDQgEgCgFAAIgFABIgFACQgDACAAADQAAAEAEACIAIADIALADQAGABAFACQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgEADQgFADgGABIgLABQgIAAgIgDg");
	this.shape.setTransform(32.4,167.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_1.setTransform(24.9,167.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#091745").s().p("AgHAyIAAhIIAPAAIAABIgAgHgiIAAgPIAPAAIAAAPg");
	this.shape_2.setTransform(19.3,166.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#091745").s().p("AgUAlIAAhHIAPAAIAAAOQABgEADgEQACgDAFgDQAEgCAFAAIAEAAIACAAIAAAQIgDgBIgEAAQgFAAgFADQgEADgCAFQgCAGAAAHIAAAig");
	this.shape_3.setTransform(15.6,167.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#091745").s().p("AgSAhQgJgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAJgFQAIgFAKAAQAMAAAIAFQAIAFAFAIQADAJAAAKQAAALgDAJQgFAIgIAFQgIAFgMAAQgKAAgIgFgAgKgVQgFAEgCAGQgCAGAAAFQAAAGACAGQACAGAFAEQAEAEAGAAQAHAAAFgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgFgDgHgBQgGABgEADg");
	this.shape_4.setTransform(8.5,167.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#091745").s().p("AgOAxQgHgCgFgFQgFgFgBgIIAQAAQABAEADADQACACAEABIAGABQAKgBAFgEQAEgFAAgJIAAgLIAAAAQgEAGgFADQgGAEgGAAQgLAAgHgGQgIgFgDgIQgDgIAAgKQAAgKAEgIQADgJAIgFQAHgEAKgBQAGAAAGADQAGADADAGIAAAAIAAgKIAQAAIAABEQAAAQgJAIQgJAIgRAAIgCABQgGAAgGgDgAgLgiQgEAEgCAFIgBAMQAAAGACAGQACAEAEAEQAEADAGAAQAHAAAEgEQAEgDACgFQACgGAAgGQAAgGgCgGQgCgFgEgEQgEgDgHAAQgGAAgFAEg");
	this.shape_5.setTransform(0.1,169);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#091745").s().p("AgSAvQgIgFgEgIQgEgJAAgLQAAgKAEgIQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAGQACAIgBAIIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASAIQAAgFgCgEQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDADAAAGIAkAAIAAAAgAgKgfIALgUIATAAIgUAUg");
	this.shape_6.setTransform(-7.8,166.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#091745").s().p("AALAvQgIAAgEgCQgEgCgBgEIgCgKIAAgqIgMAAIAAgMIAMAAIAAgVIAPAAIAAAVIAOAAIAAAMIgOAAIAAAmIAAAFQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABIAGABIADAAIADgBIAAANIgFAAIgFAAg");
	this.shape_7.setTransform(-14.2,166.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#091745").s().p("AASAkQgDgCgBgFIgIAFIgIADIgIABQgHAAgGgCQgFgCgEgFQgDgFAAgHQAAgJAEgEQAEgEAGgCIAOgDIAKgBIAIgCQACgCAAgFQABgEgDgCQgDgCgDgBIgGgBQgGAAgFADQgEADAAAGIgQAAQABgJAEgGQAFgFAHgCQAIgCAHAAQAHAAAGACQAHACAEAFQAEAEABAIIAAAkIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIACgBIAAALIgFACIgFAAQgFAAgDgCgAADADIgJABQgFABgEADQgEACAAAGQAAAEADACQACACADABIAGABIAIgCQADgBAEgDQACgDAAgFIAAgMQgDACgGABg");
	this.shape_8.setTransform(-20.1,167.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#091745").s().p("AgRAhQgIgFgEgIQgEgIAAgLQAAgKAEgJQAEgJAIgFQAIgFAKAAQAJAAAHADQAHADAFAFQAEAGABAJIgQAAQAAgHgFgDQgEgEgIAAQgDAAgEACQgFACgDAGQgDAGAAAKQAAAGACAGQABAFAFAEQAEAEAGAAQAHAAAFgFQAEgEABgIIAQAAQgCAOgIAIQgJAHgOAAQgLAAgHgFg");
	this.shape_9.setTransform(-28.1,167.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#091745").s().p("AgQAjQgHgCgEgGQgEgFAAgJIAQAAQAAAHAFADQAEADAGAAIAHgBIAGgDQADgCAAgEQAAgEgEgCIgIgDIgKgDIgMgDQgFgCgDgEQgEgEAAgHQAAgGADgEQADgEAEgDQAFgCAFgBIAKgBQAHAAAGACQAHACAEAFQAFAFABAIIgRAAQgBgFgEgDQgEgCgFAAIgFABIgFACQgDACAAADQAAAEAEACIAIADIALADQAGABAFACQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgEADQgFADgGABIgLABQgIAAgIgDg");
	this.shape_10.setTransform(60.3,149.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_11.setTransform(52.8,149.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#091745").s().p("AgUAlIAAhHIAPAAIAAAOQABgEADgEQACgDAFgDQAEgCAFAAIAEAAIACAAIAAAQIgDgBIgEAAQgFAAgFADQgEADgCAFQgCAGAAAHIAAAig");
	this.shape_12.setTransform(46.8,149.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#091745").s().p("AgYAeQgHgHAAgOIAAgtIAQAAIAAArQAAAKAEAEQADAEAHAAQAGAAADgDQAEgDACgEQACgEAAgGIAAgpIAQAAIAABHIgQAAIAAgKIAAAAQgDAGgGADQgGADgFAAQgOAAgGgHg");
	this.shape_13.setTransform(39.8,149.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_14.setTransform(32,149.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#091745").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_15.setTransform(26.3,147.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#091745").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_16.setTransform(23,147.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#091745").s().p("AgHAyIAAhHIAPAAIAABHgAgHgiIAAgPIAPAAIAAAPg");
	this.shape_17.setTransform(19.6,147.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_18.setTransform(14.1,149.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#091745").s().p("AAlAlIAAgpIgBgKQgBgFgDgCQgDgCgGgBQgIABgDAFQgEAFAAAJIAAApIgPAAIAAgtQAAgIgDgEQgCgEgIAAQgEAAgEADQgDACgCAEQgCAEgBAGIAAAqIgPAAIAAhHIAOAAIAAAKIABAAQADgGAFgDQAGgDAIAAQAHAAAFADQAFADACAGQAEgGAGgDQAGgDAHAAQAMAAAGAFQAHAGgBANIAAAxg");
	this.shape_19.setTransform(4.1,149.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#091745").s().p("AgQAjQgHgCgEgGQgEgFAAgJIAQAAQAAAHAFADQAEADAGAAIAHgBIAGgDQADgCAAgEQAAgEgEgCIgIgDIgKgDIgMgDQgFgCgDgEQgEgEAAgHQAAgGADgEQADgEAEgDQAFgCAFgBIAKgBQAHAAAGACQAHACAEAFQAFAFABAIIgRAAQgBgFgEgDQgEgCgFAAIgFABIgFACQgDACAAADQAAAEAEACIAIADIALADQAGABAFACQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgEADQgFADgGABIgLABQgIAAgIgDg");
	this.shape_20.setTransform(-9.5,149.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_21.setTransform(-17,149.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#091745").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_22.setTransform(-22.7,147.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#091745").s().p("AgQAjQgHgCgEgGQgEgFAAgJIAQAAQAAAHAFADQAEADAGAAIAHgBIAGgDQADgCAAgEQAAgEgEgCIgIgDIgKgDIgMgDQgFgCgDgEQgEgEAAgHQAAgGADgEQADgEAEgDQAFgCAFgBIAKgBQAHAAAGACQAHACAEAFQAFAFABAIIgRAAQgBgFgEgDQgEgCgFAAIgFABIgFACQgDACAAADQAAAEAEACIAIADIALADQAGABAFACQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgEADQgFADgGABIgLABQgIAAgIgDg");
	this.shape_23.setTransform(-31.8,149.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#091745").s().p("AAQAlIAAgsQAAgJgEgEQgDgEgHAAQgFABgEACQgEADgCAEQgCAEAAAGIAAApIgQAAIAAhHIAPAAIAAAKIABABQADgGAGgEQAGgDAGAAQAMAAAHAGQAHAGAAAMIAAAxg");
	this.shape_24.setTransform(-39.5,149.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#091745").s().p("AASAkQgDgCgBgFIgHAFIgIADIgJABQgHAAgGgCQgFgCgEgFQgDgFAAgHQAAgJAEgEQAFgEAGgCIANgDIAJgBIAIgCQADgCAAgFQAAgEgCgCQgDgCgCgBIgGgBQgHAAgEADQgFADgBAGIgQAAQABgJAFgGQAFgFAHgCQAHgCAIAAQAGAAAHACQAHACAEAFQAEAEAAAIIAAAkIABAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIACgBIAAALIgFACIgFAAQgFAAgDgCgAADADIgJABQgGABgDADQgEACAAAGQAAAEACACQADACAEABIAFABIAHgCQAFgBACgDQADgDAAgFIAAgMQgDACgGABg");
	this.shape_25.setTransform(-47.3,149.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#091745").s().p("AgUAuQgHgFgEgJQgEgIAAgLQAAgNAFgIQAEgJAHgDQAHgEAIAAQAEAAAFABQAEABAEACQAEADADAEIAAglIAQAAIAABjIgPAAIAAgKIgBAAQgDAHgGACQgGADgGAAQgLAAgIgFgAgKgIQgFAEgCAFQgCAGAAAHQAAAGACAFQACAGAFADQAEAFAGAAQAHAAAFgFQAEgDACgGQADgGgBgGQAAgMgFgGQgFgHgKAAQgGAAgEAEg");
	this.shape_26.setTransform(-55.8,148);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#091745").s().p("AgQAjQgHgCgEgGQgEgFAAgJIAQAAQAAAHAFADQAEADAGAAIAHgBIAGgDQADgCAAgEQAAgEgEgCIgIgDIgKgDIgMgDQgFgCgDgEQgEgEAAgHQAAgGADgEQADgEAEgDQAFgCAFgBIAKgBQAHAAAGACQAHACAEAFQAFAFABAIIgRAAQgBgFgEgDQgEgCgFAAIgFABIgFACQgDACAAADQAAAEAEACIAIADIALADQAGABAFACQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgEADQgFADgGABIgLABQgIAAgIgDg");
	this.shape_27.setTransform(53.5,130.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_28.setTransform(46,130.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#091745").s().p("AgSAvQgIgFgEgIQgEgJAAgLQAAgKAEgIQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAGQACAIgBAIIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASAIQAAgFgCgEQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDADAAAGIAkAAIAAAAgAgKgfIALgUIATAAIgUAUg");
	this.shape_29.setTransform(38.2,129.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#091745").s().p("AgIAkIgahHIARAAIASA2IASg2IAQAAIgaBHg");
	this.shape_30.setTransform(30.6,130.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#091745").s().p("AgUAlIAAhHIAPAAIAAAOQABgEADgEQACgDAFgDQAEgCAFAAIAEAAIACAAIAAAQIgDgBIgEAAQgFAAgFADQgEADgCAFQgCAGAAAHIAAAig");
	this.shape_31.setTransform(25,130.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_32.setTransform(18.2,130.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#091745").s().p("AgQAjQgHgCgEgGQgEgFAAgJIAQAAQAAAHAFADQAEADAGAAIAHgBIAGgDQADgCAAgEQAAgEgEgCIgIgDIgKgDIgMgDQgFgCgDgEQgEgEAAgHQAAgGADgEQADgEAEgDQAFgCAFgBIAKgBQAHAAAGACQAHACAEAFQAFAFABAIIgRAAQgBgFgEgDQgEgCgFAAIgFABIgFACQgDACAAADQAAAEAEACIAIADIALADQAGABAFACQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgEADQgFADgGABIgLABQgIAAgIgDg");
	this.shape_33.setTransform(10.6,130.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#091745").s().p("AgSAvQgIgFgEgIQgEgJAAgLQAAgKAEgIQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAGQACAIgBAIIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASAIQAAgFgCgEQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDADAAAGIAkAAIAAAAgAgKgfIALgUIATAAIgUAUg");
	this.shape_34.setTransform(3.1,129.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#091745").s().p("AgUAlIAAhHIAPAAIAAAOQABgEADgEQACgDAFgDQAEgCAFAAIAEAAIACAAIAAAQIgDgBIgEAAQgFAAgFADQgEADgCAFQgCAGAAAHIAAAig");
	this.shape_35.setTransform(-2.8,130.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#091745").s().p("AgQAjQgHgCgEgGQgEgFAAgJIAQAAQAAAHAFADQAEADAGAAIAHgBIAGgDQADgCAAgEQAAgEgEgCIgIgDIgKgDIgMgDQgFgCgDgEQgEgEAAgHQAAgGADgEQADgEAEgDQAFgCAFgBIAKgBQAHAAAGACQAHACAEAFQAFAFABAIIgRAAQgBgFgEgDQgEgCgFAAIgFABIgFACQgDACAAADQAAAEAEACIAIADIALADQAGABAFACQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgEADQgFADgGABIgLABQgIAAgIgDg");
	this.shape_36.setTransform(-13.3,130.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#091745").s().p("AgSAhQgIgFgEgIQgEgJAAgLQAAgJAEgJQAFgJAIgFQAHgFAKAAQAJAAAGADQAHAEAFAGQAEAGACAHQACAIgBAHIg0AAQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgDACgGIAPAAQgCAIgEAFQgFAFgHADQgGADgIAAQgLAAgIgFgAASgFQAAgFgCgFQgCgEgEgDQgEgCgGgBQgEABgFACQgEADgCAEQgDAEAAAGIAkAAIAAAAg");
	this.shape_37.setTransform(-20.8,130.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#091745").s().p("AgRAhQgIgFgEgIQgEgIAAgLQAAgKAEgJQAEgJAIgFQAHgFALAAQAJAAAHADQAIADAEAFQAEAGABAJIgQAAQgBgHgEgDQgEgEgIAAQgDAAgEACQgEACgEAGQgDAGAAAKQAAAGACAGQABAFAFAEQAEAEAGAAQAHAAAFgFQAEgEABgIIAQAAQgCAOgIAIQgJAHgOAAQgLAAgHgFg");
	this.shape_38.setTransform(-28.6,130.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#091745").s().p("AASAkQgDgCgBgFIgHAFIgIADIgJABQgHAAgFgCQgGgCgDgFQgEgFAAgHQAAgJAFgEQADgEAHgCIANgDIAJgBIAIgCQAEgCAAgFQAAgEgDgCQgCgCgDgBIgHgBQgGAAgEADQgFADgBAGIgQAAQACgJAEgGQAFgFAHgCQAIgCAHAAQAHAAAHACQAGACAEAFQAFAEgBAIIAAAkIABAEQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAIACAAIACgBIAAALIgFACIgFAAQgFAAgDgCgAAEADIgKABQgGABgDADQgEACAAAGQAAAEACACQADACAEABIAGABIAGgCQAFgBACgDQADgDABgFIAAgMQgEACgFABg");
	this.shape_39.setTransform(-36.3,130.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#091745").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_40.setTransform(-42,129.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#091745").s().p("AgmAyIAAhjIArAAQALAAAGADQAHADAEAFQADAFACAFQABAGAAAEQAAAFgBAFQgCAGgDADQgEAFgHADQgGADgLAAIgaAAIAAAmgAgVgBIAZAAQAEAAAEgCQAEgBADgEQACgEAAgGQAAgHgCgDQgCgEgEgBIgJgBIgZAAg");
	this.shape_41.setTransform(-48.1,129.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#091745").s().p("AgTAkQgJgGgEgJQgEgJAAgMQAAgKAEgJQAFgKAIgFQAIgGALAAQAJAAAHAEQAIAEAFAGQAEAGACAIQADAJgBAHIg4AAQAAAHACAFQACAFAFADQAEADAGAAQAIAAAEgDQAFgDACgHIARAAQgCAJgFAGQgGAGgHADQgHADgJAAQgLAAgIgFgAAUgGQgBgFgCgFQgDgFgEgDQgEgCgGAAQgFAAgEACQgFADgDAFQgCAEAAAGIAnAAIAAAAg");
	this.shape_42.setTransform(50.6,18.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#091745").s().p("AgWAoIAAhNIAQAAIAAAPIABAAQABgEADgEQACgEAFgCQAFgDAFAAIAEAAIADABIAAAQIgEAAIgEgBQgGAAgEADQgFADgCAGQgDAGAAAIIAAAlg");
	this.shape_43.setTransform(44.2,18.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#091745").s().p("AgTAzQgJgGgEgJQgEgJAAgMQAAgLAEgIQAFgKAIgFQAIgGALAAQAJAAAHAEQAIAEAFAGQAEAGACAHQADAJgBAIIg4AAQAAAHACAFQACAFAFADQAEADAGAAQAIAAAEgDQAFgDACgHIARAAQgCAJgFAGQgGAGgHADQgHADgJAAQgLAAgIgFgAAUAIQgBgFgCgEQgDgFgEgDQgEgCgGAAQgFAAgEACQgFADgDAFQgCADAAAGIAnAAIAAAAgAgBghIgVgWIAUAAIAMAWg");
	this.shape_44.setTransform(36.9,17.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#091745").s().p("AgIA2IAAhNIAQAAIAABNgAgIgkIAAgQIAQAAIAAAQg");
	this.shape_45.setTransform(30.9,17.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#091745").s().p("AAnAoIAAgtIgBgKQAAgFgDgDQgDgCgHAAQgJAAgEAFQgEAFABAKIAAAtIgRAAIAAgxQABgIgDgEQgEgEgHAAQgFAAgEACQgDACgDAFQgCAEAAAHIAAAtIgRAAIAAhNIAQAAIAAALIAAAAQAEgGAGgDQAFgEAJAAQAHAAAGADQAFADADAHQAEgGAGgDQAGgEAIAAQANAAAGAGQAHAGAAAOIAAA1g");
	this.shape_46.setTransform(22.5,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#091745").s().p("AgTAkQgJgGgEgJQgEgJAAgMQAAgKAEgJQAFgKAIgFQAIgGALAAQAJAAAHAEQAIAEAFAGQAEAGACAIQADAJgBAHIg4AAQAAAHACAFQACAFAFADQAEADAGAAQAIAAAEgDQAFgDACgHIARAAQgCAJgFAGQgGAGgHADQgHADgJAAQgLAAgIgFgAAUgGQgBgFgCgFQgDgFgEgDQgEgCgGAAQgFAAgEACQgFADgDAFQgCAEAAAGIAnAAIAAAAg");
	this.shape_47.setTransform(11.9,18.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#091745").s().p("AgWAoIAAhNIAQAAIAAAPIABAAQABgEADgEQACgEAFgCQAFgDAFAAIAEAAIADABIAAAQIgEAAIgEgBQgGAAgEADQgFADgCAGQgDAGAAAIIAAAlg");
	this.shape_48.setTransform(5.5,18.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#091745").s().p("AglA2IAAhpIAQAAIAAALIAAAAQAEgHAGgDQAHgDAGAAQAMAAAIAGQAIAFAFAKQADAJAAALQAAALgDAIQgEAJgHAGQgIAGgLAAIgJgBIgJgEQgEgDgDgEIAAAAIAAAmgAgPggQgGAHAAANQAAAIADAFQACAGAFAEQAFADAGAAQAIAAAEgEQAFgEACgGQACgFAAgHQAAgHgCgGQgCgHgFgEQgFgDgHAAQgKAAgFAHg");
	this.shape_49.setTransform(-2,20.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#091745").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_50.setTransform(-9.7,18.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#091745").s().p("AAMAzQgJAAgEgCQgEgDgCgEQgCgEAAgHIAAgtIgNAAIAAgMIANAAIAAgYIAQAAIAAAYIAQAAIAAAMIgQAAIAAApIABAGQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQACACAEAAIADgBIAEAAIAAANIgGABIgFAAg");
	this.shape_51.setTransform(-15.2,17.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#091745").s().p("AARAoIAAgwQAAgJgEgEQgEgFgHABQgFAAgEACQgFADgBAFQgDAEAAAGIAAAtIgRAAIAAhNIAQAAIAAAMIAAAAQAFgHAFgDQAHgEAHAAQANAAAGAHQAIAGAAANIAAA1g");
	this.shape_52.setTransform(-21.9,18.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#091745").s().p("AATAnQgDgCgBgGQgEAEgEACIgIADIgKABQgHAAgGgDQgGgCgEgFQgEgFABgIQgBgJAFgFQAEgEAHgCIAOgDIAKgCQAGAAADgCQAEgCAAgFQgBgEgDgDIgFgDIgGAAQgIAAgFADQgEADAAAGIgSAAQABgKAFgGQAFgFAIgDQAHgCAJAAQAHAAAHACQAHADAFAEQAEAFAAAJIAAAnIABAEIAEABIABAAIACAAIAAAMIgEABIgGABQgGAAgDgCgAADADIgKACQgFAAgFADQgDADAAAHQAAADACACQADADAEABIAGAAIAHgBQAFgBADgEQADgDAAgFIAAgNQgDACgHABg");
	this.shape_53.setTransform(-30.2,18.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#091745").s().p("AgJAnIgchNIATAAIASA7IABAAIASg7IASAAIgcBNg");
	this.shape_54.setTransform(-38.4,18.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#091745").s().p("AATAnQgDgCgCgGQgCAEgGACIgIADIgJABQgHAAgGgDQgGgCgEgFQgDgFgBgIQABgJAEgFQAFgEAGgCIAOgDIALgCQAFAAADgCQADgCAAgFQAAgEgCgDIgHgDQgDgBgDABQgHAAgFADQgEADgBAGIgRAAQABgKAFgGQAFgFAIgDQAIgCAIAAQAHAAAHACQAHADAEAEQAGAFAAAJIAAAnIAAAEIADABIADAAIACAAIAAAMIgGABIgFABQgGAAgDgCgAAEADIgKACQgHAAgDADQgFADAAAHQABADACACQADADADABIAHAAIAIgBQAEgBADgEQADgDAAgFIAAgNQgEACgFABg");
	this.shape_55.setTransform(-46.3,18.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#091745").s().p("AARAoIAAgwQAAgJgEgEQgDgFgIABQgFAAgEACQgEADgCAFQgDAEAAAGIAAAtIgRAAIAAhNIAQAAIAAAMIAAAAQAFgHAFgDQAHgEAGAAQAOAAAGAHQAIAGAAANIAAA1g");
	this.shape_56.setTransform(29.5,-3.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#091745").s().p("AgTAkQgJgGgEgJQgEgJAAgMQAAgKAEgJQAFgKAIgFQAIgGALAAQAJAAAHAEQAIAEAFAGQAEAGACAIQADAJgBAHIg4AAQAAAHACAFQACAFAFADQAEADAGAAQAIAAAEgDQAFgDACgHIARAAQgCAJgFAGQgGAGgHADQgHADgJAAQgLAAgIgFgAAUgGQgBgFgCgFQgDgFgEgDQgEgCgGAAQgFAAgEACQgFADgDAFQgCAEAAAGIAnAAIAAAAg");
	this.shape_57.setTransform(21.1,-3.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#091745").s().p("AgRAmQgIgDgEgGQgEgGAAgJIARAAQAAAHAFADQAFADAGAAIAIAAQADgBADgCQAEgCgBgFQAAgEgEgDIgJgDIgLgDQgGgBgGgCQgGgCgDgEQgEgFAAgIQAAgGADgEQADgFAFgCQAEgDAHgBIAKgBQAHAAAHACQAIADAEAFQAFAFAAAJIgRAAQgBgGgEgCQgFgDgFABIgGAAIgGACQgCACAAAEQAAAEADACQAFACAFABIALADQAGABAGADQAGACADAEQAEAEABAIQgBAHgDAEQgDAFgFADQgFADgGACIgMABQgJAAgIgDg");
	this.shape_58.setTransform(8.9,-3.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#091745").s().p("AAMAzQgJAAgEgCQgEgDgCgEQgCgEAAgHIAAgtIgNAAIAAgMIANAAIAAgYIAQAAIAAAYIAQAAIAAAMIgQAAIAAApIABAGQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQACACAEAAIADgBIAEAAIAAANIgGABIgFAAg");
	this.shape_59.setTransform(2.3,-4.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#091745").s().p("AgTAkQgJgGgEgJQgEgJAAgMQAAgKAEgJQAFgKAIgFQAIgGALAAQAJAAAHAEQAIAEAFAGQAEAGACAIQADAJgBAHIg4AAQAAAHACAFQACAFAFADQAEADAGAAQAIAAAEgDQAFgDACgHIARAAQgCAJgFAGQgGAGgHADQgHADgJAAQgLAAgIgFgAAUgGQgBgFgCgFQgDgFgEgDQgEgCgGAAQgFAAgEACQgFADgDAFQgCAEAAAGIAnAAIAAAAg");
	this.shape_60.setTransform(-4.2,-3.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#091745").s().p("AgHA2IAAhrIAQAAIAABrg");
	this.shape_61.setTransform(-10.2,-5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#091745").s().p("AgHA2IAAhrIAQAAIAABrg");
	this.shape_62.setTransform(-13.8,-5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#091745").s().p("AgHA2IAAhNIAQAAIAABNgAgHgkIAAgRIAQAAIAAARg");
	this.shape_63.setTransform(-17.4,-5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#091745").s().p("AgrA2IAAhrIAzAAQAJAAAHADQAIAEAEAFQADAGAAAJQAAAIgDAGQgEAFgIADIAAABQAKACAFAHQAFAGAAAMQAAAIgEAHQgEAGgJAEQgIAFgOAAgAgZAmIAhAAQAIAAAFgEQAEgFABgIQgBgHgEgFQgFgEgIgBIghAAgAgZgIIAeAAQAHAAAEgDQAFgFAAgHQAAgHgEgEQgEgEgIABIgeAAg");
	this.shape_64.setTransform(-24.2,-5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#091745").s().p("AAAAMIgLARIgLgIIAMgRIgUgFIAFgNIATAHIAAgVIAMAAIAAAVIAUgHIAFANIgUAFIANARIgLAIg");
	this.shape_65.setTransform(28.6,-144);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#091745").s().p("AgSAsQgJgEgGgGQgGgHgBgLIAXAAQAAAFADADQADADAEABQAEACAEAAIAHgBQADgBADgCQACgDAAgEQAAgFgHgDQgHgDgMgDIgNgEQgHgBgEgFQgEgFAAgHQAAgLAGgGQAGgGAIgDQAJgCAJAAQAJAAAJACQAIADAGAGQAFAGABALIgXAAQAAgHgFgCQgFgDgFAAIgGABIgFACQgDACAAADQAAAEAEACQAEADAGABIANADQAHABAGADQAHADAEAEQADAEABAJQgBALgFAHQgGAHgJADQgJACgLAAQgJAAgJgCg");
	this.shape_66.setTransform(20.6,-139.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#091745").s().p("AgWAoQgKgFgFgLQgGgKAAgOQAAgMAGgLQAFgKALgGQAKgGAMAAQALAAAJAEQAIAFAFAGQAGAIACAJQACAJAAAKIg/AAQABALAFAGQAGAFAJAAQAHAAAGgDQAFgEABgEIAVAAQgFAQgKAGQgLAIgPgBQgNABgKgHgAAUgIQgCgJgEgGQgFgEgJAAQgGAAgFADQgEAEgCAEQgCAEAAAEIAnAAIAAAAg");
	this.shape_67.setTransform(11.1,-139.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#091745").s().p("AAOA5QgHAAgHgBQgFgCgEgEQgEgEAAgKIAAgyIgOAAIAAgRIAOAAIAAgZIAYAAIAAAZIARAAIAAARIgRAAIAAAqQgBAHADABQACACAGAAIADAAIAEAAIAAASIgHABIgHAAg");
	this.shape_68.setTransform(3.2,-140.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#091745").s().p("AgLA9IAAhXIAXAAIAABXgAgLgoIAAgUIAXAAIAAAUg");
	this.shape_69.setTransform(-1.9,-140.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#091745").s().p("AgMAsIgehXIAZAAIARA7IABAAIASg7IAYAAIgdBXg");
	this.shape_70.setTransform(-8.6,-139.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#091745").s().p("AARAtIAAgwQAAgLgDgGQgEgFgIAAQgJAAgEAGQgFAGAAANIAAAtIgYAAIAAhXIAXAAIAAANIAAAAQAFgIAHgDQAGgEAIAAQANAAAHAFQAHAEADAIQACAIAAALIAAA1g");
	this.shape_71.setTransform(-18.1,-139.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#091745").s().p("AgMA9IAAh5IAaAAIAAB5g");
	this.shape_72.setTransform(-25.6,-140.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#091745").s().p("AgSAsQgJgDgGgHQgGgHgBgLIAXAAQAAAFADADQADADAEABQAEACAEAAIAHgBQADgBADgCQACgDAAgEQAAgGgHgCQgHgDgMgCIgNgFQgHgBgEgFQgEgFAAgHQAAgLAGgHQAGgFAIgDQAJgDAJABQAJgBAJADQAIADAGAGQAFAGABALIgXAAQAAgHgFgCQgFgDgFAAIgGABIgFACQgDACAAADQAAAEAEACQAEADAGABIANADQAHACAGACQAHADAEAEQADAFABAIQgBALgFAHQgGAHgJADQgJACgLAAQgJAAgJgCg");
	this.shape_73.setTransform(71.1,-162);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#091745").s().p("AgSAsQgJgDgGgHQgGgHgBgLIAXAAQAAAFADADQADADAEABQAEACAEAAIAHgBQADgBADgCQACgDAAgEQAAgGgHgCQgHgDgMgCIgNgFQgHgBgEgFQgEgFAAgHQAAgLAGgHQAGgFAIgDQAJgDAJABQAJgBAJADQAIADAGAGQAFAGABALIgXAAQAAgHgFgCQgFgDgFAAIgGABIgFACQgDACAAADQAAAEAEACQAEADAGABIANADQAHACAGACQAHADAEAEQADAFABAIQgBALgFAHQgGAHgJADQgJACgLAAQgJAAgJgCg");
	this.shape_74.setTransform(61.9,-162);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#091745").s().p("AgWAoQgKgFgFgLQgGgKAAgOQAAgMAGgLQAFgKALgGQAKgGAMAAQALAAAJAEQAIAEAFAIQAGAHACAJQACAJAAAKIg/AAQABAMAFAFQAGAFAJAAQAHAAAGgDQAFgEABgEIAVAAQgFAPgKAHQgLAIgPgBQgNABgKgHgAAUgIQgCgJgEgGQgFgEgJAAQgGAAgFADQgEAEgCADQgCAFAAAEIAnAAIAAAAg");
	this.shape_75.setTransform(52.5,-162);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#091745").s().p("AgbAtIAAhXIAWAAIAAARIABAAQADgGADgEQAEgEAFgDQAGgCAGAAIADAAIADABIAAAWIgFAAIgEgBQgJAAgGAEQgFAEgBAGQgCAHAAAHIAAAng");
	this.shape_76.setTransform(44.8,-162.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#091745").s().p("AgsA9IAAh2IAXAAIAAALIABAAQAEgHAHgDQAHgEAHAAQAOABAJAGQAIAHAFAKQAEALAAANQAAAMgEAJQgFAKgIAHQgJAGgNAAQgHAAgHgDQgHgEgEgGIAAAqgAgMglQgEAEgCAGQgCAHAAAHQAAAHACAGQACAGAEAEQAFAEAHAAQAIAAAEgEQAFgEACgGQACgGAAgHQAAgHgCgHQgCgGgFgEQgFgEgHAAQgHAAgFAEg");
	this.shape_77.setTransform(36,-160.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#091745").s().p("AASAsIgSgcIgSAcIgbAAIAggtIgdgqIAcAAIAOAXIAPgXIAbAAIgdApIAhAug");
	this.shape_78.setTransform(26,-162);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#091745").s().p("AgtA9IAAh5IBaAAIAAAXIg/AAIAAAaIA5AAIAAAUIg5AAIAAAdIBAAAIAAAXg");
	this.shape_79.setTransform(16.2,-163.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#091745").s().p("AARAtIAAgwQAAgLgDgGQgEgFgIAAQgJAAgEAGQgFAGAAANIAAAtIgYAAIAAhXIAXAAIAAANIAAAAQAFgIAHgDQAGgEAIAAQANAAAHAFQAHAEADAIQACAIAAALIAAA1g");
	this.shape_80.setTransform(0.6,-162.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#091745").s().p("AgbAsQgHgDgEgGQgEgGAAgJQAAgKAFgGQAEgEAHgCQAGgDAIgBIANgCQAHAAAEgCQAEgCAAgFQAAgFgCgDQgDgDgDAAIgIgBQgGAAgEADQgEADgBAHIgYAAQABgLAGgHQAGgGAJgDQAJgCAJAAIAOABQAGAAAGADQAGADADAFQAEAFAAAIIAAAtIAAALIADAIIgZAAIgBgEIAAgEQgGAFgIADQgHADgIgBQgIAAgHgCgAAHAEIgKACQgGABgEADQgFACAAAHQAAAGAFADQAEADAGgBQAGAAAEgCQAEgDACgDIACgGIABgGIAAgJQgEACgFABg");
	this.shape_81.setTransform(-9.3,-162);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#091745").s().p("AgVAoQgKgFgGgKQgFgLAAgNQAAgMAFgLQAFgLAKgGQAKgGAOAAQAKAAAJADQAJAEAGAHQAGAIABALIgYAAQgBgIgEgDQgFgEgIAAQgGAAgFAEQgEAFgCAHQgCAGAAAFQAAAHACAGQACAHAEAEQAEAEAHAAQAIAAAFgEQAFgGABgIIAXAAQgCASgLAJQgLAJgSAAQgMABgKgHg");
	this.shape_82.setTransform(-18.9,-162);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#091745").s().p("AgLA9IAAhXIAXAAIAABXgAgLgoIAAgUIAXAAIAAAUg");
	this.shape_83.setTransform(-26.1,-163.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#091745").s().p("AgcAtIAAhXIAYAAIAAARIAAAAQADgGADgEQAEgEAGgDQAFgCAGAAIADAAIADABIAAAWIgFAAIgEgBQgJAAgGAEQgEAEgCAGQgCAHAAAHIAAAng");
	this.shape_84.setTransform(-31.1,-162.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#091745").s().p("AgWAoQgKgFgFgLQgGgKAAgOQAAgMAGgLQAFgKALgGQAKgGAMAAQALAAAJAEQAIAEAFAIQAGAHACAJQACAJAAAKIg/AAQABAMAFAFQAGAFAJAAQAHAAAGgDQAFgEABgEIAVAAQgFAPgKAHQgLAIgPgBQgNABgKgHgAAUgIQgCgJgEgGQgFgEgJAAQgGAAgFADQgEAEgCADQgCAFAAAEIAnAAIAAAAg");
	this.shape_85.setTransform(-39.8,-162);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#091745").s().p("AArAtIAAgxIgBgKQgBgFgDgDQgDgDgHAAQgHAAgDADQgEAEgBAFQgBAFAAAFIAAAwIgXAAIAAgwIgBgKQAAgFgDgEQgDgDgIAAIgGABQgEACgDAEQgDAFAAAIIAAAyIgYAAIAAhXIAWAAIAAAMIABAAQAFgHAGgDQAHgEAJAAQAIAAAHADQAGAEADAIQAEgGAHgFQAHgEAJAAQAJAAAHADQAIADAEAHQAEAHAAALIAAA6g");
	this.shape_86.setTransform(-52.3,-162.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#091745").s().p("AAgA9IgKgbIgsAAIgJAbIgbAAIAuh5IAaAAIAtB5gAAPAOIgPgsIAAAAIgPAsIAeAAg");
	this.shape_87.setTransform(-65.8,-163.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#091745").s().p("AgXArQgLgHgGgLQgFgLgBgOQABgNAGgLQAFgLALgHQALgGANAAQAMAAAJAEQAIAFAGAIQAGAIACAKQADAKgBAJIhCAAQABANAFAFQAGAGAKAAQAIAAAFgEQAGgEABgFIAWAAQgFARgLAIQgLAHgQAAQgOAAgKgGgAAVgJQgCgKgFgFQgFgFgJAAQgHAAgEADQgFAEgCAEQgCAFAAAEIApAAIAAAAg");
	this.shape_88.setTransform(47,-184.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#091745").s().p("AgMBAIAAhcIAZAAIAABcgAgMgqIAAgVIAZAAIAAAVg");
	this.shape_89.setTransform(39.5,-186.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#091745").s().p("AgdAwIAAhcIAYAAIAAARIABAAQACgGAEgEQAEgFAGgCQAGgDAGAAIADAAIADABIAAAYIgEgBIgFAAQgKAAgFAEQgGAEgBAHQgDAGABAIIAAAqg");
	this.shape_90.setTransform(34.1,-184.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#091745").s().p("AgXArQgLgHgGgLQgFgLgBgOQABgNAGgLQAFgLALgHQALgGANAAQAMAAAJAEQAIAFAGAIQAGAIACAKQADAKgBAJIhCAAQABANAFAFQAGAGAKAAQAIAAAFgEQAGgEABgFIAWAAQgFARgLAIQgLAHgQAAQgOAAgKgGgAAVgJQgCgKgFgFQgFgFgJAAQgHAAgEADQgFAEgCAEQgCAFAAAEIApAAIAAAAg");
	this.shape_91.setTransform(25,-184.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#091745").s().p("AAPA9QgIAAgHgBQgFgCgFgFQgDgFAAgJIAAg2IgQAAIAAgRIAQAAIAAgcIAYAAIAAAcIATAAIAAARIgTAAIAAAtQAAAGACACQADADAGAAIAEAAIAEgBIAAAUIgHABIgIAAg");
	this.shape_92.setTransform(16.6,-186.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#091745").s().p("AAPA9QgIAAgGgBQgHgCgDgFQgFgFAAgJIAAg2IgPAAIAAgRIAPAAIAAgcIAZAAIAAAcIATAAIAAARIgTAAIAAAtQAAAGACACQACADAHAAIAEAAIAEgBIAAAUIgIABIgHAAg");
	this.shape_93.setTransform(10.2,-186.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#091745").s().p("AgXArQgLgHgGgLQgFgLgBgOQABgNAGgLQAFgLALgHQALgGANAAQAMAAAJAEQAIAFAGAIQAGAIACAKQADAKgBAJIhCAAQABANAFAFQAGAGAKAAQAIAAAFgEQAGgEABgFIAWAAQgFARgLAIQgLAHgQAAQgOAAgKgGgAAVgJQgCgKgFgFQgFgFgJAAQgHAAgEADQgFAEgCAEQgCAFAAAEIApAAIAAAAg");
	this.shape_94.setTransform(1.9,-184.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#091745").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_95.setTransform(-5.6,-186.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#091745").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_96.setTransform(-10.2,-186.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#091745").s().p("AgMBAIAAhcIAZAAIAABcgAgMgqIAAgVIAZAAIAAAVg");
	this.shape_97.setTransform(-14.9,-186.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#091745").s().p("AgJA+QgIgDgEgIIgBAAIAAAMIgYAAIAAh/IAaAAIAAAvQAFgIAIgDQAHgEAIAAQAKAAAIAGQAJAEAGAMQAGAKAAARQAAAQgGAMQgGAKgJAGQgIAEgKAAQgJAAgIgDgAgMgIQgFAEgCAGQgCAGAAAJQAAAHACAHQACAHAFAEQAFAEAHAAQAHAAAFgEQAFgEACgHQACgHAAgHQAAgJgCgGQgCgGgFgEQgFgFgHAAQgHAAgFAFg");
	this.shape_98.setTransform(-22.5,-186.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#091745").s().p("AgdAuQgHgDgEgGQgEgHgBgJQABgKAFgGQAEgFAHgCQAHgDAJgBIANgCQAHgBAFgCQADgDAAgFQAAgFgBgDQgDgDgEAAIgIgBQgGAAgFADQgEADgBAIIgZAAQAAgMAHgHQAGgGAKgEQAKgCAJAAIAOABQAIABAGACQAGADAEAGQADAFAAAJIAAAvIABAMQABAFABADIgaAAIgBgEIgBgFQgGAHgHACQgIADgIAAQgJAAgIgDgAAHAFIgKACQgHAAgEADQgEADgBAHQABAHAEACQAEADAHAAQAHAAADgDQAFgCACgDQACgFAAgDIAAgGIAAgJQgDADgGABg");
	this.shape_99.setTransform(-38.4,-184.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#091745").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_100.setTransform(-45.9,-186.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#091745").s().p("AgcA/QgIgDgEgGQgEgGgBgKQABgKAFgGQAEgGAHgCQAIgDAIgBIANgCQAHgBAEgCQAFgCAAgEQAAgGgCgCQgDgDgEgBIgIgBQgGAAgEAEQgFADgBAHIgaAAQABgMAHgGQAHgHAJgDQAJgDAKAAIAPABQAGABAHADQAGADADAFQAEAFABAJIAAAvIAAAMQAAAGACADIgaAAIgBgFIAAgEQgGAGgJADQgHACgIAAQgKAAgGgDgAAIAWIgLACQgHABgEADQgEACAAAHQAAAHAEADQAFACAGAAQAHAAAEgCQAEgDACgDQACgEAAgEIABgFIAAgKQgEADgFABgAgCgoIgcgZIAcAAIARAZg");
	this.shape_101.setTransform(41.5,-210);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#091745").s().p("AgqAvIAAgTIAwg2IgsAAIAAgUIBNAAIAAAUIgvA2IAzAAIAAATg");
	this.shape_102.setTransform(26.7,-208.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#091745").s().p("AgXAqQgLgFgGgMQgFgKgBgPQABgNAGgLQAFgLALgGQALgHANAAQAMAAAJAFQAIAEAGAIQAGAHACAKQADALgBAJIhCAAQABAMAFAGQAGAGAKAAQAIgBAFgDQAGgEABgEIAWAAQgFAQgLAHQgLAIgQAAQgOAAgKgHgAAVgJQgCgKgFgFQgFgFgJAAQgHAAgEAEQgFADgCAFQgCAEAAAEIApAAIAAAAg");
	this.shape_103.setTransform(16.8,-208.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#091745").s().p("AgcA7QgJgIgEgLQgFgMgBgNQABgMAFgKQAEgLAJgHQAKgGANAAQAHgBAIAEQAHAEAEAGIABAAIAAgvIAaAAIAACAIgZAAIAAgMQgFAHgHAEQgHAEgIAAQgOgBgKgGgAgMgIQgEAEgDAGQgCAHAAAHQAAAIACAHQADAGAFAFQAFAEAHAAQAIAAAFgEQAFgEACgHQACgHAAgIQAAgIgCgGQgCgGgFgEQgFgFgIABQgHgBgGAFg");
	this.shape_104.setTransform(6,-209.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#091745").s().p("AgXA8QgLgGgGgLQgFgLgBgPQABgOAGgKQAFgLALgGQALgHANAAQAMAAAJAFQAIAEAGAIQAGAIACAJQADAKgBAKIhCAAQABANAFAFQAGAGAKAAQAIAAAFgEQAGgEABgEIAWAAQgFAQgLAIQgLAHgQAAQgOAAgKgGgAAVAHQgCgJgFgFQgFgFgJAAQgHABgEADQgFADgCAFQgCADAAAEIApAAIAAAAgAgNgoIARgZIAcAAIgcAZg");
	this.shape_105.setTransform(-4.5,-210);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#091745").s().p("AgXArQgKgGgGgLQgGgLAAgNQAAgOAGgLQAFgMALgGQAKgHAPAAQALAAAJAEQAKADAGAJQAGAHABAMIgZAAQgBgIgFgDQgFgFgIAAQgHABgEAEQgFAFgCAGQgCAIAAAGQAAAGACAHQACAHAEAEQAFAEAHABQAJAAAFgGQAFgEABgJIAZAAQgDATgMAJQgLAKgTAAQgNAAgLgGg");
	this.shape_106.setTransform(-14.8,-208.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#091745").s().p("AgXArQgKgGgGgLQgGgLAAgNQAAgOAGgLQAFgMALgGQAKgHAPAAQALAAAJAEQAKADAGAJQAGAHABAMIgZAAQgBgIgFgDQgFgFgIAAQgHABgEAEQgFAFgCAGQgCAIAAAGQAAAGACAHQACAHAEAEQAFAEAHABQAJAAAFgGQAFgEABgJIAZAAQgDATgMAJQgLAKgTAAQgNAAgLgGg");
	this.shape_107.setTransform(-25.1,-208.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#091745").s().p("AAiBAIgKgcIgvAAIgKAcIgdAAIAxh/IAcAAIAwB/gAARAPIgQgvIgBAAIgQAvIAhAAg");
	this.shape_108.setTransform(-36.6,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-223.1,279,399.5);


(lib.carte_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.carte();
	this.instance.parent = this;
	this.instance.setTransform(4,15,0.75,0.742);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.carte_01, new cjs.Rectangle(4,15,126.8,79.4), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAnIAAgPIAPAAIAAAPgAgDASIgFglIAAgUIAQAAIAAAUIgEAlg");
	this.shape.setTransform(125.7,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAnIggg3IAAA3IgPAAIAAhOIARAAIAfA2IAAg2IAPAAIAABOg");
	this.shape_1.setTransform(116.8,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAnIAAhOIA5AAIAAAPIgpAAIAAAQIAlAAIAAANIglAAIAAAUIArAAIAAAOg");
	this.shape_2.setTransform(109.4,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAHIAAgNIAdAAIAAANg");
	this.shape_3.setTransform(103.7,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAnIAAgOIAogxIgmAAIAAgPIA6AAIAAAOIgnAyIAoAAIAAAOg");
	this.shape_4.setTransform(98.5,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAnIAAhOIA5AAIAAAPIgpAAIAAAQIAmAAIAAANIgmAAIAAAUIArAAIAAAOg");
	this.shape_5.setTransform(91.7,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAnIAAg/IgYAAIAAgPIA/AAIAAAPIgXAAIAAA/g");
	this.shape_6.setTransform(84.5,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAnIAAhOIAPAAIAABOg");
	this.shape_7.setTransform(79.6,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAnIAAhOIA3AAIAAAPIgmAAIAAASIAhAAIAAAMIghAAIAAAhg");
	this.shape_8.setTransform(75,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHApIgKgDQgFgDgFgEQgEgFgDgHQgDgIAAgLQAAgKADgHQADgIAEgFQAFgEAFgDIAKgDIAHgBIAIABIAKADQAFADAFAEQAEAFADAIQADAHAAAKQAAALgDAIQgDAHgEAFQgFAEgFADIgKADIgIAAIgHAAgAgGgZIgHAEQgDADgCAFQgCAGAAAHQAAAJACAEQACAGADADIAHAFIAGABIAHgBIAHgFQADgDACgGQACgEAAgJQAAgHgCgGQgCgFgDgDIgHgEIgHgBIgGABg");
	this.shape_9.setTransform(67.1,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAnIgBgGIgBgKIgBgIQgBgDgCgCQgDgBgGAAIgQAAIAAAeIgQAAIAAhOIAnAAQAIABAEACQAFACADAEIADAHIACAHQgBAHgDAEQgCAFgHACIAGADQACABABAFIABAKIAAAKIABAFQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABABIAAABgAgQgEIASAAQAHABADgDQADgDAAgFIAAgFQgBgCgDgCQgCgCgGAAIgTAAg");
	this.shape_10.setTransform(59,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAnIAAhOIAjAAQALAAAHAHQAGAHAAAMIgBAHIgDAHQgDAFgFACQgFADgIAAIgSAAIAAAcgAgNgCIAOAAQAGAAADgCQADgDAAgCIABgFQAAgFgEgDQgDgDgHAAIgNAAg");
	this.shape_11.setTransform(51.4,25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5A46D").s().p("AnnCCIAAkDIPPAAIAAEDg");
	this.shape_12.setTransform(87.6,25,1.287,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(24.9,12,125.6,26), null);


(lib.bg_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08A2E2").s().p("EgYXAq0MAAAhVnMAwvAAAMAAABVng");
	this.shape.setTransform(156,291.4,1,1.027);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_02, new cjs.Rectangle(0,10,312,562.9), null);


(lib.bg_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.visuel2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_01, new cjs.Rectangle(0,0,300,555), null);


(lib.Interpoler2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.bg_02();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-2.4,1,0.138,0,0,0,156,274.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("A4Xl6MAwvAAAIAAL1MgwvAAAg");
	this.shape.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-38.9,314,78.7);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.bg_02();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-2.4,1,0.138,0,0,0,156,274.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("A4Xl6MAwvAAAIAAL1MgwvAAAg");
	this.shape.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-38.9,314,78.7);


// stage content:
(lib.piste_04_160600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_415 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(415).call(this.frame_415).wait(1));

	// cadre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(416));

	// logo_amex_titre
	this.instance = new lib.haut11111111111111();
	this.instance.parent = this;
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(416));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,503.5,1,1,0,0,0,87.5,23.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(279).to({_off:false},0).to({y:513.5,alpha:1},10).wait(29).to({alpha:0},7).to({alpha:1},7).wait(51).to({alpha:0},7).to({alpha:1},7).wait(19));

	// texte_carte
	this.instance_2 = new lib.Interpoler12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(82,62.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(274).to({_off:false},0).to({y:75.4,alpha:1},5).wait(137));

	// carte
	this.instance_3 = new lib.carte_01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81,154.3,0.8,0.8,0,0,0,65.5,53.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(274).to({_off:false},0).to({y:164.3,alpha:1},5,cjs.Ease.quadOut).wait(137));

	// texte_05
	this.instance_4 = new lib.texte_05();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79.5,322,1,1,0,0,0,139.5,61.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(357).to({_off:false},0).to({alpha:1},5).wait(54));

	// texte_04
	this.instance_5 = new lib.texte_04();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.5,481.8,1,1,0,0,0,141.1,17.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(274).to({_off:false},0).to({y:501.8,alpha:1},5,cjs.Ease.quadOut).wait(74).to({alpha:0},5).to({_off:true},1).wait(57));

	// text_03
	this.instance_6 = new lib.text_03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.5,456.2,1,1,0,0,0,139.5,172.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(189).to({_off:false},0).to({y:426.2,alpha:1},10).wait(65).to({y:416.2,alpha:0},5,cjs.Ease.quadOut).wait(147));

	// texte_mention_02
	this.instance_7 = new lib.text_mention_02();
	this.instance_7.parent = this;
	this.instance_7.setTransform(83.1,612.4,1,1,0,0,0,66.8,7.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).to({y:582.4,alpha:1},10).wait(65).to({alpha:0},5).wait(147));

	// texte_mention
	this.instance_8 = new lib.Interpoler9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(83.1,586.3);
	this.instance_8._off = true;

	this.instance_9 = new lib.Interpoler10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(83.1,566.3);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},109).to({state:[{t:this.instance_8}]},70).to({state:[{t:this.instance_9}]},10).to({state:[]},1).wait(226));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109).to({_off:false},0).wait(70).to({startPosition:0},0).to({_off:true,y:566.3,alpha:0},10).wait(227));

	// texte_02
	this.instance_10 = new lib.Interpoler4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(78.5,324.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(109).to({_off:false},0).to({y:314.9,alpha:1},5).wait(65).to({startPosition:0},0).to({y:304.9,alpha:0},10).to({_off:true},1).wait(226));

	// ticket_02
	this.instance_11 = new lib.Interpoler6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(79,421);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(109).to({_off:false},0).to({y:411,alpha:1},5).wait(65).to({startPosition:0},0).to({y:401,alpha:0},10).to({_off:true},1).wait(226));

	// ticket_01
	this.instance_12 = new lib.Interpoler8("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(79,292);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(109).to({_off:false},0).to({y:282,alpha:1},5).wait(65).to({startPosition:0},0).to({y:272,alpha:0},10).to({_off:true},1).wait(226));

	// bg_02
	this.instance_13 = new lib.Interpoler1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(81,677.9,1,1,0,0,0,0,39);
	this.instance_13._off = true;

	this.instance_14 = new lib.Interpoler2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(81,601,1,7.189,0,0,0,0,39.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(95).to({_off:false},0).to({_off:true,regY:39.1,scaleY:7.19,y:601},14,cjs.Ease.cubicOut).wait(307));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(95).to({_off:false},14,cjs.Ease.cubicOut).wait(155).to({startPosition:0},0).to({regX:0.1,scaleY:5.6,x:81.1,y:601.1},10).wait(142));

	// text_01
	this.instance_15 = new lib.text_01();
	this.instance_15.parent = this;
	this.instance_15.setTransform(49.5,463.6,1,1,0,0,0,55.6,12.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({y:393.6,alpha:1},15,cjs.Ease.cubicOut).wait(65).to({y:463.6,alpha:0},15,cjs.Ease.cubicOut).to({_off:true},10).wait(307));

	// petit_font_texte (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgYhAu8IAA5UMAxDAAAIAAZUg");
	var mask_graphics_1 = new cjs.Graphics().p("EgYhAu2IAA5TMAxDAAAIAAZTg");
	var mask_graphics_2 = new cjs.Graphics().p("EgYhAuxIAA5UMAxDAAAIAAZUg");
	var mask_graphics_3 = new cjs.Graphics().p("EgYhAusIAA5UMAxDAAAIAAZUg");
	var mask_graphics_4 = new cjs.Graphics().p("EgYhAumIAA5TMAxDAAAIAAZTg");
	var mask_graphics_5 = new cjs.Graphics().p("EgYhAuhIAA5TMAxDAAAIAAZTg");
	var mask_graphics_6 = new cjs.Graphics().p("EgYhAucIAA5UMAxDAAAIAAZUg");
	var mask_graphics_7 = new cjs.Graphics().p("EgYhAuXIAA5UMAxDAAAIAAZUg");
	var mask_graphics_8 = new cjs.Graphics().p("EgYhAuRIAA5TMAxDAAAIAAZTg");
	var mask_graphics_9 = new cjs.Graphics().p("EgYhAuMIAA5UMAxDAAAIAAZUg");
	var mask_graphics_10 = new cjs.Graphics().p("EgYhAuHIAA5UMAxDAAAIAAZUg");
	var mask_graphics_11 = new cjs.Graphics().p("EgYhAuBIAA5TMAxDAAAIAAZTg");
	var mask_graphics_12 = new cjs.Graphics().p("EgYhAt8IAA5TMAxDAAAIAAZTg");
	var mask_graphics_13 = new cjs.Graphics().p("EgYhAt3IAA5UMAxDAAAIAAZUg");
	var mask_graphics_14 = new cjs.Graphics().p("EgYhAtyIAA5UMAxDAAAIAAZUg");
	var mask_graphics_15 = new cjs.Graphics().p("EgYhAtsIAA5TMAxDAAAIAAZTg");
	var mask_graphics_16 = new cjs.Graphics().p("EgYhAtnIAA5TMAxDAAAIAAZTg");
	var mask_graphics_17 = new cjs.Graphics().p("EgYhAtiIAA5UMAxDAAAIAAZUg");
	var mask_graphics_18 = new cjs.Graphics().p("EgYhAtdIAA5UMAxDAAAIAAZUg");
	var mask_graphics_19 = new cjs.Graphics().p("EgYhAtYIAA5UMAxDAAAIAAZUg");
	var mask_graphics_84 = new cjs.Graphics().p("EgYhAtYIAA5UMAxDAAAIAAZUg");
	var mask_graphics_85 = new cjs.Graphics().p("EgYhAteIAA5TMAxDAAAIAAZTg");
	var mask_graphics_86 = new cjs.Graphics().p("EgYhAtlIAA5UMAxDAAAIAAZUg");
	var mask_graphics_87 = new cjs.Graphics().p("EgYhAtsIAA5UMAxDAAAIAAZUg");
	var mask_graphics_88 = new cjs.Graphics().p("EgYhAtyIAA5TMAxDAAAIAAZTg");
	var mask_graphics_89 = new cjs.Graphics().p("EgYhAt5IAA5UMAxDAAAIAAZUg");
	var mask_graphics_90 = new cjs.Graphics().p("EgYhAuAIAA5UMAxDAAAIAAZUg");
	var mask_graphics_91 = new cjs.Graphics().p("EgYhAuGIAA5TMAxDAAAIAAZTg");
	var mask_graphics_92 = new cjs.Graphics().p("EgYhAuNIAA5UMAxDAAAIAAZUg");
	var mask_graphics_93 = new cjs.Graphics().p("EgYhAuUIAA5UMAxDAAAIAAZUg");
	var mask_graphics_94 = new cjs.Graphics().p("EgYhAuaIAA5TMAxDAAAIAAZTg");
	var mask_graphics_95 = new cjs.Graphics().p("EgYhAuhIAA5UMAxDAAAIAAZUg");
	var mask_graphics_96 = new cjs.Graphics().p("EgYhAuoIAA5UMAxDAAAIAAZUg");
	var mask_graphics_97 = new cjs.Graphics().p("EgYhAuuIAA5TMAxDAAAIAAZTg");
	var mask_graphics_98 = new cjs.Graphics().p("EgYhAu1IAA5UMAxDAAAIAAZUg");
	var mask_graphics_99 = new cjs.Graphics().p("EgYhAu8IAA5UMAxDAAAIAAZUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:80,y:300.4}).wait(1).to({graphics:mask_graphics_1,x:80,y:299.8}).wait(1).to({graphics:mask_graphics_2,x:80,y:299.3}).wait(1).to({graphics:mask_graphics_3,x:80,y:298.8}).wait(1).to({graphics:mask_graphics_4,x:80,y:298.2}).wait(1).to({graphics:mask_graphics_5,x:80,y:297.7}).wait(1).to({graphics:mask_graphics_6,x:80,y:297.2}).wait(1).to({graphics:mask_graphics_7,x:80,y:296.7}).wait(1).to({graphics:mask_graphics_8,x:80,y:296.1}).wait(1).to({graphics:mask_graphics_9,x:80,y:295.6}).wait(1).to({graphics:mask_graphics_10,x:80,y:295.1}).wait(1).to({graphics:mask_graphics_11,x:80,y:294.5}).wait(1).to({graphics:mask_graphics_12,x:80,y:294}).wait(1).to({graphics:mask_graphics_13,x:80,y:293.5}).wait(1).to({graphics:mask_graphics_14,x:80,y:293}).wait(1).to({graphics:mask_graphics_15,x:80,y:292.4}).wait(1).to({graphics:mask_graphics_16,x:80,y:291.9}).wait(1).to({graphics:mask_graphics_17,x:80,y:291.4}).wait(1).to({graphics:mask_graphics_18,x:80,y:290.9}).wait(1).to({graphics:mask_graphics_19,x:80,y:290.4}).wait(65).to({graphics:mask_graphics_84,x:80,y:290.4}).wait(1).to({graphics:mask_graphics_85,x:80,y:291}).wait(1).to({graphics:mask_graphics_86,x:80,y:291.7}).wait(1).to({graphics:mask_graphics_87,x:80,y:292.4}).wait(1).to({graphics:mask_graphics_88,x:80,y:293}).wait(1).to({graphics:mask_graphics_89,x:80,y:293.7}).wait(1).to({graphics:mask_graphics_90,x:80,y:294.4}).wait(1).to({graphics:mask_graphics_91,x:80,y:295}).wait(1).to({graphics:mask_graphics_92,x:80,y:295.7}).wait(1).to({graphics:mask_graphics_93,x:80,y:296.4}).wait(1).to({graphics:mask_graphics_94,x:80,y:297}).wait(1).to({graphics:mask_graphics_95,x:80,y:297.7}).wait(1).to({graphics:mask_graphics_96,x:80,y:298.4}).wait(1).to({graphics:mask_graphics_97,x:80,y:299}).wait(1).to({graphics:mask_graphics_98,x:80,y:299.7}).wait(1).to({graphics:mask_graphics_99,x:80,y:300.4}).wait(317));

	// carte_01
	this.instance_16 = new lib.carte_01();
	this.instance_16.parent = this;
	this.instance_16.setTransform(79.5,118,1,1,0,0,0,66.5,42);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({y:98,alpha:1},10).wait(80).to({y:158},0).to({_off:true},10).wait(307));

	// bg_01
	this.instance_17 = new lib.bg_01();
	this.instance_17.parent = this;
	this.instance_17.setTransform(81,322.5,1,1,0,0,0,150,277.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(99).to({_off:true},10).wait(307));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,299.5,300,601);
// library properties:
lib.properties = {
	id: '7E0E4D49CED38B4D8BABCAD23AC203F6',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/piste_04_160_600_atlas_.png", id:"piste_04_160_600_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7E0E4D49CED38B4D8BABCAD23AC203F6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;