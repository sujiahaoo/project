(() => {
    "use strict";
    var o = {
      n: (e) => {
        var a = e && e.__esModule ? () => e.default : () => e;
        return o.d(a, { a }), a;
      },
      d: (e, a) => {
        for (var r in a)
          o.o(a, r) &&
            !o.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: a[r] });
      },
      o: (o, e) => Object.prototype.hasOwnProperty.call(o, e),
    };
    const e = jQuery;
    var a = o.n(e);
    const r = _;
    var t = o.n(r);
    console.log("a123"),
      a()(function () {
        console.log(123);
      }),
      a().ajax({ url: "http://127.0.0.1:3000/api/abc" }),
      a().ajax({ url: "http://127.0.0.1:3000/api1/abc1" }),
      console.log(t());
  })();
  