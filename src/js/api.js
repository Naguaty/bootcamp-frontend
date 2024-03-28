import utils from './utils';

const auth = {
  login: '/login',
};

const usuarios = {
  lista: '/usuarios',
};

const cuentas = {
  lista: '/cuentas',
  detalle: (data) => utils.replaceParams('/cuentas/:id/movimientos', data),
};

const categorias = {
  lista: '/categorias',
  detalle: (data) => utils.replaceParams('/categorias/idCategoria', data),
  guardar: '/categorias',
  editar: (data) => utils.replaceParams('/categorias/idCategoria', data),
  eliminar: (data) => utils.replaceParams('/categorias/idCategoria', data),
};

const proveedores = {
  lista: '/proveedores',
  detalle: (data) => utils.replaceParams('/proveedores/:idProveedor', data),
  guardar: '/proveedores',
  editar: (data) => utils.replaceParams('/proveedores/:idProveedor', data),
  eliminar: (data) => utils.replaceParams('/proveedores/:idProveedor', data),
};

const clientes = {
  lista: '/clientes',
  detalle: (data) => utils.replaceParams('/clientes/:idCliente', data),
  guardar: '/clientes',
  editar: (data) => utils.replaceParams('/clientes/:idCliente', data),
  eliminar: (data) => utils.replaceParams('/clientes/:idCliente', data),
};

export default {
  auth,
  usuarios,
  cuentas,
  categorias,
  proveedores,
  clientes,
};
