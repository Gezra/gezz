define(["exports", "../polymer/polymer-legacy.js", "../polymer/lib/legacy/polymer.dom.js"], function (_exports, _polymerLegacy, _polymerDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.elementIsScrollLocked = elementIsScrollLocked;
  _exports.pushScrollLock = pushScrollLock;
  _exports.removeScrollLock = removeScrollLock;
  _exports._hasCachedLockedElement = _hasCachedLockedElement;
  _exports._hasCachedUnlockedElement = _hasCachedUnlockedElement;
  _exports._composedTreeContains = _composedTreeContains;
  _exports._scrollInteractionHandler = _scrollInteractionHandler;
  _exports._lockScrollInteractions = _lockScrollInteractions;
  _exports._unlockScrollInteractions = _unlockScrollInteractions;
  _exports._shouldPreventScrolling = _shouldPreventScrolling;
  _exports._getScrollableNodes = _getScrollableNodes;
  _exports._getScrollingNode = _getScrollingNode;
  _exports._getScrollInfo = _getScrollInfo;
  _exports._boundScrollHandler = _exports._unlockedElementCache = _exports._lockedElementCache = _exports._lockingElements = _exports.currentLockingElement = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Used to calculate the scroll direction during touch events.
   * @type {!Object}
   */
  var lastTouchPosition = {
    pageX: 0,
    pageY: 0
  };
  /**
   * Used to avoid computing event.path and filter scrollable nodes (better perf).
   * @type {?EventTarget}
   */

  var lastRootTarget = null;
  /**
   * @type {!Array<!Node>}
   */

  var lastScrollableNodes = [];
  /**
   * @type {!Array<string>}
   */

  var scrollEvents = [// Modern `wheel` event for mouse wheel scrolling:
  'wheel', // Older, non-standard `mousewheel` event for some FF:
  'mousewheel', // IE:
  'DOMMouseScroll', // Touch enabled devices
  'touchstart', 'touchmove']; // must be defined for modulizer

  var _boundScrollHandler;
  /**
   * The current element that defines the DOM boundaries of the
   * scroll lock. This is always the most recently locking element.
   *
   * @type {!Node|undefined}
   */


  _exports._boundScrollHandler = _boundScrollHandler;
  var currentLockingElement;
  _exports.currentLockingElement = currentLockingElement;

  /**
   * Returns true if the provided element is "scroll locked", which is to
   * say that it cannot be scrolled via pointer or keyboard interactions.
   *
   * @param {!HTMLElement} element An HTML element instance which may or may
   * not be scroll locked.
   */
  function elementIsScrollLocked(element) {
    var lockingElement = currentLockingElement;

    if (lockingElement === undefined) {
      return false;
    }

    var scrollLocked;

    if (_hasCachedLockedElement(element)) {
      return true;
    }

    if (_hasCachedUnlockedElement(element)) {
      return false;
    }

    scrollLocked = !!lockingElement && lockingElement !== element && !_composedTreeContains(lockingElement, element);

    if (scrollLocked) {
      _lockedElementCache.push(element);
    } else {
      _unlockedElementCache.push(element);
    }

    return scrollLocked;
  }
  /**
   * Push an element onto the current scroll lock stack. The most recently
   * pushed element and its children will be considered scrollable. All
   * other elements will not be scrollable.
   *
   * Scroll locking is implemented as a stack so that cases such as
   * dropdowns within dropdowns are handled well.
   *
   * @param {!HTMLElement} element The element that should lock scroll.
   */


  function pushScrollLock(element) {
    // Prevent pushing the same element twice
    if (_lockingElements.indexOf(element) >= 0) {
      return;
    }

    if (_lockingElements.length === 0) {
      _lockScrollInteractions();
    }

    _lockingElements.push(element);

    _exports.currentLockingElement = currentLockingElement = _lockingElements[_lockingElements.length - 1];
    _exports._lockedElementCache = _lockedElementCache = [];
    _exports._unlockedElementCache = _unlockedElementCache = [];
  }
  /**
   * Remove an element from the scroll lock stack. The element being
   * removed does not need to be the most recently pushed element. However,
   * the scroll lock constraints only change when the most recently pushed
   * element is removed.
   *
   * @param {!HTMLElement} element The element to remove from the scroll
   * lock stack.
   */


  function removeScrollLock(element) {
    var index = _lockingElements.indexOf(element);

    if (index === -1) {
      return;
    }

    _lockingElements.splice(index, 1);

    _exports.currentLockingElement = currentLockingElement = _lockingElements[_lockingElements.length - 1];
    _exports._lockedElementCache = _lockedElementCache = [];
    _exports._unlockedElementCache = _unlockedElementCache = [];

    if (_lockingElements.length === 0) {
      _unlockScrollInteractions();
    }
  }

  const _lockingElements = [];
  _exports._lockingElements = _lockingElements;
  let _lockedElementCache = null;
  _exports._lockedElementCache = _lockedElementCache;
  let _unlockedElementCache = null;
  _exports._unlockedElementCache = _unlockedElementCache;

  function _hasCachedLockedElement(element) {
    return _lockedElementCache.indexOf(element) > -1;
  }

  function _hasCachedUnlockedElement(element) {
    return _unlockedElementCache.indexOf(element) > -1;
  }

  function _composedTreeContains(element, child) {
    // NOTE(cdata): This method iterates over content elements and their
    // corresponding distributed nodes to implement a contains-like method
    // that pierces through the composed tree of the ShadowDOM. Results of
    // this operation are cached (elsewhere) on a per-scroll-lock basis, to
    // guard against potentially expensive lookups happening repeatedly as
    // a user scrolls / touchmoves.
    var contentElements;
    var distributedNodes;
    var contentIndex;
    var nodeIndex;

    if (element.contains(child)) {
      return true;
    }

    contentElements = (0, _polymerDom.dom)(element).querySelectorAll('content,slot');

    for (contentIndex = 0; contentIndex < contentElements.length; ++contentIndex) {
      distributedNodes = (0, _polymerDom.dom)(contentElements[contentIndex]).getDistributedNodes();

      for (nodeIndex = 0; nodeIndex < distributedNodes.length; ++nodeIndex) {
        // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
        if (distributedNodes[nodeIndex].nodeType !== Node.ELEMENT_NODE) continue;

        if (_composedTreeContains(distributedNodes[nodeIndex], child)) {
          return true;
        }
      }
    }

    return false;
  }

  function _scrollInteractionHandler(event) {
    // Avoid canceling an event with cancelable=false, e.g. scrolling is in
    // progress and cannot be interrupted.
    if (event.cancelable && _shouldPreventScrolling(event)) {
      event.preventDefault();
    } // If event has targetTouches (touch event), update last touch position.


    if (event.targetTouches) {
      var touch = event.targetTouches[0];
      lastTouchPosition.pageX = touch.pageX;
      lastTouchPosition.pageY = touch.pageY;
    }
  }
  /**
   * @package
   */


  function _lockScrollInteractions() {
    _exports._boundScrollHandler = _boundScrollHandler = _boundScrollHandler || _scrollInteractionHandler.bind(undefined);

    for (var i = 0, l = scrollEvents.length; i < l; i++) {
      // NOTE: browsers that don't support objects as third arg will
      // interpret it as boolean, hence useCapture = true in this case.
      document.addEventListener(scrollEvents[i], _boundScrollHandler, {
        capture: true,
        passive: false
      });
    }
  }

  function _unlockScrollInteractions() {
    for (var i = 0, l = scrollEvents.length; i < l; i++) {
      // NOTE: browsers that don't support objects as third arg will
      // interpret it as boolean, hence useCapture = true in this case.
      document.removeEventListener(scrollEvents[i], _boundScrollHandler, {
        capture: true,
        passive: false
      });
    }
  }
  /**
   * Returns true if the event causes scroll outside the current locking
   * element, e.g. pointer/keyboard interactions, or scroll "leaking"
   * outside the locking element when it is already at its scroll boundaries.
   * @param {!Event} event
   * @return {boolean}
   * @package
   */


  function _shouldPreventScrolling(event) {
    // Update if root target changed. For touch events, ensure we don't
    // update during touchmove.
    var target = (0, _polymerDom.dom)(event).rootTarget;

    if (event.type !== 'touchmove' && lastRootTarget !== target) {
      lastRootTarget = target;
      lastScrollableNodes = _getScrollableNodes((0, _polymerDom.dom)(event).path);
    } // Prevent event if no scrollable nodes.


    if (!lastScrollableNodes.length) {
      return true;
    } // Don't prevent touchstart event inside the locking element when it has
    // scrollable nodes.


    if (event.type === 'touchstart') {
      return false;
    } // Get deltaX/Y.


    var info = _getScrollInfo(event); // Prevent if there is no child that can scroll.


    return !_getScrollingNode(lastScrollableNodes, info.deltaX, info.deltaY);
  }
  /**
   * Returns an array of scrollable nodes up to the current locking element,
   * which is included too if scrollable.
   * @param {!Array<!Node>} nodes
   * @return {!Array<!Node>} scrollables
   * @package
   */


  function _getScrollableNodes(nodes) {
    var scrollables = [];
    var lockingIndex = nodes.indexOf(
    /** @type {!Node} */
    currentLockingElement); // Loop from root target to locking element (included).

    for (var i = 0; i <= lockingIndex; i++) {
      // Skip non-Element nodes.
      if (nodes[i].nodeType !== Node.ELEMENT_NODE) {
        continue;
      }

      var node =
      /** @type {!Element} */
      nodes[i]; // Check inline style before checking computed style.

      var style = node.style;

      if (style.overflow !== 'scroll' && style.overflow !== 'auto') {
        style = window.getComputedStyle(node);
      }

      if (style.overflow === 'scroll' || style.overflow === 'auto') {
        scrollables.push(node);
      }
    }

    return scrollables;
  }
  /**
   * Returns the node that is scrolling. If there is no scrolling,
   * returns undefined.
   * @param {!Array<!Node>} nodes
   * @param {number} deltaX Scroll delta on the x-axis
   * @param {number} deltaY Scroll delta on the y-axis
   * @return {!Node|undefined}
   * @package
   */


  function _getScrollingNode(nodes, deltaX, deltaY) {
    // No scroll.
    if (!deltaX && !deltaY) {
      return;
    } // Check only one axis according to where there is more scroll.
    // Prefer vertical to horizontal.


    var verticalScroll = Math.abs(deltaY) >= Math.abs(deltaX);

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var canScroll = false;

      if (verticalScroll) {
        // delta < 0 is scroll up, delta > 0 is scroll down.
        canScroll = deltaY < 0 ? node.scrollTop > 0 : node.scrollTop < node.scrollHeight - node.clientHeight;
      } else {
        // delta < 0 is scroll left, delta > 0 is scroll right.
        canScroll = deltaX < 0 ? node.scrollLeft > 0 : node.scrollLeft < node.scrollWidth - node.clientWidth;
      }

      if (canScroll) {
        return node;
      }
    }
  }
  /**
   * Returns scroll `deltaX` and `deltaY`.
   * @param {!Event} event The scroll event
   * @return {{deltaX: number, deltaY: number}} Object containing the
   * x-axis scroll delta (positive: scroll right, negative: scroll left,
   * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
   * negative: scroll up, 0: no scroll).
   * @package
   */


  function _getScrollInfo(event) {
    var info = {
      deltaX: event.deltaX,
      deltaY: event.deltaY
    }; // Already available.

    if ('deltaX' in event) {} // do nothing, values are already good.
    // Safari has scroll info in `wheelDeltaX/Y`.
    else if ('wheelDeltaX' in event && 'wheelDeltaY' in event) {
        info.deltaX = -event.wheelDeltaX;
        info.deltaY = -event.wheelDeltaY;
      } // IE10 has only vertical scroll info in `wheelDelta`.
      else if ('wheelDelta' in event) {
          info.deltaX = 0;
          info.deltaY = -event.wheelDelta;
        } // Firefox has scroll info in `detail` and `axis`.
        else if ('axis' in event) {
            info.deltaX = event.axis === 1 ? event.detail : 0;
            info.deltaY = event.axis === 2 ? event.detail : 0;
          } // On mobile devices, calculate scroll direction.
          else if (event.targetTouches) {
              var touch = event.targetTouches[0]; // Touch moves from right to left => scrolling goes right.

              info.deltaX = lastTouchPosition.pageX - touch.pageX; // Touch moves from down to up => scrolling goes down.

              info.deltaY = lastTouchPosition.pageY - touch.pageY;
            }

    return info;
  }
});