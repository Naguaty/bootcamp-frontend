/* eslint-disable class-methods-use-this */
import api from '../api';
import http from '../http';
import ui from '../ui';

class Proveedores {
  getInfo = async (opts) => {
    const data = await http.doHttp({ url: api.proveedores.lista });
    this.table({ data, ...opts });
  };

  table = (opts) => {
    const { $cardBody, data } = opts;

    const columns = [
      {
        title: '#',
        field: 'idProveedor',
        css: 'w50 text-center fw-bold',
      },
      {
        title: 'Proveedor',
        field: 'nombre',
      },
    ];

    $cardBody.innerHTML = ui.buildTable({ data, columns });
    window.appRouter.updatePageLinks();
  };

  init = () => {
    const { $cardBody } = ui.pageContent({ title: 'Proveedores', load: true });
    this.getInfo({ $cardBody });
  };
}
const proveedores = new Proveedores();
export default proveedores;
