# ROMI Reto Técnico – API REST Pacientes

Este proyecto implementa una API REST para gestionar pacientes.

## Permite
    Registrar paciente
    Consultar pacientes
    Consultar paciente por ID.

## Estructura del proyecto

ROMI_TS/
├── src/
│   ├── app.ts           # App principal
│   ├── db.ts            # Conexión a base de datos
│   ├── Models/
│   │   └── Patient.ts   # Modelo de paciente
│   └── routes/
│   │   └── patients.ts  # Endpoints /patients
│   └── Controllers/
│       └── patients.ts  # Logica de endpoints de paciente
├── tsconfig.json        # Configuración de TypeScript
├── package.json         # Dependencias
└── .env                 # Variables de entorno

## Endpoints

POST /patients → Registrar nuevo paciente.

ejemplo de cuerpo del request 
    
{ "name":"Jose","age":26,"symptoms":"Dolor de cabeza"}

GET /patients → Consultar todos los pacientes.

GET /patients/:id → Consultar un paciente por id.

instalacion

1. Clonar repositorio

    git clone https://github.com/carlos-283/romi_ts.git

2. Instalar dependencias

    npm install

3. Agregar variables de entorno

    Crear archivo .env en la raiz de proyecto, con las siguientes variables

    PORT=1234
    MONGO_URI=mongodb+srv:

4. Ejecutar

    npm run dev :  Ejecutar proyecto con nodemon en entorno de desarrollo
    npm run build : Poblar la carpeta dist con el codigo js del proyecto
    npm run start : Correr codigo de la carpeta dist y usarlo en entorno productivo

    El servidor correra por defecto en http://localhost:3000

