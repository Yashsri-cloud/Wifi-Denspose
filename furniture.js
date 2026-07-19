function chair(x,z){

const g=new THREE.BoxGeometry(.7,1,.7);

const m=new THREE.MeshBasicMaterial({

wireframe:true,
color:0x66ccff

});

const c=new THREE.Mesh(g,m);

c.position.set(x,.5,z);

scene.add(c);

}

chair(2,2);
chair(1,1);
chair(-2,-1);
