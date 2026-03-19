"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(self["webpackChunkvallankumouskirja"] = self["webpackChunkvallankumouskirja"] || []).push([[429], {
  7435: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8583);
    var zone_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
  },
  8583: function _() {
    /**
     * @license Angular v15.1.0-next.0
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    (function (global) {
      var performance = global['performance'];
      function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
      }
      function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
      }
      mark('Zone');
      var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
      function __symbol__(name) {
        return symbolPrefix + name;
      }
      var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
      if (global['Zone']) {
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
          throw new Error('Zone already loaded.');
        } else {
          return global['Zone'];
        }
      }
      var Zone = function () {
        var Zone = function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }
          _createClass(Zone, [{
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }, {
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;
              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }
                current = current._parent;
              }
              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }
              var _callback = this._zoneDelegate.intercept(this, callback, source);
              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };
              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };
              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              }
              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }
              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };
              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }
                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;
                    this._updateTaskCount(task, -1);
                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                var newZone = this;
                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }
                  newZone = newZone.parent;
                }
              }
              task._transitionTo(scheduling, notScheduled);
              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;
              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                task._transitionTo(unknown, scheduling, notScheduled);
                this._zoneDelegate.handleError(this, err);
                throw err;
              }
              if (task._zoneDelegates === zoneDelegates) {
                this._updateTaskCount(task, 1);
              }
              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }
              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              if (task.state !== scheduled && task.state !== running) {
                return;
              }
              task._transitionTo(canceling, scheduled, running);
              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
              }
              this._updateTaskCount(task, -1);
              task._transitionTo(notScheduled, canceling);
              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;
              if (count == -1) {
                task._zoneDelegates = null;
              }
              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;
              while (zone.parent) {
                zone = zone.parent;
              }
              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            }
          }, {
            key: "__load_patch",
            value: function __load_patch(name, fn) {
              var ignoreDuplicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              if (patches.hasOwnProperty(name)) {
                if (!ignoreDuplicate && checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }]);
          return Zone;
        }();
        Zone.__symbol__ = __symbol__;
        return Zone;
      }();
      var DELEGATE_ZS = {
        name: '',
        onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
          return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function onScheduleTask(delegate, _, target, task) {
          return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
          return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function onCancelTask(delegate, _, target, task) {
          return delegate.cancelTask(target, task);
        }
      };
      var _ZoneDelegate = function () {
        function _ZoneDelegate(zone, parentDelegate, zoneSpec) {
          _classCallCheck(this, _ZoneDelegate);
          this._taskCounts = {
            'microTask': 0,
            'macroTask': 0,
            'eventTask': 0
          };
          this.zone = zone;
          this._parentDelegate = parentDelegate;
          this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
          this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
          this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
          this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
          this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
          this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
          this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
          this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
          this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
          this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
          this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
          this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
          this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
          this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
          this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
          this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
          this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
          this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
          this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
          this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
          this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
          this._hasTaskZS = null;
          this._hasTaskDlgt = null;
          this._hasTaskDlgtOwner = null;
          this._hasTaskCurrZone = null;
          var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
          var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
          if (zoneSpecHasTask || parentHasTask) {
            this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
            this._hasTaskDlgt = parentDelegate;
            this._hasTaskDlgtOwner = this;
            this._hasTaskCurrZone = zone;
            if (!zoneSpec.onScheduleTask) {
              this._scheduleTaskZS = DELEGATE_ZS;
              this._scheduleTaskDlgt = parentDelegate;
              this._scheduleTaskCurrZone = this.zone;
            }
            if (!zoneSpec.onInvokeTask) {
              this._invokeTaskZS = DELEGATE_ZS;
              this._invokeTaskDlgt = parentDelegate;
              this._invokeTaskCurrZone = this.zone;
            }
            if (!zoneSpec.onCancelTask) {
              this._cancelTaskZS = DELEGATE_ZS;
              this._cancelTaskDlgt = parentDelegate;
              this._cancelTaskCurrZone = this.zone;
            }
          }
        }
        _createClass(_ZoneDelegate, [{
          key: "fork",
          value: function fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
          }
        }, {
          key: "intercept",
          value: function intercept(targetZone, callback, source) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
          }
        }, {
          key: "invoke",
          value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "handleError",
          value: function handleError(targetZone, error) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
              if (this._hasTaskZS) {
                returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
              }
              returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
              if (!returnTask) returnTask = task;
            } else {
              if (task.scheduleFn) {
                task.scheduleFn(task);
              } else if (task.type == microTask) {
                scheduleMicroTask(task);
              } else {
                throw new Error('Task is missing scheduleFn.');
              }
            }
            return returnTask;
          }
        }, {
          key: "invokeTask",
          value: function invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
              value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            } else {
              if (!task.cancelFn) {
                throw Error('Task is not cancelable');
              }
              value = task.cancelFn(task);
            }
            return value;
          }
        }, {
          key: "hasTask",
          value: function hasTask(targetZone, isEmpty) {
            try {
              this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            } catch (err) {
              this.handleError(targetZone, err);
            }
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
              throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
              var isEmpty = {
                microTask: counts['microTask'] > 0,
                macroTask: counts['macroTask'] > 0,
                eventTask: counts['eventTask'] > 0,
                change: type
              };
              this.hasTask(this.zone, isEmpty);
            }
          }
        }]);
        return _ZoneDelegate;
      }();
      var ZoneTask = function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
          _classCallCheck(this, ZoneTask);
          this._zone = null;
          this.runCount = 0;
          this._zoneDelegates = null;
          this._state = 'notScheduled';
          this.type = type;
          this.source = source;
          this.data = options;
          this.scheduleFn = scheduleFn;
          this.cancelFn = cancelFn;
          if (!callback) {
            throw new Error('callback is not defined');
          }
          this.callback = callback;
          var self = this;
          if (type === eventTask && options && options.useG) {
            this.invoke = ZoneTask.invokeTask;
          } else {
            this.invoke = function () {
              return ZoneTask.invokeTask.call(global, self, this, arguments);
            };
          }
        }
        _createClass(ZoneTask, [{
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "cancelScheduleRequest",
          value: function cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
              this._state = toState;
              if (toState == notScheduled) {
                this._zoneDelegates = null;
              }
            } else {
              throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
            }
          }
        }, {
          key: "toString",
          value: function toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
              return this.data.handleId.toString();
            } else {
              return Object.prototype.toString.call(this);
            }
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }], [{
          key: "invokeTask",
          value: function invokeTask(task, target, args) {
            if (!task) {
              task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
              task.runCount++;
              return task.zone.runTask(task, target, args);
            } finally {
              if (_numberOfNestedTaskFrames == 1) {
                drainMicroTaskQueue();
              }
              _numberOfNestedTaskFrames--;
            }
          }
        }]);
        return ZoneTask;
      }();
      var symbolSetTimeout = __symbol__('setTimeout');
      var symbolPromise = __symbol__('Promise');
      var symbolThen = __symbol__('then');
      var _microTaskQueue = [];
      var _isDrainingMicrotaskQueue = false;
      var nativeMicroTaskQueuePromise;
      function nativeScheduleMicroTask(func) {
        if (!nativeMicroTaskQueuePromise) {
          if (global[symbolPromise]) {
            nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
          }
        }
        if (nativeMicroTaskQueuePromise) {
          var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
          if (!nativeThen) {
            nativeThen = nativeMicroTaskQueuePromise['then'];
          }
          nativeThen.call(nativeMicroTaskQueuePromise, func);
        } else {
          global[symbolSetTimeout](func, 0);
        }
      }
      function scheduleMicroTask(task) {
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
          nativeScheduleMicroTask(drainMicroTaskQueue);
        }
        task && _microTaskQueue.push(task);
      }
      function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
          _isDrainingMicrotaskQueue = true;
          while (_microTaskQueue.length) {
            var queue = _microTaskQueue;
            _microTaskQueue = [];
            for (var i = 0; i < queue.length; i++) {
              var task = queue[i];
              try {
                task.zone.runTask(task, null, null);
              } catch (error) {
                _api.onUnhandledError(error);
              }
            }
          }
          _api.microtaskDrainDone();
          _isDrainingMicrotaskQueue = false;
        }
      }
      var NO_ZONE = {
        name: 'NO ZONE'
      };
      var notScheduled = 'notScheduled',
        scheduling = 'scheduling',
        scheduled = 'scheduled',
        running = 'running',
        canceling = 'canceling',
        unknown = 'unknown';
      var microTask = 'microTask',
        macroTask = 'macroTask',
        eventTask = 'eventTask';
      var patches = {};
      var _api = {
        symbol: __symbol__,
        currentZoneFrame: function currentZoneFrame() {
          return _currentZoneFrame;
        },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function showUncaughtError() {
          return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
        },
        patchEventTarget: function patchEventTarget() {
          return [];
        },
        patchOnProperties: noop,
        patchMethod: function patchMethod() {
          return noop;
        },
        bindArguments: function bindArguments() {
          return [];
        },
        patchThen: function patchThen() {
          return noop;
        },
        patchMacroTask: function patchMacroTask() {
          return noop;
        },
        patchEventPrototype: function patchEventPrototype() {
          return noop;
        },
        isIEOrEdge: function isIEOrEdge() {
          return false;
        },
        getGlobalObjects: function getGlobalObjects() {
          return undefined;
        },
        ObjectDefineProperty: function ObjectDefineProperty() {
          return noop;
        },
        ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
          return undefined;
        },
        ObjectCreate: function ObjectCreate() {
          return undefined;
        },
        ArraySlice: function ArraySlice() {
          return [];
        },
        patchClass: function patchClass() {
          return noop;
        },
        wrapWithCurrentZone: function wrapWithCurrentZone() {
          return noop;
        },
        filterProperties: function filterProperties() {
          return [];
        },
        attachOriginToPatched: function attachOriginToPatched() {
          return noop;
        },
        _redefineProperty: function _redefineProperty() {
          return noop;
        },
        patchCallbacks: function patchCallbacks() {
          return noop;
        },
        nativeScheduleMicroTask: nativeScheduleMicroTask
      };
      var _currentZoneFrame = {
        parent: null,
        zone: new Zone(null, null)
      };
      var _currentTask = null;
      var _numberOfNestedTaskFrames = 0;
      function noop() {}
      performanceMeasure('Zone', 'Zone');
      return global['Zone'] = Zone;
    })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    var ObjectGetPrototypeOf = Object.getPrototypeOf;
    var ObjectCreate = Object.create;
    var ArraySlice = Array.prototype.slice;
    var ADD_EVENT_LISTENER_STR = 'addEventListener';
    var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    var TRUE_STR = 'true';
    var FALSE_STR = 'false';
    var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
    function wrapWithCurrentZone(callback, source) {
      return Zone.current.wrap(callback, source);
    }
    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
      return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }
    var zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;
    var _global = isWindowExists && internalWindow || (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self || global;
    var REMOVE_ATTRIBUTE = 'removeAttribute';
    function bindArguments(args, source) {
      for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
          args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
      }
      return args;
    }
    function patchPrototype(prototype, fnNames) {
      var source = prototype.constructor['name'];
      var _loop = function _loop() {
        var name = fnNames[i];
        var delegate = prototype[name];
        if (delegate) {
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
          if (!isPropertyWritable(prototypeDesc)) {
            return "continue";
          }
          prototype[name] = function (delegate) {
            var patched = function patched() {
              return delegate.apply(this, bindArguments(arguments, source + '.' + name));
            };
            attachOriginToPatched(patched, delegate);
            return patched;
          }(delegate);
        }
      };
      for (var i = 0; i < fnNames.length; i++) {
        var _ret = _loop();
        if (_ret === "continue") continue;
      }
    }
    function isPropertyWritable(propertyDesc) {
      if (!propertyDesc) {
        return true;
      }
      if (propertyDesc.writable === false) {
        return false;
      }
      return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }
    var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
    var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
    var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames$1 = {};
    var wrapFn = function wrapFn(event) {
      event = event || _global.event;
      if (!event) {
        return;
      }
      var eventNameSymbol = zoneSymbolEventNames$1[event.type];
      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
      }
      var target = this || event.target || _global;
      var listener = target[eventNameSymbol];
      var result;
      if (isBrowser && target === internalWindow && event.type === 'error') {
        var errorEvent = event;
        result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
          event.preventDefault();
        }
      } else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
          event.preventDefault();
        }
      }
      return result;
    };
    function patchProperty(obj, prop, prototype) {
      var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
      if (!desc && prototype) {
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
          desc = {
            enumerable: true,
            configurable: true
          };
        }
      }
      if (!desc || !desc.configurable) {
        return;
      }
      var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
      if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
      }
      delete desc.writable;
      delete desc.value;
      var originalDescGet = desc.get;
      var originalDescSet = desc.set;
      var eventName = prop.slice(2);
      var eventNameSymbol = zoneSymbolEventNames$1[eventName];
      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
      }
      desc.set = function (newValue) {
        var target = this;
        if (!target && obj === _global) {
          target = _global;
        }
        if (!target) {
          return;
        }
        var previousValue = target[eventNameSymbol];
        if (typeof previousValue === 'function') {
          target.removeEventListener(eventName, wrapFn);
        }
        originalDescSet && originalDescSet.call(target, null);
        target[eventNameSymbol] = newValue;
        if (typeof newValue === 'function') {
          target.addEventListener(eventName, wrapFn, false);
        }
      };
      desc.get = function () {
        var target = this;
        if (!target && obj === _global) {
          target = _global;
        }
        if (!target) {
          return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
          return listener;
        } else if (originalDescGet) {
          var value = originalDescGet.call(this);
          if (value) {
            desc.set.call(this, value);
            if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
              target.removeAttribute(prop);
            }
            return value;
          }
        }
        return null;
      };
      ObjectDefineProperty(obj, prop, desc);
      obj[onPropPatchedSymbol] = true;
    }
    function patchOnProperties(obj, properties, prototype) {
      if (properties) {
        for (var i = 0; i < properties.length; i++) {
          patchProperty(obj, 'on' + properties[i], prototype);
        }
      } else {
        var onProperties = [];
        for (var prop in obj) {
          if (prop.slice(0, 2) == 'on') {
            onProperties.push(prop);
          }
        }
        for (var j = 0; j < onProperties.length; j++) {
          patchProperty(obj, onProperties[j], prototype);
        }
      }
    }
    var originalInstanceKey = zoneSymbol('originalInstance');
    function patchClass(className) {
      var OriginalClass = _global[className];
      if (!OriginalClass) return;
      _global[zoneSymbol(className)] = OriginalClass;
      _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
          case 0:
            this[originalInstanceKey] = new OriginalClass();
            break;
          case 1:
            this[originalInstanceKey] = new OriginalClass(a[0]);
            break;
          case 2:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
            break;
          case 3:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
            break;
          case 4:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
            break;
          default:
            throw new Error('Arg list too long.');
        }
      };
      attachOriginToPatched(_global[className], OriginalClass);
      var instance = new OriginalClass(function () {});
      var prop;
      for (prop in instance) {
        if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
        (function (prop) {
          if (typeof instance[prop] === 'function') {
            _global[className].prototype[prop] = function () {
              return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
            };
          } else {
            ObjectDefineProperty(_global[className].prototype, prop, {
              set: function set(fn) {
                if (typeof fn === 'function') {
                  this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                  attachOriginToPatched(this[originalInstanceKey][prop], fn);
                } else {
                  this[originalInstanceKey][prop] = fn;
                }
              },
              get: function get() {
                return this[originalInstanceKey][prop];
              }
            });
          }
        })(prop);
      }
      for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
          _global[className][prop] = OriginalClass[prop];
        }
      }
    }
    function patchMethod(target, name, patchFn) {
      var proto = target;
      while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
      }
      if (!proto && target[name]) {
        proto = target;
      }
      var delegateName = zoneSymbol(name);
      var delegate = null;
      if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
        delegate = proto[delegateName] = proto[name];
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
          var patchDelegate = patchFn(delegate, delegateName, name);
          proto[name] = function () {
            return patchDelegate(this, arguments);
          };
          attachOriginToPatched(proto[name], delegate);
        }
      }
      return delegate;
    }
    function patchMacroTask(obj, funcName, metaCreator) {
      var setNative = null;
      function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
          task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
      }
      setNative = patchMethod(obj, funcName, function (delegate) {
        return function (self, args) {
          var meta = metaCreator(self, args);
          if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
          } else {
            return delegate.apply(self, args);
          }
        };
      });
    }
    function attachOriginToPatched(patched, original) {
      patched[zoneSymbol('OriginalDelegate')] = original;
    }
    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;
    function isIE() {
      try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
          return true;
        }
      } catch (error) {}
      return false;
    }
    function isIEOrEdge() {
      if (isDetectedIEOrEdge) {
        return ieOrEdge;
      }
      isDetectedIEOrEdge = true;
      try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
          ieOrEdge = true;
        }
      } catch (error) {}
      return ieOrEdge;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ObjectDefineProperty = Object.defineProperty;
      function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
          var className = obj.constructor && obj.constructor.name;
          return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
      }
      var __symbol__ = api.symbol;
      var _uncaughtPromiseErrors = [];
      var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
      var symbolPromise = __symbol__('Promise');
      var symbolThen = __symbol__('then');
      var creationTrace = '__creationTrace__';
      api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
          var rejection = e && e.rejection;
          if (rejection) {
            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
          } else {
            console.error(e);
          }
        }
      };
      api.microtaskDrainDone = function () {
        var _loop2 = function _loop2() {
          var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
          try {
            uncaughtPromiseError.zone.runGuarded(function () {
              if (uncaughtPromiseError.throwOriginal) {
                throw uncaughtPromiseError.rejection;
              }
              throw uncaughtPromiseError;
            });
          } catch (error) {
            handleUnhandledRejection(error);
          }
        };
        while (_uncaughtPromiseErrors.length) {
          _loop2();
        }
      };
      var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
      function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
          var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
          if (typeof handler === 'function') {
            handler.call(this, e);
          }
        } catch (err) {}
      }
      function isThenable(value) {
        return value && value.then;
      }
      function forwardResolution(value) {
        return value;
      }
      function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
      }
      var symbolState = __symbol__('state');
      var symbolValue = __symbol__('value');
      var symbolFinally = __symbol__('finally');
      var symbolParentPromiseValue = __symbol__('parentPromiseValue');
      var symbolParentPromiseState = __symbol__('parentPromiseState');
      var source = 'Promise.then';
      var UNRESOLVED = null;
      var RESOLVED = true;
      var REJECTED = false;
      var REJECTED_NO_CATCH = 0;
      function makeResolver(promise, state) {
        return function (v) {
          try {
            resolvePromise(promise, state, v);
          } catch (err) {
            resolvePromise(promise, false, err);
          }
        };
      }
      var once = function once() {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
          return function () {
            if (wasCalled) {
              return;
            }
            wasCalled = true;
            wrappedFunction.apply(null, arguments);
          };
        };
      };
      var TYPE_ERROR = 'Promise resolved with itself';
      var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
      function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
          throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
          var then = null;
          try {
            if (_typeof(value) === 'object' || typeof value === 'function') {
              then = value && value.then;
            }
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
            return promise;
          }
          if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
            clearRejectedNoCatch(value);
            resolvePromise(promise, value[symbolState], value[symbolValue]);
          } else if (state !== REJECTED && typeof then === 'function') {
            try {
              then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
            }
          } else {
            promise[symbolState] = state;
            var queue = promise[symbolValue];
            promise[symbolValue] = value;
            if (promise[symbolFinally] === symbolFinally) {
              if (state === RESOLVED) {
                promise[symbolState] = promise[symbolParentPromiseState];
                promise[symbolValue] = promise[symbolParentPromiseValue];
              }
            }
            if (state === REJECTED && value instanceof Error) {
              var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
              if (trace) {
                ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                  configurable: true,
                  enumerable: false,
                  writable: true,
                  value: trace
                });
              }
            }
            for (var i = 0; i < queue.length;) {
              scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
            }
            if (queue.length == 0 && state == REJECTED) {
              promise[symbolState] = REJECTED_NO_CATCH;
              var uncaughtPromiseError = value;
              try {
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                uncaughtPromiseError = err;
              }
              if (isDisableWrappingUncaughtPromiseRejection) {
                uncaughtPromiseError.throwOriginal = true;
              }
              uncaughtPromiseError.rejection = value;
              uncaughtPromiseError.promise = promise;
              uncaughtPromiseError.zone = Zone.current;
              uncaughtPromiseError.task = Zone.currentTask;
              _uncaughtPromiseErrors.push(uncaughtPromiseError);
              api.scheduleMicroTask();
            }
          }
        }
        return promise;
      }
      var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
      function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
          try {
            var handler = Zone[REJECTION_HANDLED_HANDLER];
            if (handler && typeof handler === 'function') {
              handler.call(this, {
                rejection: promise[symbolValue],
                promise: promise
              });
            }
          } catch (err) {}
          promise[symbolState] = REJECTED;
          for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
            if (promise === _uncaughtPromiseErrors[i].promise) {
              _uncaughtPromiseErrors.splice(i, 1);
            }
          }
        }
      }
      function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
          try {
            var parentPromiseValue = promise[symbolValue];
            var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
            if (isFinallyPromise) {
              chainPromise[symbolParentPromiseValue] = parentPromiseValue;
              chainPromise[symbolParentPromiseState] = promiseState;
            }
            var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
            resolvePromise(chainPromise, true, value);
          } catch (error) {
            resolvePromise(chainPromise, false, error);
          }
        }, chainPromise);
      }
      var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
      var noop = function noop() {};
      var AggregateError = global.AggregateError;
      var ZoneAwarePromise = function (_Symbol$toStringTag, _Symbol$species) {
        function ZoneAwarePromise(executor) {
          _classCallCheck(this, ZoneAwarePromise);
          var promise = this;
          if (!(promise instanceof ZoneAwarePromise)) {
            throw new Error('Must be an instanceof Promise.');
          }
          promise[symbolState] = UNRESOLVED;
          promise[symbolValue] = [];
          try {
            var onceWrapper = once();
            executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
          } catch (error) {
            resolvePromise(promise, false, error);
          }
        }
        _createClass(ZoneAwarePromise, [{
          key: _Symbol$toStringTag,
          get: function get() {
            return 'Promise';
          }
        }, {
          key: _Symbol$species,
          get: function get() {
            return ZoneAwarePromise;
          }
        }, {
          key: "then",
          value: function then(onFulfilled, onRejected) {
            var _a;
            var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
            if (!C || typeof C !== 'function') {
              C = this.constructor || ZoneAwarePromise;
            }
            var chainPromise = new C(noop);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
          }
        }, {
          key: "catch",
          value: function _catch(onRejected) {
            return this.then(null, onRejected);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            var _a;
            var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
            if (!C || typeof C !== 'function') {
              C = ZoneAwarePromise;
            }
            var chainPromise = new C(noop);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
          }
        }], [{
          key: "toString",
          value: function toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
          }
        }, {
          key: "resolve",
          value: function resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
          }
        }, {
          key: "reject",
          value: function reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
          }
        }, {
          key: "any",
          value: function any(values) {
            if (!values || typeof values[Symbol.iterator] !== 'function') {
              return Promise.reject(new AggregateError([], 'All promises were rejected'));
            }
            var promises = [];
            var count = 0;
            try {
              var _iterator = _createForOfIteratorHelper(values),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var v = _step.value;
                  count++;
                  promises.push(ZoneAwarePromise.resolve(v));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } catch (err) {
              return Promise.reject(new AggregateError([], 'All promises were rejected'));
            }
            if (count === 0) {
              return Promise.reject(new AggregateError([], 'All promises were rejected'));
            }
            var finished = false;
            var errors = [];
            return new ZoneAwarePromise(function (resolve, reject) {
              for (var i = 0; i < promises.length; i++) {
                promises[i].then(function (v) {
                  if (finished) {
                    return;
                  }
                  finished = true;
                  resolve(v);
                }, function (err) {
                  errors.push(err);
                  count--;
                  if (count === 0) {
                    finished = true;
                    reject(new AggregateError(errors, 'All promises were rejected'));
                  }
                });
              }
            });
          }
        }, {
          key: "race",
          value: function race(values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            });
            function onResolve(value) {
              resolve(value);
            }
            function onReject(error) {
              reject(error);
            }
            var _iterator2 = _createForOfIteratorHelper(values),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var value = _step2.value;
                if (!isThenable(value)) {
                  value = this.resolve(value);
                }
                value.then(onResolve, onReject);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return promise;
          }
        }, {
          key: "all",
          value: function all(values) {
            return ZoneAwarePromise.allWithCallback(values);
          }
        }, {
          key: "allSettled",
          value: function allSettled(values) {
            var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
            return P.allWithCallback(values, {
              thenCallback: function thenCallback(value) {
                return {
                  status: 'fulfilled',
                  value: value
                };
              },
              errorCallback: function errorCallback(err) {
                return {
                  status: 'rejected',
                  reason: err
                };
              }
            });
          }
        }, {
          key: "allWithCallback",
          value: function allWithCallback(values, callback) {
            var _this = this;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            });
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _iterator3 = _createForOfIteratorHelper(values),
              _step3;
            try {
              var _loop3 = function _loop3() {
                var value = _step3.value;
                if (!isThenable(value)) {
                  value = _this.resolve(value);
                }
                var curValueIndex = valueIndex;
                try {
                  value.then(function (value) {
                    resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                      resolve(resolvedValues);
                    }
                  }, function (err) {
                    if (!callback) {
                      reject(err);
                    } else {
                      resolvedValues[curValueIndex] = callback.errorCallback(err);
                      unresolvedCount--;
                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }
                  });
                } catch (thenErr) {
                  reject(thenErr);
                }
                unresolvedCount++;
                valueIndex++;
              };
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
            return promise;
          }
        }]);
        return ZoneAwarePromise;
      }(Symbol.toStringTag, Symbol.species);
      ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
      ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
      ZoneAwarePromise['race'] = ZoneAwarePromise.race;
      ZoneAwarePromise['all'] = ZoneAwarePromise.all;
      var NativePromise = global[symbolPromise] = global['Promise'];
      global['Promise'] = ZoneAwarePromise;
      var symbolThenPatched = __symbol__('thenPatched');
      function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
          return;
        }
        var originalThen = proto.then;
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
          var _this2 = this;
          var wrapped = new ZoneAwarePromise(function (resolve, reject) {
            originalThen.call(_this2, resolve, reject);
          });
          return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
      }
      api.patchThen = patchThen;
      function zoneify(fn) {
        return function (self, args) {
          var resultPromise = fn.apply(self, args);
          if (resultPromise instanceof ZoneAwarePromise) {
            return resultPromise;
          }
          var ctor = resultPromise.constructor;
          if (!ctor[symbolThenPatched]) {
            patchThen(ctor);
          }
          return resultPromise;
        };
      }
      if (NativePromise) {
        patchThen(NativePromise);
        patchMethod(global, 'fetch', function (delegate) {
          return zoneify(delegate);
        });
      }
      Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
      return ZoneAwarePromise;
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('toString', function (global) {
      var originalFunctionToString = Function.prototype.toString;
      var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
      var PROMISE_SYMBOL = zoneSymbol('Promise');
      var ERROR_SYMBOL = zoneSymbol('Error');
      var newFunctionToString = function toString() {
        if (typeof this === 'function') {
          var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
          if (originalDelegate) {
            if (typeof originalDelegate === 'function') {
              return originalFunctionToString.call(originalDelegate);
            } else {
              return Object.prototype.toString.call(originalDelegate);
            }
          }
          if (this === Promise) {
            var nativePromise = global[PROMISE_SYMBOL];
            if (nativePromise) {
              return originalFunctionToString.call(nativePromise);
            }
          }
          if (this === Error) {
            var nativeError = global[ERROR_SYMBOL];
            if (nativeError) {
              return originalFunctionToString.call(nativeError);
            }
          }
        }
        return originalFunctionToString.call(this);
      };
      newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
      Function.prototype.toString = newFunctionToString;
      var originalObjectToString = Object.prototype.toString;
      var PROMISE_OBJECT_TO_STRING = '[object Promise]';
      Object.prototype.toString = function () {
        if (typeof Promise === 'function' && this instanceof Promise) {
          return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
      };
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var passiveSupported = false;
    if (typeof window !== 'undefined') {
      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
      useG: true
    };
    var zoneSymbolEventNames = {};
    var globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
    var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
    function prepareEventNames(eventName, eventNameToString) {
      var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
      var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    function patchEventTarget(_global, api, apis, patchOptions) {
      var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
      var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
      var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
      var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
      var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
      var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
      var PREPEND_EVENT_LISTENER = 'prependListener';
      var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
      var invokeTask = function invokeTask(task, target, event) {
        if (task.isRemoved) {
          return;
        }
        var delegate = task.callback;
        if (_typeof(delegate) === 'object' && delegate.handleEvent) {
          task.callback = function (event) {
            return delegate.handleEvent(event);
          };
          task.originalDelegate = delegate;
        }
        var error;
        try {
          task.invoke(task, target, [event]);
        } catch (err) {
          error = err;
        }
        var options = task.options;
        if (options && _typeof(options) === 'object' && options.once) {
          var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;
          target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
        }
        return error;
      };
      function globalCallback(context, event, isCapture) {
        event = event || _global.event;
        if (!event) {
          return;
        }
        var target = context || event.target || _global;
        var tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
        if (tasks) {
          var errors = [];
          if (tasks.length === 1) {
            var err = invokeTask(tasks[0], target, event);
            err && errors.push(err);
          } else {
            var copyTasks = tasks.slice();
            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }
              var _err = invokeTask(copyTasks[i], target, event);
              _err && errors.push(_err);
            }
          }
          if (errors.length === 1) {
            throw errors[0];
          } else {
            var _loop4 = function _loop4() {
              var err = errors[_i];
              api.nativeScheduleMicroTask(function () {
                throw err;
              });
            };
            for (var _i = 0; _i < errors.length; _i++) {
              _loop4();
            }
          }
        }
      }
      var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
        return globalCallback(this, event, false);
      };
      var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
        return globalCallback(this, event, true);
      };
      function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
          return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
          useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
          checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
          returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
          proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
          proto = obj;
        }
        if (!proto) {
          return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
          return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
          nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
        }
        function buildEventListenerOptions(options, passive) {
          if (!passiveSupported && _typeof(options) === 'object' && options) {
            return !!options.capture;
          }
          if (!passiveSupported || !passive) {
            return options;
          }
          if (typeof options === 'boolean') {
            return {
              capture: options,
              passive: true
            };
          }
          if (!options) {
            return {
              passive: true
            };
          }
          if (_typeof(options) === 'object' && options.passive !== false) {
            return Object.assign(Object.assign({}, options), {
              passive: true
            });
          }
          return options;
        }
        var customScheduleGlobal = function customScheduleGlobal(task) {
          if (taskData.isExisting) {
            return;
          }
          return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function customCancelGlobal(task) {
          if (!task.isRemoved) {
            var symbolEventNames = zoneSymbolEventNames[task.eventName];
            var symbolEventName;
            if (symbolEventNames) {
              symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && task.target[symbolEventName];
            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];
                if (existingTask === task) {
                  existingTasks.splice(i, 1);
                  task.isRemoved = true;
                  if (existingTasks.length === 0) {
                    task.allRemoved = true;
                    task.target[symbolEventName] = null;
                  }
                  break;
                }
              }
            }
          }
          if (!task.allRemoved) {
            return;
          }
          return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
          return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function customSchedulePrepend(task) {
          return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function customCancelNonGlobal(task) {
          return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
          var typeOfDelegate = _typeof(delegate);
          return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
        };
        var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
        var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
        var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
          var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          return function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }
            var delegate = arguments[1];
            if (!delegate) {
              return nativeListener.apply(this, arguments);
            }
            if (isNode && eventName === 'uncaughtException') {
              return nativeListener.apply(this, arguments);
            }
            var isHandleEvent = false;
            if (typeof delegate !== 'function') {
              if (!delegate.handleEvent) {
                return nativeListener.apply(this, arguments);
              }
              isHandleEvent = true;
            }
            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
              return;
            }
            var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
            var options = buildEventListenerOptions(arguments[2], passive);
            if (unpatchedEvents) {
              for (var i = 0; i < unpatchedEvents.length; i++) {
                if (eventName === unpatchedEvents[i]) {
                  if (passive) {
                    return nativeListener.call(target, eventName, delegate, options);
                  } else {
                    return nativeListener.apply(this, arguments);
                  }
                }
              }
            }
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var once = options && _typeof(options) === 'object' ? options.once : false;
            var zone = Zone.current;
            var symbolEventNames = zoneSymbolEventNames[eventName];
            if (!symbolEventNames) {
              prepareEventNames(eventName, eventNameToString);
              symbolEventNames = zoneSymbolEventNames[eventName];
            }
            var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            var existingTasks = target[symbolEventName];
            var isExisting = false;
            if (existingTasks) {
              isExisting = true;
              if (checkDuplicate) {
                for (var _i2 = 0; _i2 < existingTasks.length; _i2++) {
                  if (compare(existingTasks[_i2], delegate)) {
                    return;
                  }
                }
              }
            } else {
              existingTasks = target[symbolEventName] = [];
            }
            var source;
            var constructorName = target.constructor['name'];
            var targetSource = globalSources[constructorName];
            if (targetSource) {
              source = targetSource[eventName];
            }
            if (!source) {
              source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
            }
            taskData.options = options;
            if (once) {
              taskData.options.once = false;
            }
            taskData.target = target;
            taskData.capture = capture;
            taskData.eventName = eventName;
            taskData.isExisting = isExisting;
            var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
            if (data) {
              data.taskData = taskData;
            }
            var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
            taskData.target = null;
            if (data) {
              data.taskData = null;
            }
            if (once) {
              options.once = true;
            }
            if (!(!passiveSupported && typeof task.options === 'boolean')) {
              task.options = options;
            }
            task.target = target;
            task.capture = capture;
            task.eventName = eventName;
            if (isHandleEvent) {
              task.originalDelegate = delegate;
            }
            if (!prepend) {
              existingTasks.push(task);
            } else {
              existingTasks.unshift(task);
            }
            if (returnTarget) {
              return target;
            }
          };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
          proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }
          var options = arguments[2];
          var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
          var delegate = arguments[1];
          if (!delegate) {
            return nativeRemoveEventListener.apply(this, arguments);
          }
          if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
            return;
          }
          var symbolEventNames = zoneSymbolEventNames[eventName];
          var symbolEventName;
          if (symbolEventNames) {
            symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          }
          var existingTasks = symbolEventName && target[symbolEventName];
          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];
              if (compare(existingTask, delegate)) {
                existingTasks.splice(i, 1);
                existingTask.isRemoved = true;
                if (existingTasks.length === 0) {
                  existingTask.allRemoved = true;
                  target[symbolEventName] = null;
                  if (typeof eventName === 'string') {
                    var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                    target[onPropertySymbol] = null;
                  }
                }
                existingTask.zone.cancelTask(existingTask);
                if (returnTarget) {
                  return target;
                }
                return;
              }
            }
          }
          return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }
          var listeners = [];
          var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
          for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            listeners.push(delegate);
          }
          return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          if (!eventName) {
            var keys = Object.keys(target);
            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
              var evtName = match && match[1];
              if (evtName && evtName !== 'removeListener') {
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
              }
            }
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
          } else {
            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }
            var symbolEventNames = zoneSymbolEventNames[eventName];
            if (symbolEventNames) {
              var symbolEventName = symbolEventNames[FALSE_STR];
              var symbolCaptureEventName = symbolEventNames[TRUE_STR];
              var tasks = target[symbolEventName];
              var captureTasks = target[symbolCaptureEventName];
              if (tasks) {
                var removeTasks = tasks.slice();
                for (var _i3 = 0; _i3 < removeTasks.length; _i3++) {
                  var task = removeTasks[_i3];
                  var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                  this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                }
              }
              if (captureTasks) {
                var _removeTasks = captureTasks.slice();
                for (var _i4 = 0; _i4 < _removeTasks.length; _i4++) {
                  var _task = _removeTasks[_i4];
                  var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;
                  this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                }
              }
            }
          }
          if (returnTarget) {
            return this;
          }
        };
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
          attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
          attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
      }
      var results = [];
      for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
      }
      return results;
    }
    function findEventTasks(target, eventName) {
      if (!eventName) {
        var foundTasks = [];
        for (var prop in target) {
          var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          var evtName = match && match[1];
          if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
              for (var i = 0; i < tasks.length; i++) {
                foundTasks.push(tasks[i]);
              }
            }
          }
        }
        return foundTasks;
      }
      var symbolEventName = zoneSymbolEventNames[eventName];
      if (!symbolEventName) {
        prepareEventNames(eventName);
        symbolEventName = zoneSymbolEventNames[eventName];
      }
      var captureFalseTasks = target[symbolEventName[FALSE_STR]];
      var captureTrueTasks = target[symbolEventName[TRUE_STR]];
      if (!captureFalseTasks) {
        return captureTrueTasks ? captureTrueTasks.slice() : [];
      } else {
        return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
      }
    }
    function patchEventPrototype(global, api) {
      var Event = global['Event'];
      if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
          return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            delegate && delegate.apply(self, args);
          };
        });
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function patchCallbacks(api, target, targetName, method, callbacks) {
      var symbol = Zone.__symbol__(method);
      if (target[symbol]) {
        return;
      }
      var nativeDelegate = target[symbol] = target[method];
      target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
          callbacks.forEach(function (callback) {
            var source = "".concat(targetName, ".").concat(method, "::") + callback;
            var prototype = opts.prototype;
            try {
              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } catch (_a) {}
          });
        }
        return nativeDelegate.call(target, name, opts, options);
      };
      api.attachOriginToPatched(target[method], nativeDelegate);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function filterProperties(target, onProperties, ignoreProperties) {
      if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
      }
      var tip = ignoreProperties.filter(function (ip) {
        return ip.target === target;
      });
      if (!tip || tip.length === 0) {
        return onProperties;
      }
      var targetIgnoreProperties = tip[0].ignoreProperties;
      return onProperties.filter(function (op) {
        return targetIgnoreProperties.indexOf(op) === -1;
      });
    }
    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
      if (!target) {
        return;
      }
      var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
      patchOnProperties(target, filteredProperties, prototype);
    }
    function getOnEventNames(target) {
      return Object.getOwnPropertyNames(target).filter(function (name) {
        return name.startsWith('on') && name.length > 2;
      }).map(function (name) {
        return name.substring(2);
      });
    }
    function propertyDescriptorPatch(api, _global) {
      if (isNode && !isMix) {
        return;
      }
      if (Zone[api.symbol('patchEvents')]) {
        return;
      }
      var ignoreProperties = _global['__Zone_ignore_on_properties'];
      var patchTargets = [];
      if (isBrowser) {
        var _internalWindow = window;
        patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
        var ignoreErrorProperties = isIE() ? [{
          target: _internalWindow,
          ignoreProperties: ['error']
        }] : [];
        patchFilteredProperties(_internalWindow, getOnEventNames(_internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
      }
      patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
      for (var i = 0; i < patchTargets.length; i++) {
        var target = _global[patchTargets[i]];
        target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    Zone.__load_patch('util', function (global, Zone, api) {
      var eventNames = getOnEventNames(global);
      api.patchOnProperties = patchOnProperties;
      api.patchMethod = patchMethod;
      api.bindArguments = bindArguments;
      api.patchMacroTask = patchMacroTask;
      var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
      var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
      if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
      }
      if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
      }
      api.patchEventPrototype = patchEventPrototype;
      api.patchEventTarget = patchEventTarget;
      api.isIEOrEdge = isIEOrEdge;
      api.ObjectDefineProperty = ObjectDefineProperty;
      api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
      api.ObjectCreate = ObjectCreate;
      api.ArraySlice = ArraySlice;
      api.patchClass = patchClass;
      api.wrapWithCurrentZone = wrapWithCurrentZone;
      api.filterProperties = filterProperties;
      api.attachOriginToPatched = attachOriginToPatched;
      api._redefineProperty = Object.defineProperty;
      api.patchCallbacks = patchCallbacks;
      api.getGlobalObjects = function () {
        return {
          globalSources: globalSources,
          zoneSymbolEventNames: zoneSymbolEventNames,
          eventNames: eventNames,
          isBrowser: isBrowser,
          isMix: isMix,
          isNode: isNode,
          TRUE_STR: TRUE_STR,
          FALSE_STR: FALSE_STR,
          ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
          ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
          REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
        };
      };
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var taskSymbol = zoneSymbol('zoneTask');
    function patchTimer(window, setName, cancelName, nameSuffix) {
      var setNative = null;
      var clearNative = null;
      setName += nameSuffix;
      cancelName += nameSuffix;
      var tasksByHandleId = {};
      function scheduleTask(task) {
        var data = task.data;
        data.args[0] = function () {
          return task.invoke.apply(this, arguments);
        };
        data.handleId = setNative.apply(window, data.args);
        return task;
      }
      function clearTask(task) {
        return clearNative.call(window, task.data.handleId);
      }
      setNative = patchMethod(window, setName, function (delegate) {
        return function (self, args) {
          if (typeof args[0] === 'function') {
            var _options = {
              isPeriodic: nameSuffix === 'Interval',
              delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
              args: args
            };
            var callback = args[0];
            args[0] = function timer() {
              try {
                return callback.apply(this, arguments);
              } finally {
                if (!_options.isPeriodic) {
                  if (typeof _options.handleId === 'number') {
                    delete tasksByHandleId[_options.handleId];
                  } else if (_options.handleId) {
                    _options.handleId[taskSymbol] = null;
                  }
                }
              }
            };
            var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);
            if (!task) {
              return task;
            }
            var handle = task.data.handleId;
            if (typeof handle === 'number') {
              tasksByHandleId[handle] = task;
            } else if (handle) {
              handle[taskSymbol] = task;
            }
            if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
              task.ref = handle.ref.bind(handle);
              task.unref = handle.unref.bind(handle);
            }
            if (typeof handle === 'number' || handle) {
              return handle;
            }
            return task;
          } else {
            return delegate.apply(window, args);
          }
        };
      });
      clearNative = patchMethod(window, cancelName, function (delegate) {
        return function (self, args) {
          var id = args[0];
          var task;
          if (typeof id === 'number') {
            task = tasksByHandleId[id];
          } else {
            task = id && id[taskSymbol];
            if (!task) {
              task = id;
            }
          }
          if (task && typeof task.type === 'string') {
            if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
              if (typeof id === 'number') {
                delete tasksByHandleId[id];
              } else if (id) {
                id[taskSymbol] = null;
              }
              task.zone.cancelTask(task);
            }
          } else {
            delegate.apply(window, args);
          }
        };
      });
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function patchCustomElements(_global, api) {
      var _api$getGlobalObjects = api.getGlobalObjects(),
        isBrowser = _api$getGlobalObjects.isBrowser,
        isMix = _api$getGlobalObjects.isMix;
      if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
        return;
      }
      var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
      api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function eventTargetPatch(_global, api) {
      if (Zone[api.symbol('patchEventTarget')]) {
        return;
      }
      var _api$getGlobalObjects2 = api.getGlobalObjects(),
        eventNames = _api$getGlobalObjects2.eventNames,
        zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
        TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
        FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX;
      for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
      }
      var EVENT_TARGET = _global['EventTarget'];
      if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
      }
      api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
      return true;
    }
    function patchEvent(global, api) {
      api.patchEventPrototype(global, api);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    Zone.__load_patch('legacy', function (global) {
      var legacyPatch = global[Zone.__symbol__('legacyPatch')];
      if (legacyPatch) {
        legacyPatch();
      }
    });
    Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
      api.patchMethod(global, 'queueMicrotask', function (delegate) {
        return function (self, args) {
          Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
        };
      });
    });
    Zone.__load_patch('timers', function (global) {
      var set = 'set';
      var clear = 'clear';
      patchTimer(global, set, clear, 'Timeout');
      patchTimer(global, set, clear, 'Interval');
      patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', function (global) {
      patchTimer(global, 'request', 'cancel', 'AnimationFrame');
      patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
      patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', function (global, Zone) {
      var blockingMethods = ['alert', 'prompt', 'confirm'];
      for (var i = 0; i < blockingMethods.length; i++) {
        var name = blockingMethods[i];
        patchMethod(global, name, function (delegate, symbol, name) {
          return function (s, args) {
            return Zone.current.run(delegate, global, args, name);
          };
        });
      }
    });
    Zone.__load_patch('EventTarget', function (global, Zone, api) {
      patchEvent(global, api);
      eventTargetPatch(global, api);
      var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
      if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
      }
    });
    Zone.__load_patch('MutationObserver', function (global, Zone, api) {
      patchClass('MutationObserver');
      patchClass('WebKitMutationObserver');
    });
    Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
      patchClass('IntersectionObserver');
    });
    Zone.__load_patch('FileReader', function (global, Zone, api) {
      patchClass('FileReader');
    });
    Zone.__load_patch('on_property', function (global, Zone, api) {
      propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', function (global, Zone, api) {
      patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', function (global, Zone) {
      patchXHR(global);
      var XHR_TASK = zoneSymbol('xhrTask');
      var XHR_SYNC = zoneSymbol('xhrSync');
      var XHR_LISTENER = zoneSymbol('xhrListener');
      var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
      var XHR_URL = zoneSymbol('xhrURL');
      var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
      function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
          return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
          return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
          var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
          if (XMLHttpRequestEventTarget) {
            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
          var data = task.data;
          var target = data.target;
          target[XHR_SCHEDULED] = false;
          target[XHR_ERROR_BEFORE_SCHEDULED] = false;
          var listener = target[XHR_LISTENER];
          if (!oriAddListener) {
            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
          if (listener) {
            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
          }
          var newListener = target[XHR_LISTENER] = function () {
            if (target.readyState === target.DONE) {
              if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                var loadTasks = target[Zone.__symbol__('loadfalse')];
                if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                  var oriInvoke = task.invoke;
                  task.invoke = function () {
                    var loadTasks = target[Zone.__symbol__('loadfalse')];
                    for (var i = 0; i < loadTasks.length; i++) {
                      if (loadTasks[i] === task) {
                        loadTasks.splice(i, 1);
                      }
                    }
                    if (!data.aborted && task.state === SCHEDULED) {
                      oriInvoke.call(task);
                    }
                  };
                  loadTasks.push(task);
                } else {
                  task.invoke();
                }
              } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                target[XHR_ERROR_BEFORE_SCHEDULED] = true;
              }
            }
          };
          oriAddListener.call(target, READY_STATE_CHANGE, newListener);
          var storedTask = target[XHR_TASK];
          if (!storedTask) {
            target[XHR_TASK] = task;
          }
          sendNative.apply(target, data.args);
          target[XHR_SCHEDULED] = true;
          return task;
        }
        function placeholderCallback() {}
        function clearTask(task) {
          var data = task.data;
          data.aborted = true;
          return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
          return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
          };
        });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
          return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
              return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
              return sendNative.apply(self, args);
            } else {
              var _options2 = {
                target: self,
                url: self[XHR_URL],
                isPeriodic: false,
                args: args,
                aborted: false
              };
              var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);
              if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                task.invoke();
              }
            }
          };
        });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
          return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
              if (task.cancelFn == null || task.data && task.data.aborted) {
                return;
              }
              task.zone.cancelTask(task);
            } else if (Zone.current[fetchTaskAborting] === true) {
              return abortNative.apply(self, args);
            }
          };
        });
      }
    });
    Zone.__load_patch('geolocation', function (global) {
      if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
      }
    });
    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
      function findPromiseRejectionHandler(evtName) {
        return function (e) {
          var eventTasks = findEventTasks(global, evtName);
          eventTasks.forEach(function (eventTask) {
            var PromiseRejectionEvent = global['PromiseRejectionEvent'];
            if (PromiseRejectionEvent) {
              var evt = new PromiseRejectionEvent(evtName, {
                promise: e.promise,
                reason: e.rejection
              });
              eventTask.invoke(evt);
            }
          });
        };
      }
      if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
      }
    });
  }
}, function (__webpack_require__) {
  var __webpack_exec__ = function __webpack_exec__(moduleId) {
    return __webpack_require__(__webpack_require__.s = moduleId);
  };
  var __webpack_exports__ = __webpack_exec__(7435);
}]);