var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-ZHTDO2VA.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.png
var logo_default = "/build/_assets/logo-HB4575YB.png";

// app/components/navegation.jsx
var import_react2 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegation.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegation() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "nav", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: location.pathname === "/" ? "active" : "", children: "Inicio" }, void 0, !1, {
      fileName: "app/components/navegation.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/abautUs", className: location.pathname === "/abautUs" ? "active" : "", children: "Nosotros" }, void 0, !1, {
      fileName: "app/components/navegation.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/blog", className: location.pathname === "/blog" ? "active" : "", children: "Blog" }, void 0, !1, {
      fileName: "app/components/navegation.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/souvenirs", className: location.pathname === "/souvenirs" ? "active" : "", children: "Souvenirs" }, void 0, !1, {
      fileName: "app/components/navegation.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/cart", className: "cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: carrito_default, alt: "carrito de compras" }, void 0, !1, {
      fileName: "app/components/navegation.jsx",
      lineNumber: 12,
      columnNumber: 43
    }, this) }, void 0, !1, {
      fileName: "app/components/navegation.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navegation.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container wrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", className: "logo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: logo_default, alt: "imagen de mapa mundial" }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrap-tittle", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "tittle", children: "My" }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 13,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "tittle", children: "Cities" }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 14,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 12,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navegation, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container content ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navegation, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyright", children: [
      "Todos los derechos reservados ",
      new Date().getFullYear()
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/root.jsx
var import_react5 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return {
    charset: "utf-8",
    title: "My-Cities",
    viewport: "width=device-width,initial-scale=1"
  };
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  let buyCartLS = typeof window < "u" ? JSON.parse(localStorage.getItem("buyCart")) ?? [] : null, [buyCart, setBuyCart] = (0, import_react5.useState)(buyCartLS);
  return (0, import_react5.useEffect)(() => {
    localStorage.setItem("buyCart", JSON.stringify(buyCart));
  }, [buyCart]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react4.Outlet,
    {
      context: {
        addCart: (souvenir) => {
          if (buyCart.some((souvenirState) => souvenirState.id === souvenir.id)) {
            let updatedCart = buyCart.map((souvenirState) => (souvenirState.id === souvenir.id && (souvenirState.quantity = souvenir.quantity), souvenirState));
            setBuyCart(updatedCart);
          } else
            setBuyCart([...buyCart, souvenir]);
        },
        buyCart,
        updateQuantity: (souvenir) => {
          let updatedCart = buyCart.map((souvenirState) => (souvenirState.id === souvenir.id && (souvenirState.quantity = souvenir.quantity), souvenirState));
          setBuyCart(updatedCart);
        },
        deleteSouvenir: (id) => {
          let updatedCar = buyCart.filter((souvenirState) => souvenirState.id !== id);
          setBuyCart(updatedCar);
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "app/root.jsx",
      lineNumber: 90,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 89,
    columnNumber: 9
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 107,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 105,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 115,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 110,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 104,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react4.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 128,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volver a la pagina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 127,
    columnNumber: 9
  }, this);
}
function ErrorBoundary(error) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("document", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volver a la pagina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 138,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 136,
    columnNumber: 9
  }, this);
}

// app/routes/souvenirs.jsx
var souvenirs_exports = {};
__export(souvenirs_exports, {
  default: () => souvenirs_default2,
  links: () => links2,
  meta: () => meta2
});
var import_react6 = require("@remix-run/react");

// app/styles/souvenirs.css
var souvenirs_default = "/build/_assets/souvenirs-DFL2O3C5.css";

// app/routes/souvenirs.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function links2() {
  return [
    {
      rel: "stylesheet",
      href: souvenirs_default
    }
  ];
}
function meta2() {
  return {
    title: "My Cities - Souvenirs",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades"
  };
}
function Souvenirs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react6.Outlet,
    {
      context: (0, import_react6.useOutletContext)()
    },
    void 0,
    !1,
    {
      fileName: "app/routes/souvenirs.jsx",
      lineNumber: 26,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/souvenirs.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var souvenirs_default2 = Souvenirs;

// app/routes/souvenirs/$souvenirUrl.jsx
var souvenirUrl_exports = {};
__export(souvenirUrl_exports, {
  default: () => Product,
  loader: () => loader,
  meta: () => meta3
});

// app/models/souvenirs.server.js
async function getSouvenirs() {
  return await (await fetch(`${process.env.API_URL}/souvenirs?populate=*`)).json();
}
async function getSouvenir(url) {
  return await (await fetch(`${process.env.API_URL}/souvenirs?filters[url]=${url}&populate=*`)).json();
}

// app/routes/souvenirs/$souvenirUrl.jsx
var import_react7 = require("@remix-run/react");

// app/utils/helpers.js
var formatDate = (date) => {
  let transDate = new Date(date), options = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return transDate.toLocaleDateString("es-ES", options);
}, formatNumbers = (numbers) => new Intl.NumberFormat("es-VE").format(numbers), formatCoins = (precio) => precio.toLocaleString("es", {
  style: "currency",
  currency: "EUR"
});

// app/routes/souvenirs/$souvenirUrl.jsx
var import_react8 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function meta3({ data }) {
  var _a;
  return data ? {
    title: `My Cities - ${(_a = data == null ? void 0 : data.data[0]) == null ? void 0 : _a.attributes.titulo}`,
    description: `My Cities, Blog de viajes y rese\xF1as de ciudades entrada ${data.data[0].attributes.titulo}`
  } : {
    title: "My Cities - Producto no encontrado",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades - Producto no encontrado"
  };
}
async function loader({ params }) {
  let { souvenirUrl } = params, souvenir = await getSouvenir(souvenirUrl);
  if (souvenir.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Producto no encontrado"
    });
  return souvenir;
}
function Product() {
  let { addCart } = (0, import_react7.useOutletContext)(), [quantity, setQuantity] = (0, import_react8.useState)(0), souvenir = (0, import_react7.useLoaderData)(), { titulo, precio, ciudad, publishedAt, tipo, foto, url } = souvenir == null ? void 0 : souvenir.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), quantity < 1) {
      alert("Seleccione una Cantidad");
      return;
    }
    let selectedSouvenir = {
      id: souvenir.data[0].id,
      image: foto.data.attributes.url,
      titulo,
      precio,
      quantity
    };
    addCart(selectedSouvenir);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container-souvenir-details", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "souvenir", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "tittle", children: titulo }, void 0, !1, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 63,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "wrap-img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: foto.data.attributes.url, alt: `Imagen de guitarra ${titulo}` }, void 0, !1, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 65,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 64,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "sPrice", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "spanSouData", children: "Precio:" }, void 0, !1, {
        fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
        lineNumber: 67,
        columnNumber: 39
      }, this),
      " ",
      formatCoins(precio)
    ] }, void 0, !0, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 67,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "sCity", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "spanSouData", children: "Ciudad:" }, void 0, !1, {
        fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
        lineNumber: 68,
        columnNumber: 38
      }, this),
      " ",
      ciudad
    ] }, void 0, !0, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 68,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "sType", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "spanSouData", children: "Tipo:" }, void 0, !1, {
        fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
        lineNumber: 69,
        columnNumber: 38
      }, this),
      " ",
      tipo
    ] }, void 0, !0, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 69,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { className: "form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "quantity", children: "Cantidad" }, void 0, !1, {
        fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("select", { id: "quantity", onChange: (e) => setQuantity(+e.target.value), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "0", children: "-- Seleccione --" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 75,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 76,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 77,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 78,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 79,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 80,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "6", children: "6" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 81,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "7", children: "7" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 82,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "8", children: "8" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "9", children: "9" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 84,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "10", children: "10" }, void 0, !1, {
          fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
          lineNumber: 85,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
        lineNumber: 74,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "submit", value: "Agregar al Carrito" }, void 0, !1, {
        fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
        lineNumber: 88,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 71,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "sDate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "", children: "Publicado:" }, void 0, !1, {
        fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
        lineNumber: 93,
        columnNumber: 38
      }, this),
      " ",
      formatDate(publishedAt)
    ] }, void 0, !0, {
      fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
      lineNumber: 93,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
    lineNumber: 62,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/souvenirs/$souvenirUrl.jsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
}

// app/routes/souvenirs/index.jsx
var souvenirs_exports2 = {};
__export(souvenirs_exports2, {
  default: () => Souvenirs2,
  loader: () => loader2
});
var import_react10 = require("@remix-run/react");

// app/components/souvenir.jsx
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Souvenir({ souvenir }) {
  let { titulo, precio, ciudad, publishedAt, tipo, foto, url } = souvenir;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "souvenir", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "wrap-img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: foto.data.attributes.url, alt: `Imagen de guitarra ${titulo}` }, void 0, !1, {
      fileName: "app/components/souvenir.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/souvenir.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "tittle", children: titulo }, void 0, !1, {
      fileName: "app/components/souvenir.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/souvenir.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { className: "link-product", to: `/souvenirs/${url}`, children: "Ver Producto" }, void 0, !1, {
      fileName: "app/components/souvenir.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/souvenir.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var souvenir_default = Souvenir;

// app/components/souvenirsList.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function SouvenirsList({ souvenirs }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "heading", children: "Souvenirs" }, void 0, !1, {
      fileName: "app/components/souvenirsList.jsx",
      lineNumber: 6,
      columnNumber: 5
    }, this),
    (souvenirs == null ? void 0 : souvenirs.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "souvenirs-grid", children: souvenirs.map((souvenir) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      souvenir_default,
      {
        souvenir: souvenir.attributes
      },
      souvenir.id,
      !1,
      {
        fileName: "app/components/souvenirsList.jsx",
        lineNumber: 11,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/souvenirsList.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/souvenirsList.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/souvenirs/index.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader2() {
  return (await getSouvenirs()).data;
}
function Souvenirs2() {
  let souvenirs = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    SouvenirsList,
    {
      souvenirs
    },
    void 0,
    !1,
    {
      fileName: "app/routes/souvenirs/index.jsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/souvenirs/index.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/abautUs.jsx
var abautUs_exports = {};
__export(abautUs_exports, {
  default: () => Nosotros,
  meta: () => meta4
});

// public/img/construccion.jpg
var construccion_default = "/build/_assets/construccion-WV2WEENB.jpg";

// app/routes/abautUs.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function meta4() {
  return {
    title: "My Cities -Abaut Us",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades"
  };
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: construccion_default, alt: "imagen de pagina en construcci\xF3n" }, void 0, !1, {
    fileName: "app/routes/abautUs.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/abautUs.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3,
  loader: () => loader3,
  meta: () => meta5
});

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/ciudades?populate=*`)).json();
}
async function getPost(url) {
  return await (await fetch(`${process.env.API_URL}/ciudades?filters[url]=${url}&populate=*`)).json();
}

// app/routes/index.jsx
var import_react12 = require("@remix-run/react");

// app/components/post.jsx
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Post({ post }) {
  let { nombre, titulo, publishedAt, texto1, url, imagen1 } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "date", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "spanDate", children: "Publicado:" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 9,
        columnNumber: 29
      }, this),
      " ",
      formatDate(publishedAt)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "name", children: nombre }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "secondName", children: titulo }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "summary", children: texto1 }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "wrap-imagen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { className: "imagen", src: imagen1.data.attributes.url, alt: `imagen blog ${nombre}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react11.Link, { className: "link-read", to: `/blog/${url}`, children: "Leer Post" }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/postsList.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function PostsList({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/components/postsList.jsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    (posts == null ? void 0 : posts.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Post,
      {
        post: post.attributes
      },
      post.id,
      !1,
      {
        fileName: "app/components/postsList.jsx",
        lineNumber: 12,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/postsList.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/postsList.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/styles/blog.css
var blog_default = "/build/_assets/blog-ITWN3IGE.css";

// app/routes/index.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function links3() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta5() {
  return {
    title: "My Cities - Home",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades"
  };
}
async function loader3() {
  let [posts, souvenirs] = await Promise.all([
    getPosts(),
    getSouvenirs()
  ]);
  return {
    posts: posts.data,
    souvenirs: souvenirs.data
  };
}
function Index() {
  let { posts, souvenirs } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "big-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "container container-posts", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      PostsList,
      {
        posts
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "container container-souvenirs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      SouvenirsList,
      {
        souvenirs
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 50,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links4,
  meta: () => meta6
});
var import_react13 = require("@remix-run/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta6() {
  return {
    title: "My Cities",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades"
  };
}
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/blog/$postUrl.jsx
var postUrl_exports = {};
__export(postUrl_exports, {
  default: () => Post2,
  loader: () => loader4,
  meta: () => meta7
});
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function meta7({ data }) {
  var _a;
  return data ? {
    title: `My Cities - ${(_a = data == null ? void 0 : data.data[0]) == null ? void 0 : _a.attributes.nombre}`,
    description: `My Cities, Blog de viajes y rese\xF1as de ciudades entrada ${data.data[0].attributes.nombre}`
  } : {
    title: "My Cities - Entrada no encontrada",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades - entrada no encontrada"
  };
}
async function loader4({ params }) {
  let { postUrl } = params, post = await getPost(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    });
  return post;
}
function Post2() {
  let post = (0, import_react14.useLoaderData)(), { nombre, titulo, publishedAt, pais, texto1, texto2, extencion, poblacion, url, fuente, continente, imagen1, imagen2 } = post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "date", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "spanDate", children: "Publicado:" }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this),
      " ",
      formatDate(publishedAt)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "name", children: nombre }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "secondName", children: titulo }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "country", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "spanData", children: "Pa\xEDs:" }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 41,
        columnNumber: 32
      }, this),
      " ",
      pais
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "country", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "spanData", children: "Continente:" }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 42,
        columnNumber: 32
      }, this),
      " ",
      continente
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "numbers", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "spanData", children: "Territorio:" }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 43,
        columnNumber: 32
      }, this),
      " ",
      formatNumbers(extencion),
      " Km"
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "numbers", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "spanData", children: "Poblaci\xF3n:" }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 44,
        columnNumber: 32
      }, this),
      " ",
      formatNumbers(poblacion),
      " Hab."
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text", children: texto1 }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "wrap-imagen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "imagen", src: imagen1.data.attributes.url, alt: `imagen blog ${nombre}` }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text", children: texto2 }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "wrap-imagen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "imagen", src: imagen2.data.attributes.url, alt: `imagen blog ${nombre}` }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "date", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "spanDate", children: "Fuente:" }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 53,
        columnNumber: 29
      }, this),
      " ",
      fuente
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$postUrl.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this);
}

// app/routes/blog/index.jsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Blog2,
  loader: () => loader5,
  meta: () => meta8
});
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function meta8() {
  return {
    title: "My Cities - Nuestro Blog",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades"
  };
}
async function loader5() {
  return (await getPosts()).data;
}
function Blog2() {
  let posts = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    PostsList,
    {
      posts
    },
    void 0,
    !1,
    {
      fileName: "app/routes/blog/index.jsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}

// app/routes/cart.jsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Cart,
  links: () => links5,
  meta: () => meta9
});

// app/styles/cart.css
var cart_default = "/build/_assets/cart-CNW76LQM.css";

// app/routes/cart.jsx
var import_react16 = require("@remix-run/react"), import_react17 = require("react"), import_remix_utils = require("remix-utils");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function links5() {
  return [
    {
      rel: "stylesheet",
      href: cart_default
    }
  ];
}
function meta9() {
  return {
    title: "My Cities - Carrito de Compras",
    description: "My Cities, Blog de viajes y rese\xF1as de ciudades"
  };
}
function Cart() {
  let [total, setTotal] = (0, import_react17.useState)(""), { buyCart, updateQuantity, deleteSouvenir } = (0, import_react16.useOutletContext)();
  return (0, import_react17.useEffect)(() => {
    let calcTotal = buyCart.reduce((total2, product) => total2 + product.quantity * product.precio, 0);
    setTotal(calcTotal);
  }, [buyCart]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_remix_utils.ClientOnly, { fallback: "cargando...", children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "heading", children: "Carrito de Compras" }, void 0, !1, {
      fileName: "app/routes/cart.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "cart", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: "Articulos" }, void 0, !1, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        buyCart.length === 0 ? "Carrito Vacio" : buyCart.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "product", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: product.image, alt: `imagen del producto: ${product.titulo}` }, void 0, !1, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 49,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 48,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "title", children: product.titulo }, void 0, !1, {
              fileName: "app/routes/cart.jsx",
              lineNumber: 53,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Cantidad:" }, void 0, !1, {
              fileName: "app/routes/cart.jsx",
              lineNumber: 54,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("select", { className: "select", value: product.quantity, onChange: (e) => updateQuantity({
              quantity: +e.target.value,
              id: product.id
            }), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 59,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 60,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 61,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 62,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 63,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "6", children: "6" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 64,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "7", children: "7" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 65,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "8", children: "8" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "9", children: "9" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 67,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "10", children: "10" }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 68,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.jsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "price", children: [
              "Precio: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: formatCoins(product.precio) }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 70,
                columnNumber: 48
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.jsx",
              lineNumber: 70,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "subtotal", children: [
              "Subtotal: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: formatCoins(product.quantity * product.precio) }, void 0, !1, {
                fileName: "app/routes/cart.jsx",
                lineNumber: 71,
                columnNumber: 53
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.jsx",
              lineNumber: 71,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { className: "btn_delete", type: "button", onClick: () => deleteSouvenir(product.id), children: "X" }, void 0, !1, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, product.id, !0, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("aside", { className: "summary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { children: "Resumen del Pedido" }, void 0, !1, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: [
          "Total a pagar: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: formatCoins(total) }, void 0, !1, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 83,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "211ffdbb", entry: { module: "/build/entry.client-J77TGMHX.js", imports: ["/build/_shared/chunk-BJ3KEU73.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L5PF2JWB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/abautUs": { id: "routes/abautUs", parentId: "root", path: "abautUs", index: void 0, caseSensitive: void 0, module: "/build/routes/abautUs-Z7TDRLI3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-6VBZ7WXE.js", imports: ["/build/_shared/chunk-322MTHKT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$postUrl": { id: "routes/blog/$postUrl", parentId: "routes/blog", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$postUrl-5EKBYPVT.js", imports: ["/build/_shared/chunk-TVXWJEBH.js", "/build/_shared/chunk-UGHKOBVP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-2K456OWM.js", imports: ["/build/_shared/chunk-W3T5G3BE.js", "/build/_shared/chunk-TVXWJEBH.js", "/build/_shared/chunk-UGHKOBVP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-C34554EK.js", imports: ["/build/_shared/chunk-UGHKOBVP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-XMNBN2S3.js", imports: ["/build/_shared/chunk-W3T5G3BE.js", "/build/_shared/chunk-TVXWJEBH.js", "/build/_shared/chunk-OR26UV57.js", "/build/_shared/chunk-7GURA3BY.js", "/build/_shared/chunk-UGHKOBVP.js", "/build/_shared/chunk-322MTHKT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/souvenirs": { id: "routes/souvenirs", parentId: "root", path: "souvenirs", index: void 0, caseSensitive: void 0, module: "/build/routes/souvenirs-ZA6ZK6BT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/souvenirs/$souvenirUrl": { id: "routes/souvenirs/$souvenirUrl", parentId: "routes/souvenirs", path: ":souvenirUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/souvenirs/$souvenirUrl-W3JS3SM2.js", imports: ["/build/_shared/chunk-7GURA3BY.js", "/build/_shared/chunk-UGHKOBVP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/souvenirs/index": { id: "routes/souvenirs/index", parentId: "routes/souvenirs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/souvenirs/index-CIRGFPZI.js", imports: ["/build/_shared/chunk-OR26UV57.js", "/build/_shared/chunk-7GURA3BY.js", "/build/_shared/chunk-UGHKOBVP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-211FFDBB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/souvenirs": {
    id: "routes/souvenirs",
    parentId: "root",
    path: "souvenirs",
    index: void 0,
    caseSensitive: void 0,
    module: souvenirs_exports
  },
  "routes/souvenirs/$souvenirUrl": {
    id: "routes/souvenirs/$souvenirUrl",
    parentId: "routes/souvenirs",
    path: ":souvenirUrl",
    index: void 0,
    caseSensitive: void 0,
    module: souvenirUrl_exports
  },
  "routes/souvenirs/index": {
    id: "routes/souvenirs/index",
    parentId: "routes/souvenirs",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: souvenirs_exports2
  },
  "routes/abautUs": {
    id: "routes/abautUs",
    parentId: "root",
    path: "abautUs",
    index: void 0,
    caseSensitive: void 0,
    module: abautUs_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$postUrl": {
    id: "routes/blog/$postUrl",
    parentId: "routes/blog",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: postUrl_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_exports2
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
