import { menuClientes } from "./src/menu/menuClientes";
import { menuVeterinarias } from "./src/menu/menuVeterinaria";
import * as readline from 'readline';
import { GestorVeterinarias } from "./src/servicio/gestor";
import { menuPacientes } from "./src/menu/menuPaciente";
import { menuProveedores } from "./src/menu/menuProveedores";

const gestor = new GestorVeterinarias()
gestor.altaVeterinaria(null, 'Veterinaria 1', 'Calle 1');
gestor.altaCliente('Juan', '123456789', false, 0, 1);
gestor.altaPaciente(null, 'Tomy', 'langosta',"10kg" , 'Macho', 'Color 1', 1, 1);
gestor.altaProveedor(null, 'Proveedor 1', 'Calle 1', '123456789',1);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const menuPrincipal = () => {
    console.log('\n--- Menú Principal ---');
    //consulta 
    console.log('1. Administrar Veterinarias');
    console.log('2. Administrar Clientes');
    console.log('3. Administrar Pacientes');
    console.log('4. Administrar Proveedores');
    console.log('9. Salir');

    rl.question('Selecciona una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                menuVeterinarias(rl, gestor);
                break;
            case '2':
                menuClientes(rl, gestor);
                break;
            case '3':
                menuPacientes(rl, gestor);
                break;
            case '4':
                menuProveedores(rl, gestor);
                break;
            case '9':
                console.log('Hasta luego. ¡Adiós!');
                rl.close(); // Cerrar el readline y salir
                break;
            default:
                console.log('Opción no válida. Por favor, elige una opción válida.');
                menuPrincipal(); // Volver al menú principal
                break;
        }
    });
};

menuPrincipal();
