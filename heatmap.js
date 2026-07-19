const plane=new THREE.PlaneGeometry(
10,
8,
250,
250
);

const material=new THREE.ShaderMaterial({

transparent:true,

uniforms:{

time:{value:0}

},

vertexShader:`

varying vec2 vUv;

void main(){

vUv=uv;

gl_Position=
projectionMatrix*
modelViewMatrix*
vec4(position,1.0);

}

`,

fragmentShader:`

uniform float time;

varying vec2 vUv;

float blob(vec2 p,vec2 c,float r){

return exp(-length(p-c)*r);

}

void main(){

vec3 blue=vec3(0.0,0.2,1.0);

vec3 green=vec3(0.0,1.0,0.3);

vec3 yellow=vec3(1.0,1.0,0.0);

vec3 red=vec3(1.0,0.2,0.2);

float a=blob(vUv,
vec2(.72,.48)+
vec2(
sin(time)*.01,
cos(time)*.01
),18.);

float b=blob(vUv,
vec2(.52,.58),12.);

float c=blob(vUv,
vec2(.30,.25),9.);

float d=max(max(a,b),c);

vec3 color=mix(blue,green,d);

color=mix(color,yellow,smoothstep(.4,.7,d));

color=mix(color,red,smoothstep(.75,1.,d));

gl_FragColor=vec4(color,.88);

}

`

});

const heat=new THREE.Mesh(plane,material);

heat.rotation.x=-Math.PI/2;

scene.add(heat);
