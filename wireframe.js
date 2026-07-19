const room=new THREE.BoxGeometry(10,5,8);

const roomMat=new THREE.MeshBasicMaterial({

wireframe:true,
transparent:true,
opacity:.18,
color:0x55ffff

});

const roomMesh=new THREE.Mesh(room,roomMat);

scene.add(roomMesh);
