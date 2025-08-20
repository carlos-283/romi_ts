# ROMI Reto Técnico – API REST Pacientes

Una API REST para gestionar pacientes de manera sencilla y eficiente, hecha con Node, TypeScript y MongoDB.

---

## Funcionalidades

* Registrar paciente
* Consultar todos los pacientes
* Consultar paciente por ID

---

## Estructura

```
ROMI_TS/
├── src/
│   ├── app.ts             # App principal
│   ├── db.ts              # Conexión a base de datos
│   ├── Models/
│   │   └── Patient.ts     # Modelo de paciente
│   ├── routes/
│   │   └── patients.ts    # Endpoints /patients
│   └── Controllers/
│       └── patients.ts    # Lógica de endpoints de paciente
├── tsconfig.json          # Configuración de TypeScript
├── package.json           # Dependencias
└── .env                   # Variables de entorno
```

---

## Endpoints

### **Registrar nuevo paciente**

`POST /patients`

**Request body:**

```json
{
  "name": "Jose",
  "age": 26,
  "symptoms": "Dolor de cabeza"
}
```

---

### **Consultar todos los pacientes**

`GET /patients`

---

### **Consultar paciente por ID**

`GET /patients/:id`

---

## Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/carlos-283/romi_ts.git
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crear un archivo `.env` en la raíz del proyecto:

```
PORT=1234
MONGO_URI=mongodb+srv://<tu_usuario>:<tu_password>@cluster.mongodb.net/<tu_bd>
```

4. **Ejecutar el proyecto**

```bash
npm run dev     # Ejecutar en entorno de desarrollo con nodemon
npm run build   # Compilar TypeScript a JavaScript en /dist
npm run start   # Ejecutar en producción desde /dist
```

> El servidor correrá por defecto en [http://localhost:3000](http://localhost:3000)
