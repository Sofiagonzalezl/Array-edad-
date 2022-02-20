edades = []
nombres = ["Nicolas","Ana","Daniela","Daniel","Gabriela","Sergio","Mariana","Juana","Sofia","Tomas","Samuel","Jorge","Mateo","Jacobo","Daniel Castellanos","Francisco","Jose"]

for(let i = 0; i< 17;i++){
    do
{
    edades.push(Number(prompt("Ingrese la edad de " + nombres[i])))
} 
    while( isNaN(edad) || edad<10 || edad>17) 
}
