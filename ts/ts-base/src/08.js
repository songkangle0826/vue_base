"use strict";
/*
* 类型保护
* */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
(function (a_1) {
    function double(input) {
        if (typeof input == 'string') {
            // input.
        }
        else if (typeof input == 'number') {
            // input.
        }
        else {
        }
    }
    var Animal = /** @class */ (function () {
        function Animal() {
            this.name = '哈哈哈';
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.swing = 2;
            return _this;
        }
        return Bird;
    }(Animal));
    function getName(a) {
        if (a instanceof Bird) {
            a.swing;
        }
        else {
            a.name;
        }
    }
})(a || (a = {}));
// null保护
function getFirstLetter(s) {
    if (s === null) {
        s = '';
    }
    /*
        function ensure(){
            s = s || '';
        }
        ensure()
        return s!.charAt(0)     // 非空断言
     */
}
var b;
(function (b) {
    var a = { b: 1 };
    // 先判断a是否为null或者undefined,如果不为null绘制undefiend,返回a.b的值
    // console.log(a?.b);
})(b || (b = {}));
function getButton(button) {
    if (button.class == 'warning') {
        button.text1;
    }
    else {
        button.text2;
    }
}
function getNumber(x) {
    if ('swing' in x) {
        x.swing;
    }
    else {
        x.leg;
    }
}
var d;
(function (d) {
    function isBird(x) {
        return x.legs === 2;
    }
    function getAnimal(x) {
        if (isBird(x)) {
            x.name;
        }
        else {
            x.name;
        }
    }
    var x = { name: 'Bird', legs: 2 };
    getAnimal(x);
})(d || (d = {}));
