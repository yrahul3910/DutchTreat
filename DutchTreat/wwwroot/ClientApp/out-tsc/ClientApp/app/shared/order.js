"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return this.items.reduce(function (acc, val) { return acc + (val.quantity * val.unitPrice); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map