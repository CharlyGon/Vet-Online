import { Veterinaria } from '../entidades/veterinaria';
import { Cliente } from '../entidades/cliente';
import { Paciente } from '../entidades/paciente';
import { Proveedor } from '../entidades/proveedor';

type VeterinariaArray = Veterinaria[];

export class GestorVeterinarias {
    public static veterinarias: VeterinariaArray = [];
    public static clientes: Cliente[] = [];
    private pacientes: Paciente[] = [];
    private proveedores: Proveedor[] = [];

    getVeterinaria(id: number) {
        return GestorVeterinarias.veterinarias.find(veterinaria => veterinaria.id === id);
    }

    agregarVeterinaria(id: number | null, nombre: string, dirección: string): Veterinaria {
        const nuevaVeterinaria = new Veterinaria(id, nombre, dirección);
        GestorVeterinarias.veterinarias.push(nuevaVeterinaria);
        return nuevaVeterinaria;
    }

    eliminarVeterinaria(id: number) {
        const index = GestorVeterinarias.veterinarias.findIndex((veterinaria) => veterinaria.id === id);
        if (index !== -1) {
            GestorVeterinarias.veterinarias.splice(index, 1);
            console.log(`Veterinaria con ID ${id} ha sido dada de baja.`);
        } else {
            console.log(`No se encontró una veterinaria con ID ${id}.`);
        }
    }

    getClientes(id: number | null, veterinariaId: number | null = null): Cliente | Cliente[] | undefined {
        if (id) {
            // Si se proporciona un ID de cliente, busca el cliente por ID y, opcionalmente, el ID de la veterinaria
            if (veterinariaId) {
                return GestorVeterinarias.clientes.find((cliente) => cliente.id === id && cliente.veterinariaId === veterinariaId);
            } else {
                return GestorVeterinarias.clientes.find((cliente) => cliente.id === id);
            }
        } else {
            // Si no se proporciona un ID de cliente, devuelve una lista de todos los clientes
            if (veterinariaId) {
                return GestorVeterinarias.clientes.filter((cliente) => cliente.veterinariaId === veterinariaId);
            } else {
                return GestorVeterinarias.clientes;
            }
        }
    }

    altaCliente(nombre: string, telefono: string, esVIP: boolean, numeroVisitas: number, veterinariaId: number, mascotaId?: number) {
        // Verificar si la veterinaria existe
        const veterinaria = GestorVeterinarias.veterinarias.find((v) => v.id === veterinariaId);

        if (!veterinaria) {
            console.log('La veterinaria no existe. No se ha agregado el cliente.');
            return null;
        }

        // Crear una nueva instancia de Cliente
        const nuevoCliente = new Cliente(0, nombre, telefono, esVIP, numeroVisitas, veterinariaId, mascotaId);

        // Asociar al cliente con la veterinaria
        nuevoCliente.veterinariaId = veterinaria.id!;

        // Agregar el cliente a la lista de clientes
        GestorVeterinarias.clientes.push(nuevoCliente);
        return nuevoCliente;
    }

    bajaCliente(cliente: Cliente) {
        const index = GestorVeterinarias.clientes.findIndex((c) => c.id === cliente.id);
        if (index !== -1) {
            GestorVeterinarias.clientes.splice(index, 1);
            console.log(`Cliente con ID ${cliente.id} ha sido dado de baja.`);
        } else {
            console.log(`No se encontró un cliente con ID ${cliente.id}.`);
        }
    }

    bajaPaciente(paciente: Paciente) {

    }

    altaProveedor(proveedor: Proveedor) {

    }

    bajaProveedor(proveedor: Proveedor) {

    }

}
