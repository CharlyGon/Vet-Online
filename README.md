# VeterinariaNet

Bienvenido a VeterinariaNet, el sistema centralizado para la red de veterinarias. Este proyecto, desarrollado en TypeScript con Node.js, brinda a nuestra red la capacidad de gestionar información crucial sobre sucursales de veterinarias, clientes, pacientes (mascotas), y proveedores CFS.

## Características

### Sucursales de Veterinarias
- **Datos:**
  - Nombre
  - Dirección
  - ID (generado aleatoriamente al dar de alta)
- **Operaciones:**
  - Alta
  - Modificación
  - Baja

### Clientes
- **Datos:**
  - Nombre
  - Teléfono
  - VIP (cliente recurrente)
  - Número de visitas (incrementado con cada consulta para clientes VIP)
  - ID (generado aleatoriamente al dar de alta)
- **Operaciones:**
  - Alta
  - Modificación
  - Baja

### Pacientes (Mascotas)
- **Datos:**
  - Nombre
  - Especie (registrada como exótica si no es perro o gato)
  - ID del dueño
- **Operaciones:**
  - Alta
  - Modificación
  - Baja

### Proveedores CFS
- **Datos:**
  - Nombre
  - Teléfono
  - ID (generado aleatoriamente al dar de alta)
- **Operaciones:**
  - Alta
  - Modificación
  - Baja

## Funcionalidades Especiales
- **ID Únicos:**
  - Todos los ID generados son únicos. Antes de guardarlos, se valida su unicidad y se regeneran si es necesario.
- **Visibilidad Global:**
  - Todos los clientes y pacientes son visibles desde cualquier veterinaria de la red.

## Instalación
1. Clona este repositorio: `git clone https://github.com/CharlyGon/VeterinariaNet.git`
2. Instala las dependencias: `npm install`

## Uso
1. Inicia la aplicación: `npm start`

## Contribuciones
¡Contribuciones son bienvenidas! Si encuentras problemas o deseas mejorar este proyecto, por favor abre un issue o envía un pull request.

Gracias por ser parte de VeterinariaNet.